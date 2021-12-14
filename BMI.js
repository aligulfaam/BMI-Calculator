window.onload = () => {
	let button = document.getElementById("#btn");
	button.addEventListener("click", calculateBMI);
};
function calculateBMI() {

	let height;
    height = document.getElementById("height").value;

	let weight;
    weight = document.getElementById("weight").value;

	let result;
    result = document.getElementById("result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Height is Required!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Weight is Required!";

	else {
		let bmi = weight / height**2*703;
		result.innerHTML = bmi;
	}
};

function refreshButton(){
    window.location.reload("http://127.0.0.1:5500/BMI.html");
} 
