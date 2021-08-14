<template>
  <section>
    <Navbar />
    <router-view />
    <Footer />
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped lang="scss">
section {
  max-width: 750px;
  margin: 12px auto 0;
}
</style>
