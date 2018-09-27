<template>
  <div id="app">
    <vue-mobile-container style="border:1px solid red;margin:0 auto" :link="link" :url="url" iframe></vue-mobile-container>
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
      link:'www.baidu.com',
      html:'<div><h1>百度一下你就知道</h1></div>',
      url:'http://m.baidu.com'
    }
  }
}
</script>
