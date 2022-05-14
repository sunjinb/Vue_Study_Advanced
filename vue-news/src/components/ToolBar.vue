<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Asks</router-link> |
    <router-link to="jobs">Jobs</router-link> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> /* 해당 컴포넌트에만 스타일 작성 */
.header {
  color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
.header .router-link-exact-active{    /* 활성화 상태 */
  color: #35495e;
}
.header a { /* 활성화 되지 않은 상태 */
  color: white;
}
</style>