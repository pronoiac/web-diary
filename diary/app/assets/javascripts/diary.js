window.Diary = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    Diary.posts = new Diary.Collections.Posts();
    Diary.posts.fetch();
    var view = new Diary.Views.PostsIndex({collection: Diary.posts});
    $('.container').html(view.render().$el);
  }
};

$(document).ready(function(){
  Diary.initialize();
});
