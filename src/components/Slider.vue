<template>
  <div class="slider">
    <div class="slider__container">
      <transition-group name="reorder" tag="div">
        <h2
          class="slider__item"
          v-for="(item, index) in localData"
          :key="item.id"
          :style="getSliderItemStyles(index)"
        >
          {{ item.title }}
        </h2>
      </transition-group>
      <div class="slider__arrow-icon" @click="handleSliderClick">
        <BaseIcon name="arrow-down" />
      </div>
    </div>
    <div class="slider__body">
      <div class="slider__text" :key="localData[currentItem].id">
        {{ localData[currentItem].text }}
      </div>
      <BaseButton class="button_gold" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sliderData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPos: 0,
      currentItem: 1,
      lastItem: 4,
      localData: this.sliderData
    };
  },
  methods: {
    getSliderItemStyles(index) {
      let opacity = index > this.currentItem ? "0.5" : "";
      opacity = index === this.lastItem ? "0.17" : opacity;

      return {
        color: index === this.currentItem ? "white" : "",
        opacity
      };
    },
    getSliderItemsStyle() {
      return {
        "margin-top": this.currentPos + "px"
      };
    },
    handleSliderClick() {
      let tmp = this.localData.shift();
      setTimeout(() => this.localData.push(tmp), 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  @include flexBetween;

  &__arrow-icon {
    position: absolute;
    bottom: 55px;
    height: fit-content;
    left: 20px;
    cursor: pointer;
  }

  &__container {
    overflow: hidden;
    max-height: 380px;
    position: relative;
  }

  &__item {
    @include h1;
    margin: 0;
    margin-bottom: 20px;
    color: $light-blue;
    transition: color 1s ease;
  }
  &__body {
    flex-basis: 68.4%;
  }
  &__text {
    @include body-copy;
    font-weight: 300;
    margin-bottom: 40px;
    overflow: hidden;
    @include fadeIn;
  }
  .reorder-move {
    transition: transform 1.5s ease;
  }
}
</style>
