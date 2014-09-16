Diary.Collections.Posts = Backbone.Collection.extend ({
  model: Diary.Models.Post,
  url: '/posts',
  // initialize: function (attribute) {}
  getOrFetch: function (id) {
    var post = Diary.posts.get(id);
    if (post === undefined) {
      // not available via get; fetch posts
      post = new Diary.Models.Post({id: id}); // id});
      post.fetch();
    } 
    return post;
  }

});