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

// To add a drawer element:
// * In Sidebar.vue,
//    - Add the name, route, icon and style to 'datas'
// * in Main.vue,
//   - import the screen
//   - add it to the Drawer

import HomeScreen               from "./screens/Home.vue";
import SideBarScreen            from "./screens/Sidebar.vue";
import HamburgerHeader          from "./screens/HamburgerHeader.vue";              
//
import OrderScreen              from "./screens/Order.vue";
import ProductsScreen           from "./screens/ProductList.vue";
import SettingsScreen           from "./screens/Settings.vue";
import SigninScreen             from "./screens/Signin.vue";
import ArticleListScreen        from "./screens/ArticleList.vue";
import TagListScreen            from "./screens/TagList.vue";

const Drawer = createDrawerNavigator(
  {
    Home:         { screen: HomeScreen     },
    Products:     { screen: ProductsScreen },
    Order:        { screen: OrderScreen    },
    Settings:     { screen: SettingsScreen },
    Signin:       { screen: SigninScreen   },
    ArticleList:  { screen: ArticleListScreen  },
    TagList:      { screen: TagListScreen  },
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
