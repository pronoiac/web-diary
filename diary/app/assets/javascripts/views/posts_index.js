Diary.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts_index'],
  render: function () {
    var content = this.template({ posts: this.collection });
    this.$el.html(content);
    return this;
  },
  
  initialize: function () {
    this.listenTo(this.collection, "sync remove add change:title reset", this.render.bind(this))
  },
  
  events: {
    'click .post-delete': 'deletePost'
  },
  
  deletePost: function(event) {
    // alert("delete clicked!");
    var $target = $(event.currentTarget);
    var postId = $target.data("id");
    this.collection.get(postId).destroy();
  }
})