class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render json: params[:follower_id]
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follower_id:params[:follower_id],followee_id:params[:followee_id])


    if @follow.destroy
      render json: params[:follower_id]
    else
      render json: follow.errors.full_messages, status: 422
    end
  end


  def follow_params
    params.require(:follow).permit(:follower_id,:followee_id)
  end
end
