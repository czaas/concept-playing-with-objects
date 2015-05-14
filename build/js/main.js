var playerAdmin = {
  players: []
};

playerAdmin.addPlayer = function(name, email){
  var newObj = {};
  newObj.name = name;
  newObj.email = email;

  this.players.push(newObj);
};

playerAdmin.findPlayerName = function(name){
  // Create an array so we can store all matches
  var allMatches = [];

  this.players.forEach(function(obj){
    // search players array
    if(obj.name.toLowerCase() === name.toLowerCase()){
      // push any matches to array
      allMatches.push(obj);
    }
  });

  if(allMatches.length > 0) {
    return allMatches;
    } else {
      return 'No players found.';
    }
};

playerAdmin.addPlayer('Cameron', 'cameron@czaas.com');
playerAdmin.addPlayer('bob', 'bob@czaas.com');
//console.log(glob.players);

console.log(playerAdmin.findPlayerName('cameron'));
