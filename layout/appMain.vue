<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {

    };
  },
  computed: {
    key() {
      return this.$route.path;
    }
  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style scoped lang="scss">

</style>
