# テーブル設計

## usersテーブル
|column         |type   |options    |
| ---------------- | ----- | --------- |
|nickname          |string |null :false              |
|email             |string |null: false, unique: true|
|encrypted_password|string |null: false              |
|first_name        |string |null: false              |
|last_name         |string |null: false              |
|first_name_kana   |string |null: false              |
|last_name_kana    |string |null: false              |
|birthday          |date   |null: false              |

### Association
- has_many :orders
- has_many :items


## itemsテーブル
|column          |type      |options          |
| -------------- | -------- | --------------- |
|user            |references|foreign_key: true|
|name            |string    |null: false      |
|description     |text      |null: false      |
|category_id     |integer   |null: false      |
|condition_id    |integer   |null: false      |
|delivery_fee_id |integer   |null: false      |
|sending_area_id |integer   |null: false      |
|sending_days_id |integer   |null: false      |
|price           |integer   |null: false      |

### Association
- has_one :order
- belongs_to :user

## ordersテーブル
|column          |type      |options          |
| -------------- | -------- | --------------- |
|item            |references|foreign_key: true|
|user            |references|foreign_key: true|

### Association
- belongs_to :item
- belongs_to :user
- has_one :address


## addressesテーブル
|column            |type      |options          |
| ---------------- | -------- | --------------- |
|order             |references|foreign_key: true|
|post_code         |string    |null: false      |
|prefecture_id     |integer   |null: false      |
|city              |string    |null: false      |
|house_number      |string    |null: false      |
|building_name     |string    |                 |
|phone_number      |string    |null: false      |

### Association
- belongs_to :order