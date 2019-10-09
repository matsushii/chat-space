class MessagesController < ApplicationController
  before_action :set_group  #全てのメソッドの前にset_groupメソッドを実行する


  def index
    @message = Message.new  #messageインスタンス変数の定義
    @messages = @group.messages.includes(:user) 
    #@groupのmessagesをuser情報を結びつけて@messagesへ代入
  end

  def create
    @message = @group.messages.new(message_params)  #messageインスタンス変数の定義
    if @message.save  #messageが保存された場合
      respond_to do |format|
        format.html {redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'} #再度そのグループへアクセスしてnoticeの表示
        format.json
      end
    else
        @messages = @group.message.includes(:user)
        flash.now[:alert] = 'メッセージを入力してください。'
    end
  end

  private

  def message_params #content,imageを含むparamsをrequierで取得してmergeでcurrent_user.idと結合して引数として渡す
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group #Groupテーブルからgroup_idをキーとしてレコードをとってきて@groupに渡す
    @group = Group.find(params[:group_id])
  end

end