<script setup lang="ts">
interface Item {
  imageBase: string;
  imageResponsive: string;
  sizes: string;
  description: string;
  name: string;
  price: number;
}

const itemsList: Item[] = [
  {
    imageBase: 'https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=3840',
    imageResponsive: 'https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=256 256w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=384 384w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=640 640w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=750 750w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=828 828w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=1080 1080w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=1200 1200w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=1920 1920w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=2048 2048w, https://images.ctfassets.net/635jp660g7e4/3Zu0ctpRTyEYu0iiqeLNqB/8d6df41ce28337411bdeb74bd011f43e/PDP_PC_Matte_Coast_BCO_PLP_01.jpg?fm=webp&q=75&w=3840 3840w',
    sizes: '(min-width: 1024px) 24vw, 50vw)',
    description: 'A Coast blue Away Bigger Carry-On suitcase with wheels on a white surface.',
    name: 'The Bigger Carry-On',
    price: 295,
  },
  {
    imageBase: 'https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=3840',
    imageResponsive: 'https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=256 256w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=384 384w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=640 640w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=750 750w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=828 828w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=1080 1080w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=1200 1200w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=1920 1920w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=2048 2048w, https://images.ctfassets.net/635jp660g7e4/2hYuZ1cdPjCTpUgvsVkrkB/edb6e5250b712e4aec32867d3c4d1f86/PDP_EverywhereBag_Medium_Navy_PLP_01.jpg?fm=webp&q=75&w=3840 3840w',
    sizes: '(min-width: 1024px) 24vw, 50vw)',
    description: 'A Navy Away Everywhere Bag with a shoulder strap and a top handle.',
    name: 'The Medium Everywhere Bag',
    price: 225,
  },
  {
    imageBase: 'https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=3840',
    imageResponsive: 'https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=256 256w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=384 384w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=640 640w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=750 750w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=828 828w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=1080 1080w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=1200 1200w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=1920 1920w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=2048 2048w, https://images.ctfassets.net/635jp660g7e4/2aUDAHdLBf9lv9JE9nqA6E/a3aea2355bea42686f052a30e4169b39/PDP_Quilted_EWB_Black_PLP_01.jpg?fm=webp&q=75&w=3840 3840w',
    sizes: '(min-width: 1024px) 24vw, 50vw)',
    description: 'A Black Away Everywhere Bag with a shoulder strap and a top handle.',
    name: 'The Quilted Everywhere Bag',
    price: 225,
  },
  {
    imageBase: 'https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=3840',
    imageResponsive: 'https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=256 256w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=384 384w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=640 640w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=750 750w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=828 828w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=1080 1080w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=1200 1200w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=1920 1920w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=2048 2048w, https://images.ctfassets.net/635jp660g7e4/epao62Vmn19BrJsvCdsrD/44d09ce9c8b1217c333527d69d79d340/PDP_PC_Matte_Navy_Medium_PLP_01.jpg?fm=webp&q=75&w=3840 3840w',
    sizes: '(min-width: 1024px) 24vw, 50vw)',
    description: 'A Navy Away Medium suitcase with wheels on a white surface.',
    name: 'The Medium',
    price: 345,
  }
]
</script>

<template>
  <section class="max-w-[1920px] my-0 mx-auto px-12 pb-14">
    <h2 class="text-center py-10">
      <span class="font-lyonItalic italic text-[24px]">A few of our</span>
      <br>
      <span class="font-graphik text-[56px]">FAVORITES</span>
    </h2>
    <div class="w-full grid grid-cols-4 justify-stretch">
      <favorite-item
        v-for="{imageBase, imageResponsive, sizes, description, name, price} in itemsList"
        :key="name"
        :imageBase="imageBase"
        :imageResponsive="imageResponsive"
        :sizes="sizes"
        :description="description"
        :name="name"
        :price="price"
      />
    </div>
  </section>
</template>