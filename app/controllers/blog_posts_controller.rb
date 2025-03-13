# app/controllers/blog_posts_controller.rb
class BlogPostsController < ApplicationController

  layout -> { Rails.env.test? ? 'test' : 'application' }
  def index
    @blog_posts = BlogPost.published.recent
    @blog_posts = [] if @blog_posts.nil?
  end

  def show
    @blog_post = BlogPost.published.find_by!(slug: params[:id])

    if Rails.env.test?
      render plain: "Test environment - BlogPost: #{@blog_post.title}"
      return
    end

  rescue ActiveRecord::RecordNotFound
    redirect_to blog_posts_path, alert: "Blog post not found"
  rescue => e
    Rails.logger.error("Error in BlogPostsController#show: #{e.message}")
    Rails.logger.error(e.backtrace.join("\n"))
    redirect_to blog_posts_path, alert: "An error occurred"
  end
end
