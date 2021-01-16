class Item < ApplicationRecord
  has_one_attached :image
  ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  belongs_to :condition
  belongs_to :delivery_fee
  belongs_to :sending_area
  belongs_to :sending_day


  with_options presence :true do
    validates :name
    validates :description
    validates :category_id, numericality: { other_than: 1 }
    validates :condition_id, numericality: { other_than: 1 }
    validates :delivery_fee_id, numericality: { other_than: 1 }
    validates :sending_area_id, numericality: { other_than: 1 }
    validates :sending_days_id, numericality: { other_than: 1 }
  end

end
