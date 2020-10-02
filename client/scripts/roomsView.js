var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomName: '',

  initialize: function() {
    Parse.readAll((i)=>i.results.forEach(item=>Rooms[item.roomname] = item.roomname));
    setTimeout(Rooms.add, 1000); // adds a wait for traverse through Rooms object then adds to dropdown

    $('.addroom').on('click', ()=>{ // on Add Room button click
      RoomsView.roomName = $('#message').val(); // grab text from input field
      Rooms[RoomsView.roomName] = RoomsView.roomName; // assignes to local property
      RoomsView.renderRoom(RoomsView.roomName); // adds to dropdown options
    });
  },

  template: _.template(
    `
     <div class="<%- RoomsView.roomName %>">
      </div
    `
  ),

  renderRoom: function(string) {
    $('#rooms select').append(`<option value = ${string}>${string}</option>`);
  }
};
