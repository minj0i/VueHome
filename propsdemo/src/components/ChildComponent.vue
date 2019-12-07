<template>
    <div class="box">This is ChildComponet <br/>
    Message : {{ childmessage }}
    </div>
</template>

<script>
export default {
    props : ['childmessage']
}
</script>

<style>
    .box {
        background-color: teal;
        color: white;
        font-size: 3em;
    }
</style>