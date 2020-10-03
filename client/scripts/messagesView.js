var MessagesView = {

  $chats: $('#chats'),
<<<<<<< HEAD
  previousId: '',
  nextId: '',
  roomname: '',
=======
  lastMsgID: '',
  nextMsgID: '',
>>>>>>> 8000486d25aa78747f7d042f4cb3a4bef0314298

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
<<<<<<< HEAD
=======
    Parse.readAll((dta)=> MessagesView.lastMsgId = dta.results[0].objectId);
>>>>>>> 8000486d25aa78747f7d042f4cb3a4bef0314298
    setInterval(()=>{
      Parse.readAll((data)=>{
        MessagesView.nextMsgID = data.results[0].objectId;
        MessageView.lastUsername = data.results[0].username;
<<<<<<< HEAD
        MessageView.text = data.results[0].text;
        MessagesView.roomname = data.results[0].roomname;
      });
      if (MessagesView.lastMsgID !== MessagesView.nextMsgID) {
        $(`#chats .${MessagesView.roomname}`).prepend(MessageView.render());
=======
        MessageView.lastMsg = data.results[0].text;
      });
      if (MessagesView.lastMsgID !== MessagesView.nextMsgID) {
        MessagesView.$chats.append(MessageView.render());
>>>>>>> 8000486d25aa78747f7d042f4cb3a4bef0314298
        MessagesView.lastMsgID = MessagesView.nextMsgID;
      }
    }, 1000);
  },

  renderMessage: function() {
<<<<<<< HEAD
    MessagesView.$chats.prepend(MessageView.render());
=======
    MessagesView.$chats.append(MessageView.render());
>>>>>>> 8000486d25aa78747f7d042f4cb3a4bef0314298
  }
};