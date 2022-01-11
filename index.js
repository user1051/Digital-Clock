let a;
let hour, min, sec;
setInterval(() => {
	a = new Date();
	hour = a.getHours();
	min = a.getMinutes();
	sec = a.getSeconds();
	document.getElementById("hour").innerHTML = hour;
	document.getElementById("min").innerHTML = min;
	document.getElementById("sec").innerHTML = sec;
}, 1000);

let b = new Date();
if (b.getHours() >= 12) {
	document.getElementById("ap").innerHTML = "PM";
} else {
	document.getElementById("ap").innerHTML = "AM";
}

//
const setTimer = () => {
	//document.getElementById("greet").style.display = "block";

	let selectWakeTime = document.getElementById("setWakeTime");
	let optionWake = selectWakeTime.options[selectWakeTime.selectedIndex];

	if (optionWake.value == b.getHours()) {
		document.getElementById("image").src = "./assets/wakeup_image.svg";
		document.getElementById("image__text").innerHTML = "Good Morning !!";
	}
	//console.log(option.innerHTML);

	let selectLunchTime = document.getElementById("setLunchTime");
	let optionLunch = selectLunchTime.options[selectLunchTime.selectedIndex];

	if (optionLunch.value == b.getHours()) {
		document.getElementById("image").src = "./assets/lunch_image.svg";
		document.getElementById("image__text").innerHTML =
			"Let's have some lunch !!";
	}
	//console.log(optionLunch.value);

	let selectNapTime = document.getElementById("setNapTime");
	let optionNap = selectNapTime.options[selectNapTime.selectedIndex];

	if (optionNap.value == b.getHours()) {
		document.getElementById("image").src = "./assets/goodnight_image.svg";
		document.getElementById("image__text").innerHTML = "Let's take a nap !!";
	}
	//console.log(optionNap.value);
	if (
		optionWake.value == "default" &&
		optionLunch.value == "default" &&
		optionNap.value == "default"
	) {
		alert("⚠ Please set the time ⏳ before getting started !! 🙇‍♀️");
	} else {
		document.getElementById("greet").style.display = "block";
	}
	//
	if (optionWake.value != "default") {
		document.getElementById(
			"wakeupTime"
		).innerHTML = `Wake Up Time: ${optionWake.innerHTML}`;
	}
	if (optionLunch.value != "default") {
		document.getElementById(
			"lunchTime"
		).innerHTML = `Lunch Time: ${optionLunch.innerHTML}`;
	}
	if (optionNap.value != "default") {
		document.getElementById(
			"napTime"
		).innerHTML = `Nap Time: ${optionNap.innerHTML}`;
	}
};
