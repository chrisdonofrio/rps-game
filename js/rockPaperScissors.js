$(document).ready(function() {

    var rps = ['rock', 'paper', 'scissors'];
    var userScore = 0;
    var computerScore = 0;
    var roundCount = 0;

    // GAME START!
    function gameBegin() {
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
            else if (yourThrow == 'scissors' && compThrow == 'paper') {
                youWin();

                // Computer wins
            } else {
                compWin();

            }

            modalStuff();
        });
    }

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

    function modalStuff() {
        if (roundCount > 5) {
            $('.btn-tracker').hide();
            if (userScore > computerScore) {
                setTimeout(function() {
                    $("#myModal").modal("show");
                    $(".modal-body").html("You win!");
                    $('.btn-tracker').show();
                    roundCount = 0;
                    computerScore = 0;
                    userScore = 0;
                }, 250);

            } else if (computerScore > userScore) {
                setTimeout(function() {
                    $("#myModal").modal("show");
                    $(".modal-body").html("You lose!");
                    $('.btn-tracker').show();
                    roundCount = 0;
                    computerScore = 0;
                    userScore = 0;
                }, 250);

            } else if (computerScore == userScore) {
                setTimeout(function() {
                    $("#myModal").modal("show");
                    $(".modal-body").html("It's a tie!");
                    $('.btn-tracker').show();
                    roundCount = 0;
                    computerScore = 0;
                    userScore = 0;
                }, 250);
            };
        };
    }

    gameBegin();
});