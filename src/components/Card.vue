<template>
  <div class="card">
    <!-- add wrapper because transform causing z-index issue -->
    <div class="wrapper">
      <ImageContainer />
    </div>

    <h2 class="card__title">{{ title }}</h2>
    <p class="card__text">{{ text }}</p>

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
  data() {
    return {
      text:
        "Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена",
      title: "Сбор средств для постойки школ в Индонезии "
    };
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
