# テーブル設計

## usersテーブル
|column         |type   |options    |
| ------------- | ----- | --------- |
|nickname       |string |null :false|
|email          |string |null: false|
|password       |string |null: false|
|first_name     |string |null: false|
|last_name      |string |null: false|
|first_name_kana|string |null: false|
|last_name_kana |string |null: false|
|born_year      |integer|null: false|
|born_month     |integer|null: false|
|born_date      |integer|null: false|

### Association
- has_many :items
- has_one :address
- has_many :purchase_records


## addressesテーブル
|column          |type      |options          |
| -------------- | -------- | --------------- |
|user_id         |references|foreign_key: true|
|zip_code        |string    |null: false      |
|prefecture      |string    |null: false      |
|city            |string    |null: false      |
|house_number    |string    |null: false      |
|building_name   |string    |                 |
|telephone_number|string    |null: false      |

### Association
- belongs_to :user


## itemsテーブル
|column          |type      |options          |
| -------------- | -------- | --------------- |
|user_id         |references|foreign_key: true|
|name            |string    |null: false      |
|description     |text      |null: false      |
|category        |string    |null: false      |
|condition       |string    |null: false      |
|delivery_fee    |string    |null: false      |
|sending_area    |string    |null: false      |
|sending_days    |string    |null: false      |
|price           |integer   |null: false      |

### Association
- belongs_to :user
- has_one :purchase_records


## purchase_recordsテーブル
|column          |type      |options          |
| -------------- | -------- | --------------- |
|item_id         |references|foreign_key: true|
|user_id         |references|foreign_key: true|

### Association
- belongs_to :item
- belongs_to :user