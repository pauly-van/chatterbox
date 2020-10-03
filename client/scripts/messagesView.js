var MessagesView = {

  $chats: $('#chats'),
  lastMsgID: '',
  nextMsgID: '',

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    setInterval(()=>{
      Parse.readAll((data)=>{
        MessagesView.nextMsgID = data.results[0].objectId;
        MessageView.lastUsername = data.results[0].username;
        MessageView.text = data.results[0].text;
        MessagesView.roomname = data.results[0].roomname;
      });
      if (MessagesView.lastMsgID !== MessagesView.nextMsgID) {
        $(`#chats .${MessagesView.roomname}`).prepend(MessageView.render());
        MessagesView.lastMsgID = MessagesView.nextMsgID;
      }
    }, 1000);
  },

  renderMessage: function() {
    MessagesView.$chats.prepend(MessageView.render());
  }
};