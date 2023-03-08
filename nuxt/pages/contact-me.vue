<template>
  <h1>Contacts</h1>
  <textarea v-model="text"/>
  <button @click="sendMessage">Send</button>
  <NuxtLink to="/">To Main</NuxtLink>
</template>

<script setup lang="ts">
const text = ref('');
const sendMessage = async () => {
  await useFetch('/api/sendMessage', {
    method: 'POST',
    body: {text: text.value}
  });
}
</script>

<style scoped>

</style>