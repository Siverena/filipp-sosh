import Divider from 'primevue/divider'; import Divider from 'primevue/divider';
<template>
    <div class="fs-student-content">
        <p class="fs-h2 fs-student-content__title">
            Информация о классе

            {{ getStudentInfo.classroomName }}
        </p>

        <div class="fs-student-content__class-info">
            <div class="fs-personal-header__field">
                <div class="fs-personal-header__field-name">
                    Классный руководитель
                </div>
                <div class="fs-personal-header__field-value">
                    {{ getStudentInfo.nameTeacher }}
                </div>
            </div>
            <div class="fs-personal-header__field">
                <div class="fs-personal-header__field-name">Кабинет</div>
                <div class="fs-personal-header__field-value">
                    {{ getStudentInfo.classroomNumber }}
                </div>
            </div>
        </div>
        <FsShedule :item="getStudentInfo" />
        <div class="fs-student-content__classmates">
            <div class="fs-student-content__field">
                <div class="fs-student-content__field-name">Одноклассники</div>
                <div
                    class="fs-student-content__field-value fs-student-content__field-value--grid"
                >
                    <div class="fs-student-content__classmates-list">
                        <p
                            v-for="(
                                child, key
                            ) in getStudentInfo.listClassmates"
                            :key="key"
                        >
                            {{ child }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./fs-student-content.js"></script>
