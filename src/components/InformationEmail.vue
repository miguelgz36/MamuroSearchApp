<template>
    <div>
      <h2>Selected Row Information</h2>
      <div v-if="selectedRow">
        <p>{{selectedRow._source.message}}</p>
      </div>
      <div v-else>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Email from '@/types/Email';
import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      selectedRow: {
        type: Object as () => Email,
        default: null
      }
    }
  });
  </script>