<template>
    <div class="fs-parent-content">
        <p class="fs-h2 fs-parent-content__main-title">Дети</p>
        <FsAccordeon>
            <FsAccordeonTab
                v-for="(item, key) in getParentInfo.listStudents"
                :key="key"
                :index="key"
                :currentActive="currentActive"
            >
                <template v-slot:title> {{ item.name }}</template>
                <template v-slot:content>
                    <div class="fs-parent-content__info">
                        <div
                            class="fs-parent-content__child-photo"
                            v-if="item.imgSrc"
                        >
                            <img :src="item.imgSrc" alt="" />
                        </div>
                        <div class="fs-parent-content__info-block">
                            <p class="fs-h3 fs-parent-content__title">Класс</p>
                            <div
                                class="fs-parent-content__info-block fs-parent-content__info-block--class"
                            >
                                <div class="fs-parent-content__field">
                                    <div class="fs-parent-content__field-name">
                                        Номер
                                    </div>
                                    <div class="fs-parent-content__field-value">
                                        {{ item.classroom.className }}
                                    </div>
                                </div>
                                <div class="fs-parent-content__field">
                                    <div class="fs-parent-content__field-name">
                                        Кабинет
                                    </div>
                                    <div class="fs-parent-content__field-value">
                                        {{ item.classroom.classNumber }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fs-parent-content__info-block">
                            <p class="fs-h3 fs-parent-content__title">
                                Классный руководитель
                            </p>
                            <div class="fs-parent-content__info-block">
                                <div class="fs-parent-content__field">
                                    <div class="fs-parent-content__field-name">
                                        ФИО
                                    </div>
                                    <div class="fs-parent-content__field-value">
                                        {{ item.classroomTeacher.FIO }}
                                    </div>
                                </div>
                                <div class="fs-parent-content__field">
                                    <div class="fs-parent-content__field-name">
                                        Должность:
                                    </div>
                                    <div class="fs-parent-content__field-value">
                                        <span
                                            v-for="(post, key) in item
                                                .classroomTeacher.positions"
                                            :key="key"
                                        >
                                            {{ post }}
                                            {{
                                                item.classroomTeacher.positions
                                                    .length -
                                                    1 !==
                                                key
                                                    ? ', '
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </div>
                                <div class="fs-parent-content__field">
                                    <div class="fs-parent-content__field-name">
                                        Телефон:
                                    </div>
                                    <div class="fs-parent-content__field-value">
                                        {{ item.classroomTeacher.tel }}
                                    </div>
                                </div>
                                <div class="fs-parent-content__field">
                                    <div class="fs-parent-content__field-name">
                                        Email:
                                    </div>
                                    <div class="fs-parent-content__field-value">
                                        {{ item.classroomTeacher.email }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fs-parent-content__schedule">
                        <p class="fs-h3 fs-parent-content__title">
                            Расписание уроков
                        </p>
                        <FsShedule :item="item" />
                    </div>
                </template>
            </FsAccordeonTab>
        </FsAccordeon>
    </div>
</template>
<script>
export default {
    props: ['getParentInfo'],
    data() {
        return {
            currentActive: 0,
        };
    },
};
</script>
