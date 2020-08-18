const inputForm = document.querySelector("#inputForm");
const main = document.querySelector(".main");
const timeReportList = document.querySelector(".js-timereport-ul");
const projectCodeInput = document.getElementById("projectCodeInput");
const startTimeInput = document.getElementById("startTime");
const endTimeInput = document.getElementById("endTime");

let idCount = 0;
const appendTimeReportItem = (event) => {
	// 0. prevent Default
	event.preventDefault();

	// 1. validate
	let period = calTimeDifference(startTimeInput.value, endTimeInput.value);
	if (period === -1) {
		alert("시작시간이 종료시간보다 늦습니다.");
		startTimeInput.focus();
		return;
	}

	// 2. create TimeReport Object
	const timeReportItem = {
		id: idCount++,
		projectCodeName: projectCodeInput.value,
		startTime: startTimeInput.value,
		endTime: endTimeInput.value,
		period: period,
	};
	localStorage.setItem(timeReportItem.id, JSON.stringify(timeReportItem));
	console.log(timeReportItem);

	// 3. create view
	const li = createView(timeReportItem);

	//4. append view to timeReportList
	timeReportList.appendChild(li);

	// 5. Clear all the content value
	projectCodeInput.value = "";
	startTimeInput.value = endTimeInput.value;
	endTimeInput.value = "";
	projectCodeInput.focus();
};

inputForm.addEventListener("submit", appendTimeReportItem);
