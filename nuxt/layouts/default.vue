<template>
  <div>
    <svg id="menu-icon" :class="{open:menuOpen}" @click = "changeMenuState">
      <use href="#svg-menu"/>
    </svg>
    <slot />
  </div>
  <svg class="hidden">
    <defs>
      <symbol id="svg-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></symbol>
    </defs>
  </svg>
  <Menu class="menu"/>
</template>

<script setup lang="ts">
  import Menu from "~/components/menu.vue";
  const menuOpen = ref(false);
  const changeMenuState = () => {
    menuOpen.value = !menuOpen.value;
  }
</script>

<style scoped lang="scss">

#menu-icon{
  position: fixed;
  top: 10px;
  right: calc(50vw + var(--nuxt-width) / 2 - 40px);
  width: 40px;
  height: 40px;
  @media(max-width: 800px) {
    left: 10px;
  };
  transition-duration: 500ms;
  &.open{
    transform:rotate(90deg);
  }
}
.menu{
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -250px;
  overflow: auto;
  background-color: var(--background-color);
}
@media(min-width: 1200px) {
 .menu{
   left: 0;
 }
  #menu-icon{
    display: none;
  }
}

</style>