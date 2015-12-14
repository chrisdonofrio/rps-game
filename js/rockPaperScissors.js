$(document).ready(function() {

  var rps = ['rock', 'paper', 'scissors'];
  var userScore = 0;
  var computerScore = 0;
  var roundCount = 0;

// GAME START!
  function gameBegin(){
    $(".btn-tracker").on("click", function() {

// Updating score and round count dynamically
      $('#roundCount').html(roundCount);
      $('#computerScore').html(computerScore); 
      $('#userScore').html(userScore); 

// Setting variables for computer and user throws
	var compThrow = rps[Math.floor(Math.random() * rps.length)];
    var yourThrow = $(this).data('tag');

// It's a draw
	if (yourThrow == 'rock' && compThrow == 'rock') {
      	draw();
      } else if (yourThrow == 'paper' && compThrow == 'paper') {
      	draw();
      } else if (yourThrow == 'scissors' && compThrow == 'scissors') {
      	draw();

// You win
      } else if (yourThrow == 'rock' && compThrow == 'scissors') {
      	youWin();
      } else if (yourThrow == 'paper' && compThrow == 'scissors')
      	youWin();
      	else if	(yourThrow == 'scissors' && compThrow == 'paper') {
      	youWin();

// Computer wins
      } else {
      	compWin();

    }
  });

// Functions incrementing based on outcome
    function draw() {
    roundCount++;
  }

  function youWin() {
  	userScore++;
  	roundCount++;
  }

  function compWin() {
  	computerScore++;
  	roundCount++;
  }

  }
  gameBegin();
  });




























      // {

      // } else if (choice == 'rock' && randomString == 'lizard'){
      //   $('#msg').html('You smash the lizard with your rock! (ew)');
      //   userWin();
      // } else if (choice == 'rock' && randomString == 'spock'){
      //   $('#msg').html('Spock is not impressed by your rock.');
      //   computerWin();

      // } else if (choice == 'paper' && randomString == 'paper'){
      //   $('#msg').html('A mutual \'paper\'. No points awarded.');
      //   tie();
      // } else if (choice == 'paper' && randomString == 'rock'){
      //   $('#msg').html('Your paper covers their rock! Victory!');
      //   userWin();
      // } else if (choice == 'paper' && randomString == 'scissors'){
      //   $('#msg').html('Their scissors cut your paper.');
      //   computerWin();
      // } else if (choice == 'paper' && randomString == 'lizard'){
      //   $('#msg').html('The lizard snaps up your paper. Oops.');
      //   computerWin();
      // } else if (choice == 'paper' && randomString == 'spock'){
      //   $('#msg').html('Spock is distracted reading your paper. Score!');
      //   userWin();

      // } else if (choice == 'scissors' && randomString == 'scissors'){
      //   $('#msg').html('Scissors can\'t hurt scissors. No points awarded.');
      //   tie();
      // } else if (choice == 'scissors' && randomString == 'paper'){
      //   $('#msg').html('You cut up their paper with your scissors!');
      //   userWin();
      // } else if (choice == 'scissors' && randomString == 'rock'){
      //   $('#msg').html('Their rock smashes your scissors');
      //   computerWin();
      // } else if (choice == 'scissors' && randomString == 'lizard'){
      //   $('#msg').html('Their lizard is no match for your scissors.');
      //   userWin();
      // } else if (choice == 'scissors' && randomString == 'spock'){
      //   $('#msg').html('Spock uses your scissors to trim his eyebrows.');
      //   computerWin();
      
      // } else if (choice == 'lizard' && randomString == 'lizard'){
      //   $('#msg').html('Your lizard stares at their lizard. No points awarded.');
      //   tie();
      // } else if (choice == 'lizard' && randomString == 'paper'){
      //   $('#msg').html('Your lizard chews up their paper.');
      //   userWin();
      // } else if (choice == 'lizard' && randomString == 'rock'){
      //   $('#msg').html('Their rock smashes your lizard. ...ew.');
      //   computerWin();
      // } else if (choice == 'lizard' && randomString == 'scissors'){
      //   $('#msg').html('Their scissors... they do mean things to your lizard. Sorry.');
      //   computerWin();
      // } else if (choice == 'lizard' && randomString == 'spock'){
      //   $('#msg').html('Your lizard poisons Spock!');
      //   userWin();

      // } else if (choice == 'spock' && randomString == 'spock'){
      //   $('#msg').html('Spock outspocks himself. No points awarded.');
      //   tie();
      // } else if (choice == 'spock' && randomString == 'paper'){
      //   $('#msg').html('The paper is too interesting, your Spock is done for.');
      //   computerWin();
      // } else if (choice == 'spock' && randomString == 'rock'){
      //   $('#msg').html('Spock vaporizes their rock.');
      //   userWin();
      // } else if (choice == 'spock' && randomString == 'scissors'){
      //   $('#msg').html('Spock smashes their scissors with his opposable thumbs.');
      //   userWin();
      // } else if (choice == 'spock' && randomString == 'lizard'){
      //   $('#msg').html('Their lizard poisons Spock!');
      //   computerWin();
