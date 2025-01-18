class CreatePublications < ActiveRecord::Migration[8.0]
  def change
    create_table :publications do |t|
      t.string :title
      t.string :doi
      t.text :abstract
      t.boolean :featured
      t.string :slug
      t.string :status

      t.timestamps
    end
  end
end
