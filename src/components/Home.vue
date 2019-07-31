<template>
    <div class="jumbotron">
        <h1 class="display-3">Welcome to Online Shop!</h1>
        <p class="lead">This is a demo application for online shopping </p>
        <hr class="my-4">
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button" v-on:click="checkCart">Learn more</a>
        </p>
    </div>
</template>
<script>
export default {
    methods :
    {
        checkCart : function()
        {
            alert(localStorage.getItem('cartId'));
        }
    }
    
}
</script>