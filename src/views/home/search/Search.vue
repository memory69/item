<template>
  <div class="search">
    <div class="item" v-for="item in list" @click="detail(item.id)">
      <van-card :price="item.retailPrice" :desc="item.brief" :title="item.name" :thumb="item.picUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  created() {
    // this.list = [];
  },
  methods: {
    detail(index) {
      this.$router.push('/detail/' + index);
    },
  },
  computed: {
    list() {
      return this.$store.state.search;
    },
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  box-sizing: border-box;
  margin-top: 60px;
  margin-bottom: 50px;
}
.item {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}
</style>
