<script setup lang="ts">
const { handleScroll } = useScroll();

onMounted(() => {
  handleScroll();
});
</script>

<template>
  <header id="header" class="w-full h-14 fixed top-0 left-0 bg-white z-50 transition-top duration-500 ease-in-out">
    <div class="max-w-[1920px] h-14 my-0 mx-auto flex justify-between items-center bg-white">
      <header-toggle />
      <header-logo />
      <header-navbar />
      <header-actions />
    </div>
  </header>
</template>