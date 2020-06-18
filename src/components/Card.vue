<template>
  <div class="card">
    <!-- add wrapper because transform causing z-index issue -->
    <div class="wrapper">
      <ImageContainer :imageData="card.imageData" />
    </div>

    <div class="tag-container" v-if="$mq === 'tablet'">
      <BaseTag v-for="tag in card.tags" :key="tag.id" :text="tag.text" />
    </div>

    <h2 class="card__title">{{ card.title }}</h2>
    <p class="card__text">{{ card.text }}</p>

    <RemaingSumInfo :remainingSum="card.remainingSum" />

    <div class="tag-container" v-if="$mq !== 'tablet'">
      <BaseTag v-for="tag in card.tags" :key="tag.id" :text="tag.text" />
    </div>
    <BaseIcon class="rounded_gradient" name="theHand" />
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
        /* its a lot easier to make it with TS */
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

        const subObjects = [imageData, remainingSum];
        const objectsChecked = subObjects.every(
          item => typeof item === "object"
        );
        const otherPropsChecked = Object.values(rest).every(
          item => typeof item === "string"
        );
        const tagsChecked = tags.map(tag =>
          Object.values(tag).every(tagProp => typeof tagProp === "string")
        );

        return (
          objectsChecked &&
          otherPropsChecked &&
          keysChecked &&
          tagsChecked.every(x => x === true)
        );
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
  @include transitionLinear;
  position: relative;
  &__text {
    margin: 20px 0;
    @include body-copy;
  }
  &__title {
    margin-top: 20px;
    margin-bottom: 0px;
    font-weight: 500;
    @include body-copy;
  }
  &:hover {
    background-color: $invisible-grey;
    .rounded_gradient {
      opacity: 1;
    }
  }
}
.wrapper {
  transform: translateY(-10px);
}
.tag-container {
  @include flex;
  margin-top: 20px;
  flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
  .card {
    width: 285px;
    margin-bottom: 60px;
    @include fadeIn;
  }
}
@media screen and (max-width: 414px) {
  .card {
    &__title,
    &__text {
      @include mobile-text;
    }
  }
}
</style>
