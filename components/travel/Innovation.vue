<script setup lang="ts">
interface Item {
  imageBase: string,
  imageResponsive: string,
  action: string
}

const itemsList: Item[] = [
  {
    imageBase: 'https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=3840',
    imageResponsive: 'https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=384 384w, https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=640 640w, https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=750 750w, https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=828 828w, https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=1080 1080w, https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=1200 1200w, https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=1920 1920w, https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=2048 2048w, https://images.ctfassets.net/635jp660g7e4/2FTZocrjjuHp4qeKIgW8uZ/0a4ff8e328a827aa5b7e39234c0a89d3/PDP_EverywhereBag_Medium_Navy_Cart.png?fm=webp&q=75&w=3840 3840w',
    action: 'BAGS'
  },
  {
    imageBase: 'https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=3840',
    imageResponsive: 'https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=384 384w, https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=640 640w, https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=750 750w, https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=828 828w, https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=1080 1080w, https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=1200 1200w, https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=1920 1920w, https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=2048 2048w, https://images.ctfassets.net/635jp660g7e4/7doTqu3wvmxykaeKds9TAG/9cd1067a8f365a9672d2659468ac5430/PDP_Flex_Coast_BCO_Cart.png?fm=webp&q=75&w=3840 3840w',
    action: 'SUITCASES'
  }
]
</script>

<template>
  <div class="w-full flex flex-col justify-between lg:flex-row">
    <img class="w-full object-cover"
      src="https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=3840"
      decoding="async" data-nimg="responsive"
      srcset="https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=384 384w, https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=640 640w, https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=750 750w, https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=828 828w, https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=1080 1080w, https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=1200 1200w, https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=1920 1920w, https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=2048 2048w, https://images.ctfassets.net/635jp660g7e4/49ZSUVXtG1wuaVJpAuEHUG/6e599e8c85417a5cfdfe8a9c5571423f/AA_Dakar_6L8A0804_Web_HP_1x1.jpg?fm=webp&q=75&w=3840 3840w"
      sizes="(min-width: 1024px) 50vw, 100vw" alt="">
    <div class="w-full flex justify-center items-center">
      <div class="max-w-[624px] p-12 flex flex-col justify-between items-start">
        <p class="font-replica text-sm tracking-wider">INNOVATION IN TRAVEL</p>
        <h2 class="font-lyon font-normal text-4xl leading-none -tracking-tight py-4 lg:text-[56px]">Keep it together—everywhere</h2>
        <p class="font-graphikLight text-sm lg:text-base">We took the “lug” out of luggage. With our bags that attach to our suitcases, you
          can easily roll all your
          belongings with one hand.</p>
        <div class="w-full flex justify-between">
          <travel-item v-for="{ imageBase, imageResponsive, action } in itemsList" :key="action" :imageBase="imageBase"
            :imageResponsive="imageResponsive" :action="action" />
        </div>
      </div>
    </div>
  </div>
</template>