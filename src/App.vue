<template>
  <div id="app">
    <vue-mobile-container 
      class="container"
      :link="link" 
      :url="url" 
      iframe />
  </div>
</template>

<script>
import vueMobileContainer from './index.js'
export default {
  name: 'app',
  components: {
    vueMobileContainer
  },
  data () {
    return {
      width:200,
      link:'www.baidu.com',
      html:'<div><h1>百度一下你就知道</h1></div>',
      url:'http://m.baidu.com'
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  border:2px solid #ddd;
  margin:0 auto;
  border-radius:4px;
}
</style>
