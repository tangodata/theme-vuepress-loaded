<template lang="pug">
.theme-container
  .theme-default-content
    h1 404 Page Not Found
    blockquote {{ getMsg() }}
    router-link(to="/") Go Back to HOME
</template>

<script>
const msgs = [
  `The rain in Spain`,
  `Stays mainly in the Plain`,
  `The quick brown fox jumps`,
  `Over the lazy dog`
]
export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>