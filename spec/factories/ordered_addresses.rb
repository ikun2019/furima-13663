FactoryBot.define do
  factory :ordered_address do
    post_code { '111-1111' }
    prefecture_id { '10' }
    city { Faker::Address.city }
    house_number { Faker::Address.street_address }
    phone_number { Faker::PhoneNumber.extension(length: 11) }
    token { "tok_abcdefghijk00000000000000000" }
    association :user
    association :item
  end
end