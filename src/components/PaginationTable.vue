<template>
  <div class="pagination flex items-center justify-center my-4">
    <button :disabled="currentPage === 1" class="px-2 py-1 rounded border border-gray-300 bg-white mr-2"
      @click="setCurrentPage(currentPage - 1)">
      Prev
    </button>
    <button v-for="page in displayedPages" :key="page" :class="[
      'px-2 py-1 rounded border border-gray-300 bg-white mr-2',
      page === currentPage ? 'bg-blue-500 text-white' : ''
    ]" @click="setCurrentPage(page)">
      {{ page }}
    </button>
    <button :disabled="currentPage === totalPages" class="px-2 py-1 rounded border border-gray-300 bg-white ml-2"
      @click="setCurrentPage(currentPage + 1)">
      Next
    </button>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'PaginationTable',
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 15,
    },
    maxDisplayedPages: {
      type: Number,
      default: 10,
    },
  },
  setup(props, { emit }) {
    const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
    console.log(totalPages.value)
    const displayedPages = computed(() => {
      const halfMaxPages = Math.floor(props.maxDisplayedPages / 2);
      let startPage = Math.max(1, props.currentPage - halfMaxPages);
      let endPage = Math.min(totalPages.value, startPage + props.maxDisplayedPages - 1);
      if (endPage - startPage + 1 < props.maxDisplayedPages) {
        startPage = Math.max(1, endPage - props.maxDisplayedPages + 1);
      }
      return [...Array(endPage - startPage + 1)].map((_, i) => startPage + i);
    });

    function setCurrentPage(page: number) {
      if (page >= 1 && page <= totalPages.value) {
        emit('update-currentPage', page);
      }
    }

    return {
      totalPages,
      displayedPages,
      setCurrentPage,
    };
  },
});
</script>
  
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>