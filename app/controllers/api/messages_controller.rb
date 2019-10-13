class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    #現在のgroup_idからgroupを取得し、groupへ代入
    last_message_id = params[:id].to_i
    #messagesの最後のidを代入
    @messages = group.messages.includes(:user).where("id > #{last_message_id}")
    #最後のidよりもidの大きいもののみを取得
  end
end