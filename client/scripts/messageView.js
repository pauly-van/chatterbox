var MessageView = {
  lastUsername: '',
  text: '',

  lastUsername: '',
  lastMsg: '',

  render: _.template(`
      <div class="chat">
<<<<<<< HEAD
        <div class="username"><%- MessageView.lastUsername %>:</div>
        <div class="text"><%- MessageView.text %></div>
=======
      <div class="username"><%- MessageView.lastUsername %>:</div>
      <div class="message"><%- MessageView.lastMsg %></div>
>>>>>>> 8000486d25aa78747f7d042f4cb3a4bef0314298
      </div>
    `)

};