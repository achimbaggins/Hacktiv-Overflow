<template>
  <div class="container">
    <h1 class="tex-center">{{ head }}</h1>
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
  }
}

</script>

<style>

</style>
