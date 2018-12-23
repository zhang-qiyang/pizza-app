<template>
  <div>
    <h1>Home</h1>
    <button @click="goToMenu" class="btn btn-success">Let's order!</button>
  </div>

</template>

<script>
  export default {
    name: "home",
    methods:{
      goToMenu(){
        //跳转到上一次浏览的页面
        //this.$router.go(-1)

        //跳转到指定地址
        //this.$router.replace('/menu')

        //跳转到指定路由名字的地址
        //this.$router.replace({name:'Menu'})

        //通过push进行跳转(最常用的路由跳转方式)
        //this.$router.push('/menu')
        //this.$router.push({name:'menu'})
      }
    }
  }
</script>

<style scoped>

</style>
