<script setup lang="ts">
import CategoryList from '@/components/CategoryList.vue'
import sourceData from '@/data.json'

const categories = sourceData.categories
</script>

<template>
  <h1>Welcome to the Forum!</h1>
  <CategoryList :categories="categories" />
</template>

<style scoped></style>
