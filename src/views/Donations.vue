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
  margin-bottom: 40px;
  align-items: flex-start;
}
.subject__title {
  @include h3;
  margin: 0;
  margin-left: 20px;
}
.dot {
  width: 10px;
  height: 10px;
  background-color: $red;
  border-radius: 50%;
  display: flex;
  align-self: center;
}
</style>
