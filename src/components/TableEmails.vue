<template>
  <div v-if="!isLoading">
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row._source['Message-ID']" @click="selectRow(row)">
          <td>{{ row._source.Subject }}</td>
          <td>{{ row._source.From }}</td>
          <td>{{ row._source.To }}</td>
        </tr>
      </tbody>
    </table> 
  </div>
  <h2 v-else >Loading... </h2>
  </template>
  
  <script lang="ts">
  import {defineComponent} from 'vue';
  import Email from '@/types/Email';

  export default defineComponent({
    props: ['tableData','isLoading'],
    methods: {
      selectRow(row: Email) {
        this.$emit('row-selected', row);
      }
    }
  });
  </script>