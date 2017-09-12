<template>
  <div class="container">
    <div class="col-md-5 col-md-offset-0" id="left_side">
      <new-thread></new-thread>
    </div>
    <div class="col-md-7" id="content">
      <thread-summary v-for="thread in threads" :thread="thread" :key="thread.id"></thread-summary>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ThreadSummary from '@/components/ThreadSummary'
import NewThread from '@/components/NewThread'
export default {
  components: {
    NewThread, ThreadSummary
  },
  computed: {
    ...mapState([
      'threads'
    ])
  },
  methods: {
    ...mapActions([
      'getAllThreads'
    ])
  },
  created () {
    this.getAllThreads()
  }
}

</script>

<style scoped>
/*#left_side{
  overflow:hidden;  //code added to prevent scroll
  position:absolute;
  font-size: 16px;
}
#content{
  height: auto;
  overflow: auto;  //code added
 }*/
</style>
