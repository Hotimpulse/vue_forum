<script setup lang="ts">
import { useRoute } from 'vue-router'
import sourceData from '@/data.json'
import { computed, ref } from 'vue'

const threads = ref(sourceData.threads)
const users = ref(sourceData.users)
const posts = ref(sourceData.posts)

const { params } = useRoute()

function postById(postId: string) {
  return posts.value.find((p) => p.id === postId)
}
function userById(userId: string) {
  return users.value.find((u) => u.id === userId)
}

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === params.id)
})
</script>

<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread?.title }}</h1>

    <div class="post-list">
      <div class="post" v-for="postId in thread?.posts" :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{ userById(postById(postId)?.userId)?.name }}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId)?.userId)?.avatar" alt="" />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId)?.text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ postById(postId)?.publishedAt }}
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="col-full text-center">
      <h1>This thread does not exist!</h1>
      <router-link :to="{ name: 'Home' }">Read some cool threads</router-link>
    </div>
  </div>
</template>

<style scoped></style>
