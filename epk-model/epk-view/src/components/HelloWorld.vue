<template>
  <div class="hello">
     <div class="epkbg">
      <el-button type="primary" plain disabled  class="logo">EPK</el-button>
      <div class="welcome">
       欢迎来到EPK的世界
      </div>
    <h1>{{ msg }}</h1>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to build applications using EPK.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {font-weight: normal;color: #06ddf7;}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.welcome{ font-size:40px; text-align:center; color:#43d8ea;}
.epkbg{ width:700px;margin:0 auto;margin-top:200px;}
.logo{display:inline-block;width:200px;height:100px;background:none!important;margin-bottom:50px;
  font-size:40px;
}
</style>
