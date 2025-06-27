<template>
  <div class="bg-dark text-white min-vh-100 d-flex flex-column">
    <!-- Header -->
    <SiteHeader />
    <router-view/>
    <!-- Nội dung chính -->
    <!-- Footer -->
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'HomePage',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
  color: #212529;
}
</style>
