<template>
  <div>
    <header class="subject">
      <div class="dot"></div>
      <h3 class="subject__title">Проекты, которым необходимо помочь</h3>
    </header>

    <main class="main">
      <section class="cards-container">
        <Card :card="card" v-for="card in cards" :key="card.id" />

        <div
          class="tablet-bar"
          v-if="$mq === 'tablet'"
          @click="toggleTabletItems"
        >
          <div class="tablet-bar__lines">
            <div
              v-for="(item, index) in 2"
              class="tablet-bar__line"
              :key="index"
            ></div>
          </div>
          <p class="tablet-bar__text">Смотреть все проекты</p>
        </div>
      </section>
      <div class="mobile-dots" v-if="$mq === 'mobile'">
        <div class="dot dot_gold" v-for="item in response" :key="item.id"></div>
      </div>
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
      response: [],
      error: "",
      showAllTablet: false,
      currentCard: 1
    };
  },
  created() {
    callApi
      .getCards()
      .then(data => data.json())
      .then(result => {
        this.response = result;
      })
      .catch(err => (this.err = err.toString()));
  },
  computed: {
    cards() {
      if (this.$mq === "mobile") {
        return this.response.slice(this.currentCard - 1, this.currentCard);
      }
      return this.$mq === "tablet" && !!this.showAllTablet === false
        ? this.response.slice(0, 2)
        : this.response;
    }
  },
  methods: {
    toggleTabletItems() {
      this.showAllTablet = !this.showAllTablet;
    }
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

@media screen and (max-width: 768px) {
  .cards-container {
    flex-wrap: wrap;
    position: relative;
  }
  .subject,
  .main {
    padding: 0 40px;
  }
  .tablet-bar {
    @include flexCenter;
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 82px;
    flex-direction: column;
    &__text {
      @include h4;
      color: $gold-bright;
    }
    &__lines {
      @include flexBetween;
      width: 40px;
    }
    &__line {
      height: 2.27px;
      width: 10px;
      margin-bottom: 11px;
      background-color: $gold-bright;
    }
  }
  .mobile-dots {
    @include flexCenter;
    justify-content: center;
  }
  .dot_gold {
    background-color: $gold-bright;
    margin-right: 20px;
  }
  /* When screen no longer can container more than 1 card */
  @media screen and (max-width: 729px) {
    .tablet-bar {
      display: none;
    }
  }
}
</style>
