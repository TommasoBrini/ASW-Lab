const crypto = {
    template: `
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center">Crypto Prices</h3>
                    <div v-if="loading" class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div v-else>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="crypto in cryptos" :key="crypto.id">
                                <strong>{{ crypto.name }}</strong>: {{ crypto.price_usd }} USD
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            cryptos: [],
            loading: true
        }
    },
    mounted() {
        this.fetchCryptoPrices();
    },
    methods: {
        fetchCryptoPrices() {
            axios.get('https://api.coinlore.net/api/tickers/')
            .then(response => {
                this.cryptos = response.data.data;
            })
            .finally(() => {
                this.loading = false;
            });
        }
    }
};