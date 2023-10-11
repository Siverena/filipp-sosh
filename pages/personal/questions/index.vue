<template>
  <section class="fs-questions">
    <Head>
      <Title>Вопросы</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:main> Вопросы </template>
      </FsSectionTitles>
      <div class="fs-questions__content">
        <section class="fs-questions__filter">
          <div class="fs-questions__filter-row fs-questions__filter-row--email">
            <input 
              class="fs-questions__filter-email" 
              placeholder="Введите email" 
              v-model.trim="email" 
              @change="setEmail(email)" />
          </div>
          <div class="fs-questions__filter-row">
            <div class="fs-questions__filter-btn">
              <button
                type="button"
                class="fs-btn2 fs-btn2-small fs-btn2-group"
                :class="{
                  'fs-btn2--dark': getStatus === null,
                  'fs-btn2--white': getStatus !== null,
                }"
                @click="setStatus(null)"
              >
                все
              </button>
              <button
                type="button"
                class="fs-btn2 fs-btn2-small fs-btn2-group"
                :class="{
                  'fs-btn2--dark': getStatus === 1,
                  'fs-btn2--white': getStatus !== 1,
                }"
                @click="setStatus(1)"
              >
                обработанные
              </button>
              <button
                type="button"
                class="fs-btn2 fs-btn2-small fs-btn2-group"
                :class="{
                  'fs-btn2--dark': getStatus === 0,
                  'fs-btn2--white': getStatus !== 0,
                }"
                @click="setStatus(0)"
              >
                не обработанные
              </button>
            </div>
            <div class="fs-questions__filter-btn">
              <button
                type="button"
                class="fs-btn2 fs-btn2-small fs-btn2-group"
                :class="{
                  'fs-btn2--dark': getAppealCategory === null,
                  'fs-btn2--white': getAppealCategory !== null,
                }"
                @click="setAppealCategory(null)"
              >
                все
              </button>
              <button
                type="button"
                class="fs-btn2 fs-btn2-small fs-btn2-group"
                :class="{
                  'fs-btn2--dark': getAppealCategory === 1,
                  'fs-btn2--white': getAppealCategory !== 1,
                }"
                @click="setAppealCategory(1)"
              >
                по питанию
              </button>
              <button
                type="button"
                class="fs-btn2 fs-btn2-small fs-btn2-group"
                :class="{
                  'fs-btn2--dark': getAppealCategory === 2,
                  'fs-btn2--white': getAppealCategory !== 2,
                }"
                @click="setAppealCategory(2)"
              >
                организационные
              </button>
            </div>
          </div>
        </section>
        <div class="fs-questions__loader" v-if="loading">
          <div class="fs-questions__loader-line1"></div>
          <div class="fs-questions__loader-line1"></div>
          <div class="fs-questions__loader-line2"></div>
          <div class="fs-questions__loader-line3"></div>
          <div class="fs-questions__loader-line4"></div>
          <div class="fs-questions__loader-square"></div>
        </div>
        <section class="fs-questions__wrapper" v-if="!loading">
          <div class="fs-questions__counter">{{ getCounter }} {{ text }}</div>
          <template v-for="data in getQuestions" :key="data.id">
            <div class="fs-questions__item" :class="{ 'fs-questions__item--bg': data.status === 1 }">
              <FsAdmin class="fs-questions__item-icon" v-if="data.category_id === 2" />
              <FsFood class="fs-questions__item-icon" v-if="data.category_id === 1" />
              <div class="fs-questions__item-name">
                <p><span>Имя:</span> {{ data.name }}</p>
              </div>
              <div class="fs-questions__item-email">
                <p><span>Email:</span> {{ data.email }}</p>
              </div>
              <div class="fs-questions__item-question">
                <p><span>Вопрос:</span></p>
                <p>{{ data.question }}</p>
              </div>
              <div class="fs-questions__item-answer" v-if="data.status === 1">
                <p><span>Ответ:</span></p>
                <p>{{ data.response }}</p>
              </div>
              <FsAnswer v-if="data.status === 0" :id="data.id" />
            </div>
          </template>
        </section>
      </div>
    </div>
  </section>
</template>


<script>
import { mapActions, mapState } from "pinia";
import { useQuestionsStore } from "@/stores/questionsStore.js";

export default {
  data() {
    return {
      loading: false,
      text: "",
      email: "",
      validationSuccess: true,
      required: true,
      error: "",
    };
  },
  computed: {
    ...mapState(useQuestionsStore, [
      "getQuestions",
      "getCounter",
      "getStatus",
      "getAppealCategory",
      "path",
      "getEmail",
      "setEmail",
    ]),
  },
  watch: {
    path() {
      console.log("ИЗМЕНЕНИЯ");
      this.loadData();
    },
  },
  methods: {
    ...mapActions(useQuestionsStore, [
      "fetchQuestions",
      "setStatus",
      "setAppealCategory",
    ]),

    async loadData() {
      try {
        this.loading = true;
        await this.fetchQuestions(this.path);
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    setText() {
      const count = this.getCounter;
      const strCount = String(count);
      const lastSymbol = Number(strCount.charAt(strCount.length - 1));
      if (count >= 5 && count <= 20) {
        this.text = " вопросов";
      } else if (lastSymbol == 0 || (lastSymbol >= 5 && lastSymbol <= 9)) {
        this.text = " вопросов";
      } else if (lastSymbol == 1) {
        this.text = " вопрос";
      } else if (lastSymbol >= 2 && lastSymbol <= 4) {
        this.text = " вопроса";
      }
    },
  },
  async created() {
    this.loadData();
  },
  mounted() {
    this.setText();
  },
};
</script>
