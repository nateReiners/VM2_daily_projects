class Api::SessionsController < ApplicationController


  def create
    @session = Session.new(
    params.session[:username],
    params.session[:password]
    )
    if @session.create!
    else
      flash[:errors] = @session.errors.full_messages
    end
  end

  def destroy
    logout current_user;
  end


end
