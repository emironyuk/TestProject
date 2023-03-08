<template>
  <h1>Contacts</h1>
  <div class="message">
    <textarea v-model="text"/>
    <button @click="sendMessage">Send</button>
  </div>
  <NuxtLink to="/">To Main</NuxtLink>
  <aside>
    bla-bla-bla
  </aside>
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

<style scoped lang="scss">
@import "assets/style/variables";
 textarea{
   background-color: var(--background-color);
   width: calc(100% - 6px);
   max-width: 100%;
   height: 150px;
 }
.message{
  text-align: right;
}
aside{
  display: none;
  width: 200px;
  height: 200px;
  background-color: var(--background-color);
  position: fixed;
  top: 20px;
  right: 0;
}
@media(min-width: 1200px) {
  aside{
    display: block;
  }
}

</style>