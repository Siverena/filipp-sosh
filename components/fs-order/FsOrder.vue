<template>
  <div class="fs-order__layout">
    <div class="fs-order">
      <div class="fs-order__header">
        <div class="fs-order__title">Задать вопрос руководителю</div>
        <div
          class="fs-order__close"
          @click="closeOrder"
          @keydown.enter="closeOrder"
          tabindex="0"
        >
          <FsCross />
        </div>
      </div>
      <form
        class="fs-order__content"
        @submit.prevent="submitForm"
        novalidate="true"
      >
        <template v-for="(field, key) in fields" :key="key">
          <div class="fs-order__field" v-if="fieldsVisibility[field.name]">
            <label class="fs-order__label" :for="field.name"
              >{{ field.label
              }}<span class="fs-order__star" v-if="field.required"
                >*</span
              ></label
            >
            <InputMask
              v-if="field.mask"
              class="fs-order__input"
              :class="{
                'fs-order__input--error': field.error,
              }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
              :mask="field.mask"
              :unmask="true"
              :autoClear="false"
              :unstyled="true"
              v-model.trim="field.value"
              :placeholder="field.placeholder"
              @focusout="validateField(field)"
            />
            <input
              v-else
              class="fs-order__input"
              :class="{
                'fs-order__input--error': field.error,
              }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
              v-model.trim="field.value"
              :placeholder="field.placeholder"
              @focusout="validateField(field)"
            />
            <span class="fs-order__error" v-if="field.error">{{
              field.error
            }}</span>
          </div>
        </template>

        <div class="fs-order__field">
          <label class="fs-order__label" for="text"
            >Вопрос<span class="fs-order__star">*</span></label
          >
          <textarea
            class="fs-order__textarea"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Введите вопрос"
          ></textarea>
        </div>
        <button class="fs-btn fs-btn--green fs-order__btn">Отправить</button>
        <div class="fs-order__field fs-order__field--agree">
          <label for="agree" class="fs-order__label fs-order__label--agree">
            <div
              class="fs-order__checkbox"
              :class="
                !agree && agreementError ? 'fs-order__checkbox--error' : ''
              "
            >
              <FsCheckInput v-if="agree" />
            </div>
            <div
              class="fs-order__label-text"
              :class="
                !agree && agreementError ? 'fs-order__label-text--error' : ''
              "
            >
              <span>Согласен с </span>
              <NuxtLink to="/agree" target="_blank" class="fs-order__agree"
                >политикой обработки персональных данных</NuxtLink
              >
            </div>
          </label>
          <input type="checkbox" id="agree" name="agree" v-model="agree" />
        </div>
        <p class="fs-order__info">
          Мы свяжемся с вами в рабочее время пн-пт с 09:00 до 18:00
        </p>
        <div class="fs-order__attention">
          <span class="fs-order__star">*</span>Обязательное поле
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./fs-order.js"></script>
