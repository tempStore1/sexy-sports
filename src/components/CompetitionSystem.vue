<template>
  <ul class="round">
    <li>
      <div class="title" @click="toggle(1)">
        美军冠军联赛<img
          :src="
            require(`@/assets/imgs/zq_${
              toggleFold['1'] ? 'closure' : 'down'
            }.png`)
          "
          alt="arrow"
        />
      </div>
      <div
        class="content"
        :class="toggleFold['1'] ? 'active-closure' : 'active-open'"
      >
        美军冠军联赛data
      </div>
    </li>
    <li>
      <div class="data" @click="toggle(2)">
        <div><img src="@/assets/imgs/star.jpg" alt="arrow" /> 上半场 02:23</div>
        <div>
          <span>55+</span
          ><img
            :src="
              require(`@/assets/imgs/zq_${
                toggleFold['2'] ? 'closure' : 'down'
              }.png`)
            "
            alt="arrow"
          />
        </div>
      </div>
      <img
        v-show="!toggleFold['2']"
        class="arrow-double-first-half"
        src="@/assets/imgs/zq_double.png"
        alt="arrow"
      />
      <div
        class="main"
        :class="toggleFold['2'] ? 'active-closure' : 'active-open'"
      >
        <div class="content">
          <div class="total-team">
            <div class="team">
              <img src="@/assets/imgs/shield1.png" alt="shield" />
              <div class="text">亚特兰大联<span>2</span></div>
            </div>
            <div class="team">
              <img src="@/assets/imgs/shield2.png" alt="shield" />
              <div class="text">莫塔瓜<span>0</span></div>
            </div>
          </div>
          <div class="imgs">
            <img src="@/assets/imgs/zq_cartoon.png" alt="cartoon" />
            <img src="@/assets/imgs/video.png" alt="video" />
          </div>
        </div>
        <div>
          <Fraction />
        </div>
      </div>
    </li>
    <li>
      <div class="data" @click="toggle(3)">
        <div><img src="@/assets/imgs/star.jpg" alt="arrow" /> 下半场 02:23</div>
        <div>
          <span>55+</span
          ><img
            :src="
              require(`@/assets/imgs/zq_${
                toggleFold['3'] ? 'closure' : 'down'
              }.png`)
            "
            alt="arrow"
          />
        </div>
      </div>
      <img
        v-show="!toggleFold['3']"
        class="arrow-double-second-half"
        src="@/assets/imgs/zq_double.png"
        alt="arrow"
      />
      <div
        class="round-live"
        :class="toggleFold['3'] ? 'active-closure' : 'active-open-live'"
      >
        <RoundLive :img="live" />
      </div>
    </li>
    <li>
      <div class="data" @click="toggle(4)">
        <div><img src="@/assets/imgs/star.jpg" alt="arrow" /> 下半场 02:23</div>
        <div>
          <span>55+</span
          ><img
            :src="
              require(`@/assets/imgs/zq_${
                toggleFold['4'] ? 'closure' : 'down'
              }.png`)
            "
            alt="arrow"
          />
        </div>
      </div>
      <img
        v-show="!toggleFold['4']"
        class="arrow-double-second-half"
        src="@/assets/imgs/zq_double.png"
        alt="arrow"
      />
      <div
        class="round-live"
        :class="toggleFold['4'] ? 'active-closure' : 'active-open-live'"
      >
        <RoundLive :img="sound" />
      </div>
    </li>
  </ul>
</template>

<script>
import Fraction from '@/components/Fraction.vue';
import RoundLive from '@/components/RoundLive.vue';

export default {
  data() {
    return {
      live: 'live',
      sound: 'live-sound',
      toggleFold: {
        1: true,
        2: false,
        3: false,
        4: false,
      },
    };
  },
  components: {
    Fraction,
    RoundLive,
  },
  methods: {
    toggle(num) {
      this.toggleFold[num] = !this.toggleFold[num];
    },
  },
};
</script>

<style scoped lang="scss">
.round {
  padding: 0 20px;
  margin-bottom: 115px;
  border-bottom: 6px solid #f8dade;
  li {
    position: relative;
    font-family: PingFang-SC;
    margin-bottom: 10px;
    &:first-child {
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 30px;
        color: rgb(64, 70, 86);
        cursor: pointer;
      }
      .content {
        height: 320px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &:nth-child(2) {
      .total-team {
        margin-top: 32px;
      }
      .main {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }
      .content {
        .imgs {
          margin-top: 120px;
        }
        .team {
          display: flex;
          align-items: center;
          font-size: 24px;
          color: rgb(61, 63, 71);
          margin-bottom: 32px;
        }
        .text {
          width: 160px;
          display: flex;
          justify-content: space-between;
        }
        span {
          position: relative;
          bottom: -5px;
          color: rgb(79, 130, 244);
        }
        img {
          margin-right: 16px;
        }
      }
    }
  }
  .arrow-double-first-half {
    position: absolute;
    z-index: 1;
    right: -10px;
    top: 225px;
  }
  .arrow-double-second-half {
    position: absolute;
    z-index: 1;
    right: -10px;
    top: 285px;
  }
}

.fa-caret-up {
  position: absolute;
  left: 30px;
}

.round-live {
  overflow: hidden;
}

.data {
  padding-top: 12px;
  font-size: 22px;
  color: rgb(126, 137, 166);
  font-family: PingFang-SC;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 2px solid #efefef;
  border-top: 2px solid #efefef;
  cursor: pointer;
  span {
    margin-right: 12px;
  }
}

.active-closure {
  transition: 0.5s;
  height: 0 !important;
}

.active-open {
  transition: 0.5s;
  height: 320px !important;
}

.active-open-live {
  transition: 0.5s;
  height: 390px !important;
}
</style>
