<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Security
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Path Variavbles</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>API Keys</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Personal Access Tokens</v-list-item-title>
      </v-list-item>
      
     <v-list-item @click="method">
        <v-list-item-title>SSH Keys</v-list-item-title>
      </v-list-item>
      
      <v-list-item @click="method">
        <v-list-item-title>GPG Keys</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>