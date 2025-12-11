<script setup lang="ts">
import sourceData from '@/data.json'
import { ref } from 'vue'

const users = ref(sourceData.users)

type IPost = (typeof sourceData.posts)[number]

const props = defineProps<{
  posts: IPost[]
}>()

function userById(userId: string) {
  return users.value.find((u) => u.id === userId)
}
</script>

<template>
  <div class="post-list">
    <div class="post" v-for="post in props.posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post?.userId)?.name }}</a>

        <a href="#">
          <img class="avatar-large" :src="userById(post?.userId)?.avatar" alt="" />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post?.text }}
          </p>
        </div>
      </div>

      <div class="post-date text-faded">
        {{ post?.publishedAt }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
