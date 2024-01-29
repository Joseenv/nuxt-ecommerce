<script setup lang="ts">
const { handleScroll } = useScroll();

onMounted(() => {
  handleScroll();
});
</script>

<template>
  <header id="header" class="fixed top-0 left-0 h-14 w-full flex justify-between items-center px-28 bg-white z-50 transition-top duration-500 ease-in-out">
      <header-logo />
      <header-navbar />
      <header-actions />
  </header>
</template>