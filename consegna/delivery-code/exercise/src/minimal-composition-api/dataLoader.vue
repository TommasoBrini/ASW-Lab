<script>
import axios from 'axios';

export default {
    emits: ['data-loaded'],
    async created() {
        try {
            const response = await axios.get('http://localhost:3000/the_office_series.json');
            console.log(response.data);
            this.$emit('data-loaded', response.data);
        } catch (error) {
            console.error('Errore nel caricamento del dataset:', error);
        }
    },
}
</script>



