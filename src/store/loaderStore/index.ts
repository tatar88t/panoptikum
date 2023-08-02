import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
    state: () => ({
        loading: false,
        // ...
    }),

    actions: {
        async setLoading(value: boolean) {
            this.loading = value
        },
    }
})