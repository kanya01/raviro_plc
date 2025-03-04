class RemoveBlogPostIdFromBlogPosts < ActiveRecord::Migration[8.0]
  def change
    remove_column :blog_posts, :blog_post_id, :integer
  end
end
