
<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Certifications",
  setup() {
    const message = ref("Certificazioni");

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