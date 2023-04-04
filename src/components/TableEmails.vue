<template>
    <table v-if="!isLoading">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.id" @click="selectRow(row)">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.email }}</td>
        </tr>
      </tbody>
    </table>
    <h2 v-else >Loading... </h2>
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
      tableData: {
        type: Array as () => Row[],
        required: true
      },
      isLoading: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      selectRow(row: Row) {
        this.$emit('row-selected', row);
      }
    }
  });
  </script>