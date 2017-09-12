<template>
  <form @submit.prevent="postNewThread(newPost)">
    <fieldset>
      <legend>Post New Question</legend>
      <div class="form-group">
        <label for="inputEmail" class="col-md-3 control-label">Question Title</label>
        <div class="col-md-9">
          <input type="text" class="form-control" placeholder="title" v-model="newPost.title">
        </div>
      </div>

      <div class="form-group">
        <label for="textArea" class="col-md-3 control-label">Question Detail</label>
        <div class="col-md-9">
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
        }
      }
    },
    methods: {
      ...mapActions([
        'postNewThread'
      ])
    }
  }
</script>
