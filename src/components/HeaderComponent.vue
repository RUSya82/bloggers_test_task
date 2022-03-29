<template>
  <header class="header">
    <div class="header__container">
      <site-header-component text="Наши топ-блогеры"/>
      <p class="header__subtitle">
        Лучше специалисты в своем деле,
        средний&nbsp;опыт работы в профессии - 27&nbsp;лет
      </p>
    </div>
  </header>
</template>

<script>
import SiteHeaderComponent from "@/components/SiteHeaderComponent";
export default {
  components: {SiteHeaderComponent}
}
</script>

<style scoped lang="scss">
.header{
  &__title {
    &:not(:last-child) {
      margin-bottom: 47px;
    }
  }
  &__container {
    padding: 55px 30px 15px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__subtitle {
    max-width: 400px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
  }
}
</style>