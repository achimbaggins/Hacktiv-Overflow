<template>
  <form @submit.prevent="postNewThread(newPost); clearMe()">
    <fieldset>
      <legend>Post New Question</legend>
      <div class="alert alert-dismissible alert-warning" v-if=(pesan)>
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Well done!</strong> You successfully submit Question.
      </div>
      <div class="form-group">
        <label for="inputEmail" >Question Title</label>
        <div >
          <input type="text" class="form-control" placeholder="title" v-model="newPost.title">
        </div>
      </div>

      <div class="form-group">
        <label for="textArea"  >Question Detail</label>
        <div >
          <textarea class="form-control" rows="3" v-model="newPost.konten"></textarea>
          <span class="help-block">fill form above and anyone can help you.</span>
        </div>
      </div>
      <button type="submit" name="button" class="btn btn-primary">Submit Question</button>
    </fieldset>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        newPost: {
          title: '',
          konten: '',
          author: `${localStorage.getItem('id')}`
        },
        pesan: ''
      }
    },
    methods: {
      ...mapActions([
        'postNewThread'
      ]),
      clearMe (){
        this.pesan = 'berhasil post question'
        // this.newPost.title = ''
        // this.newPost.konten = ''
      }
    }
  }
</script>
