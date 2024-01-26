<script setup>
const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Best Sellers',
    href: '/bestsellers',
  },
  {
    name: 'Suitcases',
    href: '/suitcases',
  },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in navLinks" :key="link.name">
        <nuxt-link :to="link.href">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Aquí puedes agregar estilos específicos para tu navbar */
</style>
