import { defineStore } from 'pinia'
import axios from 'axios'
import { generateRandomString, generateCodeChallenge } from '../utils/authHelpers.js'
import { SPOTIFY_API_CONFIG, TIME_RANGES, PLACEHOLDER_RESULT } from '../constants/spotifyConfig.js'
import { handleApiError } from '../utils/errorHandlers.js'

export const useSpotifyStore = defineStore('spotify', {
  state: () => ({
    auth: {
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      tokenExpiry: null
    },
    preferences: {
      type: 'tracks',
      limit: 50,
      timeRange: 'medium_term'
    },
    data: {
      topItems: PLACEHOLDER_RESULT,
      loading: false,
      error: null
    },
    spotifyApi: SPOTIFY_API_CONFIG,
    timeRanges: TIME_RANGES
  }),

  actions: {
    async initiateAuth() {
      const codeVerifier = generateRandomString(128)
      const codeChallenge = await generateCodeChallenge(codeVerifier)
      localStorage.setItem('code_verifier', codeVerifier)

      const authUrl = this.buildAuthUrl(codeChallenge)
      window.location.href = authUrl
    },

    async getAccessToken(code) {
      const codeVerifier = localStorage.getItem('code_verifier')
      try {
        const response = await this.fetchAccessToken(code, codeVerifier)
        this.setAuthData(response.data)
      } catch (error) {
        this.checkAuth()
      }
    },

    async refreshAccessToken() {
      if (!this.auth.refreshToken) {
        this.auth.isAuthenticated = false
        return
      }

      try {
        const response = await this.fetchRefreshedToken()
        this.setAuthData(response.data, true)
      } catch (error) {
        handleApiError(error, 'Error refreshing token')
        this.auth.isAuthenticated = false
        this.data.error = 'Failed to refresh authentication'
      }
    },

    async fetchTopItems(itemType, timeRange = this.preferences.timeRange) {
      this.setState(true, itemType, timeRange)

      if (!this.auth.accessToken || Date.now() > this.auth.tokenExpiry) {
        await this.refreshAccessToken()
      }

      if (!this.auth.isAuthenticated) {
        this.setError('Not authenticated. Please connect to Spotify.')
        return
      }

      try {
        const response = await this.fetchSpotifyTopItems(itemType)
        this.data.topItems = response.data.items
      } catch (error) {
        handleApiError(error, 'Error fetching top items')
        this.setError('Failed to fetch data from Spotify. Please try again later.')
      } finally {
        this.data.loading = false
      }
    },

    setTimeRange(range) {
      this.preferences.timeRange = range
      this.fetchTopItems(this.preferences.type, range)
    },

    checkAuth() {
      const { token, expiry, refresh } = this.getStoredAuthData()
      if (token && expiry && refresh) {
        this.setAuthData({
          access_token: token,
          refresh_token: refresh,
          expires_in: (expiry - Date.now()) / 1000
        })
      }
    },

    // Helper methods
    buildAuthUrl(codeChallenge) {
      const params = new URLSearchParams({
        client_id: this.spotifyApi.clientId,
        response_type: 'code',
        redirect_uri: this.spotifyApi.redirectUri,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        scope: this.spotifyApi.scopes
      })
      return `https://accounts.spotify.com/authorize?${params.toString()}`
    },

    async fetchAccessToken(code, codeVerifier) {
      return axios.post(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: this.spotifyApi.redirectUri,
          client_id: this.spotifyApi.clientId,
          code_verifier: codeVerifier
        }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
    },

    async fetchRefreshedToken() {
      return axios.post(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: this.auth.refreshToken,
          client_id: this.spotifyApi.clientId
        }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
    },

    async fetchSpotifyTopItems(itemType) {
      return axios.get(`https://api.spotify.com/v1/me/top/${itemType}`, {
        headers: { Authorization: `Bearer ${this.auth.accessToken}` },
        params: { limit: this.preferences.limit, time_range: this.preferences.timeRange }
      })
    },

    setAuthData(data, isRefresh = false) {
      this.auth.accessToken = data.access_token
      this.auth.tokenExpiry = Date.now() + data.expires_in * 1000
      this.auth.isAuthenticated = true

      if (!isRefresh) {
        this.auth.refreshToken = data.refresh_token
      }

      this.updateLocalStorage()
    },

    updateLocalStorage() {
      localStorage.setItem('spotify_access_token', this.auth.accessToken)
      localStorage.setItem('spotify_token_expiry', this.auth.tokenExpiry)
      localStorage.setItem('spotify_refresh_token', this.auth.refreshToken)
    },

    getStoredAuthData() {
      return {
        token: localStorage.getItem('spotify_access_token'),
        expiry: localStorage.getItem('spotify_token_expiry'),
        refresh: localStorage.getItem('spotify_refresh_token')
      }
    },

    setState(loading, itemType, timeRange) {
      this.data.loading = loading
      this.data.error = null
      this.preferences.type = itemType
      this.preferences.timeRange = timeRange
    },

    setError(message) {
      this.data.error = message
      this.data.loading = false
    },

    getMakeupOfArtistById(artistIdToMatch) {
      const filteredTopItems = this.data.topItems.reduce((acc, track) => {
        // Check if the artist ID is in the track's artists array
        const hasArtist = track.artists.some((artist) => artist.id === artistIdToMatch)
        return hasArtist ? acc + 1 : acc
      }, 0)

      return filteredTopItems
    }
  }
})
