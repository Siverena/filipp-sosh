<template>
    <div>
        <FsLoader />
        <div class="fs-content">
            <Head>
                <Title>МКОУ ФИЛИППОВСКАЯ СОШ</Title>
            </Head>
            <div :class="{ 'fs-content': currentUrl === 'index' }">
                <FsHeader />
                <div class="container no-tab" v-if="currentUrl !== 'index'">
                    <FsBreadCrumbs />
                </div>
                <NuxtPage />
            </div>
            <FsFooter class="no-tab" />
            <FsBanner v-if="getisShowCookies" />
        </div>
    </div>
    <FsMobMenu v-if="getIsShowMob" />
    <FsOrder v-if="getIsShowOrder" />
    <FsNotification v-if="getIsShowNotification" />
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useModalStore } from '@/stores/modalStore.js';
import { useUserStore } from '@/stores/userStore.js';
import currentUrl from '@/utils/mixins/current-url.js';
export default {
    mixins: [currentUrl],
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState(useAdaptiveStore, ['widthComputed']),
        ...mapState(useModalStore, [
            'getIsShowOrder',
            'getIsSubscription',
            'getIsShowMob',
            'getisShowCookies',
            'getIsShowNotification',
        ]),

        html() {
            return document.querySelector('html');
        },
    },
    methods: {
        ...mapActions(useAdaptiveStore, ['updateWidth']),
        ...mapActions(useModalStore, ['showCookies']),
        ...mapActions(useUserStore, ['checkAuth']),
        setHtmlClass() {
            if (this.$attrs.error) {
                document.querySelector('html').classList.add('gr-404__html');
            } else {
                document.querySelector('html').classList.remove('gr-404__html');
            }
        },
        async loadData() {
            try {
                this.loading = true;
                await this.checkAuth();
                this.loading = false;
            } catch (e) {
                console.log(e);
            }
        },
    },

    async beforeMount() {
        this.updateWidth();

        window.addEventListener('resize', () => {
            this.updateWidth();
        });
        this.setHtmlClass();
        if (!('test' in sessionStorage)) this.showCookies();
        if ('Bearer' in localStorage) {
            await this.checkAuth();
        }
    },

    async created() {},
};
</script>
