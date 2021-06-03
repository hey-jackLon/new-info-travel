<template>
  <div class="nav-bar">
    <!-- 导航栏 -->
    <div class="logo">四川交通出行</div>
    <dir class="nav-list">
      <ul>
        <li> <router-link to="/travelQuery">出行查询</router-link></li>
        <li><router-link to="/trafficTravel">交通旅游</router-link></li>
        <li><router-link to="/infoService">信息服务</router-link></li>
      </ul>
    </dir>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";
.nav-bar{
  height: $headerHeight;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-family: "NotoSansHans-Bold";
  min-width: 750px;
  box-shadow: 0px 0px 10px 0px rgba(42, 49, 65, 0.5);
  z-index: 100;
  position: relative;
}
.logo{
  background: linear-gradient(0deg, #004EFF 0%, #06B0FF 100%);
  font-size: 30px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-list{
  height: 100%;
  ul{
    display: flex;
    list-style: none;
    height: 100%;
    a{
      text-decoration: none;
      color: #333;
      display: block;
      height: 100%;
      line-height: $headerHeight;
      margin-right: 20px;
      font-size: 22px;
      padding:0 20px;
      box-sizing: border-box;
      border-bottom: 5px solid transparent;
      transition: border-bottom 0.8s ease, color 0.8s ease-out;
    }
  }
}
.router-link-active{
  color: $mainColor !important;
  border-bottom: 5px solid $mainColor !important;
}
</style>
