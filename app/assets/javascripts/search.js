$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function (members) {
      $("#user_search_result").empty();
      if (members.length !== 0) {
          members.forEach(function (user) {
              appendUsers(user);
          })
      }
    })
    .fail(function () {
        alert('ユーザー検索に失敗しました');
    });
  });
});