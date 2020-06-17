<template>
  <div>
    <header>
      <div class="dot"></div>
      <h3>Название</h3>
    </header>
    <main>
      <section class="cards__container">
        <Card />
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
        // this.cards = result;
      })
      .catch(err => (this.err = err.toString()));
  }
};
</script>

<style lang="scss" scoped></style>
