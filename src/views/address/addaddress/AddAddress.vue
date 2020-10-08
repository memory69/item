<template>
  <div class="add-address">
    <!-- <input type="button" value="aaaaa" @click="onbtn" /> -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <!-- {{ edit }} -->
  </div>
</template>

<script>
import areaList from '../../../../public/api/area/area.js';
export default {
  name: 'AddAddress',
  data() {
    return {
      addressInfo: {},
      areaList,
      searchResult: [],
    };
  },
  created() {
    if (this.edit != '') {
      this.addressInfo = this.edit;
    }
  },
  methods: {
    onSave(value) {
      this.$router.go(-1);
      // var copy = Object.assign({}, value);
      this.$store.commit('setAddress', value);
    },
    onDelete(item) {
      // this.item;
      item = '';
      this.$store.commit('setAddress', item);
      this.$router.go(-1);
      // console.log(typeof item);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: 'xxxxx',
            address: 'xxxxxx',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  computed: {
    edit() {
      return this.$store.state.onedit;
    },
  },
};
</script>

<style scoped>
.add-address {
  width: 100%;
  box-sizing: border-box;
}
</style>
