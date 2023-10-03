import { FsCross } from '#build/components';
<template>
  <div class="fs-notification">
    <FsCross class="fs-notification__cross" @click="closeNotification" />
    {{ getNotificationText }}
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
export default {
  computed: {
    ...mapState(useModalStore, ['getNotificationText']),
  },
  methods: {
    ...mapActions(useModalStore, ['closeNotification']),
  },
};
</script>
