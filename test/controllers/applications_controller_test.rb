require "test_helper"

class ApplicationsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    post applications_path
    assert_response :success
  end
end
