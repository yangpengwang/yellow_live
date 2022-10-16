<template>
    <div class="Slider-flashTab" >
        <div class="Slider-flashTabImg" @mouseenter="showBorder()" @mouseleave="hiddenBorder()">
            <img src="../../assets/images/index.jpg" alt="" class="img" >
            <div class="img_hover" v-show="isBorder"></div>
        </div>
        
        <div class="Slider-clickPoint" v-show="Item.isHover"></div>
    </div>
</template>

<script>
export default {
    name:'IndexTab',
    props:['Item'],
    data() {
        return {
            border:false
        }
    },
    computed:{
        isBorder(){
            return this.Item.isBorder  || this.border
        }
    },  
    methods:{
        showBorder(){
            this.border = true;
        },
        hiddenBorder(){
            this.border = false;
        }
    }
    
}
</script>

<style scoped>
    .Slider-flashTab{
        position: relative;
        width: 100%;
        padding-top:9%;
    }
    .Slider-flashTabImg{
        position: relative;
        height:110px;
    }
    .img{
        position: absolute;
        width:100%;
        height:100%;
        border-radius: 5px;
        left:0;
        top:0;
    }
    .img_hover{
        width: 100%;
        height: 100%;
        border: 3px solid #ff5d23;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
    }
    .Slider-clickPoint{
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-right: 8px solid #ff5d23;
        border-bottom: 7px solid transparent;
        position: absolute;
        top: 50%;
        left: -8px;
        margin-top: 4px;
    }
</style>