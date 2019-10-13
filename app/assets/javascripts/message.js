$(function(){
  function buildHTML(message){
    var insertImage = '';
    if (message.image.url) {
        insertImage = `<img src="${message.image.url}">`;
    }
    var html = `<div class="message" data-id = "${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    ${insertImage}
                  </div>
                </div>`;
    return html;
  }

  function ScrollToNewMessage(){
    $('.messages').animate({ scrollTop: $(".messages")[0].scrollHeight }, 500);
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault(); 
    var formdata = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({  
      url: url,
      type: "POST",
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function (data) {
      console.log(data);
      var html = buildHTML(data);
      $('.messages').append(html);
      ScrollToNewMessage();
      $("form")[0].reset();
      $(".form__submit").prop('disabled', false);
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    });
  });

  var reloadMessages = function() {
    var last_message_id = $('.message').last().data('id')
    console.log(last_message_id);
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: "api/messages",
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function (messages) {
        var insertHTML = '';
        console.log(messages);
        messages.forEach(function(message) {
          insertHTML += buildHTML(message); 
        });
        $('.messages').append(insertHTML);
        ScrollToNewMessage();                  
      })
      .fail(function() {  
        console.log('error');
      })
    }
  }
  setInterval(reloadMessages, 5000);
});


