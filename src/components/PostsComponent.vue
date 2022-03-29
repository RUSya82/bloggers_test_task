<template>
  <div class="posts">
    <div class="posts__container">
      <div class="posts__image">
        <img src="@/assets/img/posts-tilda.svg" alt="">
      </div>
      <div class="posts__content">
        <div class="posts__header">
          <site-header-component :text="`3 актуальных поста ${selectedPost['name']}`" />
        </div>
        <div class="posts__items">

          <post-item-component
              v-for="item in userPosts"
              :key="item.id"
              :postItem="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeaderComponent from "@/components/SiteHeaderComponent";
import PostItemComponent from "@/components/PostItemComponent";

export default {
  components:{
    SiteHeaderComponent,
    PostItemComponent
  },
  props:{
    userPosts: {
      type: Array,
      required: true
    },
    selectedPost: {
      type: Object
    }
  }

}
</script>

<style scoped lang="scss">
  .posts{
    padding: 50px 30px 0 30px;
    &__container{
      padding-bottom: 125px;
      display: flex;
      justify-content: flex-end;
    }
    &__header {
      display: flex;
    }
    &__image{
      padding: 0 34px 0 0;
    }
    &__content{
      flex: 0 1 960px;
    }
    &__items{
      display: flex;
      flex-direction: column;
      padding: 50px 0 0 0;
    }
    &__item{
      &:not(:last-child){
        margin-bottom: 27px;
      }
    }
  }
</style>