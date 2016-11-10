class Api::CompletionsController < ApplicationController

def create
  @completion = Completion.new(
    user_id: params[:user_id],
    route_id: params[:route_id]
  )
  if @completion.save
    render json: params[:user_id]
  else
    render json: @completion.errors.full_messages, status: 422
  end
end

def show
  @completion = Completion.find(params[:id])
end

def index
  @completions = Completion.all
end



  def completion_params
    params.require(:completion).permit(:user_id,:route_id)
  end
end
