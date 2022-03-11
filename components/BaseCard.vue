<template>
    <div class="w-auto h-auto flex flex-col space-y-2 rounded-lg border border-gray-500 p-3">
        <div>
            <h3 class="font-semibold text-lg">{{ container.name }}</h3>
            <p class="text-sm font-thin">{{ container.image }}</p>
        </div>
        <p>{{ container.description }}</p>
        <button @click="addToCompose" class="cursor-pointer border w-16 py-1 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition ease-in-out duration-150">Add</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        container: Object
    },
    methods: {
        addToCompose () {
            const container = {
                id: this.container.id,
                name: `${this.container.name}`,
                description: `${this.container.description}`,
                image: `${this.container.image}`,
                envVars: this.container.envVars || []
            }

            this.$store.dispatch('addContainer', container);
        }
    }
})
</script>