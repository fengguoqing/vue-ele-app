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
          <span
            class="icon"
            :class="supportClass"
          ></span>
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
  },
  computed: {
    supportClass() {
      const classMap = [
        "decrease",
        "discount",
        "special",
        "invoice",
        "guarantee"
      ];
      const supports = this.seller.supports;
      if (supports) {
        return classMap[supports[0].type];
      }
      return "";
    }
  }
};
</script>

<style lang="less">
@import "../../common/less/mixin.less";
.header {
  position: relative;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.5);
    filter: blur(2px);
    z-index: -999;
  }
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    .avatar {
      display: inline-block;
      img {
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          .bg-image("../../../static/img/brand");
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .name {
          font-weight: bold;
          font-size: 16px;
          line-height: 18px;
          margin-left: 6px;
        }
      }
      .description {
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 12px;
      }
      .support {
        margin-bottom: 2px;
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            .bg-image("../../../static/img/decrease_1");
          }
          &.discount {
            .bg-image("../../../static/img/discount_1");
          }
          &.guarantee {
            .bg-image("../../../static/img/guarantee_1");
          }
          &.invoice {
            .bg-image("../../../static/img/invoice_1");
          }
          &.special {
            .bg-image("../../../static/img/special_1");
          }
        }
        .text {
          margin-left: 4px;
          font-size: 10px;
          line-height: 12px;
        }
      }
    }
  }
}
</style>
