var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomName: '',

  initialize: function() {
    Parse.readAll((i)=>i.results.forEach(item=>Rooms[item.roomname]=item.roomname));
    // for(let key in Rooms){
    //   console.log('il');
    //   if(Rooms[key]===undefined || Rooms[key]===""){
    //     continue;
    //   }
    //   RoomsView.renderRoom(Rooms[key]);
    // }
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
