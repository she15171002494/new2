<template>
  <div class="hm-header">
    <div class="left">
      <i class="iconfont iconjiantou2"></i>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.hm-header {
  height: 30px;
  border-bottom: 3px solid red;
  background-color: green;
  color: #fff;
  font-size: 20px;
  font-family: '宋体';

  display: flex;
  text-align: center;
  align-items: center;
  .left,
  .right {
    width: 30px;
  }
  .center {
    flex: 1;
    font-weight: 700;
  }
}
</style>
