<script setup>
// import 순서에 따라 적용되는 화면이 변화됨
// 컴포넌트별로 색이 다르게 하려면?

import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';
</script>

<template>
  <div>
    <Child1 />
    <Child2 />
    <Child3 />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { Child1, Child2, Child3 },
};
</script>
