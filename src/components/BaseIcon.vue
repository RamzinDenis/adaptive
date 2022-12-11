<template>
  <div v-bind="$attrs">
    <template v-if="this.$slots.default">
      <div class="icon-slot">
        <slot></slot>
      </div>
    </template>
    <component :is="svg" />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      svg: () => import(`../assets/icons/${this.name}.svg`)
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/vars.scss";

.rounded_grey {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid $light-grey;
  display: flex;
  justify-content: center;
  position: relative;
}
.icon-slot {
  align-self: center;
  position: absolute;
  display: flex;
}
.basic {
  display: flex;
  align-items: center;
}
.rounded_gradient {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: $blue-gradient;
  @include flexCenter;
  box-shadow: $blue-shadow;
  justify-content: center;
  position: absolute;
  bottom: -30px;
  left: 50%;
  margin-left: -30px;
  opacity: 0;
  @include transitionLinear;
}
</style>
