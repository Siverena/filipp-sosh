<template>
    <section class="fs-personal">
        <Head>
            <Title>Личный кабинет | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
        </Head>
        <div class="container">
            <FsPersonalHeader />
            <!-- <FsCallSchedule
                v-if="getUser.isParent || getUser.isStudent"
                class="fs-personal-header__shedule"
            /> -->
            <div class="fs-personal__content" v-if="!loading">
                <div
                    class="fs-personal-header__student"
                    v-if="getUser.isStudent"
                >
                    <FsStudentContent :getStudentInfo="getStudentInfo" />
                </div>
                <div class="fs-personal-header__parent" v-if="getUser.isParent">
                    <FsParentContent :getParentInfo="getParentInfo" />
                </div>
                <div
                    class="fs-personal-header__teacher"
                    v-if="getUser.isTeacher"
                >
                    <FsTeacherContent :getTeacherInfo="getTeacherInfo" />
                </div>
            </div>
        </div>
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
        ...mapState(useUserStore, [
            'getUser',
            'getUserData',
            'getStudentInfo',
            'getTeacherInfo',
            'getParentInfo',
        ]),
    },
    watch: {
        getUserData() {
            this.loading = false;
        },
    },
    methods: {},
    created() {
        if (Object.keys(this.getUserData).length) {
            this.loading = false;
        }
    },
};
</script>
