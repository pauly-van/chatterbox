var message = 'testing';
var MessageView = {
  lastUsername: '',

  render: _.template(`
      <div class="chat">
        <div class="username"><%- MessageView.lastUsername %>:</div>
        <div class="message"><%- message %></div>
      </div>
    `)

};