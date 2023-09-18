import axios from 'axios';
const API_BASE =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:7777/api/V0/'
    : '/sosh/api/v1';
export default defineNuxtPlugin((NuxtApp) => {
  const api = axios.create({
    headers: {
      Accept: 'application/json',
    },
  });
  api.defaults.withCredentials = true;
  api.defaults.baseURL = API_BASE;
  return {
    provide: {
      api: api,
    },
  };
});
