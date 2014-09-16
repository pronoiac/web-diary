window.Diary = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var router = new Diary.Routers.Router($('.container'));
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Diary.initialize();
});
