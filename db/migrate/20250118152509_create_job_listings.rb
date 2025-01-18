class CreateJobListings < ActiveRecord::Migration[8.0]
  def change
    create_table :job_listings do |t|
      t.string :title
      t.text :description
      t.text :requirements
      t.boolean :active
      t.datetime :deadline
      t.string :position_type
      t.string :location
      t.string :slug

      t.timestamps
    end
  end
end
