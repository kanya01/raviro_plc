class CreateBlogPosts < ActiveRecord::Migration[8.0]
  def change
    create_table :blog_posts do |t|
      t.string :title
      t.text :content
      t.string :excerpt
      t.string :slug
      t.string :category
      t.string :author
      t.integer :read_time
      t.boolean :published
      t.datetime :published_at

      t.timestamps
    end
    add_index :blog_posts, :slug, unique: true
  end
end
