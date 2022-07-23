<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    console.log('>> content', $content)
    console.log('>> params', params)
    const article = await $content('note', params.slug).fetch()
    return {
      article,
    }
  },
})
</script>
