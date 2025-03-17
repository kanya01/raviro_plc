require "test_helper"

class PublicationTest < ActiveSupport::TestCase
  test "should skip publication tests" do
    skip_if_not_in_scope("publications")
  end
end
