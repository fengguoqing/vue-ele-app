<template>
  <div id="app">
    <div class="header">
      <v-header :seller="seller"></v-header>
    </div>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "_c/header/header";
const ERR_OK = 0;
export default {
  components: {
    "v-header": Header
  },
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.post("/api/seller").then(res => {
      if (res.data.errno === ERR_OK) {
        this.seller = res.data.data;
      }
    });
  },
  methods: {}
};
</script>
<style lang="less">
@import "../static/css/reset.css";
@import "./common/less/index.less";
.tab {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  .border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    flex: 1;
    text-align: center;
    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.router-link-active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
