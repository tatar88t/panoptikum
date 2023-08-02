
 
<script lang="ts">
import Counter from 'src/components/Counter.vue';
import Card from 'src/components/Card/Card.vue';


export default {
    components: {
        Counter,
        Card
    },

    setup() {

    },
}
</script>

<template>
    <div class="page PAGE___INNER...">
        <div>HOME</div>

        <Counter msg="composition api" />

        <Card />
        <router-link to="/settings">
            to settings
        </router-link>

        <router-link to="/about">
            to ABOUT
        </router-link>
    </div>
</template>
