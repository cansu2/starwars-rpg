
$(document).ready(function () {
 
	var myCharacter;
	var currentEnemy;
	var health_leia = 120;
	var health_boba = 100;
	var health_jaba = 150;
	var health_yoda = 180;
	var attack_leia = 8;
	var attack_boba = 15;
	var attack_jaba = 10;
	var attack_yoda = 20;
	var counterAttack_leia = 5;
	var counterAttack_boba = 10;
	var counterAttack_jaba = 20;
	var counterAttack_yoda = 25;

	$("#leia").html("&hearts; " + health_leia);
	$("#boba").html("&hearts; " + health_boba);
	$("#jaba").html("&hearts; " + health_jaba);
	$("#yoda").html("&hearts; " + health_yoda);


	$(".characters").on("click", function () {
		console.info(myCharacter, currentEnemy)
		if (!myCharacter) {
			myCharacter = this;
			console.log(myCharacter); // this would become your character
			$("#playerCharacter").append(this);
		} else if (myCharacter && !currentEnemy) {
			currentEnemy = this;
			console.log(currentEnemy); // this would be your enemy, and it would test to make sure one hasnt already been chosen
			$("#defender").append(this);
		} else {
			// Set up the game to be played with the combat
		}

		$("#button").on("click",function() {
			if (myCharacter == character1){ 
				attack_leia = attack_leia +8;
				console.log(attack_leia);
				if (currentEnemy == character2) {
					health_boba = health_boba - attack_leia;
					health_leia = health_leia - counterAttack_boba;
					$("#boba").html("&hearts;" + health_boba);
					$("#leia").html("&hearts;" + health_leia);
					$("#something").html("Leia attacks Boba for " + attack_leia +".");
					$("#nothing").html("Boba attacks Leia for " + counterAttack_boba+".")
					if (health_boba < 0) {
						$("#character2").hide();
					}	else if (health_leia < 0) {
						alert("you lose!")
					}		
				};
				if (currentEnemy == character3) {
					health_jaba = health_jaba - attack_leia;
					health_leia = health_leia - counterAttack_jaba;
					$("#jaba").html("&hearts;" + health_jaba);
					$("#leia").html("&hearts;" + health_leia);
					$("#something").html("Leia attacks Jaba for " + attack_leia +".");
					$("#nothing").html("Jaba attacks Leia for " + counterAttack_jaba+".")
					if (health_jaba < 0) {
						$("#character3").hide();
					}	else if (health_leia < 0) {
						alert("you lose!")
					}	

				};
				if (currentEnemy == character4) {
					health_yoda = health_yoda - attack_leia;
					health_leia = health_leia - counterAttack_yoda;
					$("#yoda").html("&hearts;" + health_yoda);
					$("#leia").html("&hearts;" + health_leia);
					$("#something").html("Leia attacks Yoda for " + attack_leia +".");
					$("#nothing").html("Yoda attacks Leia for " + counterAttack_yoda+".")
					if (health_yoda < 0) {
						$("#character4").hide();
					}	else if (health_leia < 0) {
						alert("you lose!")
					}	

				};

				
			};
			if (myCharacter == character2){
				attack_boba = attack_boba + 5;
				if (currentEnemy == character1) {
					health_leia = health_leia - attack_boba;
					health_boba = health_boba - counterAttack_leia;
					$("#leia").html("&hearts;" + health_leia);
					$("#boba").html("&hearts;" + health_boba);
					$("#something").html("Boba attacks Leia for " + attack_boba +".");
					$("#nothing").html("Leia attacks Boba for " + counterAttack_leia+".")
					if (health_leia < 0) {
						$("#character1").hide();
					}	else if (health_boba < 0) {
						alert("you lose!")
					}	
				};
				if (currentEnemy == character3) {
					health_jaba = health_jaba - attack_boba;
					health_boba = health_boba - counterAttack_jaba;
					$("#jaba").html("&hearts;" + health_jaba);
					$("#boba").html("&hearts;" + health_boba);
					$("#something").html("Boba attacks Jaba for " + attack_boba +".");
					$("#nothing").html("Jaba attacks Boba for " + counterAttack_jaba+".")
					if (health_jaba < 0) {
						$("#character3").hide();
					}	else if (health_boba < 0) {
						alert("you lose!")
					}			
				};
				if (currentEnemy == character4) {
					health_yoda = health_yoda - attack_boba;
					health_boba = health_boba - counterAttack_yoda;
					$("#yoda").html("&hearts;" + health_yoda);
					$("#boba").html("&hearts;" + health_boba);	
					$("#something").html("Boba attacks Yoda for " + attack_boba +".");
					$("#nothing").html("Yoda attacks Boba for " + counterAttack_yoda+".")	
					if (health_yoda < 0) {
						$("#character4").hide();
					}	else if (health_boba < 0) {
						alert("you lose!")
					}	
				};


			};
			if (myCharacter == character3){
			    attack_jaba = attack_jaba + 20;
			    if (currentEnemy == character1) {
			       health_leia = health_leia - attack_jaba;
			       health_jaba = health_jaba - counterAttack_leia;
			       $("#leia").html("&hearts;" + health_leia);
				   $("#jaba").html("&hearts;" + health_jaba);
				   $("#something").html("Jaba attacks Leia for " + attack_jaba +".");
				   $("#nothing").html("Leia attacks Jaba for " + counterAttack_leia+".")
				   if (health_leia < 0) {
						$("#character1").hide();
					}	else if (health_jaba < 0) {
						alert("you lose!")
					}
			    }
			    if (currentEnemy == character2) {
			       health_boba = health_boba - attack_jaba;
			       health_jaba = health_jaba - counterAttack_boba;
			       $("#boba").html("&hearts;" + health_boba);
				   $("#jaba").html("&hearts;" + health_jaba);
				   $("#something").html("Jaba attacks Boba for " + attack_jaba +".");
				   $("#nothing").html("Boba attacks Jaba for " + counterAttack_boba+".")
				   if (health_boba < 0) {
						$("#character2").hide();
					}	else if (health_jaba < 0) {
						alert("you lose!")
					}
			    }
			    if (currentEnemy == character4) {
			       health_yoda = health_yoda - attack_jaba;
			       health_jaba = health_jaba - counterAttack_yoda;
			       $("#yoda").html("&hearts;" + health_yoda);
				   $("#jaba").html("&hearts;" + health_jaba);
				   $("#something").html("Jaba attacks Yoda for " + attack_jaba +".");
				   $("#nothing").html("Yoda attacks Jaba for " + counterAttack_yoda+".")
				   if (health_yoda < 0) {
						$("#character4").hide();
					}	else if (health_jaba < 0) {
						alert("you lose!")
					}
			    }


			 
			};
			if (myCharacter == character4){
			    attack_yoda = attack_yoda + 25;
			    if (currentEnemy == character1) {
			       health_leia = health_leia - attack_yoda;
			       health_yoda = health_yoda - counterAttack_leia;
			       $("#leia").html("&hearts;" + health_leia);
				   $("#yoda").html("&hearts;" + health_yoda);
				   $("#something").html("Yoda attacks Leia for " + attack_yoda +".");
				   $("#nothing").html("Leia attacks Yoda for " + counterAttack_leia+".")
				   if (health_leia < 0) {
						$("#character4").hide();
					}	else if (health_yoda < 0) {
						alert("you lose!")
					}
			    }
			    if (currentEnemy == character2) {
			       health_boba = health_boba - attack_yoda;
			       health_yoda = health_yoda - counterAttack_boba;
			       $("#boba").html("&hearts;" + health_boba);
				   $("#yoda").html("&hearts;" + health_yoda);
				   $("#something").html("Yoda attacks Boba for " + attack_yoda +".");
				   $("#nothing").html("Boba attacks Yoda for " + counterAttack_boba+".")
				   if (health_boba < 0) {
						$("#character2").hide();
					}	else if (health_yoda < 0) {
						alert("you lose!")
					}
			    }
			    if (currentEnemy == character3) {
			       health_jaba = health_jaba - attack_yoda;
			       health_yoda = health_yoda - counterAttack_jaba;
			       $("#jaba").html("&hearts;" + health_jaba);
				   $("#yoda").html("&hearts;" + health_yoda);
				   $("#something").html("Yoda attacks Jaba for " + attack_yoda +".");
				   $("#nothing").html("Jaba attacks Yoda for " + counterAttack_jaba+".")
				   if (health_jaba < 0) {
						$("#character3").hide();
					}	else if (health_yoda < 0) {
						alert("you lose!")
					}

			    }
			    
			};
		});


	});


});
