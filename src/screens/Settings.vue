<template>
<nb-container :style="{ backgroundColor: '#fff' }">
  <HamburgerHeader title="Settings" :navigation="this.props.navigation" />
    
    <nb-content padder>
      <nb-separator bordered noTopBorder />

      
      <nb-list-item icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#FF9501' }">
            <nb-icon active name="flame" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Turbo Boost</nb-text>
        </nb-body>
        <nb-right>
          <nb-switch
            :value="turboBoost"
            :onChange="toggleTurboBoost"
            :trackColor="{ true: '#50B948' }"
          />
        </nb-right>
      </nb-list-item>

      
      <nb-list-item icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#007AFF' }">
            <nb-icon active name="wifi" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Wi-Fi</nb-text>
        </nb-body>
        <nb-right>
          <nb-text>Tooksome</nb-text>
          <nb-icon active name="arrow-forward" v-if="osType === 'ios'" />
        </nb-right>
      </nb-list-item>

      
      <nb-list-item icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#4CDA64' }">
            <nb-icon active name="phone-portrait" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Chillin</nb-text>
        </nb-body>
        <nb-right>
          <nb-radio selected />
        </nb-right>
      </nb-list-item>
      
      <nb-separator bordered />

      <nb-list-item icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#4CDA64' }">
            <nb-icon name="arrow-dropdown" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Pick Spice</nb-text>
        </nb-body>
        <nb-right>
          <nb-picker
            note
            iosHeader="Spice Girl?"
            :iosIcon="getIosIconForPicker()"
            mode="dropdown"
            :selectedValue="spice"
            :onValueChange="onValueChange"
          >
            <nb-item label="Scary"  value="scary"  />
            <nb-item label="Posh"   value="posh"   />
            <nb-item label="Baby"   value="baby"   />
            <nb-item label="Ginger" value="ginger" />
          </nb-picker>
        </nb-right>
      </nb-list-item>
      
      <nb-list-item last icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#007AFF' }">
            <nb-icon active name="hand" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Talk to the Hand</nb-text>
        </nb-body>
        <nb-right>
          <nb-icon active name="arrow-forward" v-if="osType === 'ios'" />
        </nb-right>
      </nb-list-item>
      
    </nb-content>
  </nb-container>
</template>

<script>
import React           from "react";
import { Platform }    from "react-native";
import { Icon }        from "native-base";
import HamburgerHeader from "./HamburgerHeader.vue";

export default {
  data() {
    return {
      osType:      Platform.OS,
      spice:       "posh",
      turboBoost:  false
    };
  },
  components: {
    HamburgerHeader,
  },
  methods: {
    onValueChange(value) {
      this.spice = value;
    },
    getIosIconForPicker() {
      return <Icon name="ios-arrow-down" />;
    },
    toggleTurboBoost() {
      this.turboBoost = !this.turboBoost;
    }
  }
};
</script>
