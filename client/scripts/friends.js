var Friends = {
  initialize: function() {
    $('#chats').on('click', 'div .chat .username', function() {
      var currentFriend = $('#chats div .chat .username')[0].innerText;
      Friends[currentFriend] = currentFriend;     
    }); 
    setInterval(()=>{
      let curMsgNames = $('.chat .username');
      for (let i = 0; i < curMsgNames.length; i++) {
        for (let key in Friends) {
          if (curMsgNames[i].innerText === Friends[key]) {
            curMsgNames[i].style.backgroundColor = 'lightblue'; 
          } 
        }
      }
    }, 1000);
  },
};