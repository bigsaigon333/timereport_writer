import { addItemToLocalStorage } from "./model.js";
import { render } from "./view.js";
import { convertTime, calTimeDifference } from "./function.js";

export const submitHandler = (event) => {
	// 0. prevent Default
	event.preventDefault();

	// 1. validate
	let [projectCodeInput, startTimeInput, endTimeInput] = event.target;

	let startTime = convertTime(startTimeInput.value);
	let endTime = convertTime(endTimeInput.value);

	let period = calTimeDifference(startTime, endTime);
	if (period === -1) {
		alert("시작시간이 종료시간보다 늦습니다.");
		startTimeInput.focus();
		return;
	}

	// 2. add TimeReport Item to LocalStorage
	const newItem = {
		date: new Date().getTime(),
		projectCodeName: projectCodeInput.value,
		startTime,
		endTime,
		period,
	};
	addItemToLocalStorage(newItem);

	// 3. render view
	render();

	// 4. Clear all the content value
	projectCodeInput.value = "";
	startTimeInput.value = endTimeInput.value;
	endTimeInput.value = "";
	projectCodeInput.focus();
};
