$(document).ready(function(){
  display.players();


  // event listeners
  $('#submitNameFilter').on('click', display.searchForName);
  $('#resetTable').on('click', display.resetTable);
});
