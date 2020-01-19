<template>
<nb-container :style="{ backgroundColor: '#fff' }">
  <HamburgerHeader title="Orders" :navigation="this.props.navigation" />

  <nb-content padder>
    <nb-text>List of Products</nb-text>
  </nb-content>

  <nb-footer>
    <nb-footer-tab>
      <nb-button active full>
        <nb-text>Footer</nb-text>
      </nb-button>
    </nb-footer-tab>
  </nb-footer>
</nb-container>
</template>


<script>
  import HamburgerHeader from "./HamburgerHeader.vue";
  
  export default {
    components: { HamburgerHeader }
  };
</script>
