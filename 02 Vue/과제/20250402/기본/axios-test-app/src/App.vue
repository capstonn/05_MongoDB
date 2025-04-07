<template>
  <div><h2>콘솔 확인</h2></div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = () => {
  // const url = 'http://localhost:3000/todos/1';
  const url = '/api/todos/1';
  axios.get(url).then((response) => {
    console.log('# 응답 객체 :', response);
  });
};

requestAPI();
</script>
