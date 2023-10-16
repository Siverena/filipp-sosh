<template>
    <section class="fs-universal">
        <div v-for="item in content" class="fs-universal__item">
            <p class="fs-universal__text">
                {{ item.text }}
            </p>
            <p class="fs-universal__answer">
                {{ item.answer }}
            </p>
        </div>
    </section>
</template>
<script src="./fs-sveden-universal.js"></script>
