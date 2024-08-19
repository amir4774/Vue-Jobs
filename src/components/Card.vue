<script setup lang="ts">
defineProps<{
  bg: string;
}>();
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
