<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Plugins
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Mode</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Add</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Delete</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Apply</v-list-item-title>
      </v-list-item>
            
      <v-list-item @click="method">
        <v-list-item-title>List</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>