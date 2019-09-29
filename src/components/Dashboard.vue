<template>
    <div>
        <h3>Welcome {{userData.first}} {{userData.last}}</h3>
        <div class="card small">
            <p class="left">Address:  {{userData.address}}</p><br/>
            <p class="left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Necessitatibus, id quas. Nisi laboriosam libero animi praesentium.</p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'Dashboard',
    data() {
      return {
          userData: null
      }
    },
    computed:{
        ...mapGetters('GET_LOGGED_IN', 'GET_DETAILS'),
        myDetails () {
            return this.GET_DETAILS
        }
    },
    watch: {
        GET_DETAILS (newVal, oldVal) {
            console.log('old', oldVal)
            console.log('new', newVal)
        }
    },
    created () {
        const loggedIn = this.$store.getters.GET_LOGGED_IN
        this.userData = this.$store.getters.GET_DETAILS
        const{path} = this.$router.history.current
        if(path==='/home' && !loggedIn) this.$router.push('/') //prevent unauthorized access
    }
}
</script>