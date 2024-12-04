const IncreaseCounterButton = {
    data() { return { counter: 0 } },
    template: `
        <button @click="counter++">
            <StrongText />
            You clicked me: {{ counter }} times.
        </button>`,
    components: {
        'StrongText': StrongText
    }
};
