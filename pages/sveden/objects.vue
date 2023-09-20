<template>
  <section class="fs-objects">
    <Head>
      <Title
        >Материально-техническое обеспечение и оснащенность образовательного процесса | МКОУ ФИЛИППОВСКАЯ СОШ</Title
      >
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:h1> Материально-техническое обеспечение и оснащенность образовательного процесса </template>
      </FsSectionTitles>
      <div class="fs-objects__content">
        <Accordion :multiple="true" :class="'fs-accordion'">
          <AccordionTab>
            <span>
              Оборудованные учебные кабинеты, объекты для проведения практических занятий а так же приспособленных для
              использования инвалидами и лицами с ограниченными возможностями здоровья
            </span>
          </AccordionTab>
        </Accordion>
        <div class="fs-objects__item fs-objects__item--bg1    bg-1 ">
          <div class="fs-objects__item-row">
            <div class="fs-objects-info">
              <p class="fs-h2 fs-objects-info__title">Кабинет информатики</p>
              <p class="fs-objects-info__text">
                Объект оснащен 6 персональными компьютерами 1 из которых с подключением к сети Интернет. Кабинет
                предназначен для изучения основ компьютерной грамотности и практических занятий обучающихся.
              </p>
            </div>
          </div>
          <div class="fs-objects-images">
             <!-- <img src="~/assets/img/fs-objects/cad-informatics.jpg" alt="" /> -->
          </div>
        </div>
        <div class="fs-objects__item1 bg-2">
          <div class="fs-objects__item-row">
            <div class="fs-objects-info">
              <p class="fs-h2 fs-objects-info__title1">Кабинет технологи</p>
              <div class="fs-objects-info__text">
                <span>
                  Объект предназначен для проведения практических работ формирующих представления о составляющих
                  техносферы, о современном производстве и о распространенных в нем технологиях.Кабинет оборудован
                  швейными машинами, доской гладильной. Место учителя оборудовано (проектор, экран).
                </span>
                <span>
                  Мастерская — основная учебно-методическая и практическая база для выполнения учебных программ по
                  предмету «Технология» для учащихся 5-8 классов.
                </span>
              </div>
            </div>
            <div class="fs-objects-images1">
              <!-- <img src="~/assets/img/fs-objects/cab-technology.jpg" alt="" /> -->
            </div>
          </div>
          <div class="fs-objects__item-row">
            <div class="fs-objects-slider">
              <div class="fs-index-objects__nav">
                <FsBtnSlidesPrev @click="prevReason" class="fs-btn-slides1"/>
                <FsBtnSlidesNext @click="nextReason" class="fs-btn-slides1"/>
                <div class="fs-index-objects__count">{{ activeReason + 1 }} / {{ reasonsCount }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
