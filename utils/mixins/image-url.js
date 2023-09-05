export default {
  methods: {
    getStaticImageUrl(src) {
      return `${this.$config.app.baseURL}images/${src}`;
    },
    getImageUrl(src) {
      return `${this.$config.app.baseURL}assets/img/${src}`;
    },
  },
};
