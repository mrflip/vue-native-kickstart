<template>
  <view class="container">
    <app-loading v-if="!isAppReady"> </app-loading>
    <main v-if="isAppReady"></main>
  </view>
</template>

<script>
import Vue               from "vue-native-core";
import { VueNativeBase } from "native-base";
import { AppLoading }    from "expo";
import Vuelidate         from 'vuelidate';
import Main              from "./Main.vue";
import * as Font         from "expo-font";

// import { CHECK_AUTH } from "./store/actions.type";
import ApiService        from "./common/api.service";
import DateFilter        from "./common/date.filter";
import ErrorFilter       from "./common/error.filter";

// registering all core components to the global scope of the Vue
Vue.use(VueNativeBase);
Vue.use(Vuelidate);

// Vue.filter("date", DateFilter);
// Vue.filter("error", ErrorFilter);
ApiService.init();

// Mute internal warnings
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['has been merged']);

export default {
  components: { Main, AppLoading },
  data() {
    return {
      isAppReady: false
    };
  },
  created() {
    this.loadFonts();
  },
  methods: {
    async loadFonts() {
      try {
        this.isAppReady = false;
        await Font.loadAsync({
          Roboto:        require("../node_modules/native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
          Ionicons:      require("../node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
        });
        this.isAppReady = true;
      } catch (error) {
        console.log("some error occured", error);
        this.isAppReady = true;
      }
    }
  }
};
</script>

<style>
.container {
  flex: 1;
}
</style>
