<script>
import axios from 'axios';

export default {
    emits: ['data-loaded'],
    created() {
        axios.get('http://localhost:3000/the_office_series.json').then(response => {
            console.log(response.data);
            this.$emit('data-loaded', response.data);
        });
    },
}
</script>



