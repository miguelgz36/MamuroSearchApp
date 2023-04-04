<template>
  <app-table-emails :table-data="tableData" :isLoading="isLoading" @row-selected="onRowSelected"></app-table-emails>
  <app-information-email :selected-row="selectedRow"></app-information-email>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref} from 'vue';
import TableEmails from './components/TableEmails.vue';
import InformationEmail from './components/InformationEmail.vue';

interface Row {
  id: number;
  name: string;
  age: number;
  email: string;
}

const tableData = ref<Row[]>([])
const isLoading = ref<boolean>(true)
watchEffect(() => {
      isLoading.value = true
      fetch('https://my.api.mockaroo.com/emails.json?key=74ca9d30')
        .then(response => response.json())
        .then((data: Row[]) => {
            tableData.value = data;
            isLoading.value = false
        })
        .catch(error => {
          console.error('Error fetching persons', error);
        });
    });


export default defineComponent({
  components: {
    'app-table-emails': TableEmails,
    'app-information-email': InformationEmail
  },
  data() {
    return {
      selectedRow: null as Row | null,
      tableData,
      isLoading
    };
  },
  methods: {
    onRowSelected(row: Row) {
      this.selectedRow = row;
    }
  }
});
</script>

