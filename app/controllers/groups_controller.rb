class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]
  #edit.updateメソッドの前にset_groupを行う
  def index
  end

  def new
    @group = Group.new  #@groupの定義
    @group.users << current_user  
    #current_userを@groupのusersへ代入（groupのuserに自身も含めた）
  end

  def create
    @group = Group.new(group_params)
    if @group.save #@groupが保存された場合
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new #new画面へ遷移
    end
  end
  
  def update
    if @group.update(group_params)  #updateが行われた場合
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit  #edit画面へ遷移
    end
  end

  private

  def group_params  #group
    params.require(:group).permit(:name, {user_ids: []})
  end

  def set_group #@groupの定義
    @group = Group.find(params[:id])
  end

end
