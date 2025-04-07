<template>
  <div>
    <h3>Calc4</h3>
    X : <input type="text" v-model.number="state.x" /> <br />
    Y : <input type="text" v-model.numver="state.y" /> <br />

    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Calc3',
  setup() {
    const state = reactive({ x: 10, y: 20 });

    const result = computed(() => {
      return state.x + state.y;
    });

    return { state, result };
  },
};
</script>
