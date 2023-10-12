<template>
    <section class="fs-personal">
        <Head>
            <Title>Личный кабинет | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
        </Head>
        <div class="container">
            <FsPersonalHeader />
            <FsCallSchedule
                v-if="!getUserData.isTeacher"
                class="fs-personal-header__shedule"
            />
            <Accordion>
                <AccordionTab>
                    <template v-slot:title> 1Б класс (213каб) </template>
                    <template v-slot:content>
                        <div class="fs-students-list">
                            <ul class="fs-students-list__list">
                                <li class="fs-students-list__item">
                                    <p class="fs-students-list__name">
                                        Иванов Иван Иванович
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </template>
                </AccordionTab>
            </Accordion>
        </div>
        <FsNews />
    </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/userStore.js';
export default {
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState(useUserStore, ['getUser', 'getDataLoading', 'getUserData']),
    },
    watch: {
        getUserData() {
            this.loading = false;
        },
    },
    methods: {
        ...mapActions(useUserStore, [
            'fetchUserData',
            'auth',
            'logout',
            'checkAuth',
        ]),
    },
};
</script>
