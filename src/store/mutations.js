export default {
  setUser(state, index) {
    state.user = index;
  },
  setDetail(state, index) {
    state.detail = index;
    // console.log(index);
  },
  setBuyNub(state, index) {
    state.buynub = index;
    // console.log(index);
  },
  setAddress(state, index) {
    state.address = index;
    // console.log(index);
  },
  setEdit(state, index) {
    state.onedit = index;
    // console.log(index);
  },
  setActive(state, index) {
    state.active = index;
    // console.log(index);
  },
  setBuyCar(state, index) {
    state.buycar = index;

    // console.log(index);
  },
  setShow(state,index){
    state.show = index
  },
  setSearch(state,index){
    state.search = index
    // console.log(index);
  },
  setTitle(state,index){
    state.title = index
  },
  setSpecific(state,index){
    state.specific  = index
  }
};
