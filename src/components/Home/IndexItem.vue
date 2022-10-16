<template>
    <div>
        <div class="Main-header">
            <div class="item-img">
                <img src="../../assets/images/index_item.png" alt="" class="icon">
            </div>
            <div >{{title}}</div>
        </div>
        <div>
            <ul>
                <Item v-for="item in itemData" :key="item.id" :title="item.title" :userName="item.userName" />
            </ul>
        </div>
        <div class="clear"></div>
    </div>
    
</template>

<script>
import Item from '../Item/Item.vue'
export default {
    name:'IndexItem',
    props:['title','itemData'],
    components: {
        Item,
    },
}
</script>

<style scoped>
    .Main-header{
        padding:24px 0px 10px; 
        font-size:24px; 
    }
    .item-img{
        width:36px;
        height:36px;
        float:left;
    }
    .icon{
        width:100%;
        height:100%
    }
</style>