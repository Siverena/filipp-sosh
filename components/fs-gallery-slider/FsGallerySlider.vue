<template>
    <div class="fs-gallery-slider">
        <div class="fs-gallery-slider__content">
            <div class="fs-gallery-slider__top">
                <div
                    class="fs-gallery-slider__close"
                    @click="closeSlider"
                    @keydown.enter="closeSlider"
                    tabindex="0"
                >
                    <fsCross />
                </div>
            </div>
            <div class="fs-gallery-slider__center">
                <div class="fs-gallery-slider__image-wrapper">
                    <img
                        :src="images[currentImage]"
                        class="fs-gallery-slider__image"
                        alt=""
                    />
                </div>
                <div class="fs-gallery-slider__nav">
                    <div
                        class="fs-gallery-slider__btn fs-gallery-slider__prev"
                        @click="prevSlide"
                        @keydown.enter="prevSlide"
                        tabindex="0"
                    >
                        <fsCheckMarkLeft />
                    </div>
                    <div
                        class="fs-gallery-slider__btn fs-gallery-slider__next"
                        @click="nextSlide"
                        @keydown.enter="nextSlide"
                        tabindex="0"
                    >
                        <fsCheckMarkRight />
                    </div>
                </div>
            </div>
            <div class="fs-gallery-slider__bottom">
                <div class="fs-gallery-slider__bottom-cont">
                    <div
                        class="fs-gallery-slider__small"
                        v-for="(img, key) in thumbnails"
                        :key="key"
                        :class="{
                            'fs-gallery-slider__small--active':
                                img === images[currentImage],
                        }"
                        @click="setCurrentImage(key + firstThumbnailsIndex)"
                        @keydown.enter="
                            setCurrentImage(key + firstThumbnailsIndex)
                        "
                        tabindex="0"
                    >
                        <img :src="img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./fs-gallery-slider.js"></script>
