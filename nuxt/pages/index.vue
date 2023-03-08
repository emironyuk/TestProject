<template>
  <div>{{test}}</div>
  <NuxtLink to="/contact-me">To Contact Me</NuxtLink>
</template>

<script setup lang="ts">
import {useNuxtApp} from "#app";

const nuxtApp = useNuxtApp();
const test = ref('123');

setTimeout(() => {
  test.value = '4 8 15 16 23 42';
}, 2000)

</script>

<style scoped>

</style>