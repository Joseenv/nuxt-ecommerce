<template>
  <nav class="pr-6">
    <ul class="flex items-center gap-3.5 lg:gap-6">
      <li class="hidden lg:block">
        <nuxt-link
          class="font-graphikMedium font-medium text-xs"
          to="/login"
        >
          LOG IN
        </nuxt-link>
      </li>
      <li>
        <icon-search />
      </li>
      <li>
        <icon-bag />
      </li>
    </ul>
  </nav>
</template>