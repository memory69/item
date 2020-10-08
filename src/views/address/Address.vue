<template>
  <div class="address">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @click-item="clickItem"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- {{ address }} -->
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'Address',
  data() {
    return {
      chosenAddressId: '1',
      // copyaddress: [],
      count: 0,
      list: [
        {
          id: '1',
          name: 'xumeng',
          tel: '13000000000',
          address: '山东省临沂市莒南县 xxxxxx',
          isDefault: true,
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      // Toast("新增地址");
      this.$router.push('/addaddress');
      this.$store.commit('setEdit', '');
    },
    onEdit(item, index) {
      // Toast('编辑地址:' + index);
      this.count = index;
      this.$router.push('/addaddress');
      this.$store.commit('setEdit', item);
    },
    clickItem(item, index) {
      // console.log(index);
      this.$store.commit('setAddress', item);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    if (this.address != '') {
      let add = this.address.province + this.address.city + this.address.county + ' ' + this.address.addressDetail;
      this.address.address = add;
      this.address.id = this.count + 1;
      // console.log(this.address);
      this.list.push(this.address);
    }
  },
  computed: {
    address() {
      return this.$store.state.address;
    },
  },
  watch: {
    count() {
      console.log(this.count);
    },
  },
};
</script>

<style scoped></style>
