let form = document.getElementById("inputForm");
let submitButton = document.getElementById("submitButton");
let projectCodeName = document.getElementById("projectCode");
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let timeReportList = document.getElementById("timeReportList");
let tbody = document.getElementsByTagName("tbody")[0];

const parseTime = (t) => {
	console.log(t);
	return { hour: t.slice(0, 2), min: t.slice(3, 5) };
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
		let steppedMin = Math.round(parseInt(diffInMin % 60) / 15) * 15;
		return { hour: parseInt(diffInMin / 60), min: steppedMin };
	}
};

const writeTimeReport = (event) => {
	event.preventDefault();

	let timeDifference = calTimeDifference(startTime.value, endTime.value);
	if (timeDifference === -1) {
		alert("시작시간이 종료시간보다 늦습니다.");
		startTime.focus();
		return;
	}

	let tr = document.createElement("tr");
	let tdProjectCodeName = document.createElement("td");
	tdProjectCodeName.textContent = projectCodeName.value;
	tr.append(tdProjectCodeName);

	let tdStartTime = document.createElement("td");
	tdStartTime.textContent = startTime.value;
	tr.append(tdStartTime);

	let tdEndTime = document.createElement("td");
	tdEndTime.textContent = endTime.value;
	tr.append(tdEndTime);

	let tdHourDiff = document.createElement("td");
	tdHourDiff.textContent = ("0" + timeDifference.hour).slice(-2) + "H";
	tr.append(tdHourDiff);

	let tdMinDiff = document.createElement("td");
	tdMinDiff.textContent = ("0" + timeDifference.min).slice(-2) + "M";
	tr.append(tdMinDiff);

	tbody.append(tr);

	// Clear all the content value
	projectCodeName.value = "";
	startTime.value = "";
	endTime.value = "";
};

form.addEventListener("submit", writeTimeReport);
