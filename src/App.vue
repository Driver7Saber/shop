<template>
  <div id='app'>
   <router-view/>
   <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footer from './components/Footer/footer.vue'
export default {
  components: {
    Footer
  }
}
</script>
<style>

</style>
