export default {
  setUser(state, index) {
    state.user = index;
  },
  setDetail(state, index) {
    state.detail = index;
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
    // var copy = Object.assign({}, index);
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
};
