<script setup lang="ts">
interface Props {
  imageBase: string,
  imageResponsive: string,
  action: string
}

const props = defineProps<Props>()
</script>

<template>
  <article class="w-full flex flex-col items-center group">
    <img class="w-full object-cover"
      :src="props.imageBase"
      :srcset="props.imageResponsive"
      decoding="async" data-nimg="responsive" sizes="(min-width: 1024px) 284px, 50vw">
    <div class="flex gap-3 items-center">
      <span class="font-graphikMedium text-sm tracking-wider lg:text-base">{{ props.action }}</span>
      <icon-arrow />
    </div>
  </article>
</template>