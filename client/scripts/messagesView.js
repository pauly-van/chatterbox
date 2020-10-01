var MessagesView = {

  $chats: $('#chats'),
  previousId: '',
  nextId: '',

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    Parse.readAll((dta)=> MessagesView.lastMsgId = dta.results[0].objectId);
    setInterval(()=>{
      Parse.readAll((data)=>{
        MessagesView.nextMsgID = data.results[0].objectId;
        MessageView.lastUsername = data.results[0].username;
        MessageView.lastMsg = data.results[0].text;
      });
      if (MessagesView.lastMsgID !== MessagesView.nextMsgID) {
        MessagesView.$chats.append(MessageView.render());
        MessagesView.lastMsgID = MessagesView.nextMsgID;
      }
    }, 1000);
  },

  renderMessage: function() {
    MessagesView.$chats.append(MessageView.render());
  }
};