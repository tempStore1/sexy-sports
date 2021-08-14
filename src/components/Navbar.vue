<template>
  <header>
    <img alt="logo" src="@/assets/imgs/logo.png" />
    <div class="content">
      <p><span>¥</span>89963.58</p>
      <img class="loading" alt="loading" src="@/assets/imgs/az239-slldz.png" />
      <img alt="box" src="@/assets/imgs/box.png" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .content {
    display: flex;
    align-items: center;
    p {
      font-family: DINPro-Bold;
      font-size: 30px;
      color: rgb(79, 130, 244);
      span {
        margin-right: 10px;
      }
    }
    .loading {
      width: 20px;
      height: 20px;
      margin: 0 45px 0 20px;
    }
  }
}
</style>
