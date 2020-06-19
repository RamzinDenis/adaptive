<template>
  <div>
    <header class="subject">
      <div class="dot"></div>
      <h3 class="subject__title">{{ mainTitle }}</h3>
    </header>

    <main class="main">
      <section
        class="cards-container"
        :style="isShowAll ? 'flex-wrap :  wrap; justify-content: center' : ''"
      >
        <Card :card="card" v-for="card in cards" :key="card.id" />

        <div class="tablet-bar" v-if="$mq === 'tablet'" @click="onToggle">
          <div class="tablet-bar__lines">
            <div
              v-for="(item, index) in 2"
              class="tablet-bar__line"
              :key="index"
            ></div>
          </div>
          <p class="tablet-bar__text">{{ showAllText }}</p>
        </div>
      </section>

      <div
        class="mobile-dots"
        v-if="
          ($mq === 'mobile' && this.isShowAll === false) ||
            ($mq === 'md' && this.isShowAll === false)
        "
      >
        <div
          class="dot dot_gold"
          v-for="(item, index) in response"
          :key="item.id"
          :style="index + 1 === currentCard ? 'background-color: #b19b69' : ''"
          @click="handleMobileDotClick(index)"
        ></div>
      </div>

      <div class="divider">
        <div class="divider__line"></div>
        <BaseButton
          class="button_white"
          :text="mobileBtnText"
          @btn-onClick="mobileOnToggle"
        />
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
      isShowAll: false,
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
      if (this.$mq === "mobile" || this.$mq === "md") {
        return this.isShowAll === true
          ? this.response
          : this.response.slice(this.currentCard - 1, this.currentCard);
      }
      return this.$mq === "tablet" && this.isShowAll === false
        ? this.response.slice(0, 2)
        : this.response;
    },
    showAllText() {
      return this.isShowAll ? "Спрятать проекты" : "Смотреть все проекты";
    },
    mobileBtnText() {
      return this.$mq === "mobile" || this.$mq === "md" ? this.showAllText : "";
    },
    mainTitle() {
      return this.$mq === "mobile"
        ? "те, кому Сейчас необходимо помочь"
        : "проекты, которым необходимо помочь";
    }
  },
  methods: {
    onToggle() {
      this.isShowAll = !this.isShowAll;
    },
    handleMobileDotClick(index) {
      this.currentCard = index + 1;
    },
    mobileOnToggle() {
      if (this.$mq === "mobile" || this.$mq === "md") {
        this.onToggle();
        this.isShowAll === false ? window.scrollTo(0, 0) : "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cards-container {
  @include flexBetween;
  @include container;
  max-width: calc(1110px + 40px);
  flex-wrap: wrap;
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
      width: 58px;
      margin-left: 20px;
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
    background-color: $gold-pale;
    margin-right: 20px;
  }
  /* When screen no longer can container more than 1 card */
  @media screen and (max-width: 729px) and (min-width: 600px) {
    .cards-container {
      flex-wrap: nowrap;
    }
  }
  @media screen and (max-width: 600px) and (min-width: 414px) {
    .cards-container {
      justify-content: center;
    }
    .tablet-bar {
      display: none;
    }
  }

  @media screen and (max-width: 414px) {
    .subject,
    .main {
      padding: 0 20px;
    }
  }
}

@media screen and(max-width: 1110px) and (min-width: 768px) {
  .cards-container {
    justify-content: center;
  }
}
</style>
