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
export default {
  components: {
    Card,
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
