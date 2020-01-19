<template>
<nb-header>
  <nb-left>
    <nb-button
      transparent
      :onPress="() => this.props.navigation.openDrawer()"
      >
      <nb-icon name="menu" />
    </nb-button>
  </nb-left>
  <nb-body>
    <nb-title>{{ title }}</nb-title>
  </nb-body>
  <nb-right />
</nb-header>
</template>

<script>
  export default {
    props: {
     title:       String,
     navigation:  Object,
    },
  };
</script>
