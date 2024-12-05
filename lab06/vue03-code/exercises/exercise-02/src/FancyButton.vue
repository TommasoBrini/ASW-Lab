<script>
export default {
    data(){
        return {
            count: 0,
        }
    },
    props: {id: String, moltiplicator: Number, lastClicked: Boolean},
    emits: ['increment'],
    methods: {
        increment(){
            this.count++;
            this.$emit('increment', this.id, this.moltiplicator);
        }
    } 
}

</script>

<template>
    <button 
        @click="increment"        
        :id=id 
        :class = "lastClicked ? 'bg-green-500' : 'bg-blue-500'"
        class="my-14 px-4 py-2 text-white rounded">
        <slot></slot>[x{{ moltiplicator }}] ( {{count}} click)
    </button>
</template>
