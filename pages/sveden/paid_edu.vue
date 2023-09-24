<template>
  <section class="fs-paid-edu">
    <FsSvedenUniversal :title="this.title" :articleTitle="this.articleTitle" :content="this.content"></FsSvedenUniversal>
  </section>
</template>
<script>
  export default {
    data: function () {
      return {
        title: 'Платные образовательные услуги | МКОУ ФИЛИППОВСКАЯ СОШ',
        content: [
            { answer: 'не оказываются'}
          ],
        articleTitle: 'Платные образовательные услуги'
        }
      }
    }
</script>