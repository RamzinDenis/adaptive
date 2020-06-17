<template>
  <div class="card">
    <Image />
    <h2 class="text bold"></h2>
    <p class="text"></p>
    <RemaingSumInfo />
    <BaseTag />
    <BaseTag />
  </div>
</template>

<script>
import Image from "./Image";
import RemaingSumInfo from "./RemaingSumInfo";
export default {
  components: {
    Image,
    RemaingSumInfo
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 450px;
  height: auto;
}
</style>
