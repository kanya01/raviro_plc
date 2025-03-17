require "test_helper"

class JobListingsControllerTest < ActionDispatch::IntegrationTest
  test "should skip job listings tests" do
    skip_if_not_in_scope("job_listings")
  end
end
