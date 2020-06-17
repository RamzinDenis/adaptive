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
</style>
