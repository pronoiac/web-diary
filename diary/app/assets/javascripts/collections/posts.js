Diary.Collections.Posts = Backbone.Collection.extend ({
  model: Diary.Models.Post,
  url: '/posts'
  // initialize: function (attribute) {}
});