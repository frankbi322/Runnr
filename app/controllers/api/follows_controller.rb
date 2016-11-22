class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(
      follower_id: params[:follower_id],
      followee_id: params[:followee_id]
    )
    if @follow.save
      render 'api/follows/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    if @follow.destroy
      render 'api/follows/show', status: 200
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def show
    @follow = Follow.find_by(follower_id:params[:follower_id],followee_id:params[:followee_id])
    render json: params[:follower_id]
  end

  def index
    @follows = Follow.all
    render 'api/follows/index'
  end

  def follow_params
    params.require(:follow).permit(:follower_id,:followee_id)
  end
end
