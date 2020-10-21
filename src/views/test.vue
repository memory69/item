<template>
  <div>
    <!-- {{grouponList}} -->
    <!-- {{sku.tree.v.previewImgUrl}} -->111111
  </div>
</template>

<script>
import { goodsList } from '../network/request';
export default {
  name: 'test',
  data() {
    return {
      total: 0,
      list: [],
    };
  },
  methods: {},
  created() {
    goodsList({
      page: 0,
      limit: 0,
    }).then((res) => {
      //
      this.total = res.data.data.total;
      // console.log(res.data.data.list);
      this.list = res.data.data.list;
      console.log(this.list);
    });
  },
};
</script>

<style scoped></style>
