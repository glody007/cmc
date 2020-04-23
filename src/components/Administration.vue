
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon
        class="mx-4"
        large
      >

      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">CMC</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <v-row
          justify="center"
          align="center"
        >
          <Actes></Actes>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
  import Actes from './acte/Actes';

  export default {
    name : 'Administration',
    props: {
      source: String,
    },
    components: {
      Actes,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-hand-heart', text: 'Actes' },
        { icon: 'mdi-file-document-edit', text: 'Conventions' },
        { icon: 'mdi-account-heart', text: 'Malades' },
        { icon: 'mdi-doctor', text: 'Medicins' },
        { icon: 'mdi-pill', text: 'Medicaments' },
        { icon: 'mdi-handshake', text: 'Partenaire' },
        { icon: 'mdi-office-building', text: 'Societe' },
      ],
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
