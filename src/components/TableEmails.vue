<template>
  <div class="left-container text-sm">
    <table>
      <thead>
        <tr>
          <th class="px-4 py-2 border border-gray-400">Subject</th>
          <th class="px-4 py-2 border border-gray-400">From</th>
          <th class="px-4 py-2 border border-gray-400">To</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="i in leftRows" :key="i">
          <tr v-if="tableData[i - 1]" @click="selectRow(tableData[i - 1])" class="hover:bg-gray-50">
            <td class="px-4 py-2 border border-gray-400">{{ tableData[i - 1]._source.subject }}</td>
            <td class="px-4 py-2 border border-gray-400">{{ tableData[i - 1]._source.from }}</td>
            <td class="px-4 py-2 border border-gray-400">{{ tableData[i - 1]._source.to }}</td>
          </tr>
          <tr v-else>
            <td class="px-4 py-2 border border-gray-400">&nbsp;</td>
            <td class="px-4 py-2 border border-gray-400">&nbsp;</td>
            <td class="px-4 py-2 border border-gray-400">&nbsp;</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Email from '@/types/Email';

export default defineComponent({
  props: ['tableData', 'isLoading'],
  methods: {
    selectRow(row: Email) {
      this.$emit('row-selected', row);
    }
  },
  data() {
    return {
      leftRows: 15, 
    };
  }
});
</script>