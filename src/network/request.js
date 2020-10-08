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
