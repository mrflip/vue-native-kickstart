<template>
  <nb-container :style="{ backgroundColor: '#fff' }">

<HamburgerHeader title="Products" :navigation="this.props.navigation" />

<scroll-view class="todo-list">
  <animated:view :style="{ opacity: dimmingAnimation }">
    <text class="text-header">Products</text>
    
    <TodoItem
      v-for="(todo, index) in todoList"
      :index="index"
      :text="todo.text"
      :onPress="markTodoAsDone"
      :key="index"></TodoItem>
    
    <view v-if="doneList.length > 0">
      <text class="text-header">Done</text>
      <TodoItem
        v-for="(todo, index) in doneList"
        :text="todo.text"
        :index="index"
        :onPress="restoreTodoToList"
        :key="index"
        :done="true">
      </TodoItem>
      <touchable-opacity
        :onPress="() => { doneList = [] }"
        :style="{ justifySelf: 'center', alignItems: 'center', marginVertical: 10 }">
        <text>Clear all</text>
      </touchable-opacity>
    </view>
    
    <view class="empty-space"></view>
    
  </animated:view>
</scroll-view>

<view
  class="addItemContainer"
  :class="newTodoScreen ? '':'hidden'"
  :style="{shadowOffset: {height: 0, width: 0}}">
  
  <text class="text-header">Add new todo</text>
  
  <text-input
    class="text-input"
    placeholder="Buy a piano"
    v-model="newTodoText" 
    />
  
  <nb-button full iconLeft light
             :onPress="()=> { addTodo() }">
    <nb-icon active name="checkmark" :style="{ fontSize: 30, color: 'blue' }"  />
    <nb-text :style="{ color: 'blue' }">Add</nb-text>
  </nb-button>
</view>

 <nb-fab 
   :onPress="()=>{ newTodoScreen = !newTodoScreen }"
   position="bottomRight"
   :style="{ color: 'red' }"
   >
   <nb-icon active name="add" />
 </nb-fab>
 
</nb-container>
</template>

<script>
import { Animated, Easing } from "react-native";

import HamburgerHeader from "./HamburgerHeader.vue";
import TodoItem             from './TodoItem';
  
export default {
  data: function () {
    return {
      todoList:         [],
      doneList:         [],
      newTodoScreen:    false,
      newTodoText:      '',
      dimmingAnimation: {},
      buttonRotationDeg: 0,
      todoListOpacity: 1
    }
  },
  
  components: {
    TodoItem,
    HamburgerHeader,
  },
  
  created () {
    this.buttonRotationDeg = new Animated.Value(0)
    this.todoListOpacity = new Animated.Value(1)
    this.rotateAnimation = this.buttonRotationDeg.interpolate({
      inputRange:  [0, 1],
      outputRange: ['0deg', '45deg']
    })
    this.dimmingAnimation = this.todoListOpacity.interpolate({
      inputRange:  [0, 1],
      outputRange: [0.1, 1]
    })
  },
  
  methods: {
    markTodoAsDone (index) {
      this.doneList.push(this.todoList[index])
      this.todoList.splice(index, 1)
    },

    restoreTodoToList (index) {
      this.todoList.push(this.doneList[index])
      this.doneList.splice(index, 1)
      },
    
    addTodo () {
      if (this.newTodoText !== '') {
        this.todoList.push({text: this.newTodoText})
        this.newTodoScreen = false
      }
    },
    
    dimTodoList () {
      this.todoListOpacity.setValue(this.newTodoScreen ? 1 : 0)
      Animated.timing(this.todoListOpacity, {
        toValue:    (this.newTodoScreen ? 0 : 1),
        duration:   90,
        easing:     Easing.linear
      }).start()
    }
  },
  
  watch: {
    newTodoScreen () {
      this.newTodoText = ''
      this.dimTodoList()
    }
  }
}

</script>

<style>
.container {
  background-color:    white;
  align-items:         center;
  justify-content:     center;
  flex:                1;
  }

.text-color-primary {
  color:               white;
}

.addItemButton {
  width:               70px;
  height:              70px;
  background-color:    #FF3352;
  shadow-color:        #ff3352;
  shadow-opacity:      0.6;
  shadow-radius:       6px;
  justify-content:     center;
  align-items:         center;
  padding:             10px;
  position:            absolute;
  bottom:              30px;
  border-radius:       100px;
  z-index:             3;
}

.button2 {
  align-self:          center;
  border-radius:       5px;
  padding-horizontal:  30px;
  padding-vertical:    12px;
  background-color:    #f7f7f7;
}

.text-button {
  color:               #222;
  font-size:           18px;
  font-weight:         bold;
}

.addItemContainer {
  width:               95%;
  background-color:    #fff;
  padding:             20px;
  border-radius:       10px;
  position:            absolute;
  top:                 170px;
  z-index:             2;
  shadow-color:        black;
  shadow-opacity:      0.16;
  shadow-radius:       5px;
}

.text-input {
  margin-vertical:     20px;
  color:               #222;
  padding:             20px;
  background-color:    #f7f7f7;
  border-radius:       12px;
  font-size:           21px;
}

.hidden {
  display:             none;
}

.todo-list {
  padding-top:         60px;
  flex:                1;
  width:               100%;
  padding-horizontal:  20px;
}

.button {
  font-size:           16px;
  color:               black;
  font-weight:         600;
}

.empty-space {
  width:               100%;
  height:              180px;
}

.image-plus {
  width:               40px;
  height:              40px;
}

.text-header {
  text-align:          left;
  align-self:          flex-start;
  margin-bottom:       15px;
  font-size:           26px;
  font-weight:         bold;
}

.add-icon {
  font-size: 50px;
  color: red;
}
</style>
