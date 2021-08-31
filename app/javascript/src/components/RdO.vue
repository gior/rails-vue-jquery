
<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
import { ref } from "vue";

export default {
  name: "RdO",
  setup() {
    const message = ref("Protocolli");

    return {
      message,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>