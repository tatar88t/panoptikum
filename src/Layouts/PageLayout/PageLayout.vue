<script lang="ts" >
import './style.scss';
import {
    useRouter
  } from 'vue-router';
import PageFooter from 'src/components/PageFooter/PageFooter.vue';
import PageHeader from 'src/components/PageHeader/PageHeader.vue';
  

export default {
  components: { PageFooter, PageHeader },
    props: {
        msg: {
            type: String,
            default: "sranye"
        }
    },
    setup(props) {
const router = useRouter();
        console.log(props, 'PROPS')
console.log(router, 'ROUTER IN LAYOUT')
        return {



        }
    }

}

</script>

<template>
<div class="page-layout">
    <page-header />
    <div class="page-content">
    <router-view class="rootApp"></router-view>
    </div>
    <page-footer />
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>