import { getFormattedPeriod, getFormattedTime } from "./function.js";
import {
	timeReportList,
	projectCodeInput,
	startTimeInput,
	endTimeInput,
} from "./init.js";
import { deleteOneItemFromLocalStorage, KEY } from "./model.js";

const getItemView = (listItem) => {
	const li = document.createElement("li");
	const div = document.createElement("div");
	const btnDiv = document.createElement("div");
	const reviseBtn = document.createElement("button");
	const deleteBtn = document.createElement("button");
	const projectCodeSpan = document.createElement("span");
	const startTimeSpan = document.createElement("span");
	const endTimeSpan = document.createElement("span");
	const periodSpan = document.createElement("span");

	projectCodeSpan.innerHTML = listItem.projectCodeName;
	startTimeSpan.innerHTML = getFormattedTime(listItem.startTime);
	endTimeSpan.innerHTML = getFormattedTime(listItem.endTime);
	periodSpan.innerHTML = getFormattedPeriod(listItem.period);

	const reviseBtnHandler = (event) => {
		projectCodeInput.value = projectCodeSpan.innerText;
		startTimeInput.value = startTimeSpan.innerText;
		endTimeInput.value = endTimeSpan.innerText;

		deleteBtnHandler(event);
	};

	const deleteBtnHandler = (event) => {
		let delItemDate = event.target.dataset.date;

		deleteOneItemFromLocalStorage(Number(delItemDate));
		render();
	};

	li.appendChild(div);
	div.appendChild(btnDiv);
	btnDiv.appendChild(reviseBtn);
	btnDiv.appendChild(deleteBtn);
	reviseBtn.dataset.date = listItem.date;
	deleteBtn.dataset.date = listItem.date;
	div.appendChild(projectCodeSpan);
	div.appendChild(startTimeSpan);
	div.appendChild(endTimeSpan);
	div.appendChild(periodSpan);

	li.classList.add("timereport__li");
	div.classList.add("timereport-row");

	reviseBtn.innerText = "revise";
	reviseBtn.addEventListener("click", reviseBtnHandler);
	deleteBtn.innerText = "delete";
	deleteBtn.addEventListener("click", deleteBtnHandler);

	return li;
};

export const render = () => {
	timeReportList.querySelectorAll("*").forEach((n) => n.remove());
	const savedList = JSON.parse(localStorage.getItem(KEY));
	if (savedList === null) return;

	savedList.forEach((v, i) => {
		let li = getItemView(v);
		timeReportList.appendChild(li);
	});
};
