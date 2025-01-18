class JobListing < ApplicationRecord
  validates :title, :description, :location, presence: true
  scope :active, -> { where(active: true) }
end
