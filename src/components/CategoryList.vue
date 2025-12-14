<script setup lang="ts">
import sourceData from '@/data.json'
import ForumList from './ForumList.vue'

type TCategory = (typeof sourceData.categories)[number]

defineProps<{
  categories: TCategory[]
}>()

function getForumsForCategory(category: TCategory) {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id)
}
</script>

<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :category-name="category.name"
  />
</template>

<style scoped></style>
