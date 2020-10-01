var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomName: '',

  initialize: function() {
    Parse.readAll((i)=>i.results.forEach(item=>Rooms[item.roomname] = item.roomname));
    for (let key in Rooms) {
      console.log(key);
      if (Rooms[key] === undefined || Rooms[key] === '') {
        continue;
      }
      RoomsView.renderRoom(Rooms[key]);
    }
    // needs to add to server? or add to Rooms.js
    RoomsView.roomName = $('#messages').val();
    $('.addroom').on('click', ()=>$('#rooms select').append(`<option value = ${RoomsView.roomName}></options>`));
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
