<template>
  <div class="div1">{{ msg }}</div>
  <div >
    <img src="./assets/image/hejp.png" alt="">
  </div>
  <button @click="click">点我</button>
  <button @click="click2">点我2</button>

  <router-link to="/home">go home</router-link>
  <router-link to="/about">go about</router-link>

  <router-view></router-view>
</template>
<script>
import { hi } from './utils/hi'

export default {
  name: 'App',
  data(){
    return {
      msg: 'Hello Vue!'
    }
  },
  methods:{
    click(){
      this.msg = 'Hello Vue2!'
    },
    click2(){
      const a = [1, 2, 3, 4, 5]
      this.msg = [...a].join(',')
      hi()
    },
  }
}
</script>
<style lang="less">
.div1 {
  color: lch(53 105 40);
}
</style>
