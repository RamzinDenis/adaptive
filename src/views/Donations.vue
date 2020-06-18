<template>
  <div>
    <header class="subject">
      <div class="dot"></div>
      <h3 class="subject__title">Проекты, которым необходимо помочь</h3>
    </header>
    <main>
      <section class="cards-container">
        <Card :card="card" v-for="card in cards" :key="card.id" />
      </section>
      <div class="divider">
        <div class="divider__line"></div>
        <BaseButton class="button_white" />
        <div class="divider__line"></div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import callApi from "../services/api";
export default {
  components: {
    Card,
    Footer
  },
  data() {
    return {
      cards: [],
      error: ""
    };
  },
  created() {
    callApi
      .getCards()
      .then(data => data.json())
      .then(result => {
        this.cards = result;
      })
      .catch(err => (this.err = err.toString()));
  }
};
</script>

<style lang="scss" scoped>
.cards-container {
  @include flexBetween;
  @include container;
  max-width: calc(1110px + 40px);
}

.divider {
  @include flexCenter;
  @include container;
  height: fit-content;
  margin-top: 76px;
  margin-bottom: 100px;

  &__line {
    background-color: $gold;
    height: 1px;
    flex-basis: 40%;
  }
}
</style>
