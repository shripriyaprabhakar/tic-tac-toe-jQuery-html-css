$(document).ready(function(){


    var squares  = Array(9).fill(null);
    let winner = '';
    var turn = 'X';
    setMessage(turn + " get's to start")
    
    function switchTurn() {
     winner = calculateWinner(squares);
     console.log(winner);
      if(winner !== '') {
        setMessage(turn+"won")
      } else if (turn === 'X') {
         turn = 'O';
         setMessage("it's " + turn +" turn")
      } else {
        turn = 'X';
        setMessage("it's " + turn +" turn")
      }
    }
    
    function setMessage(message) {
     $('#message').text(message)
    }
    
     $('td').click(function () {
     let isPresent;
       if ($(this).text().trim()==="") {
         isPresent = true;
       }
      
      
       if(winner !== '') {
       console.log(winner);
        setMessage(winner + "already won. No more moves")
       } else if (isPresent) {
          $(this).text(turn);
          var cell = $(this).attr("class");
          squares[cell] = turn;
         console.log(squares);
         switchTurn();
       } else {
        setMessage("Pick another square")
       }
     });
    
    
     function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return '';
    }
    
    $('button').click(function () {
      startGame();
    });
    
    function startGame() {
     $('td').html('');
     squares  = Array(9).fill(null);
     winner = '';
     turn = 'X';
    setMessage(turn + " get's to start")
    }
 
      
    });