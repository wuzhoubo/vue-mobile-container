# vue-mobile-container

[![npm](https://img.shields.io/npm/v/mobile-container.svg)](https://www.npmjs.com/package/mobile-container)


> A Vue.js mobile container

<div align=center><img width="250" height="457" src="http://wuzhoubo.github.io/images/newImg/exp.png"/></div>
 

## Install

#### NPM

```bash
$ npm install vue-mobile-container
```
#### template
```html
<template>
    <div>
        <vue-mobile-container 
            :link="link" 
            :content="html"/>
    </div>
</template>
```
#### javascript
```javascript
<script>
    import vueMobileContainer from 'vue-mobile-container'
    export default {
    name: 'app',
    components: {
        vueMobileContainer
    },
    data () {
        return {
            link:'myPage.com',
            html:'<div><h1>my page</h1></div>'
        }
    }
    }
</script>
```

##props

| name | type | default | description |
| ------ | ------ | ------ | ------ |
| width | Nubmer | 375 | The container width |
| height | Nubmer | 640 | The container height |
| link | String | '' | Title or link in container head |
| content | String | '' | Any string or html |
| iframe |  Boolean | false | The iframe in the container |
| url | String | '' | The link when iframe is true |
| reflush | Boolean | false | Reflush the page |


##Style

 you can add any style like this

 ```html
<vue-mobile-container class="container"/>
 ```

 ```css
 .container{
  border:2px solid #ddd;
  margin:0 auto;
  border-radius:4px;
}
 ```


