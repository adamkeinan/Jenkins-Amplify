<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        SourceControl
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Repositories</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Changes</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Builds</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Containers</v-list-item-title>
      </v-list-item>
      
      <v-list-item @click="method">
        <v-list-item-title>Servers</v-list-item-title>
      </v-list-item>
      
      <v-list-item @click="method">
        <v-list-item-title>Actions</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>