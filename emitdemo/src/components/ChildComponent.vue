<template>
    <div class="box">
        <button @click="sendmessage">부모님에게 메세지 보내기</button>    
    </div>    
</template>
<script>
export default {
    data(){
        return {
            message : "이 메세지는 자식에서 전송된 메시지입니다."
        }
    },
    methods: {
        sendmessage() {
            this.$emit('sentMessage', this.message);
        }
    },
}
</script> 

<style scoped>

</style>