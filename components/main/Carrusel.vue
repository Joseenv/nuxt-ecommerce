<script setup lang="ts">
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  const { slidesList } = useSlider();
</script>

<template>
  <section class="w-full my-16 px-6 text-center">
    <div class="w-full">
      <h2 class="font-replica text-sm md:text-base xl:text-xl">HOT OFF THE PRESS</h2>
      <Swiper
        :modules="[SwiperPagination, SwiperNavigation, SwiperAutoplay]"
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
        }"
        :pagination="{
          el: '#bullets',
          clickable: true,
          bulletElement: 'button'
        }"
      >
        <SwiperSlide v-for="({review, image}, index) in slidesList" :key="index">
          <div class="h-full flex flex-col justify-between cursor-pointer">
            <div class="w-[342px] h-[335px] my-8 flex justify-center items-center md:w-[704px] md:h-[184px] xl:w-[960px] xl:h-[324px]">
              <p class="text-center xl:my-11">
                <q class="font-lyon text-4xl xl:text-[56px] xl:leading-[60px]">{{ review }}</q>
              </p>
            </div>
            <div class="flex justify-center items-center">
              <img class="w-[120px] h-auto flex justify-center items-center" :src="image.src" :alt="image.alt">
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div id="bullets" class="w-full flex justify-center items-center gap-2 my-10 xl:my-16">
        <button 
          v-for="(slide, index) in slidesList" :key="index" 
        >
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;
  height: 100%;
  
  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border: 2px solid black;
}

.swiper-pagination-bullet-active {
  width: 10px;
  height: 10px;
  /* border: 2px solid black; */
  border-radius: 100%;
  background-color: black;
  margin: 0 4px;
}
</style>