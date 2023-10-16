import { FsCross } from '#build/components';
<template>
    <div class="fs-notification">
        <FsCross class="fs-notification__cross" @click="closeNotification" />
        {{ getNotificationText }}
    </div>
</template>
<script src="./fs-notification.js"></script>
