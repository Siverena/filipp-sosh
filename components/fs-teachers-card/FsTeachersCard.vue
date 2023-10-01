<template>
  <article
    class="fs-teachers__card"
    :class="{
      'fs-teachers__card--adm': status === 'admin',
      'fs-teachers__card--thr': status === 'teacher',
    }"
  >
    <div
      class="fs-teachers__image"
      :class="{
        'fs-teachers__image--adm': status === 'admin',
        'fs-teachers__image--thr': status === 'teacher',
      }"
    >
      <img
        :class="{
          'fs-teachers__image-adm': status === 'admin',
          'fs-teachers__image-thr': status === 'teacher',
        }"
        :src="getStaticImageUrl(teacher.photo)"
        alt=" "
        @error="errorImg"
      />
    </div>
    <div class="fs-teachers__info">
      <div
        class="fs-teachers__info-title"
        :class="{
          'fs-teachers__info-title--adm': status === 'admin',
          'fs-teachers__info-title--thr': status === 'teacher',
        }"
      >
        <div v-if="status === 'admin'">
          <p v-for="(name, key) in getName(teacher.name)" :key="key">{{ name }}</p>
        </div>
        <!-- <span v-for="(name, key) in getName(teacher.name)" :key="key">{{ name }}</span> -->
        <p v-if="status === 'teacher'">{{ teacher.name }}</p>
      </div>
      <div class="fs-teachers__info-description">
        <div class="fs-teachers__info-line">
          <p>Должность:</p>
          <p>{{ teacher.post }}</p>
        </div>
        <div class="fs-teachers__info-line">
          <p>Специальность:</p>
          <p>{{ teacher.speciality }}</p>
        </div>
        <div class="fs-teachers__info-line">
          <p>Образование:</p>
          <p>{{ teacher.education }}</p>
        </div>
        <div class="fs-teachers__info-line">
          <p>Общий стаж:</p>
          <p>{{ teacher.totalExperience }}</p>
        </div>
        <div class="fs-teachers__info-line">
          <p>Общий педагогический стаж:</p>
          <p>{{ teacher.generalTeachingExperience }}</p>
        </div>
        <div class="fs-teachers__info-line">
          <p>Телефон:</p>
          <p>{{ teacher.tel }}</p>
        </div>
        <div class="fs-teachers__info-line">
          <p>Электронная почта:</p>
          <p>{{ teacher.email }}</p>
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
    errorImg(el) {
      console.log(el);
      if (this.status === "teacher") {
        el.target.style.visibility = "hidden";
      }
    },
  },
};
</script>
