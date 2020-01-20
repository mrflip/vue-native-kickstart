<template>
  <nb-container>
    <HamburgerHeader title="Tags" :navigation="this.props.navigation" />
    
    <nb-content>
      <nb-list class="tag-list">
        <nb-list-item
          class="tag-default tag-pill tag-outline"
          v-for="(tag, index) of tags"
          :key="index"
          >
          <nb-text> tag </nb-text>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import HamburgerHeader from "./HamburgerHeader.vue";
  
export default {
  components: { HamburgerHeader },
  name: "TagList",
  props: {
    tags: Array
  }
};
</script>
