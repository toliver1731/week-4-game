	$(document).ready(function() {
		
		var wins = 0;
		var losses = 0;
		var userScore = 0;

				$("#wins").text(wins);
				$("#losses").text(losses);

		var crystalPts1 = Math.floor((Math.random()* 12) + 1);
		var crystalPts2 = Math.floor((Math.random()* 12) + 1);
		var crystalPts3 = Math.floor((Math.random()* 12) + 1);
		var crystalPts4 = Math.floor((Math.random()* 12) + 1);

			

		var totalScore = Math.floor((Math.random() * 100) + 19);
			$("#genNumber").text(totalScore);


			$("#img1").on("click",function(){
				userScore = userScore + crystalPts1;
				 console.log("New userScore= " + userScore);
				 $("#scoreBoard").text(userScore);
				 if(userScore === totalScore){
					winner();
				}

						else if(userScore > totalScore){
							loser();
						}
			});

			$("#img2").on("click",function(){
				userScore = userScore + crystalPts2;
				 console.log("New userScore= " + userScore);
				 $("#scoreBoard").text(userScore);
				 if(userScore === totalScore){
					winner();
				}

						else if(userScore > totalScore){
							loser();
						}
			});

			$("#img3").on("click",function(){
				userScore = userScore + crystalPts3;
				 console.log("New userScore= " + userScore);
				 $("#scoreBoard").text(userScore);
				 if(userScore === totalScore){
					winner();
				}

						else if(userScore > totalScore){
							loser();
						}
			});

			$("#img4").on("click",function(){
				userScore = userScore + crystalPts4;
				 console.log("New userScore= " + userScore);
				 $("#scoreBoard").text(userScore);
				 if(userScore === totalScore){
					winner();
				}

						else if(userScore > totalScore){
							loser();
						}
			});

			
			function winner() {
				alert("Congratulations, you won!!!");
				wins++;
				$("#wins").text(wins);
				reset();
			}


			function loser() {
				alert("You lose, try again!");
				losses++;
				$("#losses").text(losses);
				reset();
			}
				

				if(userScore === totalScore){
					winner();
				}

						else if(userScore > totalScore){
							loser();
						}

			function reset(){
      			Random=Math.floor(Math.random()*101+19);
      			console.log(Random)
      				$('#randomNumber').text(Random);
      				crystalPts1= Math.floor(Math.random()*11+1);
     				crystalPts2= Math.floor(Math.random()*11+1);
      				crystalPts3= Math.floor(Math.random()*11+1);
      				crystalPts4= Math.floor(Math.random()*11+1);
      				userScore= 0;
      				$("#scoreBoard").text(userScore);
     												 } 





		
	});