<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Databases
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Local</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Remote</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Add New Database</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>