var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomName: '',

  initialize: function() {
    RoomsView.renderRoom(Rooms.lobby);
    RoomsView.renderRoom(Rooms.standup);
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
