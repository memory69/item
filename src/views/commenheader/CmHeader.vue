<template>
  <div class="cm-header">
    <!-- <form action="/"> -->
    <van-search v-model="value" show-action placeholder="请输入商品名称" @search="onSearch" @cancel="onCancel" />
    <!-- </form> -->
  </div>
</template>

<script>
import { Toast } from 'vant';
import { goodsList } from '../../network/request';
export default {
  name: 'CmHeader',
  data() {
    return {
      value: '',
      list: [],
      // currentList: [],
      // test: [
      //   {
      //     name: '音响',
      //   },
      //   {
      //     name: '电视',
      //   },
      //   {
      //     name: '洗衣机',
      //   },
      // ],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      // Toast('取消');
      this.$store.commit('setShow', true);
    },
  },
  created() {
    this.$store.commit('setShow', true);
  },
  watch: {
    value() {
      if (this.value == '') {
        this.$store.commit('setSearch', '');
        this.$store.commit('setShow', true);
      } else {
        goodsList({
          page: 0,
          limit: 0,
        }).then((res) => {
          // console.log(res.data.data);
          this.list = res.data.data.list;
        });
        // var test1 = this.test.filter((res) => {
        //   return !res.name.indexOf('电视');
        // });
        // console.log(test1);
        // this.list.forEach((res) => {
        //   console.log(res.name);
        // });

        var currentList = this.list.filter((item) => {
          return !item.name.indexOf(this.value);
        });
        this.$store.commit('setSearch', currentList);
        this.$store.commit('setShow', false);
        // console.log(currentList);
      }
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
