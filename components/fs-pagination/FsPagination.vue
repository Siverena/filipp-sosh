<template>
    <div class="fs-pagination">
        <ul class="fs-pagination__pages-wrapper">
            {{ currentP }}
            <button></button>
                <div class="fs-pagination__items-wrapper">
                    <li v-for="item, index in 10" :key="item.index" class="fs-pagination__items" :class="{'fs-pagination__active': currentP === item}">
                       <span ref="target" @click="setActive">{{item}}</span>
                    </li>
                </div>
            <button></button>

        </ul>

    </div>
</template>
<script setup>
    const current = ref('false');
    const currentP = ref();
    const isActive = ref(false);
    const target = ref();
    const countPage = ref();
    function setActive (e) {
        currentP.value = undefined;
        e.target.setAttribute("active", "true");
        console.log(e.target.attributes.active.value);
        currentP.value = e.target.innerText;
        console.log(currentP.value)
        countPage.value = currentP.value;
        navigateTo({ path: '/news', query: {page: currentP.value} })
        // console.log(target.value.find((item) => item.hasAttribute('active')).innerText);
        // console.log(target.value.find((item) => item.hasAttribute('active')).innerText);
        // console.log(currentP.value);
    }



</script>