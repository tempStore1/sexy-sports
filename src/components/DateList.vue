<template>
  <!-- 这里的写法串接API写出来的逻辑会比较合理 -->
  <Swiper :slidesPerView="5.3" :spaceBetween="10" class="date-list">
    <SwiperSlide v-for="(item, index) in 7" :key="item">
      <div class="content" @click="target = index">
        <div>
          <a
            href="#"
            :class="index === target ? ['active-color', 'active-border'] : ''"
            >{{
              index === 0
                ? '今日'
                : new Date(new Date().getTime() + millisecond * index)
                    .toLocaleString()
                    .split(' ')[0]
                    .replace(`${new Date().getFullYear()}/`, '')
            }}</a
          >
        </div>
        <div :class="{ frame: index === target }"></div>
        <div class="img-border">
          <img
            alt="equipment"
            :src="require(`@/assets/imgs/zq${item > 6 ? 1 : item}.png`)"
          />
        </div>
        <p :class="{ 'active-color': index === target }">
          {{
            item === 1
              ? '手球'
              : item === 2
              ? '足球'
              : item === 3
              ? '篮球'
              : item === 4
              ? '排球'
              : item === 5
              ? '兵乓球'
              : item === 6
              ? '网球'
              : '手球'
          }}
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';

export default {
  data() {
    return {
      target: '',
      millisecond: 86400000,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.target = 1;
  },
};
</script>

<style scoped lang="scss">
.date-list {
  display: flex;
  padding: 0 0 10px 0px;
  position: relative;
  .content {
    cursor: pointer;
    height: 130px;
  }
  .swiper-slide {
    display: flex;
    flex-flow: column;
    margin: 0 !important;
    &:last-child {
      margin: 0;
    }
    &:first-child {
      width: 194px !important;
      .img-border {
        padding: 0 90px 0 60px;
      }
      p,
      a {
        font-family: PingFang-SC;
        margin: 0 60px;
        color: rgb(164, 169, 180);
      }
      .frame {
        left: 30px;
      }
    }
    a {
      white-space: nowrap;
      font-family: PingFang-SC;
      font-size: 22px;
      color: rgb(164, 169, 180);
      padding-bottom: 4px;
      position: relative;
      bottom: -2px;
    }
    p {
      font-family: PingFang-SC;
      margin-top: 10px !important;
      padding-left: 3px;
      color: rgb(164, 169, 180);
    }
    .frame {
      background-image: url('~@/assets/imgs/border.png');
      position: absolute;
      bottom: -4px;
      left: -30px;
      z-index: -1;
      width: 100px;
      height: 100px;
    }
    .img-border {
      margin-top: 10px;
      border-top: 2px solid #f5f6fa;
    }
    img {
      width: 40px;
      height: 40px;
      padding-top: 15px;
    }
  }
}

.active-border {
  border-bottom: 2px solid rgb(64, 70, 86);
}

.active-color {
  color: rgb(64, 70, 86) !important;
}
</style>
