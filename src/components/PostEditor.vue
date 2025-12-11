<script setup lang="ts">
import { ref } from 'vue'
import sourceData from '@/data.json'

const text = ref('')
type IPost = (typeof sourceData.posts)[number]

const emit = defineEmits<{
  (event: 'save', payload: { post: IPost }): void
}>()

function save() {
  const postId = 'gggg3' + Math.random() + Date.now()
  const post = {
    id: postId,
    text: text.value,
    publishedAt: Math.floor(Date.now() / 1000),
    userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1',
  } as IPost

  emit('save', { post })

  text.value = ''
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
