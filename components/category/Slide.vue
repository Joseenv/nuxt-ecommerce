<template>
  <article class="pt-8 group">
    <slot name="title"></slot>
    <slot name="image"></slot>
    <div class="flex flex-col pt-6 gap-4">
      <slot name="action"></slot>
      <slot name="description"></slot>
    </div>
  </article>
</template>