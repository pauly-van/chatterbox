var MessagesView = {

  $chats: $('#chats'),
  previousId: '',
  nextId: '',

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    setInterval(()=>{
      Parse.readAll((data)=>{
        MessagesView.nextMsgID = data.results[0].objectId;
        MessageView.lastUsername = data.results[0].username;
        MessageView.text = data.results[0].text;
      });
      if (MessagesView.lastMsgID !== MessagesView.nextMsgID) {
        MessagesView.$chats.prepend(MessageView.render());
        MessagesView.lastMsgID = MessagesView.nextMsgID;
      }
    }, 1000);
  },

  renderMessage: function() {
    MessagesView.$chats.prepend(MessageView.render());
  }
};