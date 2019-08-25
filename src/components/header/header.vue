<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          width="64"
          height="64"
          :src="seller.avatar"
        >
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div
          v-if="seller.supports"
          class="support"
        >
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="less">
.header {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.5);
    filter: blur(5px);
  }
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    .avatar {
      display: inline-block;
    }
    .content {
      display: inline-block;
    }
  }
}
</style>
