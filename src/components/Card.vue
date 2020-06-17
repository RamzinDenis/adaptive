<template>
  <div class="card">
    <!-- add wrapper because transform causing z-index issue -->
    <div class="wrapper">
      <ImageContainer :imageData="card.imageData" />
    </div>

    <h2 class="card__title">{{ card.title }}</h2>
    <p class="card__text">{{ card.text }}</p>

    <RemaingSumInfo />
    <div class="tag-container">
      <BaseTag text="помощь нуждающимся" />
      <BaseTag text="закят" />
    </div>
  </div>
</template>

<script>
import ImageContainer from "./ImageContainer";
import RemaingSumInfo from "./RemaingSumInfo";
export default {
  components: {
    ImageContainer,
    RemaingSumInfo
  },
  props: {
    card: {
      type: Object,
      required: true,
      validator: value => {
        const { imageData, remainingSum, tags, ...rest } = value;

        const keys = [
          "imageData",
          "title",
          "text",
          "remainingSum",
          "tags",
          "id"
        ];
        const keysChecked = Object.keys(value).every(
          (key, index) => key === keys[index]
        );

        const subObjects = [
          ...Object.values(imageData),
          ...Object.values(remainingSum),
          ...tags
        ];
        const objectsChecked = subObjects.every(
          item => typeof item === "string"
        );
        const otherPropsChecked = Object.values(rest).every(
          item => typeof item === "string"
        );

        return objectsChecked && otherPropsChecked && keysChecked;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 320px;
  padding: 0 20px 50px 20px;
  height: auto;
  transition: background-color 0.3s linear;
  &__text {
    margin: 20px 0;
    @include body-copy;
  }
  &__title {
    margin-top: 20px;
    font-weight: 500;
    @include body-copy;
  }
  &:hover {
    background-color: $invisible-grey;
  }
}
.wrapper {
  transform: translateY(-10px);
}
.tag-container {
  @include flex;
  margin-top: 20px;
}
</style>
