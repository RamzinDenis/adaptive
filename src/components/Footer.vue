<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="subject">
        <div class="dot"></div>
        <h3 class="subject__title">О пожертвованиях</h3>
      </div>

      <Slider :sliderData="mergeSliderData()" />
    </div>
  </footer>
</template>

<script>
import Slider from "./Slider";
export default {
  components: {
    Slider
  },
  data() {
    return {
      sliderData: [
        {
          title: "Садака",
          text: `один из пяти столпов ислама, обязательный ежегодный налог в исламском праве, выплачиваемый с различного вида доходов 
            и имущества (движимого и недвижимого) всеми самостоятельными, свободными, дееспособными и взрослыми мусульманами 
            в пользу нуждающихся единоверцев. Согласно шариату, его выплата означает, что полученные доходы и нажитое богатство не являются греховными. 
            Точные размеры закята, как и то на какие виды собственности он распространяется, являются предметом дискуссий среди знатоков мусульманского права`,
          id: 1
        },
        {
          title: "Закят",
          text: `Закят выплачивается в конце каждого «закятного» года по всему тому имуществу, которое облагается закятом,
           если его стоимость больше или равна размеру нисаба (эквивалентно 85 граммам золота). 
          К закятооблагаемому имуществу в основном относятся золотые и серебряные изделия, деньги, дивиденды, дебиторская задолженность и товарные запасы.`,
          id: 2
        },
        {
          title: "Фитр",
          text: `Фитр-садака является одним из условий принятия поста в месяц Рамадан. 
          Выплачивается от всех членов семьи (в том числе грудных детей) до начала праздничной молитвы Ураза-байрам 24 мая 2020 года до 07:00 утра. 
          Сумма (в зависимости от благосостояния семьи): 100 руб. — для малоимущих; 300 руб. — людей среднего достатка; от 500 руб. и выше — для состоятельных.`,
          id: 3
        }
      ]
    };
  },
  methods: {
    mergeSliderData() {
      const remainingData = [...this.sliderData].map((item, index) => ({
        ...item,
        id: index + 4
      }));
      const tmp = remainingData[2];
      remainingData[2] = remainingData[1];
      remainingData[1] = tmp;
      return [...this.sliderData, ...remainingData];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/vars.scss";

.footer {
  min-height: 529px;
  background-color: $blue;
  color: $white;
  height: fit-content;

  &__container {
    @include container;
    padding-top: 80px;
  }
}
@media screen and (max-width: 1100px) {
  .footer {
    padding: 80px 40px 0px 40px;
  }
}
@media screen and (max-width: 414px) {
  .footer {
    padding: 0px 20px;
    min-height: 630px;
    &__container {
      padding-top: 60px;
    }
  }
}
</style>
