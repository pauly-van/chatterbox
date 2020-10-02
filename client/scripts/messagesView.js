var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(message) {
    $('#chats').append(MessageView.render(message));
  }

};