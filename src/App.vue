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

<style lang="scss">
body {
  font-family: "Rubik", sans-serif;
}
p {
  margin: 0;
}
.subject {
  @include container;
  display: flex;
  margin-bottom: 50px;
  align-items: flex-start;
}
.subject__title {
  @include h3;
  margin: 0;
  margin-left: 20px;
}

.dot {
  @include transitionLinear;
  width: 10px;
  height: 10px;
  background-color: $red;
  border-radius: 50%;
  display: flex;
  align-self: center;
  cursor: pointer;
}
@media screen and (max-width: 414px) {
  .subject {
    margin-bottom: 20px;
    &__title {
      font-size: 10px;
      line-height: 30px;
      @include upperCaseBold;
    }
  }
}
</style>
