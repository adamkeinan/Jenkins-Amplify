<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Terminal
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>New Terminal</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Debug Console</v-list-item-title></v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Scripts</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>