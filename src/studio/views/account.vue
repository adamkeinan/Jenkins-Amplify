<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Account
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Reset Password</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>