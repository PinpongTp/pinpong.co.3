<template>
  <div>
    <Header />
    <nav className="d-flex flex-row-reverse">
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/mystyle">MyStyle</nuxt-link> |
      <nuxt-link to="/notes">Note</nuxt-link> |
      <nuxt-link to="/contact">Contact</nuxt-link>
      <hr />
    </nav>
    <div class="breadcrumbs">
      <h3>Home</h3>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style>
html {
  max-width: 70ch;
  padding: 3em 1em;
  margin: auto;
  line-height: 1.75;
  font-size: 1.25em;
  color: #333;
}

a {
  color: chocolate;
  text-decoration: none;
}

body {
  overflow-y: scroll;
}

img {
  width: 100%;
}
</style>
