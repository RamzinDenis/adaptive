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
p {
  margin: 0;
}
</style>
