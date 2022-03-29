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
    </main>
  </div>
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";
import SliderComponent from "@/components/SliderComponent";
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
    SliderComponent,
    HeaderComponent,
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
