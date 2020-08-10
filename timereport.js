const inputForm = document.querySelector("#inputForm");
const main = document.querySelector(".main");
const timeReportList = document.querySelector(".js-timereport-ul");

const projectCodeInput = document.getElementById("projectCodeInput");
const startTimeInput = document.getElementById("startTime");
const endTimeInput = document.getElementById("endTime");

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
		let hour = parseInt(diffInMin / 60);
		let min = Math.round(parseInt(diffInMin % 60) / 15) * 15;

		return { hour, min };
	}
};

const printPeriod = (td) => {
	return ("0" + td.hour).slice(-2) + "H" + " " + ("0" + td.min).slice(-2) + "M";
};

const initElements = (period) => {
	const li = document.createElement("li");
	const div = document.createElement("div");
	const btnDiv = document.createElement("div");
	const reviseBtn = document.createElement("button");
	const deleteBtn = document.createElement("button");
	const projectCodeSpan = document.createElement("span");
	const startTimeSpan = document.createElement("span");
	const endTimeSpan = document.createElement("span");
	const periodSpan = document.createElement("span");

	li.appendChild(div);
	div.appendChild(btnDiv);
	btnDiv.appendChild(reviseBtn);
	btnDiv.appendChild(deleteBtn);
	div.appendChild(projectCodeSpan);
	div.appendChild(startTimeSpan);
	div.appendChild(endTimeSpan);
	div.appendChild(periodSpan);

	li.classList.add("timereport__li");
	div.classList.add("timereport-row");

	reviseBtn.innerText = "*";
	deleteBtn.innerText = "-";

	projectCodeSpan.innerText = projectCodeInput.value;
	startTimeSpan.innerText = startTimeInput.value;
	endTimeSpan.innerText = endTimeInput.value;
	periodSpan.innerText = period;
	return li;
};

const writeTimeReport = (event) => {
	// 0. prevent Default
	event.preventDefault();

	// 1. validate
	let period = calTimeDifference(startTimeInput.value, endTimeInput.value);
	if (period === -1) {
		alert("시작시간이 종료시간보다 늦습니다.");
		startTimeInput.focus();
		return;
	}
	console.log(period);

	//2. write Time Difference on main
	const li = initElements(printPeriod(period));
	timeReportList.appendChild(li);

	// Clear all the content value
	// projectCodeName.value = "";
	// startTime.value = "";
	// endTime.value = "";
	// projectCodeName.focus();
};

inputForm.addEventListener("submit", writeTimeReport);
