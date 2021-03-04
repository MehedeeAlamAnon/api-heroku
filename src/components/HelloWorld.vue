<template>
  <div>
    <div class="row">
      <div v-for="(branch,index) in branches" :key="index" class="col-lg-12">
        <h1>{{branch.name}}</h1>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data(){
    return{
      branches:[],
      baseURL: process.env.API_URL
    }
  },
  props: {
    msg: String
  },
  methods:{
    fetchData(){
      // axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>{
      //   console.log(response.data)
      //   this.branches=response.data
      //   console.table(this.branches)
      // })


      // console.log(config.get('API_URL'))
      //console.log(process.env.PORT)

      axios.get('/api/branch').then(response=>{
        console.log(response.data.data)
        this.branches=response.data.data
        console.table(this.branches)
      })
    },
  },

  mounted() {
    this.fetchData()
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
