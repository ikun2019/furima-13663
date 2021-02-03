class Item < ApplicationRecord
  has_many_attached :images, dependent: :destroy
  belongs_to :user
  has_one :order
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  belongs_to :condition
  belongs_to :delivery_fee
  belongs_to :sending_area
  belongs_to :sending_day


  with_options presence: true do
    validates :name
    validates :description
    validates :images
    validates :price, numericality: { greater_than_or_equal_to: 300, less_than_or_equal_to: 9999999 }, format: { with: /\A[0-9]+\z/ }
    with_options numericality: { other_than: 1 } do
      validates :category_id
      validates :condition_id
      validates :delivery_fee_id
      validates :sending_area_id
      validates :sending_day_id
    end
  end

end
