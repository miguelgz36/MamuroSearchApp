<template>
  <div>
    <app-search-input :update-text="updateText"></app-search-input>"
    <div class="grid-container col-span-2">
      <app-table-emails :table-data="tableDataRef" @row-selected="onRowSelected"></app-table-emails>
      <app-information-email :selected-row="selectedRow" :text-search="textRef"></app-information-email>
    </div>
    <app-pagination-table :total-items="totalItemsRef" :current-page="currentPageRef"
      @update-currentPage="updateCurrentPage"></app-pagination-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TableEmails from './components/TableEmails.vue';
import InformationEmail from './components/InformationEmail.vue';
import SearchInput from './components/SearchInput.vue';
import Email from './types/Email';
import PaginationTable from './components/PaginationTable.vue'

const tableDataRef = ref<Email[]>([]);
const textRef = ref<string>("");
const currentPageRef = ref(1);
const totalItemsRef = ref(0);
const selectedRow= ref<Email | null>();
function getEmails() {
  selectedRow.value = null;
  fetch(`http://34.216.225.112:8080/search?text=${textRef.value}&page=${currentPageRef.value - 1}`)
    .then(response => response.json())
    .then((data) => {
      tableDataRef.value = data.hits.hits;
      totalItemsRef.value = data.hits.total.value;
      selectedRow.value = tableDataRef.value[0]
    })
    .catch(error => {
      console.error('Error fetching persons', error);
    });
}

export default defineComponent({
  components: {
    'app-table-emails': TableEmails,
    'app-information-email': InformationEmail,
    'app-search-input': SearchInput,
    'app-pagination-table': PaginationTable
  },
  data() {
    return {
      selectedRow,
      tableDataRef,
      textRef,
      currentPageRef,
      totalItemsRef
    };
  },
  methods: {
    onRowSelected(row: Email) {
      this.selectedRow = row;
    },
    updateText(text: string) {
      textRef.value = text;
      currentPageRef.value = 1;
      getEmails();
    },
    updateCurrentPage(page: number) {
      currentPageRef.value = page;
      getEmails();
    }
  }
});
</script>