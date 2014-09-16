Diary.Forms.PostForm = Backbone.form.extend({
  template: JST['post_form'],
  
  initialize: function () {
    this.listenTo(this.view, "submit", this.render.bind(this))
  },
  //this is an example only
  events: {
    'submit form' : "submit"
  }
  
})