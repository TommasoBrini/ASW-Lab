<script>
import DataLoader from './dataLoader.vue';

export default {
    components: {
      DataLoader
    },
    data() {
        return {
            data: []
        };
    },
    methods: {
        dataLoaded(data) {
            this.data = data;
        }
    }
}
</script>

<template>
    <DataLoader @data-loaded="dataLoaded"/>
    <h1>Minimal Options API Table</h1>
    <table>
      <thead>
        <tr>
            <th>Data</th>
            <th>Season</th>
            <th>EpisodeTitle</th>
            <th>About</th>
            <th>Ratings</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="episode in data" :key="episode.Index">
            <td>{{ episode.Date }}</td>
            <td>{{ episode.Season }}</td>
            <td>{{ episode.EpisodeTitle }}</td>
            <td>{{ episode.About }}</td>
            <td>{{ episode.Ratings }}</td>
        </tr>
      </tbody>
    </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 3px solid #000000; 
  padding: 10px 15px; 
}

h1 {
  text-align: center;
  color: #ff0000;
  margin-bottom: 20px;
}
</style>
