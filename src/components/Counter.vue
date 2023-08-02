<script lang="ts" >
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'

import { usePostsStore } from 'src/store/postsStore';

import { useSettingsStore } from 'src/store/settingsStore';
export default {
  props: {
    msg: {
      type: String,
      default: "sranye"
    }
  },
  setup(props) {

    const settingsStore = useSettingsStore();
    const postsStore = usePostsStore();

    const { mode, modeMessage } = storeToRefs(settingsStore);
    const { posts } = storeToRefs(postsStore);

    const count = ref(0)

    const computedMessage = computed(() => props.msg + count.value + " vot-takoe computed message")

    const addOne = () => {
      count.value++
    };

    return {
      count,
      mode,
      modeMessage,

      posts,

      computedMessage,

      addOne,
    }
  }

}

</script>

<template>
  <div>
    <h2>{{ msg }}</h2>

    <button @click="addOne">ADD</button>
    <div>{{ count }}</div>

    <div>{{ computedMessage }}</div>



    <br />
    <h2>
      {{ mode }}
    </h2>

    <h3>
      {{ modeMessage }}
    </h3>

    <div>
      <ol>
        <li v-for="item in posts" :key="item.id">
          {{ item?.id }} {{ item?.title }}
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
