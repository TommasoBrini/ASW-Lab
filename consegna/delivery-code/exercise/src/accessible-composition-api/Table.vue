<script setup>
import { ref } from 'vue';
import DataLoader from './dataLoader.vue';

const data = ref([]);
const loadData = (loadedData) => {
    data.value = loadedData;
}
const handleCellClick = (event) => {
  event.target.focus();
}
</script>

<template>
    <DataLoader @data-loaded="loadData" />
    <h1>Accessible Composition API Table</h1>
    <table>
      <caption>List of episodes of The Office, including date, season, title, description and ratings</caption>
    <thead>
      <tr>
          <th scope="col"></th>
          <th scope="col">Date</th>
          <th scope="col">Season</th>
          <th scope="col">EpisodeTitle</th>
          <th scope="col">About</th>
          <th scope="col">Ratings</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="episode in data" :key="episode.Index">
          <th scope="row" @click="handleCellClick"> {{ episode.Index }}</th>
          <td tabindex="0" @click="handleCellClick" >{{ episode.Date }}</td>
          <td tabindex="1" @click="handleCellClick">{{ episode.Season }}</td>
          <td tabindex="2" @click="handleCellClick">{{ episode.EpisodeTitle }}</td>
          <td tabindex="3" @click="handleCellClick">{{ episode.About }}</td>
          <td tabindex="4" @click="handleCellClick">{{ episode.Ratings }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 90%;
  margin: 0 auto;
}

th, td {
  border: 2px solid #4E5D6C; 
  padding: 10px 15px; 
  text-align: left;
}

th {
  background-color: #2C3E50;
  color: #E8F6F3;
  font-weight: bold;
}

td {
  background-color: #F8F9FA;
  color: #2C3E50;
}

caption {
  margin-bottom: 10px;
  font-weight: bold;
  text-align: left;
  color: #4E5D6C;
}

td:focus, th:focus {
  outline: 3px dashed #FF5733;
  outline-offset: 2px;
}

h1 {
  text-align: center;
  color: #0056B3;
  margin-bottom: 20px;
}

tr:hover td {
  background-color: #D1E7DD;
}
</style>