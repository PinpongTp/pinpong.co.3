<template>
  <div>
    <div v-for="article of articles" :key="article">
      <nuxt-link :to="{ path: article.path }">
        <div class="article-inner">
          <div class="detail">
            <p>{{ article.title }}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NotePage',
  async asyncData({ $content, params }) {
    const articles = await $content('note', params.slug)
      .only(['title', 'description', 'slug'])
      .sortBy('path', 'asc')
      .fetch()
    return {
      articles,
    }
  },
})
</script>
