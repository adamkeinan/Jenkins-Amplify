<template>
  <v-app id="inspire">
    <v-system-bar app
      fixed="top"
      height="40"
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

    <v-row>
      <v-col
        v-for="(bar, i) in bars"
        :key="i"
        cols="12"
        sm="12"
        md="6"
        class="my-4"
      >
        <v-card
          color="indigo"
          flat
          height="96px"
        >
          <v-toolbar dense
            :color="bar.class"
            :dark="bar.dark"
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Studio</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-window-minimize</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-window-maximize</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>

    <v-app-bar
      app
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

    <v-card
    class="mx-auto"
    height="300"
    width="330"
    >
      <v-navigation-drawer
        v-model="drawer"
        absolute
        dark
        color="indigo darken-1"
        mini-variant
        mini-variant-width="100%"
        app
        clipped-left="true"
        permanent
      >
        <v-row
          class="fill-height"
          no-gutters
        >
          <v-navigation-drawer
          v-model="drawer"
          absolute
          dark
          color="amber darken-4"
          mini-variant
          mini-variant-width="56"
          app
          clipped-lef="true"
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
