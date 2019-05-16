window.onload=function(){


	// ********************** Calculation Function *************************************
	// variables
	let amountLeft = 1500;
	let percent = 100 - (100 * (amountLeft / 5000));
	let trianglePercent = percent - 3;
	let numberDonated = 70;
	let progression = document.getElementById("progression");
	let triangle = document.getElementById("triangle-down");
	let message = document.getElementById("message");
	let peopleDonated = document.getElementById("peopleDonated");


	progression.style.width = percent + "%";
	triangle.style.marginLeft = trianglePercent + "%";


	function addValue(){

		// Add number of people who donated
		numberDonated++;
		peopleDonated.innerHTML = "Join the <b>" + numberDonated + "</b> other donors who are helping make a positive impact in the community. Every dollar helps and we can’t thank everyone enough.";

		// Calculate amount left to reach goal & update text bubble to reflect
		let moneyAdded = parseInt(document.getElementById("donation-amount").value);
		amountLeft -= moneyAdded;
		message.innerHTML = "We need <b>" + amountLeft + "</b> to reach our goal!"

		// Calculate percentage for progession bar
		percent = 100 - (100 * (amountLeft / 5000));
		progression.style.width = percent + "%";

		// Calculate margin for bottom triangle
		trianglePercent = percent - 3;
		triangle.style.marginLeft = trianglePercent + "%";


		// When Goal is reached
		if (percent >= 100){

			// Change progression bar to green and full width
			progression.style.width = "100%";
			progression.style.background = "#8bbe0f";

			// Change text bubble
			message.innerHTML = "We reached our goal!"
			// move bottom triangle to center
			triangle.style.marginLeft = "45%";

		}

	}

	document.getElementById("submit").addEventListener("click", addValue);


	// ********************** Why Donate Function *************************************


	// variables
	let whyToDonate = document.getElementById('why-to-donate');
	let help = document.getElementById('help-us-out');
	let exit = document.getElementById('exit');
	let close = document.getElementById('close');

	function whyDonate(){
		whyToDonate.style.display = "block";
		help.innerHTML = "If we reach our goal of $5000 many will bennefit including people in need! Every bit really does count and we are only <b>$" + amountLeft + "</b> away from reaching our goal!"

		if (percent >= 100){
			help.innerHTML = "Although we have already reached out goal, more help is always invited! This is just the start of what we can accomplish!"
		}
	}

	document.getElementById("why-donate").addEventListener("click", whyDonate);

	function closeWhyDonate(){
		whyToDonate.style.display = "none";
	}

	document.getElementById("exit").addEventListener("click", closeWhyDonate);
	document.getElementById("close").addEventListener("click", closeWhyDonate);


}