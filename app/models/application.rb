class Application < ApplicationRecord
  belongs_to :job_listing
  has_one_attached :cv
  has_one_attached :cover_letter
  validates :email, :name, presence: true
end
