class AddTagsToBlogPosts < ActiveRecord::Migration[8.0]
  def change
    add_reference :blog_posts, :blog_post, null: false, foreign_key: true
    add_reference :blog_posts, :tag, null: false, foreign_key: true
  end
end
