var MessagesView = {

  $chats: $('#chats'),
  previousId: '',
  nextId: '',

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    //get object ID for first one
    Parse.readAll((dta) => MessagesView.previousId = dta.results[0].objectId);
    //put first one into a property 
    //set Interval to read if any new messages 
    setInterval(() => {
      Parse.readAll((data) => {
        MessagesView.nextId = data.results[0].objectId; 
        MessageView.lastUsername = data.results[0].username;
        MessageView.text = data.results[0].text;
      });
      if (MessagesView.previousId !== MessagesView.nextId) {
        //if ID is different then append to chats div
        MessagesView.$chats.append(MessageView.render());
        MessagesView.previousId = MessagesView.nextId;
      }
    }, 1000);
    //check if ID is different 
    //else doing nothing
  },

  renderMessage: function() {
    MessagesView.$chats.append(MessageView.render());
  }
};