# app/controllers/blog_posts_controller.rb
class BlogPostsController < ApplicationController
  def index
    @blog_posts = BlogPost.published.recent
  end

  def show
    @blog_post = BlogPost.published.find_by!(slug: params[:id])
    render :show
  rescue ActiveRecord::RecordNotFound
    redirect_to blog_posts_path, alert: "Blog post not found"
  end
end
