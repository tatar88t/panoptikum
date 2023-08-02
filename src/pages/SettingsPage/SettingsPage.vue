<script lang="ts">
import { storeToRefs } from 'pinia'

import { useSettingsStore } from 'src/store/settingsStore';
import { Mode } from 'src/store/settingsStore';

import { APP_CONFIG } from 'src/services/api/config';
import { onMounted } from 'vue';

import { usePostsStore } from 'src/store/postsStore';
import { useThemeStore } from 'src/store/themeStore';
import Card from 'src/components/Card/Card.vue';

export default {
    setup() {
        const settingsStore = useSettingsStore();
        const postsStore = usePostsStore();
        const themeStore = useThemeStore();
        console.log(APP_CONFIG, 'APP_CONFIG');
        const MODES: Array<Mode> = ["default", "develop", "production", "predprod"];
        const { mode, modeMessage } = storeToRefs(settingsStore);
        const { theme } = storeToRefs(themeStore);
        const { switchMode } = settingsStore;
        const { getPosts } = postsStore;
        const { getTheme, setTheme } = themeStore;
        onMounted(() => {
            getPosts();
        });
        return {
            mode,
            modeMessage,
            MODES,
            theme,
            switchMode,
            getTheme,
            setTheme
        };
    },
    components: { Card }
}
</script>


<template>
    <div class="page">
        <div>
            Settings
        </div>
        <div v-for="modeType in MODES" :key="modeType">
            <button @click="switchMode(modeType)">
                {{ modeType }}
            </button>

            <el-button @click="switchMode(modeType)">
                {{ modeType }}
            </el-button>


        </div>
        <br />

        <card />
        <h2>
            {{ mode }}
        </h2>
        <h3>
            {{ modeMessage }}
        </h3>

        <router-link to="/">
            to Home
        </router-link>

        <el-switch v-model="theme" active-value="dark" inactive-value="light" active-color="green" inactive-color="gray"
            active-text="Темная" inactive-text="Светлая" @change="(v) => setTheme(v)">
        </el-switch>
    </div>
</template>