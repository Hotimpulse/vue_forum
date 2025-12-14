<script setup lang="ts">
import sourceData from '@/data.json'

type TForum = (typeof sourceData.forums)[number]

const props = withDefaults(
  defineProps<{
    forums: TForum[]
    title: string
    categoryId?: string
  }>(),
  { title: 'Forums' },
)

function getThreadsText(forum: TForum) {
  return forum.threads?.length ? (forum.threads?.length > 1 ? 'threads' : 'thread') : 'no threads'
}
</script>

<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link v-if="categoryId" :to="{ name: 'Category', params: { id: categoryId } }">{{
          title
        }}</router-link>
        <span v-else>{{ title }}</span>
      </h2>

      <div class="forum-listing" v-for="forum in props.forums" :key="forum.id">
        <div class="forum-details">
          <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="text-xlarge">{{
            forum.name
          }}</router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{ getThreadsText(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
