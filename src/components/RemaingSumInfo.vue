<template>
  <div class="remaining-sum">
    <BaseIcon name="percentage-min" class="rounded_grey">
      <span class="icon-text green">37%</span>
    </BaseIcon>

    <!-- 90%, flex between -->
    <div class="remaining-sum__value">
      <div class="remaining-sum__item">
        <p class="remaining-sum__text">необходимо собрать</p>
        <p class="remaining-sum__total">
          <span class="remaining-sum__total green">45 194 </span>
          <span class="remaining-sum__total">из 1 000 000 RUB</span>
        </p>
      </div>

      <div class="remaining-sum__item">
        <p class="remaining-sum__text">конец</p>
        <span class="remaining-sum__total">завтра</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.remaining-sum {
  @include flex;
  &__value {
    width: 70%;
    @include flexBetween;
    align-items: center;
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
.icon-text {
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  @include upperCaseBold;
}
</style>
