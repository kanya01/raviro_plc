require "test_helper"

class BlogPostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    # Create the necessary fixtures or records
    @blog_post = blog_posts(:one)
    @blog_post.update(slug: "first-post") if @blog_post.slug.nil?
    # @blog_post = BlogPost.create!(
    #   title: "Test Post",
    #   slug: "test-post",
    #   content: "Test content",
    #   excerpt: "Test excerpt",
    #   category: "Test",
    #   author: "Test Author",
    #   read_time: 5,
    #   published: true,
    #   published_at: Time.current,
    #   tag_id: 1 # Explicitly set to nil to avoid foreign key issues
    # )
  end

  test "should get index" do
    # Just test that the route works and assigns the right variables
    get blog_posts_path
    assert_response :success
  end

  test "should get show for valid slug" do
    # Test the slug-based lookup works correctly
    get blog_post_path(@blog_post.slug)
    assert_response :success
  end

  test "should redirect for invalid slug" do
    get blog_post_path("invalid-slug")
    assert_redirected_to blog_posts_path
    assert_equal "Blog post not found", flash[:alert]
  end
end
