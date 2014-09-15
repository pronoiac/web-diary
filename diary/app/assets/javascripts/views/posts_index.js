Diary.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts_index'],
  render: function () {
    var content = this.template({ posts: this.collection });
    this.$el.html(content);
    return this;
  },
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render.bind(this))
  }
})