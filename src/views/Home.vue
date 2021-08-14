<template>
  <ul class="main-list">
    <li><a href="#">今日</a></li>
    <li><a href="#">早盘</a></li>
    <li><a href="#">滚球</a></li>
    <li><a href="#">串关</a></li>
  </ul>
  <DateList />
  <div class="banner">
    <img src="@/assets/imgs/banner.png" alt="banner" />
  </div>
  <ul class="anchor">
    <li><img src="@/assets/imgs/anchor.png" alt="anchor" />在现主播</li>
    <li>更多<img src="@/assets/imgs/zq_down.png" alt="arrow" /></li>
  </ul>
  <LiveAnchor />
  <CompetitionSystem />
</template>

<script>
import DateList from '@/components/DateList.vue';
import LiveAnchor from '@/components/LiveAnchor.vue';
import CompetitionSystem from '@/components/CompetitionSystem.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    DateList,
    LiveAnchor,
    CompetitionSystem,
  },
};
</script>

<style scoped lang="scss">
.main-list {
  font-family: PingFang-SC;
  background-color: #f5f6fa;
  display: flex;
  padding: 20px 55px;
  justify-content: space-between;
  margin-bottom: 20px;
  a {
    font-size: 24px;
    color: rgb(64, 70, 86);
    &:hover {
      transition: 0.5s;
      color: rgb(164, 169, 180);
    }
  }
}

.banner {
  text-align: center;
  margin-bottom: 10px;
}

.anchor {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #efefef;
  padding-bottom: 8px;
  margin: 0 20px;
  font-size: 22px;
  font-family: PingFang-SC;
  li {
    display: flex;
    align-items: center;
    &:last-child {
      cursor: pointer;
      color: rgb(164, 169, 180);
      &:hover {
        color: rgb(64, 70, 86);
      }
      img {
        padding-left: 10px;
      }
    }
    &:first-child {
      color: rgb(64, 70, 86);
      img {
        padding-right: 10px;
      }
    }
  }
}
</style>
