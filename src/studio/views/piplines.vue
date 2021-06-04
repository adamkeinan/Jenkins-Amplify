<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Piplines
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Mode</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Create</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Edit</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Apply Changes</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Save</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Reset</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Delete</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Apply Changes</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Test</v-list-item-title>
      </v-list-item>
      
      <v-list-item @click="method">
        <v-list-item-title>Build</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>