<script setup>
import { computed } from 'vue';
import { useCounterStore } from './stores/counter';

const store = useCounterStore();
const { increment } = store;
// const count = store.count;
const count = computer(() => store.count);
console.log(store);

increment();
</script>

<template>
  {{ store.count }}/{{ store.doubleCount }} <br />
  {{ count }}
</template>
