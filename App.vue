<template>
  <ProductList />
</template>

<script>
import React             from "react";
import Vue               from "vue-native-core";
import { VueNativeBase } from "native-base";
Vue.use(VueNativeBase);
import TodoItem          from './src/components/TodoItem';
import ProductList       from './src/components/ProductList';

// Mute internal warnings
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['has been merged']);


export default {
  data: function () {
    return {
    }
  },
  components: {
    TodoItem,
    ProductList
  }
};
</script>

<style>
.container {
  background-color:    white;
  align-items:         center;
  justify-content:     center;
  flex:                1;
}
</style>
