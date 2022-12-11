<template>
  <button v-bind="$attrs" class="button" @click="$emit('btn-onClick')">
    <template v-if="icon === true">
      <div class="button__icon-container">
        <slot></slot>
      </div>
    </template>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    icon: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/vars.scss";

.button {
  @include flexCenter;
  justify-content: center;
  cursor: pointer;
  &__icon-container {
    position: absolute;
  }
}
.button_white {
  @include transitionLinear;
  background-color: $white;
  box-shadow: $button-shadow;
  height: 40px;
  min-width: 201px;
  border-radius: 40px;
  margin: 0px 10px;
  border: none;
  color: $gold-bright;

  &:hover {
    background-color: #f3f3f3;
  }
  &:active {
    box-shadow: none;
  }
}
.button_gold {
  width: 198px;
  height: 80px;
  border-radius: 10px;
  background-image: $gold-gradient;
  border: none;
  color: white;
  &:hover {
    background: $gold-bright;
  }
}
@media screen and (max-width: 414px) {
  .button_white,
  .button_gold {
    @include h4;
    font-weight: 500;
  }
  .button_gold {
    height: 60px;
    width: 268px;
    margin: 0 auto;
  }
}
</style>
