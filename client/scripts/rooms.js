var Rooms = {
  add: function() {
    for (let key in Rooms) {
      if (key === 'add' || Rooms[key] === null || Rooms[key] === undefined || Rooms[key] === '') {
        continue;
      }
      RoomsView.renderRoom(Rooms[key]);
    }
  } 
};