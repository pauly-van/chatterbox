var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  initialize: function() {
    //initialze event action such as when button is selected
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.$select.on('click', RoomsView.renderRoom(Rooms.rooms[0]));
    //send request GET to parse server
  },

  //create a handle select

  render: _.template(`<option class="selectRoom"><%= Rooms.rooms[Rooms.rooms.length - 1] %>
  </option>`), //render to the DOM
  //need to create a template to send to the DOM

  //append to the DOM


  renderRoom: function() {

  }

};
