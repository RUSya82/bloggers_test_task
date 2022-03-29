<template>
  <div class="wrapper">

    <header-component />
    <main>
      <slider-component
          @onSliderItemSelect="selectItem"
          :selected-item="selectedItem"
      />
      <posts-component
          v-if="selectedItem"
          :user-posts="userPosts"
          :selectedPost="selectedItem"
      />
<!--      <div class="posts" v-if="selectedItem ">-->
<!--        <div class="posts__container">-->
<!--          <div class="posts__image">-->
<!--            <img src="@/assets/img/posts-tilda.svg" alt="">-->
<!--          </div>-->
<!--          <div class="posts__content">-->
<!--            <div class="posts__header">-->
<!--              <site-header-component :text="`3 актуальных поста ${selectedItem['name']}`" />-->
<!--            </div>-->
<!--            <div class="posts__items">-->

<!--              <post-item-component-->
<!--                  v-for="item in userPosts"-->
<!--                  :key="item.id"-->
<!--                  :postItem="item"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </main>
  </div>
</template>

<script>

import PostItemComponent from "@/components/PostItemComponent";
import HeaderComponent from "@/components/HeaderComponent";
import SliderItemComponent from "@/components/SliderItemComponent";
import SliderComponent from "@/components/SliderComponent";
import SiteHeaderComponent from "@/components/SiteHeaderComponent";
import PostsComponent from "@/components/PostsComponent";

export default {
  name: 'App',
  data(){
    return {
      selectedItem: null,   //объект выбранного пользователя
      userPosts: [],       //посты выбранного пользователя
    }
  },
  components: {
    PostsComponent,
    SiteHeaderComponent,
    SliderComponent,
    SliderItemComponent,
    HeaderComponent,
    PostItemComponent,

  },
  methods: {
    selectItem(item){
      this.selectedItem = item;
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${item.id}&_start=0&_limit=3`)
          .then(data => data.json())
          .then(data => {
            this.userPosts = data;
          })
    }
  },
  computed: {
    getUsers(){
      return this.$store.getters['getUsers']
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
          this.$store.dispatch('setUsers', data);
          this.selectItem(data[0]);
        })

  }
}
</script>

<style scoped>

</style>
