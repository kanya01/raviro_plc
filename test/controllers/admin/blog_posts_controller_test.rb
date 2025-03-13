# test/controllers/admin/blog_posts_controller_test.rb
require "test_helper"
require "mocha/minitest"
class Admin::BlogPostsControllerTest < ActionDispatch::IntegrationTest
  setup do

    Admin::BlogPostsController.any_instance.stubs(:authenticate_admin!).returns(true)

   @tag = Tag.create!(name: "Test Tag")

    # Create a test blog post
    @blog_post = BlogPost.create!(
      title: "Test Blog Post",
      content: "Test content for blog post",
      excerpt: "Test excerpt",
      slug: "test-blog-post",
      category: "Test",
      author: "Test Author",
      read_time: 5,
      published: true,
      published_at: Time.current,
      tag: @tag
    )

    # New blog post params for create test
    @new_blog_post_params = {
      title: "New Test Post",
      content: "New content",
      excerpt: "New excerpt",
      slug: "new-test-post",
      category: "Test",
      author: "Test Author",
      read_time: 5,
      published: true,
      published_at: Time.current,
      tag_id: @tag.id
    }
  end

  test "should get index" do
    get admin_blog_posts_path
    assert_response :success
  end

  test "should get show" do
    get admin_blog_post_path(@blog_post)
    assert_response :success
  end

  test "should get new" do
    get new_admin_blog_post_path
    assert_response :success
  end

  test "should create blog_post" do
    assert_difference("BlogPost.count") do
      post admin_blog_posts_path, params: { blog_post: @new_blog_post_params }
    end
    assert_redirected_to admin_blog_post_path(BlogPost.last)
  end

  test "should get edit" do
    get edit_admin_blog_post_path(@blog_post)
    assert_response :success
  end

  test "should update blog_post" do
    patch admin_blog_post_path(@blog_post), params: {
      blog_post: { title: "Updated Title" }
    }
    assert_redirected_to admin_blog_post_path(@blog_post)
    @blog_post.reload
    assert_equal "Updated Title", @blog_post.title
  end

  test "should destroy blog_post" do
    assert_difference("BlogPost.count", -1) do
      delete admin_blog_post_path(@blog_post)
    end
    assert_redirected_to admin_blog_posts_path
  end
end