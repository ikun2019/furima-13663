class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :items
  has_many :orders

  VALID_PASSWORD_REGEX = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i
  VALID_NAME_REGEX = /\A[ぁ-んァ-ン一-龥]/
  VALID_KANA_REGEX = /\A[ァ-ヶー－]+\z/
  with_options presence: true do
    validates :nickname
    validates :first_name, format: { with: VALID_NAME_REGEX }
    validates :last_name, format: { with: VALID_NAME_REGEX }
    validates :first_name_kana, format: { with: VALID_KANA_REGEX }
    validates :last_name_kana, format: { with: VALID_KANA_REGEX }
    validates :birthday
    validates :password, format: { with: VALID_PASSWORD_REGEX }
  end
end
