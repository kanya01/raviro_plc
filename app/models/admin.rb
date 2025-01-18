class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def self.create_superadmin(email:, password:)
    Admin.create!(
      email: email,
      password: password,
      password_confirmation: password,
      superadmin: true
    )
    # create(emai: email, password: password, superadmin: true)
  end
end
