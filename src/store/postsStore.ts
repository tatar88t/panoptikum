import { defineStore } from 'pinia';
import { API_METHOD, api } from 'src/services/api';

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        // ...
    }),

    actions: {
        async getPosts() {
            this.posts = await api(API_METHOD.GET, { endpoint: '/posts' })
        }
    }
})
