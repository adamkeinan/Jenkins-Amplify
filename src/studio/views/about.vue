<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        About 
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Author</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Credits</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Support</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>