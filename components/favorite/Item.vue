<script setup lang="ts">
interface Props {
  imageBase: string;
  imageResponsive: string;
  sizes: string;
  description: string;
  name: string;
  price: number;
}

const props = defineProps<Props>();
</script>

<template>
  <article class="w-full group flex flex-col gap-4 overflow-hidden hover">
    <div class="overflow-hidden">
      <img
        class="w-full object-cover group-hover:scale-[1.2] duration-500 ease-in-out" 
        :src="props.imageBase" 
        :srcset="props.imageResponsive"
        :sizes="props.sizes"
        :alt="props.description"
        decoding="async"
        data-nimg="responsive"
      >
    </div>
    <div class="font-graphik flex flex-col gap-2 mb-8 pl-4 lg:pl-0">
      <h4 class="text-sm lg:text-base">{{ props.name }}</h4>
      <span class="font-graphikMedium text-xs lg:text-sm">${{ props.price }}</span>
    </div>
  </article>
</template>