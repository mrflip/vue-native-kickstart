/**
 * reference
 * https://github.com/weexteam/weex-hackernews/tree/master/src/store
 */

import Vue     from 'vue-native-core';
import Vuex    from 'vuex';

import home    from "./home.module";
import auth    from "./auth.module";
import article from "./article.module";
import profile from "./profile.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    auth,
    article,
    profile,
  }
});

export default store;
