class AddSuperadminToAdmins < ActiveRecord::Migration[8.0]
  def change
    add_column :admins, :superadmin, :boolean
  end
end
