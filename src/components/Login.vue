// Login.vue

<template>
    <form>
        <div class="form-group" style="width:30%">
            <label for="userName">User Name</label>
            <input type="text" class="form-control" id="userName" v-model="uname" placeholder="Enter Username">          
        </div>
        <div class="form-group" style="width:30%">
            <label for="passWord">Password</label>
            <input type="password" class="form-control" id="passWord" v-model="pwd" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="onLoginClick">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return{
            uname:'',
            pwd:'',
        }
    },
    methods : {
        onLoginClick : function()
        {
           
            var uname=this.uname;
            var pwd=this.pwd;
            
            this.axios.post('http://localhost:8080/login/'+uname+'/'+pwd, {
                })
                .then(response => { 
                                        console.log(localStorage.getItem('loginStatus'))
                                        localStorage.setItem('cartId', response.data.cartId),
                                        localStorage.setItem('customerId', response.data.customerId),
                                        localStorage.setItem('userName', response.data.userName),
                                        localStorage.setItem('loginStatus', response.data.loginStatus),
                                        localStorage.setItem('loginSuccess', response.data.loginSuccess),
                                        localStorage.setItem('cartId', response.data.cartId),
                                        console.log(localStorage.getItem('loginStatus'))
                                        this.$router.push('products');
                                        this.$router.go();
                                        alert('Login Successfull')
                                    })
                .catch(function (error) {
                    console.log(error);
                    alert('Invalid Credentials');
                });
        }        
    }
}
</script>