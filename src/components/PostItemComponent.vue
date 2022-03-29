<template>
  <div class="posts__item item-post">
    <h3 class="item-post__header">{{postItem.title}}</h3>
    <p class="item-post__content">
      {{postItem.body}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    }
  }

}
</script>

<style scoped lang="scss">
.item-post{
  &__header{
     font-weight: 500;
     font-size: 24px;
     line-height: 1.16666;
     color: #384758;
     margin-bottom: 7px;
   }
  &__content{
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    color: #606F81;
  }
}
@media (max-width: 580px){
  .item-post__header{
    font-size: 20px;
  }
  .item-post__content{
    font-size: 16px;
  }
}
</style>