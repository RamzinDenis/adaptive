<template>
  <div class="remaining-sum">
    <BaseIcon :name="remainingSum.iconName" class="rounded_grey">
      <span :class="getIconColor">{{ remainingSum.percentages }}</span>
    </BaseIcon>

    <div class="remaining-sum__value">
      <div class="remaining-sum__item">
        <p class="remaining-sum__text">необходимо собрать</p>
        <p class="remaining-sum__total">
          <span class="remaining-sum__total green"
            >{{ remainingSum.current }}
          </span>
          <span class="remaining-sum__total"
            >из {{ remainingSum.total }} RUB</span
          >
        </p>
      </div>

      <div class="remaining-sum__item">
        <p class="remaining-sum__text">конец</p>
        <span class="remaining-sum__total">{{ remainingSum.deadline }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    remainingSum: {
      type: Object,
      required: true,
      validator: value => {
        const keys = [
          "percentages",
          "iconName",
          "total",
          "current",
          "deadline"
        ];
        return Object.keys(value).every(key => keys.includes(key));
      }
    }
  },
  computed: {
    getIconColor() {
      return parseInt(this.remainingSum.percentages) > 60
        ? "white icon-text"
        : "green icon-text";
    }
  }
};
</script>

<style lang="scss" scoped>
.remaining-sum {
  @include flex;
  &__value {
    width: 75%;
    @include flexBetween;
    align-items: flex-start;
    margin-left: 10px;
    color: $dark-grey;
  }
  &__text {
    @include body-copy_sm;
  }
  &__total {
    @include body-copy_3;
    font-weight: bold;
  }
  &__text:nth-child(1) {
    margin-bottom: 5px;
  }
}
.green {
  color: $green;
}
.white {
  color: $white;
}
.icon-text {
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  @include upperCaseBold;
}
@media screen and (max-width: 600px) {
  .remaining-sum__total {
    max-width: 144px;
  }
}
</style>
