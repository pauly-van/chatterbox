var currentUsername = window.location.search.substring(10, window.location.search.length);
// var msg = FormView.$form.find('input[type=text]').val(); // helpdesk on how to post text messages

var Messages = {
  username: currentUsername, 
  text: 'hello',
  roomname: 'lobby'
};