<template>
  <div class="root">
    <div class="left">
      <ul>
        <li v-for="i in sortedArticles" :key="i.feedItemId" @click="select(i)">
          {{ i.title }}
        </li>
      </ul>
    </div>
    <div class="right">
      <div>Route params {{ this.$route.params }}</div>
      <div>{{ news[this.$route.params.id] }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      sortedArticles: 'news/SORTED_ARTICLES'
    }),
    news() {
      return this.$store.state.news.articles
    }
  },
  methods: {
    select(item) {
      this.$router.push('/articles/' + item.feedItemId)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.8;
}
.root {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.left {
  flex: 1;
  overflow-y: auto;
}
.left ul {
  list-style-type: none;
}
.left li {
  display: block;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;
  color: black;
}
.left li:hover {
  color: darkorange;
}

.right {
  flex: 1;
  overflow-y: auto;
}
</style>
