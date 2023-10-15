<template>
    <Head>
        <Title>{{ statusCode }}</Title>
    </Head>
    <section class="fs-error">
        <div class="container">
            <div class="fs-error__content">
                <p class="fs-error__code">{{ pageContent.code }}</p>
                <p class="fs-error__error" v-if="pageContent.error">
                    {{ pageContent.error }}
                </p>
                <p class="fs-error__text" v-if="pageContent.text">
                    {{ pageContent.text }}
                </p>
                <NuxtLink to="/" class="fs-error__link fs-btn fs-btn--dark"
                    >Перейти на главную</NuxtLink
                >
            </div>
        </div>
    </section>
</template>
<script>
import { mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
export default {
    data() {
        return {
            defaultErrors: {
                404: {
                    error: 'Страница не найдена',
                    text: ' Страница, которую вы ищите, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.',
                },
                500: {
                    error: 'Internal Server Error',
                    text: 'Пожалуйста, обратитесь к разработчикам',
                },
                403: {
                    error: '',
                    text: 'У Вас нет доступа для просмотра страницы. Пожалуйста, обратитесь к администратору сайта.',
                },
            },
        };
    },
    computed: {
        ...mapState(useModalStore, ['getIsShowMob']),
        statusCode() {
            return this.$attrs.error.statusCode;
        },
        pageContent() {
            return {
                code: this.statusCode,
                error:
                    this.$attrs.error.message ??
                    this.defaultErrors[this.statusCode].error ??
                    '',
                text:
                    this.$attrs.error.text ??
                    this.defaultErrors[this.statusCode].text ??
                    '',
            };
        },
    },
    methods: {
        getBodyClass() {
            if (this.$attrs.error.statusCode) {
                document.querySelector('html').classList.add('fs-error__html');
            } else {
                document
                    .querySelector('html')
                    .classList.remove('fs-error__html');
            }
        },
    },
    beforeCreate() {},
    mounted() {
        this.getBodyClass();
    },
    beforeRouteUpdate() {},
};
</script>
