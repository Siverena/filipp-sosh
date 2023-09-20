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
            <a
              class="fs-link fs-link--white fs-services-link"
              href="https://образование33.рф/elektronnyy-shkola/podat-zayavlenie/"
            >
              <FsSend />
              <p class="fs-services__item-title">Подать заявление</p>
            </a>
          </div>
          <div class="fs-services__item">
            <a
              class="fs-link fs-link--white fs-services-link"
              href="https://образование33.рф/elektronnyy-shkola/proverka-statusa-zayavleniya/"
            >
              <FsCheckStatus />
              <p class="fs-services__item-title">Проверить статус заявления</p>
            </a>
          </div>
          <div class="fs-services__item">
            <a
              class="fs-link fs-link--white fs-services-link"
              href="https://образование33.рф/elektronnyy-shkola/informatsiya-ob-uchrezhdeniyakh/"
            >
              <FsInformation />
              <p class="fs-services__item-title">Информация об учреждениях</p>
            </a>
          </div>
          <div class="fs-services__item">
            <a class="fs-link fs-link--white fs-services-link" href="https://школа.образование33.рф/auth/login-page">
              <FsDiary />
              <p class="fs-services__item-title">Вход в электронный дневник</p>
            </a>
          </div>
          <div class="fs-services__item">
            <a
              class="fs-link fs-link--white fs-services-link"
              href="https://образование33.рф/elektronnyy-shkola/rezultaty-ege-oge/"
            >
              <FsResult />
              <p class="fs-services__item-title">Результаты ЕГЭ/ОГЭ</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
