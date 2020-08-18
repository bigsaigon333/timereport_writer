const submitHandler = (event) => {
	// 0. prevent Default
	event.preventDefault();

	// 1. validate
	let period = calTimeDifference(startTimeInput.value, endTimeInput.value);
	if (period === -1) {
		alert("시작시간이 종료시간보다 늦습니다.");
		startTimeInput.focus();
		return;
	}

	// 2. append TimeReport Item
	const newTimeReportItem = {
		id: idCount++,
		projectCodeName: projectCodeInput.value,
		startTime: startTimeInput.value,
		endTime: endTimeInput.value,
		period: period,
	};
	appendTimeReportItem(newTimeReportItem);

	// 3. Clear all the content value
	projectCodeInput.value = "";
	startTimeInput.value = endTimeInput.value;
	endTimeInput.value = "";
	projectCodeInput.focus();
};

let idCount = 0;
const appendTimeReportItem = (timeReportItem) => {
	// const timeReportItem = createNewTimeReportItem();
	localStorage.setItem(timeReportItem.id, JSON.stringify(timeReportItem));

	// 2. create view
	const li = createView(timeReportItem);
	console.log(li);

	//3. append view to timeReportList
	timeReportList.appendChild(li);
};

inputForm.addEventListener("submit", submitHandler);
