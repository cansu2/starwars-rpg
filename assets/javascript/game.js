
$(document).ready(function () {

	var myCharacter;
	var currentEnemy;
	var defender;
	var attacker = {};
	var defender = {};
	var remaining = {};
	var attack;
	var health_myCharacter;
	var health_currentEnemy;
	var id_myCharacter;


	var leia = {
			name: "Princess Leia",
			health: 120,
			attack: 8,
			counterAttack: 10
	};

	var boba = {
			name: "Boba Fett",
			health: 100,
			attack: 10,
			counterAttack: 15
	};

	var jaba = {
			name: "Jaba the Hut",
			health: 150,
			attack: 15,
			counterAttack: 20
	};

	var yoda = {
			name: "Master Yoda",
			health: 180,
			attack: 20,
			counterAttack: 25
	};


	$("#leiaH").html("&hearts;" + leia.health);
	$("#bobaH").html("&hearts;" + boba.health);
	$("#jabaH").html("&hearts;" + jaba.health);
	$("#yodaH").html("&hearts;" + yoda.health);


	$(".characters").on("click", function () {
		if (!myCharacter) {
			myCharacter = this;
			// console.log(this.id);
			attack = $(this).attr("attack");
            health_myCharacter = $(this).attr("health");
            id_myCharacter = this.id;
            console.log(id_myCharacter);
			console.log(attack);
			console.log(health_myCharacter);
			$("#playerCharacter").append(this);
		} else if (myCharacter && !currentEnemy) {
			currentEnemy = this;
			counterAttack = $(this).attr("counterAttack");
			health_currentEnemy = $(this).attr("health");
			console.log(counterAttack);
			console.log(health_currentEnemy);		
			$("#defender").append(this);
		} else {
		}

    });

    $("#button").on("click",function(game) {
			health_myCharacter = health_myCharacter - counterAttack;
			health_currentEnemy = health_currentEnemy - attack;
			console.log(health_currentEnemy);
			console.log(health_myCharacter);
			if (health_currentEnemy < 0 ){
				console.log("cansu");
				health_currentEnemy.hide();
			} else if (health_myCharacter < 0 ){
				console.log("ca");
				

			}
		})

		
});
	