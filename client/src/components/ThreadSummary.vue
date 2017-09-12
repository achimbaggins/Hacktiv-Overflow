<template>
  <div class="panel panel-success">
    <div class="panel-heading text-left">
      <router-link :to="'threads/' + thread.slug">
        <h1 class="panel-title" style="color:white;"><b>{{ thread.title }}</b></h1>
      </router-link>
    </div>
    <div class="panel-body text-left">
        {{thread.konten}}
      <div class="text-right">
        <button type="button" name="button"class="btn btn-primary" >
          <span class="glyphicon glyphicon-user"></span> Thread Starter : {{thread.author.username}}
        </button>
        <router-link :to="'threads/' + thread.slug">
          <button type="button" name="button"class="btn btn-warning" >
            <span class="glyphicon glyphicon-eye-open"></span> Give Respond!
          </button>
        </router-link>
        <button type="button" class="btn btn-danger" name="button" v-if="idCreator == thread.author._id" @click="deleteThread(thread._id)">
          <span class="glyphicon glyphicon-trash"></span> Delete
        </button>
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
        idCreator: localStorage.getItem('id')
      }
    },
    methods: {
      ...mapActions ([
        'deleteThread'
      ])
    }
  }
</script>

<style scoped>
  .panel {
    margin-top: 20px;
  }
  .btn {
    margin-top: 20px;
  }
  a hover {
    color: white;
  }
</style>
