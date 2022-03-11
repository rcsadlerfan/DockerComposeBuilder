<template>
    <div class="flex justify-between">
        <p>{{ name }}</p>
        <p @click="deleteItem" class="text-red-600 underline cursor-pointer">X</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        id: Number,
        name: String
    },
    methods: {
        deleteItem() {
            this.$store.dispatch('deleteContainer', this.id)
        }
    }
})
</script>