<script lang="ts" >
import { computed } from 'vue';
import { storeToRefs } from 'pinia'
import { usePostsStore } from 'src/store/postsStore';
import './style.scss';

export default {
    props: {
        msg: {
            type: String,
            default: "sranye"
        }
    },
    setup(props) {

        const postsStore = usePostsStore();

        const { posts } = storeToRefs(postsStore);


        const postsCount = computed(() => "Количество постов:" + posts.value?.length || 0);


        return {

            posts,

            postsCount

        }
    }

}

</script>

<template>
    <div class="card">
        <div class="card-header">
            HEADER
        </div>
        <div class="card-content">
            <p>CARD-CONTENT HERE</p>
            <p>CARD-CONTENT HERE</p>
            <p>CARD-CONTENT HERE</p>
            <br />
            <b>{{ postsCount }}</b>
        </div>
        <div class="card-footer">
            CARD-FOOTER
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>