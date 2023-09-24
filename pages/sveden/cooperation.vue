<template>
  <section class="fs-cooperation">
    <FsSvedenUniversal :title="this.title" :articleTitle="this.articleTitle" :content="this.content"></FsSvedenUniversal>
  </section>

</template>
<script>
  export default {
    data: function () {
      return {
        title: 'Международное сотрудничество | МКОУ ФИЛИППОВСКАЯ СОШ',
        content: [
            { text: 'Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки (при наличии):', answer: 'не имеется'},
            { text: 'Информация о международной аккредитации образовательных программ (при наличии):', answer: 'не имеется'}
          ],
        articleTitle: 'Международное сотрудничество'
        }
      }
    }
</script>