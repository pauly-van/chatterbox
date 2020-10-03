var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
<<<<<<< HEAD
    Messages.text = $('#message').val(); // assignes message text to our message object
    Messages.roomname = $('#rooms select').val(); //assigns current room from dropdown
    Parse.create(Messages);
=======

    Messages.text = $('#message').val();
    console.log('message :', message);
    Parse.create(Messages);
    console.log('click!');
>>>>>>> 8000486d25aa78747f7d042f4cb3a4bef0314298
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};