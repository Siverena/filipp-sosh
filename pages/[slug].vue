<template>
    <section class="fs-document">
        <Head>
            <Title>{{ getTitle }}</Title>
        </Head>
        <div class="container">
            <FsSectionTitles>
                <template v-slot:main> {{ getTitle }} </template>
            </FsSectionTitles>
            <div class="fs-page__content">
                <FsSection />
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { usePagesStore } from '@/stores/pagesStore';
import currentUrl from '~/utils/mixins/current-url';

export default {
    data() {
        return {
            loading: false,
            currentActive: false,
        };
    },
    mixins: [currentUrl],
    computed: {
        ...mapState(usePagesStore, ['getTitle']),
    },
    watch: {
        getTitle() {
            this.loading = false;
        },
    },
    // methods: {
    //     ...mapActions(useUsefulLinksStore, ['fetchContent']),
    //     async loadData() {
    //         try {
    //             this.loading = true;
    //             await this.fetchLinks();
    //             this.loading = false;
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     },
    // },
    // async created() {
    //     this.loadData();
    // },
};
</script>
