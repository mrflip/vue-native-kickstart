<!-- Sidebar.vue -- see Main.vue for how to add a drawer element -->

<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper" :bounces="false">
      <image :source="drawerCover" class="drawer-cover" :style="stylesObj.drawerCoverObj" />
      <image :source="drawerImage" class="drawer-image" :style="stylesObj.drawerImageObj" />

      <!-- List of Drawer actions -->
      <nb-list>
        <nb-list-item button noBorder
          v-for="data in datas" :key="data.route"
          :onPress="() => handleListItemClick(data)"
          >

          <nb-left>
            <nb-icon active :name="data.icon" :style="{ color: '#777', fontSize: 26, width: 30 }" />
            <nb-text> {{ data.name }} </nb-text>
          </nb-left>

          <nb-right v-if="data.types" :style="{ flex: 1 }">
            <nb-badge  class="list-item-badge-container" :style="{ backgroundColor: data.bg }" >
              <nb-text class="list-item-badge-text"      :style="stylesObj.badgeText" >
                {{ `${data.types} Types` }}
              </nb-text>
            </nb-badge>
          </nb-right>

        </nb-list-item>
      </nb-list>

    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import drawerCover              from "../../assets/drawer-cover.png";
import drawerImage              from "../../assets/logo-kitchen-sink.png";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth  = Dimensions.get("window").width;

export default {
  props: {
    navigation: {
      type: Object
    }
  },

  data() {
    return {
      drawerCover,
      drawerImage,
      stylesObj: {
        drawerCoverObj: {
          height: deviceHeight / 3.5
        },
        drawerImageObj: {
          left:      (Platform.OS === "android" ? deviceWidth  / 10 : deviceWidth / 9  ),
          top:       (Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12),
          resizeMode: "cover"
        },
        badgeText: {
          fontSize:  (Platform.OS === "android" ? 11 : 13),
          marginTop: (Platform.OS === "android" ? -3 : 0),
          fontWeight: "400"
        }
      },

      datas: [
        { name:  "Home",     route: "Home",        icon: "home", bg: "red" },
        { name:  "Products", route: "Products",    icon:  "list",     bg: "#C5F442" },
        { name:  "Order",    route: "Order",       icon:  "cart",     bg: "#C5F442" },
        { name:  "Settings", route: "Settings",    icon:  "settings", bg: "#C5F442" },
        { name:  "Sign In",  route: "Signin",      icon:  "key",      bg: "#C5F442" },
        { name:  "Articles", route: "ArticleList", icon:  "book",      bg: "#C5F442" },
        { name:  "Tag List", route: "TagList",     icon:  "pricetags",      bg: "#C5F442" },
      ]
    };
  },

  methods: {
    handleListItemClick(dataObj) {
      this.navigation.navigate(dataObj.route);
    }
  }
};
</script>

<style>
.sidebar-content-wrapper {
  flex: 1;
  background-color: #fff;
}
.drawer-cover {
  flex: 1;
  align-self: stretch;
  position: relative;
  margin-bottom: 10;
}
.drawer-image {
  align-self: center;
  position: absolute;
  height: 75;
  width: 210;
}
.list-item-badge-container {
  border-radius: 3;
  height: 25;
  width: 72;
}
.list-item-badge-text {
  /* font-weight: 400; // not-working  */
  /* font-weight: bold; // working */
  text-align: center;
}
</style>
