var MessageView = {
  lastUsername: '',
  text: '',

  render: _.template(`
      <div class="chat">
        <div class="username"><%- MessageView.lastUsername %>:</div>
        <div class="text"><%- MessageView.text %></div>
      </div>
    `)

};