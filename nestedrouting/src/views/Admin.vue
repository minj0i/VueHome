<template>
    <div>
        <h3>{{title}}</h3>
        <ul>
            <li><router-link to="/admin/list">제품리스트(Product List)</router-link></li>
            <li><router-link to="/admin/insert">제품추가(New Product)</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Admin페이지'
        }
    }
}
</script>
<style>
    li{
        display: inline-block; padding: 5px;
    }
    li a {
        font-weight: bold; color:black;
    }
</style>