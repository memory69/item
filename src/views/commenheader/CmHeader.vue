<template>
  <div class="cm-header">
    <!-- <form action="/"> -->
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    <!-- </form> -->
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'CmHeader',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
};
</script>

<style lang="scss" scoped>
.cm-header {
  width: 100%;
  //   height: 200px;
  // border: 1px solid red;
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
}
</style>
