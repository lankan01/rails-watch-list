class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.text :comment, null: false
      t.references :movie, foreign_key: true
      t.references :list, foreign_key: true
      t.timestamps
    end
  end
end
