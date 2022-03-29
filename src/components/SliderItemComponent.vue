<template>
  <div class="slider__item swiper-slide slider-item-wrapper" @click="selectItem(userItem)">
    <div class="item-slider" :class="{'item-slider--active': isSelect}">
      <div class="item-slider__img">
        <img :src="`https://i.pravatar.cc/150?img=${userItem.id}`" alt="">
      </div>
      <h3 class="item-slider__name">{{userItem.name}}</h3>
      <p class="item-slider__role">{{userItem.company['name']}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userItem: {
      type: Object,
      required: true
    },
    isSelect: {
      type: Boolean,
      default: false
    }

  },
  methods: {
    selectItem(userItem){
      this.$emit('onSelected', userItem);
    }
  }

}
</script>

<style scoped lang="scss">
.item-slider{
  cursor: pointer;
  &__img{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 0 19px 0;
    img{
      flex: 0 0 100%;
    }
  }
  &__name{
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
    color: #384758;
  }
  &__role{
    font-size: 18px;
    line-height: 1.5;
  }
  &--active{
    color:  #FE8700;
    .item-slider__img{
      border-bottom: 5px solid #FE8700;
    }
    .item-slider__name{
      color:  #FE8700;
    }
  }
}
</style>