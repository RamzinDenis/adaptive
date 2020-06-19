<template>
  <div class="slider">
    <div class="slider__container">
      <transition-group name="reorder" tag="div" class="slider__items">
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
      <BaseButton
        class="button_gold"
        :text="mobileBtnText"
        :icon="$mq === 'mobile' ? true : false"
      >
        <BaseIcon name="heart" />
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sliderData: {
      type: Array,
      required: true,
      validator: value => {
        const keys = ["text", "title", "id"];
        const objKeys = value.map(item => Object.keys(item));
        return objKeys.flat().every(key => keys.includes(key));
      }
    }
  },
  data() {
    return {
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
    handleSliderClick() {
      let tmp = this.localData.shift();
      setTimeout(() => this.localData.push(tmp), 0);
    }
  },
  computed: {
    mobileBtnText() {
      return this.$mq === "mobile"
        ? `рассчитать ${this.localData[this.currentItem].title.toLowerCase()}`
        : "";
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
}

.reorder-move {
  transition: transform 1.5s ease;
}

@media screen and (max-width: 768px) {
  .slider {
    flex-direction: column;
    &__items {
      display: flex;
      position: relative;
    }
    &__item {
      min-width: 241px;
      margin-right: 10px;
      margin-bottom: 45px;
    }
    &__arrow-icon {
      transform: rotate(-90deg);
      left: 95%;
      top: 50%;
      margin-top: -35px;
    }
  }
}
@media screen and (max-width: 730px) {
  .slider__item {
    min-width: 220px;
  }
}
@media screen and (max-width: 414px) {
  .slider {
    &__item {
      @include mobile-h1;
      min-width: auto;
      margin-right: 40px;
    }
    &__text {
      @include mobile-text;
      font-weight: 300;
    }
    &__arrow-icon {
      left: 90%;
      margin-top: -20px;
    }
  }
}
@media screen and (max-width: 360px) {
  .slider__item {
    margin-right: 25px;
  }
}
</style>
