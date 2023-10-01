<template>
  <nav class="fs-mob-menu" @click.self="closeMobMenu">
    <div
      class="fs-mob-menu__content"
      :class="getIsShowMob ? 'fs-mob-menu__content--show' : ''"
    >
      <div class="fs-mob-menu__information">
        <div class="fs-mob-menu__header">
          <FsLogotype class="fs-mob-menu__logo" :mobMenu="mobMenu" />
          <button @click="closeMobMenu" class="fs-mob-menu__close">
            <FsCross />
          </button>
        </div>
        <FsNavColumn :mobMenu="mobMenu" />
        <hr />
        <FsBtn
          class="fs-btn--dark fs-mob-menu__btn"
          @click="openOrder"
          @keydown.enter="openOrder"
          >Задать вопрос</FsBtn
        >
        <div class="fs-mob-menu__info">
          <a
            href="tel:+74923771273"
            class="fs-mob-menu__info-item fs-mob-menu__mail"
          >
            <FsPhone />
            +7 (49237) 7-12-73
          </a>
          <a
            href="tel:+74923771274"
            class="fs-mob-menu__info-item fs-mob-menu__mail"
          >
            <FsPhone />
            +7 (49237) 7-12-74
          </a>
          <a
            href="mailto:Filippovskay-sl@yandex.ru"
            class="fs-mob-menu__info-item fs-mob-menu__mail"
          >
            <FsMail />
            Filippovskay-sl@yandex.ru
          </a>
          <p class="fs-mob-menu__info-item fs-mob-menu__location">
            <FsPin />
            Владимирская область, Киржачский район, село Филипповское, Советская
            улица, 26
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>
<script src="./fs-mob-menu.js"></script>
