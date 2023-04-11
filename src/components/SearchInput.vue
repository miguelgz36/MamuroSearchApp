<template>
    <div>
        <input type="text" v-model="text"/>
        <button @click="updateText(text)">Get</button>
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