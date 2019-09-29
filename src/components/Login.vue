<template>
    <div class="container">
        <div class="row">
            <h4 class="center">DDI Login</h4>
    <form @submit.prevent="handleSubmit" method="post" class="col s8 offset-s2">
        <div class="row">
        <div class="input-field col s12">
          <input id="email" v-model="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" v-model="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <input type="submit" class="btn btn-teal" value="login"/> <br/>
      <p class="red-text error-text" v-if="error">{{error}}</p>
    </form>
  </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'Login',
    data () {
        return {
            email:null,
            password: null,
            error: null,
        }
    },
    computed: {
      ...mapGetters(['GET_DETAILS', 'GET_ERRORS', 'GET_LOGGED_IN']),
    },
    methods: {
        ...mapActions(['doLogin']),
        handleSubmit () {
          const loginData = {
              email:this.email,
              password: this.password
          }
          this.doLogin(loginData)
          this.email, this.password = null
        },

    },
    watch: {
        GET_LOGGED_IN(newVal, oldVal) {
        //    const loggedIn = localStorage.getItem('loggedIn')
          if(newVal) this.$router.push('home')
        //    if(loggedIn) this.$router.push('home')
        },
        GET_ERRORS (newVal, oldVal) {
            this.error = newVal
        }
    }
}
</script>
<style scoped>
  input[type='submit']{
      width: 180px;
      margin-left: 0px; 
      float: left;
  }
</style>