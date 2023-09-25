<template>
  <section class="fs-contacts no-tab">
    <Head>
      <Title>Расписание | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:main> Контакты </template>
      </FsSectionTitles>
      <div class="fs-contacts__content">
        <div class="fs-contacts__items">
          <div class="fs-contacts__contact">
            <FsMail />
            <a
              class="fs-contacts__contact-link"
              href="mailto:info@gromovopark.ru"
            >
              Filippovskay-sl@yandex.ru</a
            >
          </div>
          <div class="fs-contacts__contact">
            <FsPhone />
            <a class="fs-contacts__contact-link" href="tel:+74923771273">
              +7 (49237) 7-12-73</a
            >
          </div>
          <div class="fs-contacts__contact">
            <FsPhone />
            <a class="fs-contacts__contact-link" href="tel:+74923771273">
              +7 (49237) 7-12-74</a
            >
          </div>
          <div class="fs-contacts__contact">
            <FsPin />
            <p class="fs-contacts__location">
              Владимирская область, Киржачский район, село Филипповское,
              Советская улица, 26
            </p>
          </div>
        </div>
        <div>
          <div class="fs-contacts__map-content" style="overflow: hidden">
            <a
              href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
              style="color: #eee; font-size: 12px; position: absolute; top: 0px"
              >Яндекс Карты</a
            ><a
              href="https://yandex.ru/maps/10658/vladimir-oblast/house/sovetskaya_ulitsa_26/Z0EYcAdoTUQDQFtsfXx4d3xrZQ==/?ll=38.608414%2C56.096082&utm_medium=mapframe&utm_source=maps&z=17.07"
              style="
                color: #eee;
                font-size: 12px;
                position: absolute;
                top: 14px;
              "
              >Яндекс Карты</a
            ><iframe
              class="fs-contacts__map"
              src="https://yandex.ru/map-widget/v1/?ll=38.608414%2C56.096082&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTEyMjQ0ODE4EpwB0KDQvtGB0YHQuNGPLCDQktC70LDQtNC40LzQuNGA0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCa0LjRgNC20LDRh9GB0LrQuNC5INGA0LDQudC-0L0sINGB0LXQu9C-INCk0LjQu9C40L_Qv9C-0LLRgdC60L7QtSwg0KHQvtCy0LXRgtGB0LrQsNGPINGD0LvQuNGG0LAsIDI2IgoNBG8aQhVjYmBC&z=17.07"
              allowfullscreen="true"
              style="position: relative"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
