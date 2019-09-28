<template>
    <div>
        <h2>Dashboard</h2>
    </div>
</template>

<script>
export default {
    name:'Dashboard',
    created () {
        const{path} = this.$router.history.current
        const loggedIn = localStorage.getItem('loggedIn')
        if(path==='/home' && loggedIn==="false") this.$router.push('/') //prevent unauthorized access
    }
}
</script>