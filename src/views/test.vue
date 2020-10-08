<template>
  <div>
    <!-- {{grouponList}} -->
    <!-- {{sku.tree.v.previewImgUrl}} -->111111
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {};
  },
  methods: {},
  created() {
    let obj4 = { a: '1' };
    let obj5 = { b: '2' };
    let obj6 = { c: '3' };
    Object.assign(obj4, obj5, obj6);
    console.log(obj4);
  },
};
</script>

<style scoped></style>
