<template>
  <div>
    <header class="subject">
      <div class="dot"></div>
      <h3 class="subject__title">Люди которым необходимо помочь</h3>
    </header>
    <main>
      <section class="cards-container">
        <Card :card="card" v-for="card in cards" :key="card.id" />
      </section>
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
        console.log(result);
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
.subject {
  @include container;
  display: flex;
}
.subject__title {
  @include h3;
}
</style>
