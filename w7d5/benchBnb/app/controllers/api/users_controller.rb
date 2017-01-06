class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params);
    if @user.create!
      login(@user)
    else
      flash[:errors] = @user.errors.full_messages
    end
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
