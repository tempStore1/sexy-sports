<template>
  <div class="fraction">
    <ul>
      <li>全场独赢</li>
      <li>
        主胜
        <div class="main-number">3.25</div>
      </li>
      <li>
        客胜
        <div class="main-number"><i class="fas fa-caret-up"></i>3.45</div>
      </li>
      <li>
        和局
        <div class="main-number"><i class="fas fa-caret-up"></i>2.25</div>
      </li>
    </ul>
    <ul>
      <li>全场让求</li>
      <li>
        -0.5/1
        <div class="result-number">1.94</div>
      </li>
      <li>
        -0.5/1
        <div class="result-number">1.94</div>
      </li>
    </ul>
    <ul>
      <li>全场大小</li>
      <li>
        -0.5/1
        <div class="result-number">1.94</div>
      </li>
      <li>
        -0.5/1
        <div class="result-number">1.94</div>
      </li>
    </ul>
  </div>
  <div class="pagination">
    <div class="long"></div>
    <div class="short"></div>
  </div>
</template>

<style lang="scss">
.fraction {
  display: flex;
  margin-top: 16px;
  ul {
    padding-left: 6px;
    &:first-child {
      li {
        padding: 6px 40px;
        font-size: 24px;
        font-family: PingFang-SC;
        &:nth-child(2) {
          .main-number {
            color: rgb(60, 70, 58);
          }
        }
        &:nth-child(3) {
          .main-number {
            color: #db6372;
            transform: translateX(-15px);
          }
        }
        &:nth-child(4) {
          .main-number {
            color: #69c969;
            transform: translateX(-15px);
          }
        }
      }
      .main-number {
        padding-top: 10px;
      }
    }
    li {
      padding: 20px 45px;
      background-color: #f7f8fc;
    }
  }
  li {
    color: rgb(126, 137, 166);
    margin-bottom: 6px;
    text-align: center;
    &:first-child {
      padding: 16px 35px !important;
      font-size: 22px !important;
      color: rgb(60, 70, 58);
    }
    &:nth-child(n + 2) {
      font-size: 22px;
      font-family: DINPro-Bold;
      .result-number {
        margin-top: 24px;
        color: rgb(60, 70, 58);
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .long {
    width: 20px;
    height: 6px;
    background-color: #bbc3e4;
    border-radius: 10px;
    margin-right: 4px;
  }
  .short {
    width: 10px;
    height: 6px;
    background-color: #eceef2;
    border-radius: 10px;
  }
}

.fa-caret-up {
  margin-right: 10px;
}
</style>
