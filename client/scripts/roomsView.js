var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomName: '',
  roomShow: '',
  roomHide: '',

  initialize: function() {
    Parse.readAll((i)=>i.results.forEach(item=>Rooms[item.roomname] = item.roomname));
    setTimeout(Rooms.add, 1000); // adds a wait for traverse through Rooms object then adds to dropdown

    $('.addroom').on('click', ()=>{ // on Add Room button click
      RoomsView.roomName = $('#message').val(); // grab text from input field
      Rooms[RoomsView.roomName] = RoomsView.roomName; // assignes to local property
      RoomsView.renderRoom(RoomsView.roomName); // adds to dropdown options
    });

    // create event handler for select option change
    $('#rooms select').change(() =>{
      $('#chats').children().hide();
      RoomsView.roomShow = $('#rooms select').val();
      $(`#chats .${RoomsView.roomShow}`).show();
    });
    // jQuery on change #rooms select
    // jQuery get #rooms select value
    // JQuery class name from #rooms select and toggle show()
  },

  template: _.template(
    `
     <div class="changeMe"></div
    `
  ),

  renderRoom: function(string) {
    $('#rooms select').append(`<option value = ${string}>${string}</option>`);
    $('#chats').append(RoomsView.template);
    $('.changeMe').attr('class', string );
    $(`.${string}`).hide();
  }
};
