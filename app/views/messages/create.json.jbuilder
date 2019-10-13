json.id    @message.id
json.user_name    @message.user.name
json.(@message, :content, :image)
json.created_at    @message.created_at.strftime("%Y/%m/%d %H:%M")
