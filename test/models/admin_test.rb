require "test_helper"

class AdminTest < ActiveSupport::TestCase
  test "should create a regular admin" do
    admin = Admin.new(
      email: "admin@example.com",
      password: "password123",
      password_confirmation: "password123"
    )

    assert admin.valid?
    assert_not admin.superadmin?
  end

  test "should create a superadmin" do
    admin = Admin.create_superadmin(
      email: "superadmin@example.com",
      password: "password123"
    )

    assert admin.persisted?
    assert admin.superadmin?
  end

  test "should require email" do
    admin = Admin.new(
      password: "password123",
      password_confirmation: "password123"
    )

    assert_not admin.valid?
    assert_includes admin.errors[:email], "can't be blank"
  end

  test "should require password" do
    admin = Admin.new(
      email: "admin@example.com"
    )

    assert_not admin.valid?
    assert_includes admin.errors[:password], "can't be blank"
  end

  test "should require password confirmation to match password" do
    admin = Admin.new(
      email: "admin@example.com",
      password: "password123",
      password_confirmation: "different123"
    )

    assert_not admin.valid?
    assert_includes admin.errors[:password_confirmation], "doesn't match Password"
  end

  test "should not allow duplicate emails" do
    Admin.create!(
      email: "dupe@example.com",
      password: "password123",
      password_confirmation: "password123"
    )

    duplicate = Admin.new(
      email: "dupe@example.com",
      password: "password456",
      password_confirmation: "password456"
    )

    assert_not duplicate.valid?
    assert_includes duplicate.errors[:email], "has already been taken"
  end
end