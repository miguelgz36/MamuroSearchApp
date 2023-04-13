<template>
    <div class="flex items-center justify-between">
        <input type="text" v-model="text" class="w-full h-12 py-2 px-4 rounded-lg" />
        <button @click="updateText(text)" class="py-2 px-4">Search</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['updateText'],
    setup() {
        const text = '';
        return {
            text
        };
    }
});
</script>