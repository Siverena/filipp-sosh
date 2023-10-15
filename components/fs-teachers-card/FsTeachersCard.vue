<template>
  <article
    class="fs-teachers-card__wrapper"
    :class="{
      'fs-teachers-card__wrapper--adm': status === 'admin',
      'fs-teachers-card__wrapper--thr': status === 'teacher',
    }"
  >
    <div
      class="fs-teachers-card__image"
      :class="{
        'fs-teachers-card__image--adm': status === 'admin',
        'fs-teachers-card__image--thr': status === 'teacher',
      }"
    >
      <img
        :class="{
          'fs-teachers-card__image-adm': status === 'admin',
          'fs-teachers-card__image-thr': status === 'teacher',
        }"
        :src="teacher.photo"
        alt=" "
        @error="errorImg"
      />
    </div>
    <div class="fs-teachers-card__info">
      <div
        class="fs-teachers-card__info-heading"
        :class="{
          'fs-teachers-card__info-heading--adm': status === 'admin',
          'fs-teachers-card__info-heading--thr': status === 'teacher',
        }"
      >
        <p class="fs-teachers-card__info-name">
          <span v-for="(name, key) in getNameThr(teacher.name)" :key="key">{{ name }}</span>
        </p>
      </div>
      <div class="fs-teachers-card__info-description">
        <div class="fs-teachers-card__info-row" v-if="teacher.post">
          <p class="fs-teachers-card__info-title">Должность:</p>
          <p class="fs-teachers-card__info-text">{{ teacher.post }}</p>
        </div>
        <div class="fs-teachers-card__info-row" v-if="teacher.speciality">
          <p class="fs-teachers-card__info-title">Специальность:</p>
          <p class="fs-teachers-card__info-text">{{ teacher.speciality }}</p>
        </div>
        <div class="fs-teachers-card__info-row" v-if="teacher.totalExperience">
          <p class="fs-teachers-card__info-title">Образование:</p>
          <p class="fs-teachers-card__info-text">{{ teacher.education }}</p>
        </div>
        <div class="fs-teachers-card__info-row" v-if="teacher.totalExperience">
          <p class="fs-teachers-card__info-title">Общий стаж:</p>
          <p class="fs-teachers-card__info-text">{{ teacher.totalExperience }}</p>
        </div>
        <div class="fs-teachers-card__info-row" v-if="teacher.generalTeachingExperience">
          <p class="fs-teachers-card__info-title">Общий педагогический стаж:</p>
          <p class="fs-teachers-card__info-text">{{ teacher.generalTeachingExperience }}</p>
        </div>
        <div class="fs-teachers-card__info-row" v-if="teacher.tel">
          <p class="fs-teachers-card__info-title">Телефон:</p>
          <p class="fs-teachers-card__info-text">{{ teacher.tel }}</p>
        </div>
        <div class="fs-teachers-card__info-row" v-if="teacher.email">
          <p class="fs-teachers-card__info-title">Электронная почта:</p>
          <p class="fs-teachers-card__info-text">{{ teacher.email }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import imageUrl from "@/utils/mixins/image-url.js";

export default {
  data() {
    return {};
  },
  props: ["teacher", "status"],
  mixins: [imageUrl],
  methods: {
    getName(name) {
      let arrName = [];
      const [lastName, ...firstName] = name.split(" ");
      arrName.push(lastName, firstName.join(" "));
      return arrName;
      // return name.split(" ");
    },
    getNameThr(name) {
      let arrName = [];
      const [lastName, ...firstName] = name.split(" ");
      arrName.push(lastName, firstName.join(" "));
      return arrName;
      // return name.split(" ");
    },
    errorImg(el) {
      if (this.status === "teacher") {
        // el.target.style.visibility = "hidden";
        el.target.style.display = "none";
      }
    },
  },
};
</script>
