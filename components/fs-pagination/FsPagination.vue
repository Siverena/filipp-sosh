<template>
    <div class="fs-pagination">
        <ul class="fs-pagination__pages-wrapper">
            <FsBtnSlidesPrev @click="prevPage" />
            <div
                class="fs-pagination__items-wrapper"
                :class="{ 'fs-pagination__more-pages': countPages > 7 }"
            >
                <li
                    v-for="(item, index) in countPages"
                    :key="item.index"
                    class="fs-pagination__items"
                    :class="{ 'fs-pagination__active': currentP == item }"
                >
                    <span
                        v-if="countPages < 7"
                        ref="target"
                        @click="setActive"
                        >{{ item }}</span
                    >
                </li>
                <div
                    class="fs-pagination__abnormal-count-pages"
                    v-if="countPages > 6"
                >
                    <span
                        :class="{ 'fs-pagination__active': currentP === '1' }"
                        ref="target"
                        @click="setActive"
                        >1</span
                    >
                    <span>...</span>
                    <span
                        v-if="+currentP > 2"
                        ref="target"
                        @click="setActive"
                        >{{ +currentP - 1 }}</span
                    >
                    <span
                        :class="{ 'fs-pagination__active': currentP }"
                        v-if="currentP > 1"
                        ref="target"
                        @click="setActive"
                        >{{ currentP }}</span
                    >
                    <span
                        v-if="currentP < countPages - 1 && currentP > 1"
                        ref="target"
                        @click="setActive"
                        >{{ +currentP + 1 }}</span
                    >
                    <span
                        v-if="+currentP === 1 || !currentP"
                        ref="target"
                        @click="setActive"
                        >{{ +Math.floor(countPages / 2) - 1 }}</span
                    >
                    <span
                        v-if="+currentP === 1 || !currentP"
                        ref="target"
                        @click="setActive"
                        >{{ +Math.floor(countPages / 2) }}</span
                    >
                    <span
                        v-if="+currentP === 1 || !currentP"
                        ref="target"
                        @click="setActive"
                        >{{ +(Math.floor(countPages / 2) + 1) }}</span
                    >
                    <span>...</span>
                    <span
                        :class="{
                            'fs-pagination__active': +currentP === countPages,
                        }"
                        ref="target"
                        @click="setActive"
                        >{{ countPages }}</span
                    >
                </div>
            </div>
            <FsBtnSlidesNext @click="nextPage" />
        </ul>
    </div>
</template>
<script setup>
const props = defineProps({
    countPages: Number,
});
const currentP = ref();
const target = ref();
const countPage = ref();
function setActive(e) {
    currentP.value = undefined;
    e.target.setAttribute('active', 'true');
    currentP.value = e.target.innerText;
    countPage.value = currentP.value;
    navigateTo({ path: '/news', query: { page: currentP.value } });
}
function nextPage() {
    if (currentP.value === props.countPages) {
        return;
    }
    if (!currentP.value) {
        currentP.value = 1;
    }
    currentP.value++;
    navigateTo({ path: '/news', query: { page: currentP.value } });
}
function prevPage() {
    if (currentP.value === 1) {
        return;
    }
    if (!currentP.value) {
        currentP.value = 1;
    }
    currentP.value--;
    navigateTo({ path: '/news', query: { page: currentP.value } });
}
</script>
