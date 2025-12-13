<script setup lang="ts">
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'

const forums = sourceData.forums
</script>

<template>
  <h1>Welcome to the Forum!</h1>
  <ForumList :forums="forums" />
</template>

<style scoped></style>
