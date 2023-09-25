<template>
  <div class="fs-faq">
    <h2 class="fs-h2 fs-faq__title">Часто задаваемые вопросы по питанию</h2>
    <FsAccordeon v-if="!loading">
      <FsAccordeonTab
        v-for="(item, key) in getQuestions"
        :key="key"
        :currentActive="currentActive"
      >
        <template v-slot:title> {{ item.question }} </template>
        <template v-slot:content>
          <div class="fs-faq__answer">
            <p v-for="(text, key) in item.answer" :key="key">
              {{ text }}
            </p>
          </div>
        </template>
      </FsAccordeonTab>
    </FsAccordeon>
  </div>
</template>
<script src="./fs-faq.js"></script>
