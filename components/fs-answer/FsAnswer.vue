<template>
    <div class="fs-answer">
        <div class="fs-answer__row fs-answer__row--pos">
            <button
                type="button"
                class="fs-btn2 fs-btn2-big fs-btn2--dark"
                @click="openAnswer"
                v-if="!show"
            >
                Ответить
            </button>
        </div>
        <template v-if="show">
            <form class="fs-answer__form" @submit.prevent="submitForm">
                <label :for="id"
                    ><span>{{ field.label }}</span></label
                >
                <textarea
                    class="fs-answer__textarea"
                    :class="{ 'fs-answer__textarea--error': field.error }"
                    :placeholder="field.placeholder"
                    v-model.trim="field.value"
                    :name="field.name"
                    :id="id"
                >
                </textarea>
                <span class="fs-answer__error" v-if="field.error">{{
                    field.error
                }}</span>
                <div class="fs-answer__row">
                    <p class="fs-answer__notice">Обязательное поле</p>
                    <div class="fs-answer__btn">
                        <button
                            type="button"
                            class="fs-btn2 fs-btn2-big fs-btn2--white"
                            @click="closeAnswer"
                        >
                            Отменить
                        </button>
                        <button
                            type="submit"
                            class="fs-btn2 fs-btn2-big fs-btn2--dark"
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            </form>
            <FsSendMailLoader v-if="sending" />
        </template>
    </div>
</template>

<script src="./fs-answer.js"></script>
