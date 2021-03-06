class SessionsController < ApplicationController

  def new
    if session[:user_id]
      render "users/show"
    else
      respond_to do |format|
        format.html {}
      end
    end
  end

  def create
    if user = User.authenticate_with_credentials(params[:email], params[:password])
      session[:user_id] = user.id
      render json: user, serializer: UserSerializer, status: 201
    else
      render json: { errors: ["Invalid e-mail or password."] }, status: 422
    end
  end

  def destroy
    session[:user_id] = nil
  end

end