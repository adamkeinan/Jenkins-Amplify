<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Workspace
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Add</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Close</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>