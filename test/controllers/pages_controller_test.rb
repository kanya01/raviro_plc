require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should skip page tests" do
    skip_if_not_in_scope("pages")
  end
end
