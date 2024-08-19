<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

defineProps<{
  link: string;
  text: string;
}>();

const isActiveLink = (routPath: string) => {
  const route = useRoute();
  return route.path === routPath;
};
</script>

<template>
  <RouterLink
    :to="link"
    :class="[
      isActiveLink(link)
        ? 'bg-green-900'
        : 'hover:bg-gray-900 hover:text-white',
      'text-white',
      'px-3',
      'py-2',
      'rounded-md',
    ]"
    >{{ text }}</RouterLink
  >
</template>
