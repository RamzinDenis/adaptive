<template>
  <div class="icon-wrapper">
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
.icon-wrapper {
  display: inline-flex;
  align-items: flex-end;
}
</style>
