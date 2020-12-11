//create team object
const team = {
    _players: [{
      firstName: 'Arthur',
      lastName: 'Figeroa',
      age: 16
    }, 
    {
      firstName: 'Gargamel',
      lastName: 'Nase',
      age: 18  
    },
    {
      firstName: 'Mahatma',
      lastName: 'Ghandi',
      age: 13
    }],
    _games: [
      {
        opponent: 'Ravens',
        teamPoints: 55,
        opponentPoints: 43
      },
      {
        opponent: 'Patriots',
        teamPoints: 35,
        opponentPoints: 48
      },
      {
        opponent: 'Bills',
        teamPoints: 35,
        opponentPoints: 13
      }
    ],
  //getters for players and games
    get players (){
      return this._players;
    },
  
    get games () {
      return this._games;
    },
  //create method to add new player to team
    addPlayer (firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    // create method to add game results to team
    addGame (opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(game);
    }
  };
  //call methods and log results
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team._players);
  
  team.addGame('Packers', 34, 44);
  team.addGame('Bucs', 54, 14);
  team.addGame('Giants', 21, 3);
  
  console.log(team._games);