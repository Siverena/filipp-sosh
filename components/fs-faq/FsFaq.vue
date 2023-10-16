<template>
    <div class="fs-faq">
        <h2 class="fs-h2 fs-faq__title">Часто задаваемые вопросы по питанию</h2>
        <div class="fs-schedule__loader" v-if="loading">
            <div class="fs-schedule__loader-wrapper">
                <div class="fs-schedule__loader-line"></div>
                <div class="fs-schedule__loader-line"></div>
                <div class="fs-schedule__loader-line"></div>
            </div>
        </div>
        <FsAccordeon v-if="!loading">
            <FsAccordeonTab
                v-for="(item, key) in getQuestions"
                :key="key"
                :currentActive="currentActive"
            >
                <template v-slot:title> {{ item.question }} </template>
                <template v-slot:content>
                    <div class="fs-faq__answer">
                        <p>{{ item.answer }}</p>
                    </div>
                </template>
            </FsAccordeonTab>
        </FsAccordeon>
    </div>
</template>
<script src="./fs-faq.js"></script>
