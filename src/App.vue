<script>
export default {
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import "style/index";
@import "tailwindcss/base";
@import "tailwindcss/utilities";
@import "@/uni_modules/uview-ui/index.scss";
</style>
