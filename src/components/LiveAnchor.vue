<template>
  <Swiper :slidesPerView="5.4" :spaceBetween="38" class="live-anchor">
    <SwiperSlide v-for="item in 10" :key="item">
      <span class="live">{{ item === 1 ? 'Living' : '直播中' }}</span>
      <span class="name">KIMI</span>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';

export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped lang="scss">
.live-anchor {
  padding: 10px 0 0 20px;
  height: 135px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 6px solid #dbebfd;
  .swiper-slide {
    width: 95px !important;
    height: 95px;
    cursor: pointer;
    border: 4px solid #ff008a;
    background-image: url('~@/assets/imgs/banner.png');
    border-radius: 999em;
    position: relative;
  }
  .live {
    font-family: PingFang-SC;
    color: rgb(255, 255, 255);
    font-size: 14px;
    background-color: #ff008a;
    padding: 2px 4px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 8px;
    position: absolute;
    bottom: -10px;
    left: 20px;
    z-index: 999;
  }
  .name {
    position: absolute;
    bottom: -35px;
    left: 25px;
    z-index: 999;
    font-size: 20px;
    font-family: PingFang-SC;
  }
}
</style>
