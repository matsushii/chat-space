$(function() {
  var user_list = $("#user-search-result");

  function appendUsers(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    user_list.append(html);
  }

    var html = `<div class="chat-gruop-user clesrfix">
                  <p class="chat-group-user__name">${msg}</p>
                </div>`
    user_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(members) {
      $("#user-search-result").empty();
      if (members.length !== 0) {
        members.forEach(function(user){
          appendUsers(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーがみつかりません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });
}); 