<script setup lang="ts">
import { useRoute } from 'vue-router'
import sourceData from '@/data.json'
import { computed, ref } from 'vue'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
type IPost = (typeof sourceData.posts)[number]
 
const route = useRoute()

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === route.params.id)
})
const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === thread.value?.id)
})

function addPost(eventData: { post: IPost }) {
  const post = {
    ...eventData.post,
    threadId: thread.value?.id,
  } as IPost

  posts.value.push(post)
  thread.value?.posts.push(post.id)
}
</script>

<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread?.title }}</h1>

    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost" />
  </div>
  <div v-else>
    <div class="col-full text-center">
      <h1>This thread does not exist!</h1>
      <router-link :to="{ name: 'Home' }">Read some cool threads</router-link>
    </div>
  </div>
</template>

<style scoped></style>
