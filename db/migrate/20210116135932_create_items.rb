class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.references :user, foreign_key: true
      t.string :name, null: false
      t.text  :description, null: false
      t.integer :category_id, null: false
      t.integer :condition_id, null: false
      t.integer :delivery_fee_id, null: false
      t.integer :sending_area_id, null: false
      t.integer :sending_day_id, null: false
      t.integer :price, null: false
      t.timestamps
    end
  end
end
