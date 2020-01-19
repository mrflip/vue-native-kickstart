<template>
  <view class="todoItem">
    <text class="todo-text">{{text}}</text>

    <nb-button transparent
               class="check-btn"
               :class="done ? 'check-btn--done' : 'check-btn--normal'"
               :on-press="() => {onPress(index)}">
      <nb-icon active name="checkmark"
               class="check-btn-icon"/>
    </nb-button>
    
  </view>
</template>

<script>
export default {
  props: {
    text:       String,
    index:      Number,
    done:       { type: Boolean, required: false },
    onPress:    Function
  },
  data: function () {
    return {}
  }
}
</script>

<style>

.todoItem {
  width:            100%;
  align-self:       stretch;
  flex-direction:   row;
  justify-content:  space-between;
  padding:          0;
  margin-bottom:    10px;
  background-color: #f7f7f7;
  border-radius:    12px;
}

.todo-text {
  font-size:        21px;
  font-weight:      400;
  padding:          10px ;  
}

.check-btn {
  align-self:   flex-end;
  paddingRight: 12px ;
  marginBottom: 3px;
}

.check-btn-icon {
  fontSize:     35;
}
.check-btn--normal { opacity: 0.2; }
.check-btn--done   { opacity: 0.9; }

</style>
