<template>
  <button v-bind="$attrs" class="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  @include flexCenter;
  justify-content: center;
}
.button_white {
  background-color: $white;
  box-shadow: $button-shadow;
  height: 40px;
  width: 201px;
  border-radius: 40px;
  margin: 0px 10px;
  border: none;
}
.button_gold {
  width: 198px;
  height: 80px;
  border-radius: 10px;
  background-image: $gold-gradient;
  border: none;
}
</style>
