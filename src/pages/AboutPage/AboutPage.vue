
 
<script lang="ts">
import Counter from 'src/components/Counter.vue';
import Card from 'src/components/Card/Card.vue';

import { showMessage } from 'src/Elements/ShowMessage';

export default {
    components: {
        Counter,
        Card
    },

    setup() {
    return{

        showMessage
    }
    },
}
</script>

<template>
    <div class="page PAGE___INNER...">
        <div>ABOUT</div>

        <el-button @click="showMessage({type: 'error', message: 'LOLOLOLOL', title: 'POPO'})">NOTIFY-CUSTOM</el-button>

        <router-link to="/">
            to HOME
        </router-link>
    </div>
</template>
