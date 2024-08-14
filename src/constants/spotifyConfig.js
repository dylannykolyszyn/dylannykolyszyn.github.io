export const SPOTIFY_API_CONFIG = {
  clientId: '2f65509863b147c8863a7d3e43bb2317',
  redirectUri: `${window.location.origin}/spotify`,
  scopes: 'user-top-read'
}

export const TIME_RANGES = [
  { label: 'Last 4 Weeks', value: 'short_term' },
  { label: 'Last 6 Months', value: 'medium_term' },
  { label: 'All Time', value: 'long_term' }
]

export const PLACEHOLDER_RESULT = [
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/3SXwqSqAoBz9WCI9PDQzY6' },
          href: 'https://api.spotify.com/v1/artists/3SXwqSqAoBz9WCI9PDQzY6',
          id: '3SXwqSqAoBz9WCI9PDQzY6',
          name: 'Fontaines D.C.',
          type: 'artist',
          uri: 'spotify:artist:3SXwqSqAoBz9WCI9PDQzY6'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/1KkyOpscmbPAQzLNZDyI6o' },
      href: 'https://api.spotify.com/v1/albums/1KkyOpscmbPAQzLNZDyI6o',
      id: '1KkyOpscmbPAQzLNZDyI6o',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2730aa950a429f1a159fa211a75',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e020aa950a429f1a159fa211a75',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048510aa950a429f1a159fa211a75',
          width: 64
        }
      ],
      name: 'Starburster',
      release_date: '2024-04-17',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:1KkyOpscmbPAQzLNZDyI6o'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/3SXwqSqAoBz9WCI9PDQzY6' },
        href: 'https://api.spotify.com/v1/artists/3SXwqSqAoBz9WCI9PDQzY6',
        id: '3SXwqSqAoBz9WCI9PDQzY6',
        name: 'Fontaines D.C.',
        type: 'artist',
        uri: 'spotify:artist:3SXwqSqAoBz9WCI9PDQzY6'
      }
    ],

    disc_number: 1,
    duration_ms: 221450,
    explicit: true,
    external_ids: { isrc: 'GBBKS2400079' },
    external_urls: { spotify: 'https://open.spotify.com/track/1cg4xD453Wuol9fNsRDbsV' },
    href: 'https://api.spotify.com/v1/tracks/1cg4xD453Wuol9fNsRDbsV',
    id: '1cg4xD453Wuol9fNsRDbsV',
    is_local: false,
    name: 'Starburster',
    popularity: 69,
    preview_url:
      'https://p.scdn.co/mp3-preview/5a120c2004c2969eaa5f87e7b49eb4a808d9ad4f?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:1cg4xD453Wuol9fNsRDbsV'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
          href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
          id: '25uiPmTg16RbhZWAqwLBy5',
          name: 'Charli xcx',
          type: 'artist',
          uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/0Mg2cY7VjvKeJAL7mzk1kw' },
      href: 'https://api.spotify.com/v1/albums/0Mg2cY7VjvKeJAL7mzk1kw',
      id: '0Mg2cY7VjvKeJAL7mzk1kw',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2735a933871a40c5b9e1deea8d3',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e025a933871a40c5b9e1deea8d3',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048515a933871a40c5b9e1deea8d3',
          width: 64
        }
      ],
      name: 'Von dutch',
      release_date: '2024-02-29',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:0Mg2cY7VjvKeJAL7mzk1kw'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
        href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
        id: '25uiPmTg16RbhZWAqwLBy5',
        name: 'Charli xcx',
        type: 'artist',
        uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
      }
    ],

    disc_number: 1,
    duration_ms: 164284,
    explicit: true,
    external_ids: { isrc: 'USAT22313737' },
    external_urls: { spotify: 'https://open.spotify.com/track/01TnMXIy7mJJQ7E8uy937N' },
    href: 'https://api.spotify.com/v1/tracks/01TnMXIy7mJJQ7E8uy937N',
    id: '01TnMXIy7mJJQ7E8uy937N',
    is_local: false,
    name: 'Von dutch',
    popularity: 64,
    preview_url:
      'https://p.scdn.co/mp3-preview/7faf86e041f0fc977545aadc2b4f852eb5f145d4?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:01TnMXIy7mJJQ7E8uy937N'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6PEMFpe3PTOksdV4ZXUpbE' },
          href: 'https://api.spotify.com/v1/artists/6PEMFpe3PTOksdV4ZXUpbE',
          id: '6PEMFpe3PTOksdV4ZXUpbE',
          name: 'NxWorries',
          type: 'artist',
          uri: 'spotify:artist:6PEMFpe3PTOksdV4ZXUpbE'
        },
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa' },
          href: 'https://api.spotify.com/v1/artists/3jK9MiCrA42lLAdMGUZpwa',
          id: '3jK9MiCrA42lLAdMGUZpwa',
          name: 'Anderson .Paak',
          type: 'artist',
          uri: 'spotify:artist:3jK9MiCrA42lLAdMGUZpwa'
        },
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/17Zu03OgBVxgLxWmRUyNOJ' },
          href: 'https://api.spotify.com/v1/artists/17Zu03OgBVxgLxWmRUyNOJ',
          id: '17Zu03OgBVxgLxWmRUyNOJ',
          name: 'Knxwledge',
          type: 'artist',
          uri: 'spotify:artist:17Zu03OgBVxgLxWmRUyNOJ'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/654CmOOF8AzNbGXzdQPWR6' },
      href: 'https://api.spotify.com/v1/albums/654CmOOF8AzNbGXzdQPWR6',
      id: '654CmOOF8AzNbGXzdQPWR6',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273aecc155ceefb0f3d2a2210c9',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02aecc155ceefb0f3d2a2210c9',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851aecc155ceefb0f3d2a2210c9',
          width: 64
        }
      ],
      name: '86Sentra',
      release_date: '2024-04-03',
      release_date_precision: 'day',
      total_tracks: 3,
      type: 'album',
      uri: 'spotify:album:654CmOOF8AzNbGXzdQPWR6'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6PEMFpe3PTOksdV4ZXUpbE' },
        href: 'https://api.spotify.com/v1/artists/6PEMFpe3PTOksdV4ZXUpbE',
        id: '6PEMFpe3PTOksdV4ZXUpbE',
        name: 'NxWorries',
        type: 'artist',
        uri: 'spotify:artist:6PEMFpe3PTOksdV4ZXUpbE'
      },
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa' },
        href: 'https://api.spotify.com/v1/artists/3jK9MiCrA42lLAdMGUZpwa',
        id: '3jK9MiCrA42lLAdMGUZpwa',
        name: 'Anderson .Paak',
        type: 'artist',
        uri: 'spotify:artist:3jK9MiCrA42lLAdMGUZpwa'
      },
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/17Zu03OgBVxgLxWmRUyNOJ' },
        href: 'https://api.spotify.com/v1/artists/17Zu03OgBVxgLxWmRUyNOJ',
        id: '17Zu03OgBVxgLxWmRUyNOJ',
        name: 'Knxwledge',
        type: 'artist',
        uri: 'spotify:artist:17Zu03OgBVxgLxWmRUyNOJ'
      }
    ],

    disc_number: 1,
    duration_ms: 96009,
    explicit: true,
    external_ids: { isrc: 'US2S72400002' },
    external_urls: { spotify: 'https://open.spotify.com/track/0CBPxBZNCCBC5k1eBRVgYH' },
    href: 'https://api.spotify.com/v1/tracks/0CBPxBZNCCBC5k1eBRVgYH',
    id: '0CBPxBZNCCBC5k1eBRVgYH',
    is_local: false,
    name: '86Sentra',
    popularity: 46,
    preview_url:
      'https://p.scdn.co/mp3-preview/79fdaf3a467bd2ebc9de7fc72fafc6373051c188?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:0CBPxBZNCCBC5k1eBRVgYH'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/066X20Nz7iquqkkCW6Jxy6' },
          href: 'https://api.spotify.com/v1/artists/066X20Nz7iquqkkCW6Jxy6',
          id: '066X20Nz7iquqkkCW6Jxy6',
          name: 'LCD Soundsystem',
          type: 'artist',
          uri: 'spotify:artist:066X20Nz7iquqkkCW6Jxy6'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/1R8kkopLT4IAxzMMkjic6X' },
      href: 'https://api.spotify.com/v1/albums/1R8kkopLT4IAxzMMkjic6X',
      id: '1R8kkopLT4IAxzMMkjic6X',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273e6272ad26e7a55bc342a6dd0',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02e6272ad26e7a55bc342a6dd0',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851e6272ad26e7a55bc342a6dd0',
          width: 64
        }
      ],
      name: 'Sound of Silver',
      release_date: '2007-03-12',
      release_date_precision: 'day',
      total_tracks: 9,
      type: 'album',
      uri: 'spotify:album:1R8kkopLT4IAxzMMkjic6X'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/066X20Nz7iquqkkCW6Jxy6' },
        href: 'https://api.spotify.com/v1/artists/066X20Nz7iquqkkCW6Jxy6',
        id: '066X20Nz7iquqkkCW6Jxy6',
        name: 'LCD Soundsystem',
        type: 'artist',
        uri: 'spotify:artist:066X20Nz7iquqkkCW6Jxy6'
      }
    ],

    disc_number: 1,
    duration_ms: 462266,
    explicit: false,
    external_ids: { isrc: 'US4GE0600018' },
    external_urls: { spotify: 'https://open.spotify.com/track/2Ud3deeqLAG988pfW0Kwcl' },
    href: 'https://api.spotify.com/v1/tracks/2Ud3deeqLAG988pfW0Kwcl',
    id: '2Ud3deeqLAG988pfW0Kwcl',
    is_local: false,
    name: 'All My Friends',
    popularity: 59,
    preview_url:
      'https://p.scdn.co/mp3-preview/7eb35cfe0d60a502a9043b799725b4cf9a43d7f8?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 5,
    type: 'track',
    uri: 'spotify:track:2Ud3deeqLAG988pfW0Kwcl'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/3WaJSfKnzc65VDgmj2zU8B' },
          href: 'https://api.spotify.com/v1/artists/3WaJSfKnzc65VDgmj2zU8B',
          id: '3WaJSfKnzc65VDgmj2zU8B',
          name: 'Interpol',
          type: 'artist',
          uri: 'spotify:artist:3WaJSfKnzc65VDgmj2zU8B'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/5oJ2OTdqCteMkGDjzcItNN' },
      href: 'https://api.spotify.com/v1/albums/5oJ2OTdqCteMkGDjzcItNN',
      id: '5oJ2OTdqCteMkGDjzcItNN',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2736b09479946616a3d77fed533',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e026b09479946616a3d77fed533',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048516b09479946616a3d77fed533',
          width: 64
        }
      ],
      name: 'Turn On The Bright Lights (The Tenth Anniversary Edition - 2012 Remaster)',
      release_date: '2002-08-20',
      release_date_precision: 'day',
      total_tracks: 28,
      type: 'album',
      uri: 'spotify:album:5oJ2OTdqCteMkGDjzcItNN'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/3WaJSfKnzc65VDgmj2zU8B' },
        href: 'https://api.spotify.com/v1/artists/3WaJSfKnzc65VDgmj2zU8B',
        id: '3WaJSfKnzc65VDgmj2zU8B',
        name: 'Interpol',
        type: 'artist',
        uri: 'spotify:artist:3WaJSfKnzc65VDgmj2zU8B'
      }
    ],

    disc_number: 2,
    duration_ms: 399506,
    explicit: true,
    external_ids: { isrc: 'USMTD1203110' },
    external_urls: { spotify: 'https://open.spotify.com/track/3z0D1SpLGfqR1yPPxc9nzt' },
    href: 'https://api.spotify.com/v1/tracks/3z0D1SpLGfqR1yPPxc9nzt',
    id: '3z0D1SpLGfqR1yPPxc9nzt',
    is_local: false,
    name: 'Specialist - B-Side - 2012 Remaster',
    popularity: 40,
    preview_url:
      'https://p.scdn.co/mp3-preview/3dd63ff2b4b1f51a10af18f3ee59aadb497c7c71?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 2,
    type: 'track',
    uri: 'spotify:track:3z0D1SpLGfqR1yPPxc9nzt'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
          href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
          id: '6yJ6QQ3Y5l0s0tn7b0arrO',
          name: 'JPEGMAFIA',
          type: 'artist',
          uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/1ezs1QD5SYQ6LtxpC9y5I2' },
      href: 'https://api.spotify.com/v1/albums/1ezs1QD5SYQ6LtxpC9y5I2',
      id: '1ezs1QD5SYQ6LtxpC9y5I2',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273a3314be7ae643fefa32fbe08',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02a3314be7ae643fefa32fbe08',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851a3314be7ae643fefa32fbe08',
          width: 64
        }
      ],
      name: 'I LAY DOWN MY LIFE FOR YOU',
      release_date: '2024-08-01',
      release_date_precision: 'day',
      total_tracks: 14,
      type: 'album',
      uri: 'spotify:album:1ezs1QD5SYQ6LtxpC9y5I2'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
        href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
        id: '6yJ6QQ3Y5l0s0tn7b0arrO',
        name: 'JPEGMAFIA',
        type: 'artist',
        uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
      },
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/68kEuyFKyqrdQQLLsmiatm' },
        href: 'https://api.spotify.com/v1/artists/68kEuyFKyqrdQQLLsmiatm',
        id: '68kEuyFKyqrdQQLLsmiatm',
        name: 'Vince Staples',
        type: 'artist',
        uri: 'spotify:artist:68kEuyFKyqrdQQLLsmiatm'
      }
    ],

    disc_number: 1,
    duration_ms: 136666,
    explicit: true,
    external_ids: { isrc: 'QM7282468541' },
    external_urls: { spotify: 'https://open.spotify.com/track/4HzV6IvuKEuKdh5O60v52u' },
    href: 'https://api.spotify.com/v1/tracks/4HzV6IvuKEuKdh5O60v52u',
    id: '4HzV6IvuKEuKdh5O60v52u',
    is_local: false,
    name: 'New Black History (feat. Vince Staples)',
    popularity: 66,
    preview_url:
      'https://p.scdn.co/mp3-preview/406fb6a60cdc58a694d3cfa39d611a2292f0dfab?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 5,
    type: 'track',
    uri: 'spotify:track:4HzV6IvuKEuKdh5O60v52u'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
          href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
          id: '6yJ6QQ3Y5l0s0tn7b0arrO',
          name: 'JPEGMAFIA',
          type: 'artist',
          uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/1ezs1QD5SYQ6LtxpC9y5I2' },
      href: 'https://api.spotify.com/v1/albums/1ezs1QD5SYQ6LtxpC9y5I2',
      id: '1ezs1QD5SYQ6LtxpC9y5I2',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273a3314be7ae643fefa32fbe08',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02a3314be7ae643fefa32fbe08',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851a3314be7ae643fefa32fbe08',
          width: 64
        }
      ],
      name: 'I LAY DOWN MY LIFE FOR YOU',
      release_date: '2024-08-01',
      release_date_precision: 'day',
      total_tracks: 14,
      type: 'album',
      uri: 'spotify:album:1ezs1QD5SYQ6LtxpC9y5I2'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
        href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
        id: '6yJ6QQ3Y5l0s0tn7b0arrO',
        name: 'JPEGMAFIA',
        type: 'artist',
        uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
      }
    ],

    disc_number: 1,
    duration_ms: 175786,
    explicit: true,
    external_ids: { isrc: 'QM7282468602' },
    external_urls: { spotify: 'https://open.spotify.com/track/2f6UtOGwSA1CMuWZi59r8Z' },
    href: 'https://api.spotify.com/v1/tracks/2f6UtOGwSA1CMuWZi59r8Z',
    id: '2f6UtOGwSA1CMuWZi59r8Z',
    is_local: false,
    name: 'i recovered from this',
    popularity: 62,
    preview_url:
      'https://p.scdn.co/mp3-preview/d206336b7ef4686834ad041ebd97c7b2814199f3?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 14,
    type: 'track',
    uri: 'spotify:track:2f6UtOGwSA1CMuWZi59r8Z'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6P7H3ai06vU1sGvdpBwDmE' },
          href: 'https://api.spotify.com/v1/artists/6P7H3ai06vU1sGvdpBwDmE',
          id: '6P7H3ai06vU1sGvdpBwDmE',
          name: 'Steely Dan',
          type: 'artist',
          uri: 'spotify:artist:6P7H3ai06vU1sGvdpBwDmE'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/6DlSUW5gmq6Byc3osKDJ2p' },
      href: 'https://api.spotify.com/v1/albums/6DlSUW5gmq6Byc3osKDJ2p',
      id: '6DlSUW5gmq6Byc3osKDJ2p',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2730ddd7e736f870994f4707947',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e020ddd7e736f870994f4707947',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048510ddd7e736f870994f4707947',
          width: 64
        }
      ],
      name: "Can't Buy A Thrill",
      release_date: '1972-11-01',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:6DlSUW5gmq6Byc3osKDJ2p'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6P7H3ai06vU1sGvdpBwDmE' },
        href: 'https://api.spotify.com/v1/artists/6P7H3ai06vU1sGvdpBwDmE',
        id: '6P7H3ai06vU1sGvdpBwDmE',
        name: 'Steely Dan',
        type: 'artist',
        uri: 'spotify:artist:6P7H3ai06vU1sGvdpBwDmE'
      }
    ],
    disc_number: 1,
    duration_ms: 277467,
    explicit: false,
    external_ids: { isrc: 'USMC17347184' },
    external_urls: { spotify: 'https://open.spotify.com/track/1x1XQqhBViz4opcpwc7FVs' },
    href: 'https://api.spotify.com/v1/tracks/1x1XQqhBViz4opcpwc7FVs',
    id: '1x1XQqhBViz4opcpwc7FVs',
    is_local: false,
    name: "Reelin' In The Years",
    popularity: 71,
    preview_url:
      'https://p.scdn.co/mp3-preview/08fcfd47f12bef5b57ec18eb4a9e4b11481392c3?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 6,
    type: 'track',
    uri: 'spotify:track:1x1XQqhBViz4opcpwc7FVs'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/4Ge8xMJNwt6EEXOzVXju9a' },
          href: 'https://api.spotify.com/v1/artists/4Ge8xMJNwt6EEXOzVXju9a',
          id: '4Ge8xMJNwt6EEXOzVXju9a',
          name: 'Caroline Polachek',
          type: 'artist',
          uri: 'spotify:artist:4Ge8xMJNwt6EEXOzVXju9a'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/25ktFe8igqIwv9aRbkdnTS' },
      href: 'https://api.spotify.com/v1/albums/25ktFe8igqIwv9aRbkdnTS',
      id: '25ktFe8igqIwv9aRbkdnTS',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27387858817af31c6329252c8c4',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0287858817af31c6329252c8c4',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485187858817af31c6329252c8c4',
          width: 64
        }
      ],
      name: 'Desire, I Want To Turn Into You: Everasking Edition',
      release_date: '2024-02-14',
      release_date_precision: 'day',
      total_tracks: 20,
      type: 'album',
      uri: 'spotify:album:25ktFe8igqIwv9aRbkdnTS'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/4Ge8xMJNwt6EEXOzVXju9a' },
        href: 'https://api.spotify.com/v1/artists/4Ge8xMJNwt6EEXOzVXju9a',
        id: '4Ge8xMJNwt6EEXOzVXju9a',
        name: 'Caroline Polachek',
        type: 'artist',
        uri: 'spotify:artist:4Ge8xMJNwt6EEXOzVXju9a'
      }
    ],

    disc_number: 1,
    duration_ms: 344998,
    explicit: false,
    external_ids: { isrc: 'QM4TW2488741' },
    external_urls: { spotify: 'https://open.spotify.com/track/1fr2ip2dkCpckGFdRZQKBn' },
    href: 'https://api.spotify.com/v1/tracks/1fr2ip2dkCpckGFdRZQKBn',
    id: '1fr2ip2dkCpckGFdRZQKBn',
    is_local: false,
    name: 'Coma',
    popularity: 45,
    preview_url:
      'https://p.scdn.co/mp3-preview/0b9844046448efc259f671c1b3b48808251c3b15?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 17,
    type: 'track',
    uri: 'spotify:track:1fr2ip2dkCpckGFdRZQKBn'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg' },
          href: 'https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg',
          id: '2YZyLoL8N0Wb9xBt1NhZWg',
          name: 'Kendrick Lamar',
          type: 'artist',
          uri: 'spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/32bR4LcEc1PvJEhaKoo4ZN' },
      href: 'https://api.spotify.com/v1/albums/32bR4LcEc1PvJEhaKoo4ZN',
      id: '32bR4LcEc1PvJEhaKoo4ZN',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2737587213b1be294ac4000f648',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e027587213b1be294ac4000f648',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048517587213b1be294ac4000f648',
          width: 64
        }
      ],
      name: 'euphoria',
      release_date: '2024-04-30',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:32bR4LcEc1PvJEhaKoo4ZN'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg' },
        href: 'https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg',
        id: '2YZyLoL8N0Wb9xBt1NhZWg',
        name: 'Kendrick Lamar',
        type: 'artist',
        uri: 'spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg'
      }
    ],
    disc_number: 1,
    duration_ms: 383639,
    explicit: true,
    external_ids: { isrc: 'USUG12402839' },
    external_urls: { spotify: 'https://open.spotify.com/track/77DRzu7ERs0TX3roZcre7Q' },
    href: 'https://api.spotify.com/v1/tracks/77DRzu7ERs0TX3roZcre7Q',
    id: '77DRzu7ERs0TX3roZcre7Q',
    is_local: false,
    name: 'euphoria',
    popularity: 86,
    preview_url:
      'https://p.scdn.co/mp3-preview/8a68b2d27d7eabc900ab6adfc8167c5d87b20875?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:77DRzu7ERs0TX3roZcre7Q'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/0uCCBpmg6MrPb1KY2msceF' },
          href: 'https://api.spotify.com/v1/artists/0uCCBpmg6MrPb1KY2msceF',
          id: '0uCCBpmg6MrPb1KY2msceF',
          name: 'Burial',
          type: 'artist',
          uri: 'spotify:artist:0uCCBpmg6MrPb1KY2msceF'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/1C30LhZB9I48LdpVCRRYvq' },
      href: 'https://api.spotify.com/v1/albums/1C30LhZB9I48LdpVCRRYvq',
      id: '1C30LhZB9I48LdpVCRRYvq',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273ad7f95966b473742cd323de8',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02ad7f95966b473742cd323de8',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851ad7f95966b473742cd323de8',
          width: 64
        }
      ],
      name: 'Untrue',
      release_date: '2007-11-05',
      release_date_precision: 'day',
      total_tracks: 13,
      type: 'album',
      uri: 'spotify:album:1C30LhZB9I48LdpVCRRYvq'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/0uCCBpmg6MrPb1KY2msceF' },
        href: 'https://api.spotify.com/v1/artists/0uCCBpmg6MrPb1KY2msceF',
        id: '0uCCBpmg6MrPb1KY2msceF',
        name: 'Burial',
        type: 'artist',
        uri: 'spotify:artist:0uCCBpmg6MrPb1KY2msceF'
      }
    ],
    disc_number: 1,
    duration_ms: 299840,
    explicit: false,
    external_ids: { isrc: 'GBLZC0700024' },
    external_urls: { spotify: 'https://open.spotify.com/track/6KhPQZ76b0qvNtMXxyIfS4' },
    href: 'https://api.spotify.com/v1/tracks/6KhPQZ76b0qvNtMXxyIfS4',
    id: '6KhPQZ76b0qvNtMXxyIfS4',
    is_local: false,
    name: 'Raver',
    popularity: 33,
    preview_url:
      'https://p.scdn.co/mp3-preview/1cd97240fdb4dec27b239c4ad42b46e4aef7a60e?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 13,
    type: 'track',
    uri: 'spotify:track:6KhPQZ76b0qvNtMXxyIfS4'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
          href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
          id: '6yJ6QQ3Y5l0s0tn7b0arrO',
          name: 'JPEGMAFIA',
          type: 'artist',
          uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/0S3p06Juu3pFmzpdQbOHOK' },
      href: 'https://api.spotify.com/v1/albums/0S3p06Juu3pFmzpdQbOHOK',
      id: '0S3p06Juu3pFmzpdQbOHOK',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273de834f234afd95e2d6690aac',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02de834f234afd95e2d6690aac',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851de834f234afd95e2d6690aac',
          width: 64
        }
      ],
      name: "don't rely on other men",
      release_date: '2024-06-17',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:0S3p06Juu3pFmzpdQbOHOK'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
        href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
        id: '6yJ6QQ3Y5l0s0tn7b0arrO',
        name: 'JPEGMAFIA',
        type: 'artist',
        uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
      }
    ],

    disc_number: 1,
    duration_ms: 194897,
    explicit: true,
    external_ids: { isrc: 'QM6P42451448' },
    external_urls: { spotify: 'https://open.spotify.com/track/2RZBNHSfrxyIs8u9ciLKLf' },
    href: 'https://api.spotify.com/v1/tracks/2RZBNHSfrxyIs8u9ciLKLf',
    id: '2RZBNHSfrxyIs8u9ciLKLf',
    is_local: false,
    name: "don't rely on other men",
    popularity: 61,
    preview_url:
      'https://p.scdn.co/mp3-preview/06e21b4486bc2ae7e41c81206a0217af3b5d628a?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:2RZBNHSfrxyIs8u9ciLKLf'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
          href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
          id: '6yJ6QQ3Y5l0s0tn7b0arrO',
          name: 'JPEGMAFIA',
          type: 'artist',
          uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/1ezs1QD5SYQ6LtxpC9y5I2' },
      href: 'https://api.spotify.com/v1/albums/1ezs1QD5SYQ6LtxpC9y5I2',
      id: '1ezs1QD5SYQ6LtxpC9y5I2',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273a3314be7ae643fefa32fbe08',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02a3314be7ae643fefa32fbe08',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851a3314be7ae643fefa32fbe08',
          width: 64
        }
      ],
      name: 'I LAY DOWN MY LIFE FOR YOU',
      release_date: '2024-08-01',
      release_date_precision: 'day',
      total_tracks: 14,
      type: 'album',
      uri: 'spotify:album:1ezs1QD5SYQ6LtxpC9y5I2'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
        href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
        id: '6yJ6QQ3Y5l0s0tn7b0arrO',
        name: 'JPEGMAFIA',
        type: 'artist',
        uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
      }
    ],

    disc_number: 1,
    duration_ms: 171906,
    explicit: true,
    external_ids: { isrc: 'QM7282468904' },
    external_urls: { spotify: 'https://open.spotify.com/track/45e7LGvKvMZVY4zRLTSSmY' },
    href: 'https://api.spotify.com/v1/tracks/45e7LGvKvMZVY4zRLTSSmY',
    id: '45e7LGvKvMZVY4zRLTSSmY',
    is_local: false,
    name: "don't rely on other men",
    popularity: 64,
    preview_url:
      'https://p.scdn.co/mp3-preview/b4ce29deac43e33bdfd3d75fa387e862da1edcf5?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 6,
    type: 'track',
    uri: 'spotify:track:45e7LGvKvMZVY4zRLTSSmY'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
          href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
          id: '25uiPmTg16RbhZWAqwLBy5',
          name: 'Charli xcx',
          type: 'artist',
          uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/2lIZef4lzdvZkiiCzvPKj7' },
      href: 'https://api.spotify.com/v1/albums/2lIZef4lzdvZkiiCzvPKj7',
      id: '2lIZef4lzdvZkiiCzvPKj7',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27388e3822cccfb8f2832c70c2e',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0288e3822cccfb8f2832c70c2e',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485188e3822cccfb8f2832c70c2e',
          width: 64
        }
      ],
      name: 'BRAT',
      release_date: '2024-06-07',
      release_date_precision: 'day',
      total_tracks: 15,
      type: 'album',
      uri: 'spotify:album:2lIZef4lzdvZkiiCzvPKj7'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
        href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
        id: '25uiPmTg16RbhZWAqwLBy5',
        name: 'Charli xcx',
        type: 'artist',
        uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
      }
    ],
    disc_number: 1,
    duration_ms: 203618,
    explicit: true,
    external_ids: { isrc: 'USAT22401354' },
    external_urls: { spotify: 'https://open.spotify.com/track/5h68SoVFGleijCtjEja3xG' },
    href: 'https://api.spotify.com/v1/tracks/5h68SoVFGleijCtjEja3xG',
    id: '5h68SoVFGleijCtjEja3xG',
    is_local: false,
    name: '365',
    popularity: 83,
    preview_url:
      'https://p.scdn.co/mp3-preview/8d142964f88c64d9e53d8c41a7df85bbb19ecc79?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 15,
    type: 'track',
    uri: 'spotify:track:5h68SoVFGleijCtjEja3xG'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
          href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
          id: '25uiPmTg16RbhZWAqwLBy5',
          name: 'Charli xcx',
          type: 'artist',
          uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/316O0Xetgx2NJLRgJBw4uq' },
      href: 'https://api.spotify.com/v1/albums/316O0Xetgx2NJLRgJBw4uq',
      id: '316O0Xetgx2NJLRgJBw4uq',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273df174e0dcb15de7b625a7194',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02df174e0dcb15de7b625a7194',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851df174e0dcb15de7b625a7194',
          width: 64
        }
      ],
      name: 'Brat and it’s the same but there’s three more songs so it’s not',
      release_date: '2024-06-10',
      release_date_precision: 'day',
      total_tracks: 18,
      type: 'album',
      uri: 'spotify:album:316O0Xetgx2NJLRgJBw4uq'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
        href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
        id: '25uiPmTg16RbhZWAqwLBy5',
        name: 'Charli xcx',
        type: 'artist',
        uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
      }
    ],
    disc_number: 1,
    duration_ms: 142265,
    explicit: false,
    external_ids: { isrc: 'USAT22403715' },
    external_urls: { spotify: 'https://open.spotify.com/track/0xzBmAsCfu3AzX1W0GYtMJ' },
    href: 'https://api.spotify.com/v1/tracks/0xzBmAsCfu3AzX1W0GYtMJ',
    id: '0xzBmAsCfu3AzX1W0GYtMJ',
    is_local: false,
    name: 'Guess',
    popularity: 77,
    preview_url:
      'https://p.scdn.co/mp3-preview/dcf9e25df4a827e8ea51b132c7ef54a13f700cd8?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 17,
    type: 'track',
    uri: 'spotify:track:0xzBmAsCfu3AzX1W0GYtMJ'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
          href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
          id: '6yJ6QQ3Y5l0s0tn7b0arrO',
          name: 'JPEGMAFIA',
          type: 'artist',
          uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/4NBSLYMhwbf5gUSc0ZHKQK' },
      href: 'https://api.spotify.com/v1/albums/4NBSLYMhwbf5gUSc0ZHKQK',
      id: '4NBSLYMhwbf5gUSc0ZHKQK',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273714a46900b0a19e5b8f36818',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02714a46900b0a19e5b8f36818',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851714a46900b0a19e5b8f36818',
          width: 64
        }
      ],
      name: 'SIN MIEDO',
      release_date: '2024-07-15',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:4NBSLYMhwbf5gUSc0ZHKQK'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
        href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
        id: '6yJ6QQ3Y5l0s0tn7b0arrO',
        name: 'JPEGMAFIA',
        type: 'artist',
        uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
      }
    ],

    disc_number: 1,
    duration_ms: 167291,
    explicit: true,
    external_ids: { isrc: 'QM7282423538' },
    external_urls: { spotify: 'https://open.spotify.com/track/4qAQTQH5lF4kINZ9JkURXp' },
    href: 'https://api.spotify.com/v1/tracks/4qAQTQH5lF4kINZ9JkURXp',
    id: '4qAQTQH5lF4kINZ9JkURXp',
    is_local: false,
    name: 'SIN MIEDO',
    popularity: 65,
    preview_url:
      'https://p.scdn.co/mp3-preview/a3110b8ddb1ca0ec065521fa158a6c631d84894c?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4qAQTQH5lF4kINZ9JkURXp'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/01PnN11ovfen6xUOHfNpn3' },
          href: 'https://api.spotify.com/v1/artists/01PnN11ovfen6xUOHfNpn3',
          id: '01PnN11ovfen6xUOHfNpn3',
          name: 'Overmono',
          type: 'artist',
          uri: 'spotify:artist:01PnN11ovfen6xUOHfNpn3'
        },
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/4GvOygVQquMaPm8oAc0vXi' },
          href: 'https://api.spotify.com/v1/artists/4GvOygVQquMaPm8oAc0vXi',
          id: '4GvOygVQquMaPm8oAc0vXi',
          name: 'The Streets',
          type: 'artist',
          uri: 'spotify:artist:4GvOygVQquMaPm8oAc0vXi'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/3v8EL9UazZlDhvn6mERMoq' },
      href: 'https://api.spotify.com/v1/albums/3v8EL9UazZlDhvn6mERMoq',
      id: '3v8EL9UazZlDhvn6mERMoq',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2730e53cdd9387eaabbfbe22537',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e020e53cdd9387eaabbfbe22537',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048510e53cdd9387eaabbfbe22537',
          width: 64
        }
      ],
      name: 'Turn The Page',
      release_date: '2024-04-24',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:3v8EL9UazZlDhvn6mERMoq'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/01PnN11ovfen6xUOHfNpn3' },
        href: 'https://api.spotify.com/v1/artists/01PnN11ovfen6xUOHfNpn3',
        id: '01PnN11ovfen6xUOHfNpn3',
        name: 'Overmono',
        type: 'artist',
        uri: 'spotify:artist:01PnN11ovfen6xUOHfNpn3'
      },
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/4GvOygVQquMaPm8oAc0vXi' },
        href: 'https://api.spotify.com/v1/artists/4GvOygVQquMaPm8oAc0vXi',
        id: '4GvOygVQquMaPm8oAc0vXi',
        name: 'The Streets',
        type: 'artist',
        uri: 'spotify:artist:4GvOygVQquMaPm8oAc0vXi'
      }
    ],

    disc_number: 1,
    duration_ms: 262454,
    explicit: false,
    external_ids: { isrc: 'GBBKS2400076' },
    external_urls: { spotify: 'https://open.spotify.com/track/038YxoOvHJKyFiXhqlVkil' },
    href: 'https://api.spotify.com/v1/tracks/038YxoOvHJKyFiXhqlVkil',
    id: '038YxoOvHJKyFiXhqlVkil',
    is_local: false,
    name: 'Turn The Page',
    popularity: 55,
    preview_url:
      'https://p.scdn.co/mp3-preview/f50342e7fe343f92c56d74e97a567f362401b99d?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:038YxoOvHJKyFiXhqlVkil'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg' },
          href: 'https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg',
          id: '2YZyLoL8N0Wb9xBt1NhZWg',
          name: 'Kendrick Lamar',
          type: 'artist',
          uri: 'spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/5JjnoGJyOxfSZUZtk2rRwZ' },
      href: 'https://api.spotify.com/v1/albums/5JjnoGJyOxfSZUZtk2rRwZ',
      id: '5JjnoGJyOxfSZUZtk2rRwZ',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e021ea0c62b2339cbf493a999ad',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048511ea0c62b2339cbf493a999ad',
          width: 64
        }
      ],
      name: 'Not Like Us',
      release_date: '2024-05-04',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:5JjnoGJyOxfSZUZtk2rRwZ'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg' },
        href: 'https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg',
        id: '2YZyLoL8N0Wb9xBt1NhZWg',
        name: 'Kendrick Lamar',
        type: 'artist',
        uri: 'spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg'
      }
    ],
    disc_number: 1,
    duration_ms: 274192,
    explicit: true,
    external_ids: { isrc: 'USUG12400910' },
    external_urls: { spotify: 'https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3' },
    href: 'https://api.spotify.com/v1/tracks/6AI3ezQ4o3HUoP6Dhudph3',
    id: '6AI3ezQ4o3HUoP6Dhudph3',
    is_local: false,
    name: 'Not Like Us',
    popularity: 96,
    preview_url:
      'https://p.scdn.co/mp3-preview/821def30e24f965adb480145744e4ed2a0f37903?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:6AI3ezQ4o3HUoP6Dhudph3'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/75mafsNqNE1WSEVxIKuY5C' },
          href: 'https://api.spotify.com/v1/artists/75mafsNqNE1WSEVxIKuY5C',
          id: '75mafsNqNE1WSEVxIKuY5C',
          name: 'IDLES',
          type: 'artist',
          uri: 'spotify:artist:75mafsNqNE1WSEVxIKuY5C'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/6U11VNHZAfYY3E9V4oFB2p' },
      href: 'https://api.spotify.com/v1/albums/6U11VNHZAfYY3E9V4oFB2p',
      id: '6U11VNHZAfYY3E9V4oFB2p',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273838fbd7f0f3d02d2235cd121',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02838fbd7f0f3d02d2235cd121',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851838fbd7f0f3d02d2235cd121',
          width: 64
        }
      ],
      name: 'TANGK',
      release_date: '2024-02-16',
      release_date_precision: 'day',
      total_tracks: 11,
      type: 'album',
      uri: 'spotify:album:6U11VNHZAfYY3E9V4oFB2p'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/75mafsNqNE1WSEVxIKuY5C' },
        href: 'https://api.spotify.com/v1/artists/75mafsNqNE1WSEVxIKuY5C',
        id: '75mafsNqNE1WSEVxIKuY5C',
        name: 'IDLES',
        type: 'artist',
        uri: 'spotify:artist:75mafsNqNE1WSEVxIKuY5C'
      }
    ],
    disc_number: 1,
    duration_ms: 256573,
    explicit: false,
    external_ids: { isrc: 'USBQU2300130' },
    external_urls: { spotify: 'https://open.spotify.com/track/7f4azWcTVEDHZ7DSc5eh5a' },
    href: 'https://api.spotify.com/v1/tracks/7f4azWcTVEDHZ7DSc5eh5a',
    id: '7f4azWcTVEDHZ7DSc5eh5a',
    is_local: false,
    name: 'POP POP POP',
    popularity: 56,
    preview_url:
      'https://p.scdn.co/mp3-preview/6ac2c7948933cbcfb4671f1610871c7c060996c7?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 3,
    type: 'track',
    uri: 'spotify:track:7f4azWcTVEDHZ7DSc5eh5a'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
          href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
          id: '25uiPmTg16RbhZWAqwLBy5',
          name: 'Charli xcx',
          type: 'artist',
          uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/2lIZef4lzdvZkiiCzvPKj7' },
      href: 'https://api.spotify.com/v1/albums/2lIZef4lzdvZkiiCzvPKj7',
      id: '2lIZef4lzdvZkiiCzvPKj7',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27388e3822cccfb8f2832c70c2e',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0288e3822cccfb8f2832c70c2e',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485188e3822cccfb8f2832c70c2e',
          width: 64
        }
      ],
      name: 'BRAT',
      release_date: '2024-06-07',
      release_date_precision: 'day',
      total_tracks: 15,
      type: 'album',
      uri: 'spotify:album:2lIZef4lzdvZkiiCzvPKj7'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
        href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
        id: '25uiPmTg16RbhZWAqwLBy5',
        name: 'Charli xcx',
        type: 'artist',
        uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
      }
    ],
    disc_number: 1,
    duration_ms: 161757,
    explicit: false,
    external_ids: { isrc: 'USAT22401345' },
    external_urls: { spotify: 'https://open.spotify.com/track/62fqMvguJbsSs9HKhhRfuS' },
    href: 'https://api.spotify.com/v1/tracks/62fqMvguJbsSs9HKhhRfuS',
    id: '62fqMvguJbsSs9HKhhRfuS',
    is_local: false,
    name: 'Talk talk',
    popularity: 79,
    preview_url:
      'https://p.scdn.co/mp3-preview/a95501e13d90974998ad04d943fdd3f96f29331e?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 5,
    type: 'track',
    uri: 'spotify:track:62fqMvguJbsSs9HKhhRfuS'
  },
  {
    album: {
      album_type: 'EP',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/2mqiqsaX4LzFnUP7PmHGAb' },
          href: 'https://api.spotify.com/v1/artists/2mqiqsaX4LzFnUP7PmHGAb',
          id: '2mqiqsaX4LzFnUP7PmHGAb',
          name: 'The Dare',
          type: 'artist',
          uri: 'spotify:artist:2mqiqsaX4LzFnUP7PmHGAb'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/1YeSq8REMmtAeeO26kjrjD' },
      href: 'https://api.spotify.com/v1/albums/1YeSq8REMmtAeeO26kjrjD',
      id: '1YeSq8REMmtAeeO26kjrjD',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273902a7e451c257ffb996e1e6d',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02902a7e451c257ffb996e1e6d',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851902a7e451c257ffb996e1e6d',
          width: 64
        }
      ],
      name: 'The Sex EP',
      release_date: '2023-05-19',
      release_date_precision: 'day',
      total_tracks: 4,
      type: 'album',
      uri: 'spotify:album:1YeSq8REMmtAeeO26kjrjD'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/2mqiqsaX4LzFnUP7PmHGAb' },
        href: 'https://api.spotify.com/v1/artists/2mqiqsaX4LzFnUP7PmHGAb',
        id: '2mqiqsaX4LzFnUP7PmHGAb',
        name: 'The Dare',
        type: 'artist',
        uri: 'spotify:artist:2mqiqsaX4LzFnUP7PmHGAb'
      }
    ],
    disc_number: 1,
    duration_ms: 119558,
    explicit: true,
    external_ids: { isrc: 'USA2B2202911' },
    external_urls: { spotify: 'https://open.spotify.com/track/6WpZwkzyjINc6wDghg8Gzv' },
    href: 'https://api.spotify.com/v1/tracks/6WpZwkzyjINc6wDghg8Gzv',
    id: '6WpZwkzyjINc6wDghg8Gzv',
    is_local: false,
    name: 'Girls',
    popularity: 67,
    preview_url:
      'https://p.scdn.co/mp3-preview/7c00f80988065b2e2e314d7fa7a4750e9129127a?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:6WpZwkzyjINc6wDghg8Gzv'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/7nwdEDnfgNpPhWQCXX3KSx' },
          href: 'https://api.spotify.com/v1/artists/7nwdEDnfgNpPhWQCXX3KSx',
          id: '7nwdEDnfgNpPhWQCXX3KSx',
          name: 'KH',
          type: 'artist',
          uri: 'spotify:artist:7nwdEDnfgNpPhWQCXX3KSx'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/5ZiFsbS4RLFZVyJRN3Bmvz' },
      href: 'https://api.spotify.com/v1/albums/5ZiFsbS4RLFZVyJRN3Bmvz',
      id: '5ZiFsbS4RLFZVyJRN3Bmvz',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273a46121b278a6625effa326ec',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02a46121b278a6625effa326ec',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851a46121b278a6625effa326ec',
          width: 64
        }
      ],
      name: 'Looking at Your Pager',
      release_date: '2022-05-20',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:5ZiFsbS4RLFZVyJRN3Bmvz'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/7nwdEDnfgNpPhWQCXX3KSx' },
        href: 'https://api.spotify.com/v1/artists/7nwdEDnfgNpPhWQCXX3KSx',
        id: '7nwdEDnfgNpPhWQCXX3KSx',
        name: 'KH',
        type: 'artist',
        uri: 'spotify:artist:7nwdEDnfgNpPhWQCXX3KSx'
      }
    ],

    disc_number: 1,
    duration_ms: 174417,
    explicit: false,
    external_ids: { isrc: 'GBCEN2200053' },
    external_urls: { spotify: 'https://open.spotify.com/track/0y6CoVW1ZSBqRmPbyfhFQs' },
    href: 'https://api.spotify.com/v1/tracks/0y6CoVW1ZSBqRmPbyfhFQs',
    id: '0y6CoVW1ZSBqRmPbyfhFQs',
    is_local: false,
    name: 'Looking at Your Pager',
    popularity: 42,
    preview_url:
      'https://p.scdn.co/mp3-preview/caeeb1269e4db217f9a75f1d718234badc4ff243?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:0y6CoVW1ZSBqRmPbyfhFQs'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
          href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
          id: '25uiPmTg16RbhZWAqwLBy5',
          name: 'Charli xcx',
          type: 'artist',
          uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
        }
      ],
      external_urls: { spotify: 'https://open.spotify.com/album/5UlTVoEmOp7GuZN5PgnUq6' },
      href: 'https://api.spotify.com/v1/albums/5UlTVoEmOp7GuZN5PgnUq6',
      id: '5UlTVoEmOp7GuZN5PgnUq6',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27352b3b1829d550ece26677087',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0252b3b1829d550ece26677087',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485152b3b1829d550ece26677087',
          width: 64
        }
      ],
      name: '360',
      release_date: '2024-05-10',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:5UlTVoEmOp7GuZN5PgnUq6'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
        href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
        id: '25uiPmTg16RbhZWAqwLBy5',
        name: 'Charli xcx',
        type: 'artist',
        uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
      }
    ],

    disc_number: 1,
    duration_ms: 133805,
    explicit: true,
    external_ids: { isrc: 'USAT22401341' },
    external_urls: { spotify: 'https://open.spotify.com/track/7JxexWxny7yJ3slTLmWz2U' },
    href: 'https://api.spotify.com/v1/tracks/7JxexWxny7yJ3slTLmWz2U',
    id: '7JxexWxny7yJ3slTLmWz2U',
    is_local: false,
    name: '360',
    popularity: 70,
    preview_url:
      'https://p.scdn.co/mp3-preview/34231118fa980913824d4ccf78be931e999f69f1?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:7JxexWxny7yJ3slTLmWz2U'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
          href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
          id: '6yJ6QQ3Y5l0s0tn7b0arrO',
          name: 'JPEGMAFIA',
          type: 'artist',
          uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/1ezs1QD5SYQ6LtxpC9y5I2' },
      href: 'https://api.spotify.com/v1/albums/1ezs1QD5SYQ6LtxpC9y5I2',
      id: '1ezs1QD5SYQ6LtxpC9y5I2',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273a3314be7ae643fefa32fbe08',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02a3314be7ae643fefa32fbe08',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851a3314be7ae643fefa32fbe08',
          width: 64
        }
      ],
      name: 'I LAY DOWN MY LIFE FOR YOU',
      release_date: '2024-08-01',
      release_date_precision: 'day',
      total_tracks: 14,
      type: 'album',
      uri: 'spotify:album:1ezs1QD5SYQ6LtxpC9y5I2'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO' },
        href: 'https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO',
        id: '6yJ6QQ3Y5l0s0tn7b0arrO',
        name: 'JPEGMAFIA',
        type: 'artist',
        uri: 'spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO'
      }
    ],

    disc_number: 1,
    duration_ms: 108895,
    explicit: true,
    external_ids: { isrc: 'QM7282468447' },
    external_urls: { spotify: 'https://open.spotify.com/track/76lNySMRTjhiJ0KtMkuHdX' },
    href: 'https://api.spotify.com/v1/tracks/76lNySMRTjhiJ0KtMkuHdX',
    id: '76lNySMRTjhiJ0KtMkuHdX',
    is_local: false,
    name: 'i scream this in the mirror before i interact with anyone',
    popularity: 66,
    preview_url:
      'https://p.scdn.co/mp3-preview/447312d83faf1754d67ee942b90a6ea06b85898f?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:76lNySMRTjhiJ0KtMkuHdX'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/3WaJSfKnzc65VDgmj2zU8B' },
          href: 'https://api.spotify.com/v1/artists/3WaJSfKnzc65VDgmj2zU8B',
          id: '3WaJSfKnzc65VDgmj2zU8B',
          name: 'Interpol',
          type: 'artist',
          uri: 'spotify:artist:3WaJSfKnzc65VDgmj2zU8B'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/2OFkUKYNNFQ74kJOSc9gzz' },
      href: 'https://api.spotify.com/v1/albums/2OFkUKYNNFQ74kJOSc9gzz',
      id: '2OFkUKYNNFQ74kJOSc9gzz',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27357383649d25ab30a0bb5dfa0',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0257383649d25ab30a0bb5dfa0',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485157383649d25ab30a0bb5dfa0',
          width: 64
        }
      ],
      name: 'Antics',
      release_date: '2004-09-27',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:2OFkUKYNNFQ74kJOSc9gzz'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/3WaJSfKnzc65VDgmj2zU8B' },
        href: 'https://api.spotify.com/v1/artists/3WaJSfKnzc65VDgmj2zU8B',
        id: '3WaJSfKnzc65VDgmj2zU8B',
        name: 'Interpol',
        type: 'artist',
        uri: 'spotify:artist:3WaJSfKnzc65VDgmj2zU8B'
      }
    ],

    disc_number: 1,
    duration_ms: 192493,
    explicit: false,
    external_ids: { isrc: 'USMTD0461608' },
    external_urls: { spotify: 'https://open.spotify.com/track/1fBnzFTxI1wqtU0ZR1pxrf' },
    href: 'https://api.spotify.com/v1/tracks/1fBnzFTxI1wqtU0ZR1pxrf',
    id: '1fBnzFTxI1wqtU0ZR1pxrf',
    is_local: false,
    name: "C'mere",
    popularity: 58,
    preview_url:
      'https://p.scdn.co/mp3-preview/c73555dd3af75751505a2a0d4198e33ccb0b6af9?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 8,
    type: 'track',
    uri: 'spotify:track:1fBnzFTxI1wqtU0ZR1pxrf'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/5O1YiYFy3CEWD2lkOmoerV' },
          href: 'https://api.spotify.com/v1/artists/5O1YiYFy3CEWD2lkOmoerV',
          id: '5O1YiYFy3CEWD2lkOmoerV',
          name: 'Kwengface',
          type: 'artist',
          uri: 'spotify:artist:5O1YiYFy3CEWD2lkOmoerV'
        },
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/0aIpJqqTLf683ojWREc5lg' },
          href: 'https://api.spotify.com/v1/artists/0aIpJqqTLf683ojWREc5lg',
          id: '0aIpJqqTLf683ojWREc5lg',
          name: 'Joy Orbison',
          type: 'artist',
          uri: 'spotify:artist:0aIpJqqTLf683ojWREc5lg'
        },
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/01PnN11ovfen6xUOHfNpn3' },
          href: 'https://api.spotify.com/v1/artists/01PnN11ovfen6xUOHfNpn3',
          id: '01PnN11ovfen6xUOHfNpn3',
          name: 'Overmono',
          type: 'artist',
          uri: 'spotify:artist:01PnN11ovfen6xUOHfNpn3'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/2vMoaiAWsGENn1oCI2EWXN' },
      href: 'https://api.spotify.com/v1/albums/2vMoaiAWsGENn1oCI2EWXN',
      id: '2vMoaiAWsGENn1oCI2EWXN',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2735bb0d09cf45adf72ac2961b6',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e025bb0d09cf45adf72ac2961b6',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048515bb0d09cf45adf72ac2961b6',
          width: 64
        }
      ],
      name: 'Freedom 2',
      release_date: '2023-07-27',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:2vMoaiAWsGENn1oCI2EWXN'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/5O1YiYFy3CEWD2lkOmoerV' },
        href: 'https://api.spotify.com/v1/artists/5O1YiYFy3CEWD2lkOmoerV',
        id: '5O1YiYFy3CEWD2lkOmoerV',
        name: 'Kwengface',
        type: 'artist',
        uri: 'spotify:artist:5O1YiYFy3CEWD2lkOmoerV'
      },
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/0aIpJqqTLf683ojWREc5lg' },
        href: 'https://api.spotify.com/v1/artists/0aIpJqqTLf683ojWREc5lg',
        id: '0aIpJqqTLf683ojWREc5lg',
        name: 'Joy Orbison',
        type: 'artist',
        uri: 'spotify:artist:0aIpJqqTLf683ojWREc5lg'
      },
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/01PnN11ovfen6xUOHfNpn3' },
        href: 'https://api.spotify.com/v1/artists/01PnN11ovfen6xUOHfNpn3',
        id: '01PnN11ovfen6xUOHfNpn3',
        name: 'Overmono',
        type: 'artist',
        uri: 'spotify:artist:01PnN11ovfen6xUOHfNpn3'
      }
    ],

    disc_number: 1,
    duration_ms: 206931,
    explicit: true,
    external_ids: { isrc: 'GBLFP2363996' },
    external_urls: { spotify: 'https://open.spotify.com/track/3sn7UM54xyAUjfR9rNxZwp' },
    href: 'https://api.spotify.com/v1/tracks/3sn7UM54xyAUjfR9rNxZwp',
    id: '3sn7UM54xyAUjfR9rNxZwp',
    is_local: false,
    name: 'Freedom 2',
    popularity: 56,
    preview_url:
      'https://p.scdn.co/mp3-preview/02d3336374cbf4da8829854f02672438f9c1e8bf?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:3sn7UM54xyAUjfR9rNxZwp'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/4Ge8xMJNwt6EEXOzVXju9a' },
          href: 'https://api.spotify.com/v1/artists/4Ge8xMJNwt6EEXOzVXju9a',
          id: '4Ge8xMJNwt6EEXOzVXju9a',
          name: 'Caroline Polachek',
          type: 'artist',
          uri: 'spotify:artist:4Ge8xMJNwt6EEXOzVXju9a'
        },
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/3Uqu1mEdkUJxPe7s31n1M9' },
          href: 'https://api.spotify.com/v1/artists/3Uqu1mEdkUJxPe7s31n1M9',
          id: '3Uqu1mEdkUJxPe7s31n1M9',
          name: 'Weyes Blood',
          type: 'artist',
          uri: 'spotify:artist:3Uqu1mEdkUJxPe7s31n1M9'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/3rxjw1Di3SRicz2Z4eE4Pb' },
      href: 'https://api.spotify.com/v1/albums/3rxjw1Di3SRicz2Z4eE4Pb',
      id: '3rxjw1Di3SRicz2Z4eE4Pb',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27356cf4b8d47a768c31596e48c',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0256cf4b8d47a768c31596e48c',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485156cf4b8d47a768c31596e48c',
          width: 64
        }
      ],
      name: 'Butterfly Net (feat. Weyes Blood)',
      release_date: '2024-02-07',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:3rxjw1Di3SRicz2Z4eE4Pb'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/4Ge8xMJNwt6EEXOzVXju9a' },
        href: 'https://api.spotify.com/v1/artists/4Ge8xMJNwt6EEXOzVXju9a',
        id: '4Ge8xMJNwt6EEXOzVXju9a',
        name: 'Caroline Polachek',
        type: 'artist',
        uri: 'spotify:artist:4Ge8xMJNwt6EEXOzVXju9a'
      },
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/3Uqu1mEdkUJxPe7s31n1M9' },
        href: 'https://api.spotify.com/v1/artists/3Uqu1mEdkUJxPe7s31n1M9',
        id: '3Uqu1mEdkUJxPe7s31n1M9',
        name: 'Weyes Blood',
        type: 'artist',
        uri: 'spotify:artist:3Uqu1mEdkUJxPe7s31n1M9'
      }
    ],

    disc_number: 1,
    duration_ms: 333166,
    explicit: false,
    external_ids: { isrc: 'QM4TW2467782' },
    external_urls: { spotify: 'https://open.spotify.com/track/0NL61fJiDf07EAd2HzsNCW' },
    href: 'https://api.spotify.com/v1/tracks/0NL61fJiDf07EAd2HzsNCW',
    id: '0NL61fJiDf07EAd2HzsNCW',
    is_local: false,
    name: 'Butterfly Net (feat. Weyes Blood)',
    popularity: 38,
    preview_url:
      'https://p.scdn.co/mp3-preview/066bbe1b1562f44f001c78e5d6b1e1b571807352?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:0NL61fJiDf07EAd2HzsNCW'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
          href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
          id: '25uiPmTg16RbhZWAqwLBy5',
          name: 'Charli xcx',
          type: 'artist',
          uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
        },
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH' },
          href: 'https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH',
          id: '6qqNVTkY8uBg9cP3Jd7DAH',
          name: 'Billie Eilish',
          type: 'artist',
          uri: 'spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/3ThlxfLSy4bfKzxWqmC7VN' },
      href: 'https://api.spotify.com/v1/albums/3ThlxfLSy4bfKzxWqmC7VN',
      id: '3ThlxfLSy4bfKzxWqmC7VN',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2738b8d8be49f9c4a44b0574144',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e028b8d8be49f9c4a44b0574144',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048518b8d8be49f9c4a44b0574144',
          width: 64
        }
      ],
      name: 'Guess featuring Billie Eilish',
      release_date: '2024-08-01',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:3ThlxfLSy4bfKzxWqmC7VN'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
        href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
        id: '25uiPmTg16RbhZWAqwLBy5',
        name: 'Charli xcx',
        type: 'artist',
        uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5'
      },
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH' },
        href: 'https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH',
        id: '6qqNVTkY8uBg9cP3Jd7DAH',
        name: 'Billie Eilish',
        type: 'artist',
        uri: 'spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH'
      }
    ],

    disc_number: 1,
    duration_ms: 143330,
    explicit: false,
    external_ids: { isrc: 'USAT22406808' },
    external_urls: { spotify: 'https://open.spotify.com/track/3WOhcATHxK2SLNeP5W3v1v' },
    href: 'https://api.spotify.com/v1/tracks/3WOhcATHxK2SLNeP5W3v1v',
    id: '3WOhcATHxK2SLNeP5W3v1v',
    is_local: false,
    name: 'Guess featuring Billie Eilish',
    popularity: 90,
    preview_url:
      'https://p.scdn.co/mp3-preview/0db1b087630204b761037f90fd5de0c244a5d730?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:3WOhcATHxK2SLNeP5W3v1v'
  },
  {
    album: {
      album_type: 'SINGLE',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/685XjGzGztyivfR3fAjoxo' },
          href: 'https://api.spotify.com/v1/artists/685XjGzGztyivfR3fAjoxo',
          id: '685XjGzGztyivfR3fAjoxo',
          name: 'Squid',
          type: 'artist',
          uri: 'spotify:artist:685XjGzGztyivfR3fAjoxo'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/5jQUB8BUJk3LdtLt626xyL' },
      href: 'https://api.spotify.com/v1/albums/5jQUB8BUJk3LdtLt626xyL',
      id: '5jQUB8BUJk3LdtLt626xyL',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2736ad8868445f563fd9c766772',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e026ad8868445f563fd9c766772',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048516ad8868445f563fd9c766772',
          width: 64
        }
      ],
      name: 'Fugue (Bin Song)',
      release_date: '2024-01-24',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:5jQUB8BUJk3LdtLt626xyL'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/685XjGzGztyivfR3fAjoxo' },
        href: 'https://api.spotify.com/v1/artists/685XjGzGztyivfR3fAjoxo',
        id: '685XjGzGztyivfR3fAjoxo',
        name: 'Squid',
        type: 'artist',
        uri: 'spotify:artist:685XjGzGztyivfR3fAjoxo'
      }
    ],

    disc_number: 1,
    duration_ms: 322988,
    explicit: false,
    external_ids: { isrc: 'GBBPW2300333' },
    external_urls: { spotify: 'https://open.spotify.com/track/3SLy3jHtaGsaGqpGaqtYGc' },
    href: 'https://api.spotify.com/v1/tracks/3SLy3jHtaGsaGqpGaqtYGc',
    id: '3SLy3jHtaGsaGqpGaqtYGc',
    is_local: false,
    name: 'Fugue (Bin Song)',
    popularity: 33,
    preview_url:
      'https://p.scdn.co/mp3-preview/4a67d885b5ff6b895a7351d4be9ad4f22aca2415?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:3SLy3jHtaGsaGqpGaqtYGc'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/6RZUqkomCmb8zCRqc9eznB' },
          href: 'https://api.spotify.com/v1/artists/6RZUqkomCmb8zCRqc9eznB',
          id: '6RZUqkomCmb8zCRqc9eznB',
          name: 'Placebo',
          type: 'artist',
          uri: 'spotify:artist:6RZUqkomCmb8zCRqc9eznB'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/7Jyg6ic5h9BDJ3WuYWYA6K' },
      href: 'https://api.spotify.com/v1/albums/7Jyg6ic5h9BDJ3WuYWYA6K',
      id: '7Jyg6ic5h9BDJ3WuYWYA6K',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2739710d6b9be102de728f6e26f',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e029710d6b9be102de728f6e26f',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048519710d6b9be102de728f6e26f',
          width: 64
        }
      ],
      name: 'Placebo',
      release_date: '1996-06-17',
      release_date_precision: 'day',
      total_tracks: 11,
      type: 'album',
      uri: 'spotify:album:7Jyg6ic5h9BDJ3WuYWYA6K'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/6RZUqkomCmb8zCRqc9eznB' },
        href: 'https://api.spotify.com/v1/artists/6RZUqkomCmb8zCRqc9eznB',
        id: '6RZUqkomCmb8zCRqc9eznB',
        name: 'Placebo',
        type: 'artist',
        uri: 'spotify:artist:6RZUqkomCmb8zCRqc9eznB'
      }
    ],

    disc_number: 1,
    duration_ms: 162466,
    explicit: false,
    external_ids: { isrc: 'GBAAA9600237' },
    external_urls: { spotify: 'https://open.spotify.com/track/3GKEh2H15w9ZECfi1BtQ20' },
    href: 'https://api.spotify.com/v1/tracks/3GKEh2H15w9ZECfi1BtQ20',
    id: '3GKEh2H15w9ZECfi1BtQ20',
    is_local: false,
    name: 'Teenage Angst',
    popularity: 44,
    preview_url:
      'https://p.scdn.co/mp3-preview/19a1a99f981385b0f72d68d69f72cedadd07a734?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 2,
    type: 'track',
    uri: 'spotify:track:3GKEh2H15w9ZECfi1BtQ20'
  },
  {
    album: {
      album_type: 'ALBUM',
      artists: [
        {
          external_urls: { spotify: 'https://open.spotify.com/artist/3WaJSfKnzc65VDgmj2zU8B' },
          href: 'https://api.spotify.com/v1/artists/3WaJSfKnzc65VDgmj2zU8B',
          id: '3WaJSfKnzc65VDgmj2zU8B',
          name: 'Interpol',
          type: 'artist',
          uri: 'spotify:artist:3WaJSfKnzc65VDgmj2zU8B'
        }
      ],

      external_urls: { spotify: 'https://open.spotify.com/album/2OFkUKYNNFQ74kJOSc9gzz' },
      href: 'https://api.spotify.com/v1/albums/2OFkUKYNNFQ74kJOSc9gzz',
      id: '2OFkUKYNNFQ74kJOSc9gzz',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27357383649d25ab30a0bb5dfa0',
          width: 640
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0257383649d25ab30a0bb5dfa0',
          width: 300
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485157383649d25ab30a0bb5dfa0',
          width: 64
        }
      ],
      name: 'Antics',
      release_date: '2004-09-27',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:2OFkUKYNNFQ74kJOSc9gzz'
    },
    artists: [
      {
        external_urls: { spotify: 'https://open.spotify.com/artist/3WaJSfKnzc65VDgmj2zU8B' },
        href: 'https://api.spotify.com/v1/artists/3WaJSfKnzc65VDgmj2zU8B',
        id: '3WaJSfKnzc65VDgmj2zU8B',
        name: 'Interpol',
        type: 'artist',
        uri: 'spotify:artist:3WaJSfKnzc65VDgmj2zU8B'
      }
    ],

    disc_number: 1,
    duration_ms: 247906,
    explicit: false,
    external_ids: { isrc: 'USMTD0461603' },
    external_urls: { spotify: 'https://open.spotify.com/track/74tnaKUsXIXeY3ryb9pfjG' },
    href: 'https://api.spotify.com/v1/tracks/74tnaKUsXIXeY3ryb9pfjG',
    id: '74tnaKUsXIXeY3ryb9pfjG',
    is_local: false,
    name: 'Narc',
    popularity: 51,
    preview_url:
      'https://p.scdn.co/mp3-preview/b124e0cd62403aea953c32f1a457f5626190c0ef?cid=2f65509863b147c8863a7d3e43bb2317',
    track_number: 3,
    type: 'track',
    uri: 'spotify:track:74tnaKUsXIXeY3ryb9pfjG'
  }
]
