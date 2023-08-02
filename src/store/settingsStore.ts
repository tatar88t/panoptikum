import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export type Mode = 'default' | 'develop' | 'production' | 'predprod';

export const useSettingsStore = defineStore('settings', () => {

    const mode = ref<Mode>('default');

    const modeMessage = computed(() => `Current mode is - ${mode.value}!!`)
    const switchMode = (modeArg: Mode = 'default')  => {
        mode.value = modeArg;
    }

    return {
        mode,
        modeMessage,
        switchMode,
    }
})