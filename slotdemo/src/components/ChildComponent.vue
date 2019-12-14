<template>
    <div class="main">
        <div class="best">
            <h2>추천 관광 도시</h2>
            <slot name="best"></slot>
        </div>
        <div class="city">
            <h2>{{ran_city.cityname}}</h2>
            <img :src="ran_city.pic">
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>    
</template>
<script>
export default {
    props : ['ran_city']
}
</script>
<style scoped>
.main{
    border : 4px solid blue;
}
.best{
    border : 4px solid teal;
    margin : 4px;
}
.city{
    border: 4px solid lime;
    margin : 4px;
}
.footer {
    bottom : 0px; color: white; background-color: teal;
    width: 100%;
    text-align: center;
}
img {
    max-width: 800px;
    display : block;
    margin-left: auto;
    margin-right: auto;
}
</style>