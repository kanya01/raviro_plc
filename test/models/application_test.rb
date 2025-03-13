require "test_helper"

class ApplicationTest < ActiveSupport::TestCase
  setup do
    @job_listing = job_listings(:one)
    @application = Application.new(
      name: "John Doe",
      email: "john@example.com",
      job_listing: @job_listing
    )
  end

  test "should be valid with required attributes" do
    assert @application.valid?
  end

  test "should not be valid without a name" do
    @application.name = nil
    assert_not @application.valid?
    assert_includes @application.errors[:name], "can't be blank"
  end

  test "should not be valid without an email" do
    @application.email = nil
    assert_not @application.valid?
    assert_includes @application.errors[:email], "can't be blank"
  end

  test "should not be valid without a job_listing" do
    @application.job_listing = nil
    assert_not @application.valid?
    assert_includes @application.errors[:job_listing], "must exist"
  end

end