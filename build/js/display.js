var display = {};



// will get all and display all
display.players = function(arr){

  $('#playerList td').remove();
  var arrayToDisplay = arr || playerAdmin.players;
  var tableContent = '';

  arrayToDisplay.forEach(function(player){
      tableContent += '<tr>';
      tableContent += '<td>' + player.name + '</td>';
      tableContent += '<td>' + player.email + '</td>';
      tableContent += '</tr>';
  });

  $('#playerList').append(tableContent);
};

display.searchForName = function(){
  // Get name from name filter input
  var name = $('#nameFilter').val();

  if(name === ''){
    console.warn('Please enter a name');
  } else {

    var findName = playerAdmin.findPlayerName(name);

    display.players(findName);
    $('#nameFilter').val('');
  }
};

display.resetTable = function(){
  display.players();
};
