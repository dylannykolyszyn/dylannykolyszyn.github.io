import { defineStore } from "pinia";

export const useSocialStore = defineStore("socials", {
    state: () => ({
        socialLinks: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/dylannyko/",
                icon: "linkedin",
            },
            {
                name: "GitHub",
                url: "https://github.com/dylannykolyszyn/",
                icon: "github",
            },
            {
                name: "Email",
                url: "mailto:mail@dylnyko.uk",
                icon: "email-outline",
            },
        ],
    }),

    actions: {},

    getters: {
        getSocialLinks: (state) => state.socialLinks,
    },
});
