var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    MessagesView.$chats.append(MessageView.render());
  }

};