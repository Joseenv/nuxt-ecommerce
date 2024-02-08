<script setup>
const navLinks = [
  {
    name: 'BEST SELLERS',
    href: '/bestsellers',
  },
  {
    name: 'SUITCASES',
    href: '/suitcases',
  },
  {
    name: 'BAGS',
    href: '/bags',
  },
  {
    name: 'ACCESSORIES',
    href: '/accessories',
  },
  {
    name: 'SALE',
    href: '/sale',
  }
]
</script>

<template>
  <nav class="hidden lg:block">
    <ul class="flex gap-6">
      <li
        class="last:text-red-600" 
        v-for="link in navLinks" 
        :key="link.name"
      >
        <nuxt-link 
          class="font-graphikMedium font-medium text-xs tracking-wider"
          :to="link.href"
        >
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
