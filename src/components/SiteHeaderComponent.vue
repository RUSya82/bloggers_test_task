<template>
  <h1 class="header__title site-header">{{text}}</h1>
</template>

<script>
export default {
  props: {
    text: {
      required: true
    }
  }

}
</script>

<style scoped lang="scss">
  .site-header{
    font-weight: 600;
    font-size: 48px;
    color: #384758;
    line-height: 1.2;
    @media (max-width: 768px){
      font-size: 36px;
    }
    @media (max-width: 580px){
      font-size: 25px;
    }
  }
</style>