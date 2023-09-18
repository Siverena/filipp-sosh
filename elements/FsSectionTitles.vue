<template>
  <div class="fs-section-titles">
    <h2 class="fs-h1"><slot name="h1"></slot></h2>
    <h3 class="fs-section-titles__dop-text" v-if="showDop">
      <slot name="dop"></slot>
    </h3>
  </div>
</template>
<script>
export default {
  computed: {
    showDop() {
      if (this.$slots.dop) {
        return true;
      }
      return false;
    },
  },
};
</script>
