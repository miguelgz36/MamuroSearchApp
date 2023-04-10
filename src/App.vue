<template>
  <app-search-input :update-text="updateText"></app-search-input>"
  <app-table-emails :table-data="tableData" :isLoading="isLoading" @row-selected="onRowSelected"></app-table-emails>
  <app-information-email :selected-row="selectedRow" :text-search="textRef"></app-information-email>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TableEmails from './components/TableEmails.vue';
import InformationEmail from './components/InformationEmail.vue';
import SearchInput from './components/SearchInput.vue';
import Email from './types/Email';

const tableData = ref<Email[]>([]);
const isLoading = ref<boolean>(true);
const textRef = ref<string>("");
var selectedRow: Email | null = null;
function getEmails() {
  selectedRow = null;
  isLoading.value = true;
  fetch(`http://localhost:8080/search?text=${textRef.value}`)
    .then(response => response.json())
    .then((data) => {
      tableData.value = data.hits.hits;
      isLoading.value = false;
      })
      .catch(error => {
        console.error('Error fetching persons', error);
      });
}

export default defineComponent({
  components: {
    'app-table-emails': TableEmails,
    'app-information-email': InformationEmail,
    'app-search-input': SearchInput
  },
  data() {
    return {
      selectedRow,
      tableData,
      isLoading,
      textRef
    };
  },
  methods: {
    onRowSelected(row: Email) {
      this.selectedRow = row;
    },
    updateText(text: string){
      textRef.value = text;
      getEmails();
    }
  }
});
</script>