<template>
  <div id="app">
    <Donations />
  </div>
</template>

<script>
import Donations from "./views/Donations";

import "normalize.css";

export default {
  name: "App",
  components: {
    Donations
  }
};
</script>

<style>
body {
  font-family: "Rubik", sans-serif;
}
p {
  margin: 0;
}
</style>
