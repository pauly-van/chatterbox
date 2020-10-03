var MessageView = {

  lastUsername: '',
  lastMsg: '',

  render: _.template(`
      <div class="chat">
      <div class="username"><%- MessageView.lastUsername %>:</div>
      <div class="message"><%- MessageView.lastMsg %></div>
      </div>
    `)

};