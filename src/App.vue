<template>
  <v-app>
    <v-content>
      <Administration/>
    </v-content>
  </v-app>
</template>

<script>
import Administration from './components/Administration';

export default {
  name: 'App',

  components: {
    Administration,
  },

  data: () => ({
    //
  }),
};
</script>
