<template>
  <!-- <div v-if="isLoading" class="article-preview">Loading articles...</div> -->
  <nb-container>
    <HamburgerHeader title="Tags" :navigation="this.props.navigation" />
    
    <nb-content>
      <nb-list class="article-list">
        <!-- articles.length -->
      <nb-text v-if="articles.length === 0" class="article-preview">
        No articles are here... yet.
      </nb-text>
      <nb-list-item
        v-for="(article, index) in articles"
        >
        <nb-text> {{ article.title }} - {{ article.author.username }} - {{ index }} </nb-text>
      </nb-list-item>
        
      <!-- <ArticlePreview
        :article="article"
        :key="article.title + index"
      />
      -->
      <!-- <VPagination :pages="pages" :currentPage.sync="currentPage" />
        -->

      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { mapGetters }     from "vuex";
// import ArticlePreview     from "./ArticlePreview";
// import VPagination     from "./VPagination";
import HamburgerHeader    from "./HamburgerHeader.vue";
import Store              from '../store';
import Vue         from "vue-native-core";
Vue.prototype.$store = Store;
import { FETCH_ARTICLES } from "../store/actions";

export default {
  name: "ArticleList",
  components: {
    HamburgerHeader,
    // ArticlePreview,
    //VPagination
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    },
    author: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    favorited: {
      type: String,
      required: false
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      };
      if (this.author) {
        filters.author = this.author;
      }
      if (this.tag) {
        filters.tag = this.tag;
      }
      if (this.favorited) {
        filters.favorited = this.favorited;
      }
      return {
        type,
        filters
      };
    },
    pages() {
      if (this.isLoading || this.articlesCount <= this.itemsPerPage) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.articlesCount / this.itemsPerPage)).keys()
      ].map(e => e + 1);
    },
    ...mapGetters(["articlesCount", "isLoading", "articles"])
  },
  watch: {
    currentPage(newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
      this.fetchArticles();
    },
    type() {
      this.resetPagination();
      this.fetchArticles();
    },
    author() {
      this.resetPagination();
      this.fetchArticles();
    },
    tag() {
      this.resetPagination();
      this.fetchArticles();
    },
    favorited() {
      this.resetPagination();
      this.fetchArticles();
    }
  },
  mounted() {
    console.log("mounted");
    console.log(this.listConfig);
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      console.log(this.listConfig);
      Store.dispatch(FETCH_ARTICLES, this.listConfig);
    },
    resetPagination() {
      this.listConfig.offset = 0;
      this.currentPage = 1;
    }
  }
};
</script>

