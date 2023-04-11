<template>
    <div>
      <h2>Selected Row Information</h2>
      <div v-if="selectedRow">
        <p>{{ selectedRow._source.Subject }}</p>
        <p>From: {{ selectedRow._source.From }}</p>
        <p>To: {{ selectedRow._source.To }}</p>
        <p v-html="selectedRow._source.message.replace(new RegExp(textSearch, 'gi'), '<strong>$&</strong>')"></p>
      </div>
      <div v-else>
      </div>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: ['selectedRow','textSearch'],
  });
  </script>