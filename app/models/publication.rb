class Publication < ApplicationRecord
  validates :title, :doi, presence: true
  scope :featured, -> { where(featured: true) }
end
