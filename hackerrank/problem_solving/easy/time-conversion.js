// given a time in 12 hour am/pm format, convert it to military (24hour) time

// note midnight on a 24hr clock is 00:00:00

//sample input: 07:05:45PM
//sample output: 19:05:45

function timeconvert(string) {
	let ToD = string.slice(-2);
	let hours = string.slice(0,2);
	let numhours = parseInt(hours);
	let minutes = string.slice(3,5); 
	let seconds = string.slice(6,8);
	if(ToD === "AM"){
		if(numhours === 12) {
			hours = '00';
		}
	}
	else {
		if(numhours === 12) {
			numhours = numhours;	
		}
		else {
			numhours += 12;
		}
		hours = `${numhours}`
	}
	const newTime = `${hours}:${minutes}:${seconds}`;
	console.log(newTime);
	return newTime;
}

timeconvert("07:45:24PM");
timeconvert("10:45:24AM");
timeconvert("12:45:24PM");
timeconvert("12:45:24AM");
