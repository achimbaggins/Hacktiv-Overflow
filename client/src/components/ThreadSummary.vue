<template>
  <div class="">
    <div class="alert alert-dismissible alert-danger" v-if=(pesan)>
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <h3>{{pesan}}</h3>
    </div>
    <div class="panel panel-success" v-for="thread in threads">
      <div class="panel-heading text-left">
        <router-link :to="'/home/' + thread.slug" >
          <h1 class="panel-title" style="color:white;"><b>{{ thread.title }}</b></h1>
        </router-link>
      </div>
      <div class="panel-body text-left">
          {{thread.konten}}
        <div class="text-right">
          <button type="button" name="button"class="btn btn-primary" >
            <span class="glyphicon glyphicon-user"></span> by : {{username || thread.author.username}}
          </button>
          <router-link :to="'/home/' + thread.slug">
            <button type="button" name="button"class="btn btn-warning" >
              <span class="glyphicon glyphicon-eye-open"></span> View Detail !
            </button>
          </router-link>
          <button type="button" class="btn btn-danger" name="button" v-if="idCreator == thread.author._id" @click="deleteThread(thread._id); clearMe()">
            <span class="glyphicon glyphicon-trash"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: ['thread'],
    data () {
      return {
        idCreator: localStorage.getItem('id'),
        pesan: '',
        username: `${localStorage.getItem('username')}`
      }
    },
    methods: {
      ...mapActions ([
        'deleteThread',
        'getAllThreads',
        'getThreadDetail'
      ]),
      clearMe () {
        this.pesan = 'yaaah kena hapus...'
      }
    },
    computed: {
      threads () {
        return this.$store.state.threads
      }
    },
    created () {
      this.getAllThreads()
    }
  }
</script>

<style scoped>
  .panel {
    margin-top: 20px;
  }
  .btn {
    margin-top: 20px;
    border-radius: 50px;
  }
  a hover {
    color: white;
  }
</style>
