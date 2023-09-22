<template>
  <clientOnly>
    <header class="fs-header no-tab">
      <div class="fs-header__top container">
        <FsLogotype class="fs-header__logo" />
        <FsNav class="fs-header__nav" />
        <!-- <a
          class="fs-header__phone fs-link fs-link--green"
          href="tel:+74923771273"
          >+7 (492) 377-12-73</a
        > -->
        <p
          class="fs-header__btn fs-link fs-link--green"
          @click.stop="openOrder"
          @keydown.enter="openOrder"
          tabindex="0"
        >
          Задать вопрос
        </p>
        <FsLogin class="fs-header__login" />
        <FsBurger
          class="fs-header__burger"
          tabindex="0"
          @click.stop="openMobMenu"
          @keydown.enter="openMobMenu"
        />
      </div>
      <div class="fs-header__bottom" v-if="currentUrl === 'index'">
        <FsInfo />
      </div>
    </header>
  </clientOnly>
</template>
<script src="./fs-header.js"></script>
