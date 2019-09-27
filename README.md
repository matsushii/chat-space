 ## users_テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|e-mail|integer|null: false|
|password|string|null: false|
|nickname|string|null: false|

### Association
- has_many :groups
- has_many :massages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_name|string|null: false|

### Association
- has_many :users
- has_many :massages


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|body|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user