<template>
  <footer>
    <ul class="list">
      <li>
        <RouterLink
          to="/"
          :class="[$route.fullPath === '/' ? 'target' : 'not-target']"
        >
          <div><img src="@/assets/imgs/home.png" alt="home" /></div>
          大厅
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/match"
          :class="[$route.fullPath === '/match' ? 'target' : 'not-target']"
        >
          <div><img src="@/assets/imgs/match.png" alt="match" /></div>
          主播赛事
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/ranking"
          :class="[$route.fullPath === '/ranking' ? 'target' : 'not-target']"
        >
          <div><img src="@/assets/imgs/ranking.png" alt="ranking" /></div>
          排行
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/list"
          :class="[$route.fullPath === '/list' ? 'target' : 'not-target']"
        >
          <div><img src="@/assets/imgs/list.png" alt="list" /></div>
          投注纪录
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/user"
          :class="[$route.fullPath === '/user' ? 'target' : 'not-target']"
        >
          <div><img src="@/assets/imgs/user.png" alt="user" /></div>
          我的
        </RouterLink>
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: fixed;
  bottom: 0;
  width: 750px;
  z-index: 1;
}

.list {
  display: flex;
  justify-content: space-around;
  padding: 16px 0;
  font-family: PingFang-SC;
  font-size: 20px;
  border-top: 2px solid white;
  border-radius: 40px;
  box-shadow: 0 -6px 5px -5px #c9c8c8;
  background-color: white;
  li {
    text-align: center;
  }
  img {
    margin-bottom: 10px;
  }
}

.target {
  color: rgb(79, 130, 244);
}

.not-target {
  color: rgb(183, 183, 183);
}
</style>
