require "test_helper"

class PublicationsControllerTest < ActionDispatch::IntegrationTest
  test "should skip publications tests" do
    skip_if_not_in_scope("publications")
  end
end
