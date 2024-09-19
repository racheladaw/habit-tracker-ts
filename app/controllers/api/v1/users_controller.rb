class Api::V1::UsersController < ApplicationController
  def show
    render json: UserSerializer.new(current_user).serializable_hash
  end
end