<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";

import { Root }                 from "native-base";
import HomeScreen               from "./screens/Home.vue";
import SideBarScreen            from "./screens/Sidebar.vue";
import OrderScreen              from "./screens/Order.vue";
import ProductsScreen           from "./screens/ProductList.vue";
import SettingsScreen           from "./screens/Settings.vue";

const Drawer = createDrawerNavigator(
  {
    Home:         { screen: HomeScreen    },
    Products:     { screen: ProductsScreen },
    Order:        { screen: OrderScreen },
    Settings:     { screen: SettingsScreen },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: SideBarScreen
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Drawer: { screen: Drawer },
    },
    {
      initialRouteName: "Drawer",
      headerMode:       "none"
    }
  )
);
export default {
  components: { Root, AppNavigation }
};
</script>
