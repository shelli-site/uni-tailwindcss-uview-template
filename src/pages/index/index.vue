<template>
  <view class="flex flex-col items-center px-4 pt-10 h-[100%]">
    <u-notify ref="uNotify" show/>
    <u-alert type="error" class="mb-4" closable show-icon effect="dark"
             title="当某个页面需要向用户显示警告的信息时。"
             description="非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。"/>
    <u-button type="primary" class="mb-2" @click="showNotify">消息提示</u-button>
    <u-button type="primary" class="" @click="pageLoad">页面加载</u-button>
    <u-loading-page loading-text="加载中" :loading="pageLoading"/>
    <view class="w-40 h-10 bg-error text-main leading-10 text-center mt-2 text-[32rpx]">
      text-main/bg-error
    </view>
    <ul class="layout-col-center">
      <li class="my-2 px-4 border border-solid">1</li>
      <li class="my-2 px-4 border border-solid border-primary">2</li>
      <li class="my-2 px-4 border border-solid border-success">3</li>
    </ul>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pageLoading: false
    };
  },
  onLoad() {
    console.log(this.$store)
  },
  methods: {
    showNotify() {
      this.$refs.uNotify.show({message: '用于页面顶部向下滑出一个提示，尔后自动收起的场景'})
    },
    pageLoad() {
      this.pageLoading = true
      setTimeout(() => {
        this.pageLoading = false
      }, 600)
    }
  },
}
</script>

<style>
</style>
