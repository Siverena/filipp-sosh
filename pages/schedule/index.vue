<template>
    <section class="fs-schedule no-tab">
        <Head>
            <Title>Расписание | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
        </Head>
        <div class="container">
            <div class="fs-schedule__content">
                <FsSectionTitles>
                    <template v-slot:main> Расписание </template>
                </FsSectionTitles>
                <FsCallSchedule />
                <p class="fs-h2 fs-schedule__title">Расписание уроков</p>
                <div class="fs-schedule__loader" v-if="loading">
                    <div class="fs-schedule__loader-wrapper">
                        <div class="fs-schedule__loader-line"></div>
                        <div class="fs-schedule__loader-line"></div>
                        <div class="fs-schedule__loader-line"></div>
                    </div>
                </div>
                <FsAccordeon v-if="!loading">
                    <FsAccordeonTab
                        v-for="(item, key) in getSchedule"
                        :key="key"
                        :index="key"
                        :currentActive="currentActive"
                    >
                        <template v-slot:title>
                            {{ item.className }} класс
                        </template>
                        <template v-slot:content>
                            <FsShedule :item="item" />
                        </template>
                    </FsAccordeonTab>
                </FsAccordeon>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useScheduleStore } from '@/stores/scheduleStore.js';
export default {
    data() {
        return {
            loading: true,
            currentActive: false,
        };
    },
    computed: {
        ...mapState(useScheduleStore, ['getSchedule']),
    },
    methods: {
        ...mapActions(useScheduleStore, ['fetchSchedule']),
        async loadData() {
            try {
                this.loading = true;
                await this.fetchSchedule();
                this.loading = false;
            } catch (e) {
                console.log(e);
            }
        },
        toggleActiveAccordeonBlock(e) {
            e.target.classList.toggle('fs-accordeon__item-title--active');
            e.target.nextElementSibling.classList.toggle(
                'fs-accordeon__item-hidden--active'
            );
        },
    },
    async created() {
        this.loadData();
    },
};
</script>
