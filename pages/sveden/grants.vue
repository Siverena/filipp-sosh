<template>
  <section class="fs-grands">
    <FsSvedenUniversal :title="this.title" :articleTitle="this.articleTitle" :content="this.content"></FsSvedenUniversal>
  </section>
</template>
<script>
  export default {
    data: function () {
      return {
        title: 'Стипендии и меры поддержки обучающихся | МКОУ ФИЛИППОВСКАЯ СОШ',
        content: [
            { text: 'Общежитие', answer: 'не предоставляется'},
            { text: 'Стипендии и иные виды материальной поддержки', answer: 'не предоставляется'}
          ],
        articleTitle: 'Стипендии и иные виды материальной поддержки'
        }
      }
    }
</script>
