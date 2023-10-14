<template>
    <div class="fs-schedule__items">
        <div
            class="fs-schedule-day"
            v-for="(day, index) in item.days"
            :key="index"
        >
            <div class="fs-schedule-day__title">{{ day.dayName }}</div>
            <ol class="fs-schedule-day__list" v-if="day.lessons[0]">
                <template v-for="(lesson, i) in day.lessons" :key="i">
                    <li class="fs-schedule-day__name">
                        {{ lesson }}
                    </li>
                </template>
            </ol>
            <div v-else>Выходной</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['item'],
};
</script>
