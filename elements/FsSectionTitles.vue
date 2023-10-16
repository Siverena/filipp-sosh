<template>
    <div
        class="fs-section-titles"
        :class="{
            'fs-section-titles--index': currentUrl === 'index',
        }"
    >
        <p class="fs-h1"><slot name="main"></slot></p>
        <p
            class="fs-section-titles__dop-text"
            v-if="showDop"
            :class="{
                'fs-section-titles__dop-text--index': currentUrl === 'index',
            }"
        >
            <slot name="dop"></slot>
        </p>
    </div>
</template>
<script>
import currentUrl from '~/utils/mixins/current-url';

export default {
    mixins: [currentUrl],
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
