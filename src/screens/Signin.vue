<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <HamburgerHeader title="Sign In" :navigation="this.props.navigation" />
      
      <nb-content padder>
        
        <nb-form>
            <nb-item :error="(!$v.email.required || !$v.email.email ) && $v.email.$dirty">
              <nb-input placeholder="Email" v-model="email" auto-capitalize="none"
                        :on-blur="() => $v.email.$touch()"/>
            </nb-item>
            <nb-item last :error="!$v.password.required && $v.password.$dirty">
              <nb-input placeholder="Password" v-model="password" auto-capitalize="none"
                        secure-text-entry
                        :on-blur="() => $v.password.$touch()" />
            </nb-item>
        </nb-form>
        
          <view :style="{marginTop:10}">
            <nb-button block :on-press="login">
              <nb-spinner v-if="logging_in" size="small" />
              <nb-text>Login</nb-text>
            </nb-button>
          </view>
      </nb-content>
  </nb-container>
</template>

<script>
import {
  Dimensions, Platform, AsyncStorage
}                            from "react-native";
import { Toast }             from 'native-base';
import { NavigationActions } from 'vue-native-router';
import HamburgerHeader       from "./HamburgerHeader.vue";
//
import launchScreenBg        from "../../assets/launchscreen-bg.png";
import launchscreenLogo      from "../../assets/logo-kitchen-sink.png";
import { required, email }   from 'vuelidate/lib/validators'
//
import { mapState }          from "vuex";
import Store                 from '../store';
import { LOGIN }             from "../store/actions";
  

export default {
  props: {
    navigation: { type: Object },
  },
  components: { HamburgerHeader },
  computed: {
    ...mapState({ errors: state => state.auth.errors }),
    logging_in () {
      // return Store.state.logging_in;
      return false;
    }

  },
  validations: {
    email: { required,  email },
    password:   { required   }
  },
  data: function() {
    return {
      email: '',
      password:   '',
    };
  },
  created() {
  },
  methods: {
    login() {
      if ( this.email && this.password && (! this.$v.email.$invalid) ) {
        Store.dispatch(LOGIN, { email: this.email, password: this.password }) ;
          // .then(() => this.$router.push({ name: "home" }));
      } else {
        Toast.show({
          text: 'Invalid Email or Password',
          buttonText: 'Okay'
        })
      }
    }
  }
};
</script>  
