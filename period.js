const parseTime = (time) => {
	return { hour: time.slice(0, 2), min: time.slice(3, 5) };
};

const calTimeDifference = (a, b) => {
	let time1 = parseTime(a);
	let time2 = parseTime(b);

	let date1 = new Date().setHours(time1.hour, time1.min);
	let date2 = new Date().setHours(time2.hour, time2.min);

	let diffInMin = parseInt((date2 - date1) / (1000 * 60));

	if (diffInMin < 0) {
		return -1;
	} else {
		let hour = parseInt(diffInMin / 60);
		let min = Math.round(parseInt(diffInMin % 60) / 15) * 15;

		return { hour, min };
	}
};

const getFormattedPeriod = (timeDifference) => {
	return (
		("0" + timeDifference.hour).slice(-2) +
		"H" +
		" " +
		("0" + timeDifference.min).slice(-2) +
		"M"
	);
};
