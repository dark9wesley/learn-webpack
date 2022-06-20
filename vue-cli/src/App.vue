<template>
  <div class="div1">{{ msg }}</div>
  <div >
    <img src="./assets/image/hejp.png" alt="">
  </div>
  <button @click="click">点我</button>
  <button @click="click2">点我2</button>
</template>
<script>
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
    },
  }
}
</script>
<style lang="less">
.div1 {
  color: red;
}
</style>
