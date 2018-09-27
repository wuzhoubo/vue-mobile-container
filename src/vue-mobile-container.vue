<template>
    <div class="phone-container">
        <div class="head">
            <img src="./static/images/head.png" alt="">
            <div class="link">{{link}}</div>
            <span class="refresh" @click="refreshIframe"></span>
        </div>
        <div class="body">
            <div v-if="!iframe" v-html="content">
            </div>
            <div v-if="iframe" class="iframe-container" seamless scrolling="no">
                <iframe :src="myUrl" id="phone-iframe"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'phone-container',
    data(){
        return {
            myUrl:''
        }
    },
    props:{
        link:{
            default:'',
            type:String
        },
        iframe:{
            default:false,
            type:Boolean
        },
        content:{
            default:'',
            type:String
        },
        url:{
            default:'',
            type:String
        }
    },
    created () {
        this.myUrl = this.url + ''
    },
    methods: {
        refreshIframe(){
            this.myUrl = ''
            setTimeout( ()=>{
                this.myUrl = this.url + ''
            },20)
        }
    }
}
</script>
<style scoped>
.phone-container{
    width: 375px;
}
.head{
    width: 375px;
    text-align: center;
    position: relative;
    overflow: hidden;
    height: 63px;
}
.head img{
    width: 100%;
    height: 63px;
}
.link{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16px;
    font-size: 14px;
}
.body{
    height: 580px;
    border: 1px solid #eee;
}
.iframe-container{
    height: 580px;
}
.body iframe{
    width: 100%;
    height: 100%;
}
.refresh{
    height: 26px;
    width: 26px;
    top: 25px;
    position: absolute;
    right: 10px;
    background-color:transparent;
}
</style>
