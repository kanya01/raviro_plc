class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :blog_posts
end
