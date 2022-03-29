<template>
  <div class="slider">
    <div class="slider__container">
      <div class="slider__buttons">
        <div class="slider__button button-slider button-slider--left"></div>
        <div class="slider__button button-slider button-slider--right"></div>
      </div>
      <div class="slider__body">
        <div class="slider__wrapper swiper-wrapper">
          <slider-item-component
              v-for="item in getUsers"
              :key="item.id"
              :userItem="item"
              :isSelect="selectedItem === item"
              @onSelected="select"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper';
import SliderItemComponent from "@/components/SliderItemComponent";

export default {
  components: {
    SliderItemComponent,

  },
  computed: {
    getUsers(){
      return this.$store.getters['getUsers']
    }
  },
  props: {
    selectedItem: {
      type: Object
    }
  },
  mounted() {
    const swiper = new Swiper('.slider__body', {
      modules: [Navigation],
      speed: 400,
      slidesPerView: 4,
      navigation: {
        prevEl: '.button-slider--left',
        nextEl: '.button-slider--right'
      },
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        270: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        580: {
          slidesPerView: 2,
        },
        // when window width is >= 768
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },

      }
    });
  },
  methods: {
    select(obj){
      this.$emit('onSliderItemSelect', obj);
    }
  }

}
</script>

<style scoped lang="scss">
.slider-item-wrapper{
  padding: 0 17px;
}
.slider{
  padding: 16px 20px 0 20px;
  &__buttons{
    display: flex;
    justify-content: center;
    column-gap: 20px;
    margin: 0 0 20px 0;
  }
  &__body{
    overflow: hidden;
  }
}
.button-slider{
  width: 48px;
  height: 48px;
  background-color: #FE8700;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    -webkit-box-shadow: 6px 6px 8px -2px rgba(34, 60, 80, 0.4);
    -moz-box-shadow: 6px 6px 8px -2px rgba(34, 60, 80, 0.4);
    box-shadow: 6px 6px 8px -2px rgba(34, 60, 80, 0.4);
  }
  &--left{
    background: url("../assets/img/arrow-left.svg") center no-repeat;
  }
  &--right{
    background: url("../assets/img/arrow-right.svg") center no-repeat;
  }
}
</style>