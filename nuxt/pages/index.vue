<template>
  <div>{{test}}</div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const test = ref(123);
nuxtApp.hook('page:finish', () => {

  setTimeout(() => {test.value = 354}, 2000)

});
</script>

<style scoped>

</style>