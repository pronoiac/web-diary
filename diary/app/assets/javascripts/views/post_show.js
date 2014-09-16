Diary.Views.PostShow = Backbone.View.extend({
  template: JST['post_show'],
  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, "sync", this.render.bind(this))
  },
})