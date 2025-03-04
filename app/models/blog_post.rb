# app/models/blog_post.rb
class BlogPost < ApplicationRecord
  validates :title, :slug, presence: true
  validates :slug, uniqueness: true

  scope :published, -> { where(published: true) }
  scope :recent, -> { published.order(published_at: :desc) }

  before_validation :generate_slug, if: -> { slug.blank? && title.present? }

  private

  def generate_slug
    self.slug = title.parameterize
  end
end
