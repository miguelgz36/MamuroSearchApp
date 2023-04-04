<template>
    <div>
      <h2>Selected Row Information</h2>
      <div v-if="selectedRow">
        <p>ID: {{ selectedRow.id }}</p>
        <p>Name: {{ selectedRow.name }}</p>
        <p>Age: {{ selectedRow.age }}</p>
        <p>Email: {{ selectedRow.email }}</p>
      </div>
      <div v-else>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Row {
    id: number;
    name: string;
    age: number;
    email: string;
  }
  
  export default defineComponent({
    props: {
      selectedRow: {
        type: Object as () => Row,
        default: null
      }
    }
  });
  </script>