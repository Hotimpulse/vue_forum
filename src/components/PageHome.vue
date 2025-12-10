<script setup lang="ts">
import sourceData from '../data.json'
import { ref } from 'vue'

const threads = ref(sourceData.threads)
const users = ref(sourceData.users)
const posts = ref(sourceData.posts)

function postById(postId: string) {
  return posts.value.find((p) => p.id === postId)
}
function userById(userId: string) {
  return users.value.find((u) => u.id === userId)
}
</script>

<template>
  <h1>Page Home</h1>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ userById(postById(postId)?.userId)?.name }}</p>
      <p>{{ postById(postId)?.text }}</p>
    </div>
  </div>
</template>

<style scoped></style>
