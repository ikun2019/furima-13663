FactoryBot.define do
  factory :user do
    Faker::Config.locale = :ja

    nickname { Faker::Name.last_name }
    email { Faker::Internet.free_email }
    password { Faker::Internet.password(mix_case: true, min_length: 6) }
    password_confirmation { password }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    first_name_kana { 'メイ' }
    last_name_kana { 'セイ' }
    birthday { Faker::Date.birthday }

  end
end
