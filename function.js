export const convertTime = (time) => {
	return Number(time.slice(0, 2)) * 100 + Number(time.slice(3, 5));
};

export const calTimeDifference = (time1, time2) => {
	let date1 = new Date().setHours(Math.floor(time1 / 100), time1 % 100);
	let date2 = new Date().setHours(Math.floor(time2 / 100), time2 % 100);

	let diffInMin = Number((date2 - date1) / (1000 * 60));

	if (diffInMin < 0) return -1;

	const STEP = 15;
	let hour = Math.floor(diffInMin / 60);
	let min_step = Math.round((diffInMin % 60) / STEP);
	if (min_step === 60 / STEP) {
		hour++;
		min_step = 0;
	}

	return { hour, min: min_step * STEP };
};

export const getFormattedTime = (time) => {
	let str = "0" + time;
	return str.slice(-4, -2) + ":" + str.slice(-2);
};

export const getFormattedPeriod = (timeDifference) => {
	return (
		("0" + timeDifference.hour).slice(-2) +
		"H" +
		" " +
		("0" + timeDifference.min).slice(-2) +
		"M"
	);
};
