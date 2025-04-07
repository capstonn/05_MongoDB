<template>
  <div class="child">
    <h2>Child2</h2>
  </div>
</template>

<script>
export default {
  name: 'child2',
};
</script>

<!-- 적용을 현재 컴포넌트에만! -->
<style scoped>
.child {
  background-color: blue;
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
