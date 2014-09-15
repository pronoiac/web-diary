class PostsController < ApplicationController
  def create (post) {
    @post = new Post()
    
    if @post.save {
      // success
    } else {
      // failure
    }
  }
end
