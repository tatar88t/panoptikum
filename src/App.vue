<script setup lang="ts">
// import { selectGroupKey } from 'element-plus';
import PageLayout from 'src/Layouts/PageLayout/PageLayout.vue';
import { useThemeStore } from 'src/store/themeStore';
import { useLoaderStore } from 'src/store/loaderStore';
import { onMounted, ref } from 'vue';
import {
    useRouter
  } from 'vue-router'
import { storeToRefs } from 'pinia';

const router = useRouter();
const themeStore = useThemeStore();
const loadingStore = useLoaderStore();

const { getTheme } = themeStore;

// const loading = ref(true)
const { loading } = storeToRefs(loadingStore);

onMounted(() => {
            getTheme();

            console.log(router, 'ROUTER IN APP')
        });
 
</script>

<template>
  <PageLayout v-loading="loading"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
