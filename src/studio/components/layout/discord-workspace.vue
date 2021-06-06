<template>
  <v-app id="inspire">
    <v-system-bar app
      fixed="top"
      height="30"
      dark
      color="#BDBDBD"
      lights-out
    >
    <v-spacer></v-spacer>
    <v-icon>"./icons/backward-arrow.png"</v-icon>
    <v-icon>"./icons/forward-button-for-multimedia.png"</v-icon>
    <v-icon>"./icons/github.png"</v-icon>
    <v-icon>"./icons/file.png"</v-icon>
    <v-icon>"./icons/toolbox.png"</v-icon>
    <v-icon>"./icons/dos.png"</v-icon>
    </v-system-bar>

    <v-app-bar
      app
      clipped-right
      flat
      height="72"
      max-height="72"
      dark="true"
      color="blue"
      elevation="n - 2"
      fixed="true"
      floating="true"
    >
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      dark
      color="indigo darken-1"
      mini-variant
      mini-variant-width="200"
      app
      clipped-left="true"
      permanent
    >
      <v-navigation-drawer
        v-model="drawer"
        absolute
        dark
        color="amber darken-4"
        mini-variant
        mini-variant-width="200"
        app
        clipped-right="true"
        permanent
      >
        <v-avatar
          class="d-block text-center mx-auto mt-4"
          color="indigo darken-1"
          size="36"
        ></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar
          v-for="n in 6"
          :key="n"
          class="d-block text-center mx-auto mb-9"
          color="grey lighten-1"
          size="28"
        ></v-avatar>
      </v-navigation-drawer>

      <v-sheet
        color="grey lighten-5"
        height="128"
        width="100%"
      ></v-sheet>

      <v-list
        class="pl-14"
        shaped
      >
        <v-list-item
          v-for="n in 8"
          :key="n"
          link
        >

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>I{{ workspace }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>I{{ studio }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>I{{ plugins }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>I{{ pipelines }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>I{{ databases }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>I{{ server }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>I{{ security }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>I{{ account }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      clipped
      left
    >
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
    </v-main>

    <v-footer
      app
      color="transparent"
      height="72"
      inset
    >
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>
