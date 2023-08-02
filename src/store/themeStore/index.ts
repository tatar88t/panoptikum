import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { apiRequest } from '../services/api';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: 'dark',
        // ...
    }),

    actions: {
        async getTheme() {
            try {
                // this.theme = await apiRequest.get({ endpoint: '/posts' });
                this.theme = 'dark';
                document.body.className = `theme-${this.theme}`;
            } catch (error) {
                console.log(error, 'ERROR')
            }

        },

        async setTheme(theme) {
            try {
                // await apiRequest.post({ endpoint: '/setTheme', body: theme })
                this.theme = theme;
                document.body.className = `theme-${this.theme}`;
                console.log(theme, 'THEME ARG in STORE SETTER...');

            } catch (error) {
                console.log(error, 'ERROR GET THEME')
            }
        }
    }
})