require "test_helper"

class BlogPostTest < ActiveSupport::TestCase
  setup do
    @tag = tags(:one)
    @blog_post = BlogPost.new(
      title: "Test Blog Post",
      content: "Test content for the blog post",
      excerpt: "Test excerpt for the blog post",
      category: "Test",
      author: "Test Author",
      read_time: 5,
      published: true,
      published_at: Time.current,
      tag: @tag
    )
  end

  test "should be valid with all attributes" do
    assert @blog_post.valid?
  end

  test "should not be valid without a title" do
    @blog_post.title = nil
    assert_not @blog_post.valid?
    assert_includes @blog_post.errors[:title], "can't be blank"
  end

  test "should generate slug from title if slug is blank" do
    @blog_post.slug = nil
    @blog_post.save
    assert_equal "test-blog-post", @blog_post.slug
  end

  test "should not change existing slug when title changes" do
    @blog_post.slug = "custom-slug"
    @blog_post.save

    @blog_post.title = "Updated Title"
    @blog_post.save

    assert_equal "custom-slug", @blog_post.slug
  end

  test "should enforce unique slugs" do
    @blog_post.save

    duplicate = BlogPost.new(
      title: "Another Blog Post",
      slug: @blog_post.slug,
      content: "Another content",
      excerpt: "Another excerpt",
      category: "Test",
      author: "Test Author",
      read_time: 3,
      published: true,
      published_at: Time.current
    )

    assert_not duplicate.valid?
    assert_includes duplicate.errors[:slug], "has already been taken"
  end

  test "published scope should return only published posts" do
    @blog_post.save

    unpublished = BlogPost.create(
      title: "Unpublished Post",
      content: "Unpublished content",
      excerpt: "Unpublished excerpt",
      category: "Test",
      author: "Test Author",
      read_time: 4,
      published: false,
      published_at: Time.current
    )

    published_posts = BlogPost.published

    assert_includes published_posts, @blog_post
    assert_not_includes published_posts, unpublished
  end

  test "recent scope should order by published_at desc" do
    recent_posts = BlogPost.recent.to_a
    assert recent_posts.size >= 2, "Need at least 2 posts to test ordering"

    recent_posts.each_cons(2) do |newer, older|
      assert newer.published_at >= older.published_at,
             "Posts should be ordered by published_at in descending order"
    end

  end

  test "tag association should be optional" do
    @blog_post.tag = nil
    assert @blog_post.valid?
  end
end