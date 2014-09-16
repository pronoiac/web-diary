Diary.Routers.Router = Backbone.Router.extend({ 
  initialize: function ($el) {
    this.$rootEl = $el;
    Diary.posts = new Diary.Collections.Posts();
  },
  routes: {
    '': 'posts_index',
    'posts/:id': 'post_show',
    'posts/new' : 'post_form'
  },
  posts_index: function () {
    Diary.posts.fetch();
    var view = new Diary.Views.PostsIndex({collection: Diary.posts});
    this.$rootEl.html(view.render().$el);
  },
  post_show: function (id) {
    var post = Diary.posts.getOrFetch(id);
    var view = new Diary.Views.PostShow({model: post});
    this.$rootEl.html(view.render().$el);
  },
  post_form: function () {
    
  }
})