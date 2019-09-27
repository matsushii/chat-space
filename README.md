 ## users_テーブル

|Column|Type|Options|
|------|----|-------|
|e-mail|string|null: false|
|password|string|null: false|
|nickname|string|null: false|

### Association
- has_many :messages
- has_many :groups, though: :groups_users



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :group
- has_many :users, though: :groups_users


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
|body|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user