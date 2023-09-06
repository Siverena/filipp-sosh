<template>
  <section class="fs-services">
    <div class="container">
      <div class="fs-services__content">
        <FsSectionTitles class="fs-services__titles">
          <template v-slot:h1> Услуги в сфере образования </template>
          <template v-slot:dop> Электронная школа </template>
        </FsSectionTitles>
        <div class="fs-services__items">
          <div class="fs-services__item">
            <FsSend />
            <a
              class="fs-link fs-link--white"
              href="https://образование33.рф/elektronnyy-shkola/podat-zayavlenie/"
            >
              <p class="fs-services__item-title">Подать заявление</p>
            </a>
          </div>
          <div class="fs-services__item">
            <FsCheckStatus />
            <a
              class="fs-link fs-link--white"
              href="https://образование33.рф/elektronnyy-shkola/proverka-statusa-zayavleniya/"
            >
              <p class="fs-services__item-title">Проверить статус заявления</p>
            </a>
          </div>
          <div class="fs-services__item">
            <FsInformation />
            <a
              class="fs-link fs-link--white"
              href="https://образование33.рф/elektronnyy-shkola/informatsiya-ob-uchrezhdeniyakh/"
            >
              <p class="fs-services__item-title">Информация об учреждениях</p>
            </a>
          </div>
          <div class="fs-services__item">
            <FsDiary />
            <a
              class="fs-link fs-link--white"
              href="https://школа.образование33.рф/auth/login-page"
            >
              <p class="fs-services__item-title">Вход в электронный дневник</p>
            </a>
          </div>
          <div class="fs-services__item">
            <FsResult />
            <a
              class="fs-link fs-link--white"
              href="https://образование33.рф/elektronnyy-shkola/rezultaty-ege-oge/"
            >
              <p class="fs-services__item-title">Результаты ЕГЭ/ОГЭ</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
