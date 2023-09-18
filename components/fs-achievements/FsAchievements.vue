<template>
  <section class="fs-achievements">
    <div class="container">
      <div class="fs-achievements__content">
        <FsSectionTitles class="fs-achievements__titles">
          <template v-slot:h1>Достижения школы</template>
        </FsSectionTitles>
        <div class="fs-achievements__items">
          <div class="fs-achievements__item">
            <FsHat />
            <p class="fs-achievements__item-title fs-h2">Лучший класс <br> школы</p>
            <p class="fs-achievements__item-text">
              Поздравляем наших учеников с заслуженной победой в конкурсе
              талантов. Приглашаем на церемонию награждения!
            </p>
          </div>
          <div class="fs-achievements__item">
            <FsExcellent />
            <p class="fs-achievements__item-title fs-h2">8 отличников, 15 ударников</p>
            <p class="fs-achievements__item-text">
              Поздравляем наших учеников с заслуженной победой в конкурсе
              талантов. Приглашаем на церемонию награждения!
            </p>
          </div>
          <div class="fs-achievements__item">
            <FsOlympic />
            <p class="fs-achievements__item-title fs-h2">
              1 место на олимпиаде
            </p>
            <p class="fs-achievements__item-text">
              Поздравляем наших учеников с заслуженной победой в конкурсе
              талантов. Приглашаем на церемонию награждения!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
