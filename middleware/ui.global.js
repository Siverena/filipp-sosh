import { useUiStore } from '@/stores/uiStore.js';

export default defineNuxtRouteMiddleware(async (to, from) => {
  useUiStore().setPageLoader(true);
});
