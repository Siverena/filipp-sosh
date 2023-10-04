<template>
  <div class="fs-menu">
    <div class="fs-menu__loader" v-if="loading">
      <p class="fs-menu__loader-title"></p>
      <div class="fs-menu__loader-wrapper">
        <div class="fs-menu__loader-item" v-for="item in 2" :key="item">
          <div class="fs-menu__loader-text">
            <p class="fs-menu__loader-name"></p>

            <div class="fs-menu__loader-dishes">
              <p class="fs-menu__loader-dish" v-for="key in 5" :key="key"></p>
            </div>
          </div>
          <div class="fs-menu__loader-image"></div>
        </div>
      </div>
    </div>
    <div class="fs-menu__content" v-if="!loading">
      <p class="fs-h2 fs-menu__title">
        Меню на {{ new Date(getMenu[0].date).toLocaleDateString() }}
      </p>

      <div class="fs-menu__wrapper">
        <div class="fs-menu__item" v-for="item in getMenu">
          <div class="fs-menu__text">
            <p class="fs-h2 fs-menu__name">
              {{ item.nameMenu }} - {{ item.price }} руб.
            </p>

            <div class="fs-menu__dishes">
              <p class="fs-menu__dish" v-for="(dish, key) in item.menu">
                {{ dish.nameDish }} - <span>{{ dish.dishOutput }}</span>
              </p>
            </div>
          </div>
          <div class="fs-menu__image">
            <img
              v-if="item.nameMenu === 'Обед'"
              src="@/assets/img/fs-menu/dinner.png"
              alt=""
            />
            <img
              v-if="item.nameMenu === 'Завтрак'"
              src="@/assets/img/fs-menu/breakfast.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./fs-menu-daily"></script>
