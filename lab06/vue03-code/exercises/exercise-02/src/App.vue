<script>
import FancyButton from './FancyButton.vue';

export default {
    components: { FancyButton },
        data() {
            return { 
                totalClicks: 0,
                lastButtonClicked: null
            }
        },
        methods: {
            incrementTotal(id, moltiplicator) {
                this.totalClicks += moltiplicator;
                this.lastButtonClicked = id;
            }
        }
}
</script>

<template>
<div class="flex flex-col items-center">
<h1 class="my-7 text-5xl font-bold text-gray-900">Total clicks</h1>
    <div class="flex space-x-4">
        <fancy-button id="0" :moltiplicator="1" v-on:increment="incrementTotal" :last-clicked="lastButtonClicked === '0'">Button 1 </fancy-button>
        <fancy-button id="1" :moltiplicator="2" v-on:increment="incrementTotal" :last-clicked="lastButtonClicked === '1'">Button 2 </fancy-button>
        <fancy-button id="2" :moltiplicator="3" v-on:increment="incrementTotal" :last-clicked="lastButtonClicked === '2'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 inline">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
            </svg>
        </fancy-button>
    </div>
    <div class="text-2xl">
        Total: {{ totalClicks }}
    </div>
</div>
</template>
