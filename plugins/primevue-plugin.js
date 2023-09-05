import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import InputMask from 'primevue/inputmask';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    // unstyled: true
  });
  nuxtApp.vueApp.component('Accordion', Accordion);
  nuxtApp.vueApp.component('AccordionTab', AccordionTab);
  nuxtApp.vueApp.component('InputMask', InputMask);
});
