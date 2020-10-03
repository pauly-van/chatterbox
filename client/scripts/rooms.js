var Rooms = {
  rooms: [],

  add: function(event) {
    event.preventDefault();
    var newRoomName = prompt('Enter roomname');
    console.log(newRoomName);
    Rooms.rooms.push(newRoomName);
    RoomsView.$select.append(RoomsView.render);
    console.log(rooms);
  },

};