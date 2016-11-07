class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @route=@comment.route
      render '/api/routes/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end



  def comment_params
    params.require(:comment).permit(:body, :author_id, :route_id)
  end

end
