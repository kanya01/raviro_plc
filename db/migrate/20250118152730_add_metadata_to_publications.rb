class AddMetadataToPublications < ActiveRecord::Migration[8.0]
  def change
    add_column :publications, :author, :string
    add_column :publications, :published_date, :date
    add_column :publications, :journal, :string
    add_column :publications, :volume, :string
    add_column :publications, :issue, :string
  end
end
