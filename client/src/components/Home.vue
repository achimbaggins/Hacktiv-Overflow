<template>
  <div class="container">
    <h1 class="tex-center">{{ head }}</h1>
    <router-link :to="'/home'">
      <button type="button" name="button" class="btn btn-primary">Dashboard</button>
    </router-link>
    <button type="button" name="button" class="btn btn-danger" @click="doLogout">Logout</button>
    <Threadslist></Threadslist>
  </div>
</template>

<script>
import Threadslist from '@/components/Threadslist'
export default {
  name: 'container',
  data () {
    return {
      head: 'Hacktiv Overflow Inside'
    }
  },
  components: {
    Threadslist
  },
  methods: {
    doLogout() {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}

</script>

<style>

</style>
