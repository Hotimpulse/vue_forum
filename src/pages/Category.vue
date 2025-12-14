<script setup lang="ts">
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'
import { computed } from 'vue'

const props = defineProps<{
  id: string
}>()

type TCategory = (typeof sourceData.categories)[number]

const category = computed(() => {
  return sourceData.categories.find((category) => category.id === props.id)
})

function getForumsForCategory(category: TCategory) {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id)
}
</script>

<template>
  <h1>{{ category?.name }}</h1>
  <ForumList v-if="category" :title="category?.name" :forums="getForumsForCategory(category)" />
</template>

<style scoped></style>
