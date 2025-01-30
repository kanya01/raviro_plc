class Api::InquiriesController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    @inquiry = Inquiry.new(inquiry_params)
    if @inquiry.save
      # InquiryMailer.new_inquiry(@inquiry).deliver_now
      render json: { status: "success" }, status: :created
    else
      render json: { errors: @inquiry.errors }, status: :unprocessable_entity
    end
  end

  private

  def inquiry_params
    params.require(:inquiry).permit(:name, :email, :message)
  end
end
