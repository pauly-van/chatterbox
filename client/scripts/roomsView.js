var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
<<<<<<< HEAD
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

    $('#chats').children().hide();
    RoomsView.roomShow = $('#rooms select').val();
    $(`#chats .${RoomsView.roomShow}`).show();

    // create event handler for select option change
    $('#rooms select').change(() =>{
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
=======
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
>>>>>>> 8000486d25aa78747f7d042f4cb3a4bef0314298

  renderRoom: function(string) {
    $('#rooms select').append(`<option value = ${string}>${string}</option>`);
    $('#chats').append(RoomsView.template);
    $('.changeMe').attr('class', string );
    $(`.${string}`).hide();
  }
};
