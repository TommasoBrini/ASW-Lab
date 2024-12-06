<script>
import axios from 'axios';

export default {
    emits: ['data-loaded'],
    created() {
        axios.get('http://localhost:3000/the_office_series.json').then(response => {
            const limitedData = response.data.slice(0, 50);
            this.$emit('data-loaded', limitedData);
        });
    },
}
</script>



