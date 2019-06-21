<template lang="pug">
.youtube(:class="type")
  slot
</template>

<script>
export default {
  functional: true,
  props: [
    'type'
  ],
}
</script>

<style lang="stylus" scoped>
.youtube
  display inline-block
  font-size 18px
  height 22px
  line-height 18px
  border-radius 3px
  padding 0 6px
  color white
  background-color #42b983
  &.tip, &.green
    background-color #42b983
  &.error
    background-color #DA5961 //#f66
  &.warning, &.warn, &.yellow
    background-color darken(#ffe564, 35%)
  & + &
    margin-left 5px
</style>



