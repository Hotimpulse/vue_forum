<script setup lang="ts">
import { useRoute } from 'vue-router'
import sourceData from '@/data.json'
import { computed, ref } from 'vue'
import PostList from '@/components/PostList.vue'

const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)

const route = useRoute()

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === route.params.id)
})
const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === thread.value?.id)
})
</script>

<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread?.title }}</h1>

    <PostList :posts="threadPosts" />
  </div>
  <div v-else>
    <div class="col-full text-center">
      <h1>This thread does not exist!</h1>
      <router-link :to="{ name: 'Home' }">Read some cool threads</router-link>
    </div>
  </div>
</template>

<style scoped></style>
