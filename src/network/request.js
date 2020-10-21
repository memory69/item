import axios from 'axios';
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://122.51.199.160:8080',
  });
  return instance(config);
}
export function myrequest(config) {
  const myinstance = axios.create({
    baseURL: '/api',
  });
  return myinstance(config);
}
const GoodsDetail='wx/goods/detail'; //获得商品的详情
export function goodsDetail(query) {
  return request({
    url: GoodsDetail,
    method: 'get',
    params: query
  })
}

export const GoodsList='wx/goods/list'; //获得商品列表
export function goodsList(query) {
  return request({
    url: GoodsList,
    method: 'get',
    params: query
  })
}
export const NewList='wx/goods/index'; 
export function newList(query) {
  return request({
    url: NewList,
    method: 'get',
    params: query
  })
}