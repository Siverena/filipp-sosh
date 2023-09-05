<template>
  <footer class="fs-footer">
    <div class="container">
      <FsLogotype class="fs-footer__logo" :isFooter="isFooter" />

      <div class="fs-footer__row">
        <div class="fs-footer__col fs-footer__contacts">
          <div class="fs-footer__contact">
            <FsMail />
            <a
              class="fs-footer__contact-link"
              href="mailto:info@gromovopark.ru"
            >
              Filippovskay-sl@yandex.ru</a
            >
          </div>
          <div class="fs-footer__contact">
            <FsPhone />
            <a class="fs-footer__contact-link" href="tel:+74923771273">
              +7 (492) 377-12-73</a
            >
          </div>
          <div class="fs-footer__contact">
            <FsPin />
            <p class="fs-footer__location">
              г.Москва, ул. Центральная 1, офис 100
            </p>
          </div>
        </div>

        <FsNavColumn class="fs-footer__nav" :class="'fs-footer__col'" />

        <div class="fs-footer__col fs-footer__links">
          <NuxtLink to="/agree" class="fs-link fs-link--white fs-footer__link"
            >Политика обработки персональных данных</NuxtLink
          >
        </div>
        <div class="fs-footer__col fs-footer__layout">
          <div class="fs-footer__subscribe">
            <p>Задать вопрос руководителю</p>
            <FsBtn
              class="fs-btn--transparent fs-footer__subscribe-btn"
              @click="openOrder(true)"
              >Задать вопрос</FsBtn
            >
          </div>
          <FsSocials class="fs-footer__socials" />
        </div>
      </div>
      <div class="fs-footer__copyright">
        <FsCopyright />
        2023-{{ currentYear }} МКОУ ФИЛИППОВСКАЯ СОШ. Все права защищены
      </div>
    </div>
  </footer>
</template>
<script src="./fs-footer.js"></script>
