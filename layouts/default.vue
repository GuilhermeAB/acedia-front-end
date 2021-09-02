<template>
  <v-app>
    <loading-full-screen />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'Default',
    components: {
      LoadingFullScreen: () => import('../components/Core/LoadingFullScreen/LoadingFullScreen.vue'),
    },
    data: function () {
      return {
      };
    },
  };
</script>
