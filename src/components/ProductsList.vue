<template>
  <div>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col"> Name</th>
                <th scope="col">Price</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items">
                <td>{{item.productId}}</td>
                <td>{{item.productName}}</td>
                <td>{{item.productPrice}}</td>
                <td><input type="button" value="Update" class="btn btn-primary"></td>
                <td><input type="button" value="Delete" class="btn btn-primary" @click="removeProduct(item)"></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name : 'ProductList',
    data() {
      return {
        items: {}
      }
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        getProducts: function(){
            this.axios
            .get('http://localhost:8080/products')
            .then(response => (this.items = response.data))
        },
        removeProduct:function(product)
        {
            console.log(product);
            this.axios.delete('http://localhost:8080/products/' + product.productId)
            .then(response => {
                        this.getProducts();
            });
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
