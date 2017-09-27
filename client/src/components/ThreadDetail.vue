<template>
  <div class="col-md-12">
    <div class="jumbotron">
      <h1>{{detail.title}}</h1>
      <p>{{detail.konten}}</p>
      <div class="text-right">
        <button type="button" name="button"class="btn btn-primary" >
          <span class="glyphicon glyphicon-user"></span> by : {{detail.author.username.toUpperCase()}}
        </button>
        <button type="button" name="button"class="btn btn-warning" ><span class="glyphicon glyphicon-heart"></span> {{detail.voter.length}}
        </button>

        <button type="button" class="btn btn-danger" name="button" v-if="idCreator == detail.author._id" @click="deleteThread(thread._id); clearMe()">
          <span class="glyphicon glyphicon-trash"></span>
        </button>
      </div>
    </div>

    <div class="alert alert-dismissible alert-success" v-if="pesan">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      {{pesan}}.
    </div>
    <!-- KOMENTAR -->
    <div class="form-group">
      <!-- <label class="control-label">Input addons</label> -->
      <div class="input-group">
        <span class="input-group-addon glyphicon glyphicon-gift"></span>
        <input type="text" class="form-control" v-model="komentar.konten">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button" @click="kirimKomentar"><b>Kirim Komentar</b></button>
        </span>
      </div>
    </div>
    <!-- KOMENTAR -->

    <!-- {{answer}} -->
    <div v-if="answers.length > 0">
      <div class="panel panel-primary" v-for="answer in answers">
        <div class="panel-heading">
          <h3 class="panel-title text-left">Respon dari : {{username || answer.author.username}}</h3>
        </div>
        <div class="panel-body text-left">
          {{answer.konten}}
        </div>
      </div>
    </div>

    <!-- {{getThreadDetail}} -->
    <!-- <h2>People Response</h2>
    {{getThreadDetail[1]}} -->
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  props: ['slug'],
  data (){
    return {
      detail: '',
      answers: '',
      komentar: {
        author: `${localStorage.getItem('id')}`,
        konten: ''
      },
      pesan: '',
      username: `${localStorage.getItem('username')}`
    }
  },
  methods: {
    threadDetail(slug){
      console.log('ini slug', slug);
      this.$http.get('http://localhost:3000/threads/' + slug)
      .then(({data}) => {
        this.detail = data[0]
        this.answers = data[1]
      })
      .catch(err => {
        console.log('erornya', err);
      })
    },
    kirimKomentar(){
      this.$http.post(`http://localhost:3000/threads/${this.slug}`, this.komentar)
      .then(({data}) => {
        this.pesan = 'Komentar kamu sudah diposting!!!'
        this.answers.unshift(data)
        this.komentar.konten = ''
      })
    }
  },
  created () {
    this.threadDetail(this.slug)
    // this.$store.dispatch('getThreadDetail')
  },
  watch: {
    slug () {
      this.threadDetail(this.slug)
    }
  }
}

</script>

<style>

</style>
