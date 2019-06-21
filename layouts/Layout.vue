<template lang="pug">
ParentLayout
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout,
  }
}
/*
ParentLayout
  CarbonAds(slot="sidebar-top")
  BuySellAds(slot="page-bottom")

//    CarbonAds,
//    BuySellAds

//Test2 import CarbonAds    from '@theme/components/CarbonAds.vue'
//Test1 import BuySellAds   from '@theme/components/BuySellAds.vue'

*/
</script>
