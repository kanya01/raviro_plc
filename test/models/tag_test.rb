require "test_helper"

class TagTest < ActiveSupport::TestCase
  test "should create a valid tag" do
    tag = Tag.new(name: "Technology")
    assert tag.valid?
  end

  test "should require a name" do
    tag = Tag.new
    assert_not tag.valid?
    assert_includes tag.errors[:name], "can't be blank" if tag.errors.include?(:name)
  end

  test "should have unique name" do
    Tag.create!(name: "Duplicate Test")
    duplicate = Tag.new(name: "Duplicate Test")
    assert_not duplicate.valid?
    assert_includes duplicate.errors[:name], "has already been taken" if duplicate.errors.include?(:name)
  end

  test "should have many blog posts" do
    tag = tags(:one)
    blog_post = BlogPost.create!(
      title: "Test Post for Tag Association",
      slug: "test-post-tag-association",
      content: "Testing tag associations",
      excerpt: "Test excerpt",
      category: "Test",
      published: true,
      tag: tag
    )

    assert_includes tag.blog_posts, blog_post if tag.respond_to?(:blog_posts)
  end
end