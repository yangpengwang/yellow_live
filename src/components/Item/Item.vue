<template>
    <li>
        <div class="item_img">
            <a href="">
                <div>
                    <img src="../../assets/images/index.jpg" alt="">
                </div>
            </a>
        </div>
        <div class="item_content">
            <div class="title_info">
                <h3>{{title}}</h3>
            </div>
            <div class="title_info">
                <h2><i class="el-icon-user-solid"></i>{{userName}}</h2>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name:'Item',
    props:['title','userName']
    
}
</script>

<style scoped>
    li{
        float:left;
        margin-bottom: 16px;
        width: 245px;
        padding-right:10px;
        height: 205px;
        border-radius: 5px;
    }
    li:nth-child(5n){
        padding-right:0px;
    }
    img{
        width:100%;
        display:block;
    }
    .item_content{
        background-color:#fff;
        padding:9px 10px;
    }
    .title_info{
        height:24px;
    }
    .title_info h3{
        display: block;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 15px;
        line-height: 24px;
        color: #212224;
        font-weight: 500;
        margin: 0;
    }
    .title_info h2{
        display: block;
        padding-right: 5px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
        font-size:12px;
        line-height:24px;
        margin: 0;
    }
    i{
        display:inline;
        margin-right:5px;
    }
    
</style>