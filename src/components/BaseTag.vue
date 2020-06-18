<template>
  <div class="tag">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  color: $dark-grey;
  @include body-copy_3;
  padding: 2px 12px;
  border: 1px solid $light-grey;
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: $invisible-grey;
  }
  & + & {
    margin-left: 10px;
  }
}
</style>
