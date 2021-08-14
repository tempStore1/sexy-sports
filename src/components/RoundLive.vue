<template>
  <div>
    <ul class="round">
      <li><img src="@/assets/imgs/shield1.png" alt="shield" />亚特兰大联</li>
      <li class="number">2 - 0</li>
      <li>莫塔瓜<img src="@/assets/imgs/shield2.png" alt="shield" /></li>
    </ul>
    <div class="main">
      <div class="live">
        <div class="dynamic">
          <div class="line">
            <div class="line-dynamic-1"></div>
          </div>
          <div class="line">
            <div class="line-dynamic-2"></div>
          </div>
          <div class="line">
            <div class="line-dynamic-1"></div>
          </div>
          <div class="line">
            <div class="line-dynamic-2"></div>
          </div>
          <div class="line">
            <div class="line-dynamic-3"></div>
          </div>
        </div>
        <div class="name">
          <p>米儿</p>
          <div>
            <img :src="require(`@/assets/imgs/${image}.png`)" alt="live" />
          </div>
        </div>
        <button type="button">点击观看</button>
      </div>
      <div>
        <Fraction />
      </div>
    </div>
  </div>
</template>

<script>
import Fraction from '@/components/Fraction.vue';

export default {
  data() {
    return {
      image: this.img,
    };
  },
  props: {
    img: {
      typeof: String,
      require: true,
    },
  },
  components: {
    Fraction,
  },
};
</script>

<style scoped lang="scss">
.round {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px 0 75px;
  margin-top: 24px;
  li {
    display: flex;
    align-items: center;
    font-size: 20px;
    &:last-child {
      img {
        margin-left: 20px;
      }
    }
    &:first-child {
      img {
        margin-right: 20px;
      }
    }
  }
  .number {
    color: rgb(79, 130, 244);
    font-family: DINPro-Bold;
  }
}

.main {
  display: flex;
  .live {
    cursor: pointer;
    margin-top: 16px;
    background-image: url('~@/assets/imgs/live-woman.png');
    background-position: center;
    background-size: cover;
    background-color: #ffc4d6;
    width: 215px;
    height: 280px;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    position: relative;
    &:hover {
      button {
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.9);
        color: rgb(255, 255, 255);
      }
    }
    .name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2px 0 10px;
      font-size: 26px;
      color: rgb(255, 255, 255);
    }
    button {
      background-color: rgba(0, 0, 0, 0.8);
      color: rgb(144, 177, 255);
      font-size: 22px;
      border: 0;
      padding: 12px 0;
      font-family: PingFang-SC;
      cursor: pointer;
    }
  }
  .dynamic {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px 10px 0 0;
    display: flex;
    .line {
      width: 2px;
      height: 20px;
      background-color: #fd6887;
      margin-left: 2px;
    }
  }
}

.line-dynamic-1 {
  width: 2px;
  background-color: #ffc4d6;
  animation-name: line-1;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: 0.6s;
}

.line-dynamic-2 {
  width: 2px;
  background-color: #ffc4d6;
  animation-name: line-2;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: 0.4s;
}

.line-dynamic-3 {
  width: 2px;
  background-color: #ffc4d6;
  animation-name: line-3;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: 0.2s;
}

@keyframes line-1 {
  from {
    height: 0px;
  }
  to {
    height: 15px;
  }
}

@keyframes line-2 {
  from {
    height: 0px;
  }
  to {
    height: 10px;
  }
}

@keyframes line-3 {
  from {
    height: 0px;
  }
  to {
    height: 5px;
  }
}
</style>
