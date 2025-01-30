class Admin::BaseController < ApplicationController
  before_action :authenticate_admin!
  layout "admin"

  # def authenticate_admin
  #   # TODO Add authentication logic here.
  # end
end
