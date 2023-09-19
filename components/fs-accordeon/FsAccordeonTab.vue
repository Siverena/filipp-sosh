<template>
  <li class="fs-accordeon__item">
    <p
      class="fs-accordeon__item-title"
      :class="{
        'fs-accordeon__item-title--active': currentActive === index,
      }"
      @click.self="toggleActiveAccordeonBlock"
    >
      <slot name="title"></slot>
      <FsArrowDown />
    </p>
    <div
      class="fs-accordeon__item-hidden"
      :class="{
        'fs-accordeon__item-hidden--active': currentActive === index,
      }"
    >
      <slot name="content"></slot>
    </div>
  </li>
</template>
<script src="./fs-accordeon.js"></script>
