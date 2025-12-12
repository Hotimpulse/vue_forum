<script setup lang="ts">
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

const props = defineProps<{
  timestamp: number
}>()

function timeForHumans() {
  return dayjs.unix(props.timestamp).fromNow()
}

function humanFriendlyDate() {
  return dayjs.unix(props.timestamp).format('LLLL')
}
</script>

<template>
  <span :title="humanFriendlyDate()">
    {{ timeForHumans() }}
  </span>
</template>

<style scoped></style>
