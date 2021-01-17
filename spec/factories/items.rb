FactoryBot.define do
  factory :item do

    name { Faker::Name.name }
    description { Faker::Lorem.sentence }
    category_id { Faker::Number.between(from:2, to:11) }
    condition_id { Faker::Number.between(from:2, to:7) }
    delivery_fee_id { Faker::Number.between(from:2, to:3) }
    sending_area_id { Faker::Number.between(from:2, to:48) }
    sending_days_id { Faker::Number.between(from:2, to:4) }
    price { Faker::Number.between(from:300, to:9999999) }

    after(:build) do |picture|
      picture.image.attach(io: File.open('public/images/cat.jpg'), filename: 'cat.jpg')
    end
  end
end
