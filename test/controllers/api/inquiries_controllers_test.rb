require "test_helper"

class Api::InquiriesControllerTest < ActionDispatch::IntegrationTest
  test "should create a new inquiry with valid data" do
    assert_difference("Inquiry.count") do
      post api_inquiries_path, params: {
        inquiry: {
          name: "Test User",
          email: "test@example.com",
          message: "This is a test inquiry."
        }
      }, as: :json
    end

    assert_response :created
    json_response = JSON.parse(response.body)
    assert_equal "success", json_response["status"]
  end

  test "should return validation errors with invalid data" do
    assert_no_difference("Inquiry.count") do
      post api_inquiries_path, params: {
        inquiry: {
          name: "",
          email: "invalid-email",
          message: ""
        }
      }, as: :json
    end

    assert_response :unprocessable_entity
    json_response = JSON.parse(response.body)
    assert json_response["errors"].present?
  end

  test "should handle empty params" do
    assert_no_difference("Inquiry.count") do
      post api_inquiries_path, params: {}, as: :json
    end

    assert_response :bad_request
  end

  test "should handle missing inquiry params" do
    assert_no_difference("Inquiry.count") do
      post api_inquiries_path, params: { other: "data" }, as: :json
    end

    assert_response :bad_request
  end
end