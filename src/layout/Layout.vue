<template>
  <div class="layout">
    <v-layout>
      <Header />
      <v-main>
        <slot></slot>
      </v-main>
    </v-layout>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>
