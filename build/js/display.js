var display = {};

// will get all and display all
display.players = function(arr){

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
