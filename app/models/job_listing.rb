class JobListing < ApplicationRecord
  validates :title, :description, :location, presence: true
  scope :active, -> { where(active: true) }

  def self.recent
    order(created_at: :desc)
  end
end
