<template>
    <div class="fs-teacher-content">
        <div class="fs-teacher-content__personal">
            <p class="fs-h2 fs-teacher-content__main-title">
                Персональная информация
            </p>
            <div
                class="fs-teachers-card__info-description fs-teacher-content__description"
            >
                <div
                    class="fs-teachers-card__info-line"
                    v-if="getTeacherInfo.profile.positions"
                >
                    <p class="fs-teachers-card__info-title">Должность:</p>
                    <p class="fs-teachers-card__info-text">
                        <span
                            v-for="(post, key) in getTeacherInfo.profile
                                .positions"
                            :key="key"
                        >
                            {{ post }}
                            {{
                                getTeacherInfo.profile.positions.length - 1 ===
                                key
                                    ? ''
                                    : ', '
                            }}</span
                        >
                    </p>
                </div>
                <div
                    class="fs-teachers-card__info-line"
                    v-if="getTeacherInfo.profile.speciality"
                >
                    <p class="fs-teachers-card__info-title">Специальность:</p>
                    <p class="fs-teachers-card__info-text">
                        {{ getTeacherInfo.profile.speciality }}
                    </p>
                </div>
                <div
                    class="fs-teachers-card__info-line"
                    v-if="getTeacherInfo.profile.education"
                >
                    <p class="fs-teachers-card__info-title">Образование:</p>
                    <p class="fs-teachers-card__info-text">
                        {{ getTeacherInfo.profile.education }}
                    </p>
                </div>
                <div
                    class="fs-teachers-card__info-line"
                    v-if="getTeacherInfo.profile.totalExperience"
                >
                    <p class="fs-teachers-card__info-title">Общий стаж:</p>
                    <p class="fs-teachers-card__info-text">
                        {{ getTeacherInfo.profile.totalExperience }}
                    </p>
                </div>
                <div
                    class="fs-teachers-card__info-line"
                    v-if="getTeacherInfo.profile.generalTeachingExperience"
                >
                    <p class="fs-teachers-card__info-title">
                        Общий педагогический стаж:
                    </p>
                    <p class="fs-teachers-card__info-text">
                        {{ getTeacherInfo.profile.generalTeachingExperience }}
                    </p>
                </div>
            </div>
        </div>
        <div
            class="fs-teacher-content__classwork"
            v-if="getTeacherInfo.listClassrooms.length"
        >
            <p class="fs-h2 fs-teacher-content__main-title">
                Классное руководство
            </p>
            <FsAccordeon>
                <FsAccordeonTab
                    v-for="(item, key) in getTeacherInfo.listClassrooms"
                    :key="key"
                    :index="key"
                    :currentActive="currentActive"
                >
                    <template v-slot:title>
                        {{ item.className }} ({{
                            item.classNumber
                        }}
                        каб.)</template
                    >
                    <template v-slot:content>
                        <div class="fs-teacher-content__wrap">
                            <div class="fs-teacher-content__students">
                                <div
                                    class="fs-teacher-content__student"
                                    v-for="(student, key) in item.listStudents"
                                    :key="key"
                                >
                                    <p class="fs-teacher-content__student-name">
                                        {{ student.studentName }}
                                    </p>
                                    <div
                                        class="fs-teacher-content__parents-contacts-wrap"
                                    >
                                        <p
                                            class="fs-teacher-content__parents-contacts-title"
                                        >
                                            Контакты родителей:
                                        </p>
                                        <div
                                            class="fs-teacher-content__parents-contacts"
                                        >
                                            <div
                                                class="fs-teacher-content__parents-contact"
                                                v-for="(
                                                    contact, key
                                                ) in student.parents"
                                            >
                                                {{ contact.parentName }} ,
                                                {{ contact.parentPhone }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </FsAccordeonTab>
            </FsAccordeon>
        </div>
    </div>
</template>
<script src="./fs-teacher-content.js"></script>
