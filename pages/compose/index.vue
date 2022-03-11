<template>
    <div class="flex-col w-full h-full space-y-5">
        <h1 class="text-2xl font-bold text-center">Create a New Docker Compose File</h1>
        <div class="flex justify-center space-x-3">
            <a href="#" id="tabBase" @click="changeTab" class="active hover:text-blue-500 transition ease-in-out duration-150 px-2">Bases</a>
            <a href="#" id="tabCont" @click="changeTab" class="hover:text-blue-500 transition ease-in-out duration-150 px-2">Containers</a>
            <a href="#" id="tabNet" @click="changeTab" class="hover:text-blue-500 transition ease-in-out duration-150 px-2">Networks</a>
            <a href="#" id="tabVol" @click="changeTab" class="hover:text-blue-500 transition ease-in-out duration-150 px-2">Volumes</a>
        </div>
        <div>
            <div id="bases" class="flex-grow h-full grid grid-cols-3 gap-5">
                <div class="p-5 flex flex-col space-y-3 col-span-2 border-r border-gray-500">
                    <h2 class="font-bold text-xl">Images</h2>
                    <div class="grid grid-cols-2 gap-3">
                        <BaseCard v-for="base in bases" :key="base.id" :container="base" />
                    </div>
                </div>
                <div class="p-5 space-y-3">
                    <div class="flex justify-between">
                        <h2 class="font-bold text-xl">Selected Bases</h2>
                        <p @click="clearList" class=" cursor-pointer text-red-600 px-2 underline">Clear</p>
                    </div>
                    <div class="flex flex-col space-y-3">
                        <BaseListItem v-for="base in containers" :key="base.id" :name="base.name" :id="base.id" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            netwoks: [],
            volumes: [],
            bases: [
                {
                    id: 1,
                    name: 'Test image 1',
                    description: 'Test image 1',
                    image: 'ubuntu:latest'
                },
                {
                    id: 2,
                    name: 'Test image 2',
                    description: 'Test image 2',
                    image: 'helloworld:latest'
                },
                {
                    id: 3,
                    name: 'Splunk Enterprise',
                    description: 'Test image 1',
                    image: 'splunk/splunk:latest',
                    envVars: [
                        "SPLUNK_START_ARGS",
                        "SPLUNK_PASSWORD"
                    ]
                }
            ],
            active: 'tabBase'
        }
    },
    computed: {
        containers() {
            return this.$store.state.containers
        }
    },
    methods: {
        changeTab(e: any) {
            const newEl = e.target;
            const oldEl = document.getElementById(`${this.active}`);

            oldEl?.classList.toggle('active');
            newEl?.classList.toggle('active');

            this.active = newEl.id;
        },
        clearList() {
            this.$store.dispatch('clearContainers');
        }
    }
})
</script>