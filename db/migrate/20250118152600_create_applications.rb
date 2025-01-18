class CreateApplications < ActiveRecord::Migration[8.0]
  def change
    create_table :applications do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.references :job_listing, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
