<template>
  <div class="fs-questions-form">
    <div class="fs-questions-form__titles">
      <h2 class="fs-h2 fs-questions-form__title">Остались вопросы?</h2>
      <p class="fs-questions-form__title-small">
        Напишите нам, мы ответим Вам ближайшее время
      </p>
    </div>

    <form
      class="fs-questions-form__content"
      @submit.prevent="submitForm"
      novalidate="true"
    >
      <div class="fs-questions-form__fields">
        <div class="fs-questions-form__column">
          <template v-for="(field, i) in fields" :key="i">
            <div
              class="fs-questions-form__field"
              v-if="fieldsVisibility[field.name] && field.type !== 'textarea'"
            >
              <label class="fs-questions-form__label" :for="field.name"
                >{{ field.label
                }}<span class="fs-questions-form__star" v-if="field.required"
                  >*</span
                ></label
              >
              <input
                v-if="!field.mask"
                class="fs-questions-form__input"
                :class="{
                  'fs-questions-form__input--error': field.error,
                }"
                :type="field.type"
                :name="field.name"
                :id="field.name"
                v-model.trim="field.value"
                :placeholder="field.placeholder"
                @focusout="validateField(field)"
              />

              <span class="fs-questions-form__error" v-if="field.error"
                >{{ field.error }}
              </span>
            </div>
          </template>
        </div>
        <template v-for="(field, i) in fields" :key="i">
          <div
            class="fs-questions-form__field"
            v-if="fieldsVisibility[field.name] && field.type == 'textarea'"
          >
            <label class="fs-questions-form__label" :for="field.name"
              >{{ field.label
              }}<span class="fs-questions-form__star" v-if="field.required"
                >*</span
              ></label
            >
            <textarea
              v-if="field.type === 'textarea'"
              class="fs-questions-form__textarea"
              :class="{
                'fs-questions-form__textarea--error': field.error,
              }"
              :name="field.name"
              :id="field.name"
              cols="30"
              rows="5"
              :placeholder="field.placeholder"
              v-model.trim="field.value"
              @focusout="validateField(field)"
            ></textarea>

            <span class="fs-questions-form__error" v-if="field.error"
              >{{ field.error }}
            </span>
          </div>
        </template>
      </div>

      <div class="fs-questions-form__row">
        <div class="fs-questions-form__info-wrap">
          <div class="fs-questions-form__attention">
            <p>
              <span class="fs-questions-form__star">*</span>Обязательное поле
            </p>
          </div>
        </div>
        <div class="fs-questions-form__btn-wrap">
          <p class="fs-questions-form__info">
            Нажимая на кнопку, Вы соглашаетесь с
            <nuxt-link
              to="/agree"
              target="_blank"
              class="fs-link fs-link--base fs-questions-form__link"
              >политикой обработки персональных данных</nuxt-link
            >
            .
          </p>
          <button class="fs-btn fs-btn--green fs-questions-form__btn">
            Отправить
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="./fs-questions-form.js"></script>
