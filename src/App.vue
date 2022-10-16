<template>
   <div>
        <LiveHeader></LiveHeader>
        <router-view></router-view>
        <LiveFooter></LiveFooter>
   </div>
</template>

<script>
import LiveHeader from './components/Header/index.vue'
import LiveFooter from './components/Footer/index.vue'
export default {
    name:'App',
    components:{LiveHeader,LiveFooter}
}
</script>

<style>
    *{ margin:0px; padding:0px;}
    li{list-style: none;}
    a {text-decoration: none;}
    body{
        background-color: #f2f5f6;
    }
    .clear{
        clear:both;
    }
</style>