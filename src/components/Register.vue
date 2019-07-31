// Register.vue

<template>
<div>
    <div class="form-group" style="width:30%">
            <label for="userName">User Name</label>
            <input type="text" class="form-control" id="userName" v-model ="customer.userName" placeholder="Enter Username">          
    </div>
    <div class="form-group" style="width:30%">
            <label for="passWord">Password</label>
            <input type="password" class="form-control" id="passWord" v-model="customer.passWord" placeholder="Password">
    </div>
    <div class="form-group" style="width:30%">
            <label for="repassWord">Password</label>
            <input type="password" class="form-control" id="repassWord" placeholder="Reenter Password">
    </div>
    <div class="form-group row">
        &nbsp;&nbsp;
        <div style="width:30%">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" v-model="customer.firstName" placeholder="Enter First Name">          
        </div>&nbsp;
        <div style="width:30%">
            <label for="middleName">Middle Name</label>
            <input type="text" class="form-control" id="middleName" v-model="customer.middleName" placeholder="Enter Middle Name">          
        </div>&nbsp;
        <div style="width:30%">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="customer.lastName" placeholder="Enter Last Name">          
        </div>
    </div>
    <div class="form-group" style="width:30%">
            <label for="dateOfBirth">Date Of Birth</label>
            <input type="Date" class="form-control" id="dateOfBirth" v-model="customer.dateOfBirth" placeholder="Enter Date Of Birth">          
    </div>
    <div class="form-group" style="width:30%">
            <label for="emailAddress">Email Address</label>
            <input type="text" class="form-control" id="emailAddress" v-model="customer.emailAddress" placeholder="Enter Email Address">          
    </div>
    
    <div class="form-group" style="width:30%">
            <label for="gender">Gender</label>
            <br>
            <label class="radio-inline"><input type="radio" v-model="customer.gender" name="male" value="M">Male</label>&nbsp;
            <label class="radio-inline"><input type="radio" v-model="customer.gender" name="female" value="F">Female</label>
    </div>
    <div class="form-group">
            <label for="sel1">Martial Status:</label>
            <select class="form-control" v-model="customer.maritalStatus" id="martialStatus" style="width:30%">
                <option value="S">Single</option>
                <option value="M">Married</option>
                <option value="W">Widowed</option>
                <option value="D">Divorced</option>
            </select>
    </div>
    <div>
        <button type="reset" class="btn btn-primary">Reset</button> &nbsp;
        <button type="submit" class="btn btn-primary" v-on:click="registerClick">Submit</button>
    </div>
</div>
</template>
<script>
export default {
    
    data()
    {
        return {
            customer : {}
        }
    },
    created(){
        this.customer ={
                customerId: '',
                userName: '',
                passWord: '',
                firstName: '',
                middleName: '',
                lastName:'',
                emailAddress: '',
                dateOfBirth: '',
                gender: '',
                maritalStatus: '',
        }
    },
    methods :
    {
        registerClick : function()
        {
            console.log(this.customer);
            this.axios.post('http://localhost:8080/customers',{
                customerId:this.customer.customerId,
                userName:this.customer.userName,
                passWord:this.customer.passWord,
                firstName:this.customer.firstName,
                middleName:this.customer.middleName,
                lastName:this.customer.lastName,
                emailAddress:this.customer.emailAddress,
                dateOfBirth:this.customer.dateOfBirth,
                gender:this.customer.gender,
                maritalStatus:this.customer.maritalStatus,
                })
                .then(function (response) {
                    alert("Registration Successfull!");
                })
                .catch(function (error) {
                    console.log(error.response);
                    alert("Unable to register!");
                    
                });
        }
    }
}
</script>