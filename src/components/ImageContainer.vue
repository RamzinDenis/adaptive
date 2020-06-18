<template>
  <div class="img-container" :style="cssProps">
    <div class="img-container__shadow"></div>

    <div class="img-container__content">
      <img
        class="img-container__title"
        :src="require(`../${imageData.fund}`)"
      />
      <div class="img-container__geo">
        <BaseIcon name="geo" class="basic" />
        <span class="img-container__geo-text">{{ imageData.location }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageData: {
      type: Object,
      required: true,
      validator: value => {
        const keys = ["src", "fund", "location"];
        return Object.keys(value).every(key => keys.includes(key));
      }
    }
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require(`../${this.imageData.src}`)})`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.img-container {
  background-image: url("../assets/images/children.png");
  height: 180px;
  @include flex;
  position: relative;
  border-radius: 0px 10px 10px 10px;

  &__content {
    flex-direction: column;
    @include flexBetween;
    margin: 10px;
  }
  &__geo {
    @include flexCenter;
    &-text {
      color: $white;
      margin-left: 7px;
      @include h5;
    }
  }
  &__shadow {
    height: 180px;
    width: 100%;
    position: absolute;
    z-index: -2;
    right: -20px;
    bottom: -20px;

    background-color: $invisible-grey;
  }
}
@media screen and (max-width: 768px) {
  .img-container {
    height: 160px;
    &__shadow {
      height: 160px;
    }
  }
}
</style>
