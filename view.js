const createView = (timeReportItem) => {
	const li = document.createElement("li");
	const div = document.createElement("div");
	const btnDiv = document.createElement("div");
	const reviseBtn = document.createElement("button");
	const deleteBtn = document.createElement("button");
	const projectCodeSpan = document.createElement("span");
	const startTimeSpan = document.createElement("span");
	const endTimeSpan = document.createElement("span");
	const periodSpan = document.createElement("span");
	console.log("inside createView");
	console.log(timeReportItem);

	projectCodeSpan.innerHTML = timeReportItem.projectCodeName;
	startTimeSpan.innerHTML = timeReportItem.startTime;
	endTimeSpan.innerHTML = timeReportItem.endTime;
	periodSpan.innerHTML = getFormattedPeriod(timeReportItem.period);

	const reviseBtnHandler = (event) => {
		projectCodeInput.value = projectCodeSpan.innerText;
		startTimeInput.value = startTimeSpan.innerText;
		endTimeInput.value = endTimeSpan.innerText;
		deleteBtnHandler(event);
	};

	const deleteBtnHandler = (event) => {
		const deleteItemId = li.getAttribute("id");
		console.log("[delete] li removed: ", deleteItemId);
		localStorage.removeItem(deleteItemId);
		li.remove();
	};

	li.setAttribute("id", timeReportItem.id);
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

	reviseBtn.innerText = "revise";
	reviseBtn.addEventListener("click", reviseBtnHandler);
	deleteBtn.innerText = "delete";
	deleteBtn.addEventListener("click", deleteBtnHandler);
	// projectCodeSpan.innerText = projectCodeInput.value;
	// startTimeSpan.innerText = startTimeInput.value;
	// endTimeSpan.innerText = endTimeInput.value;
	// periodSpan.innerText = getFormattedPeriod(timeReportItem.period);
	return li;
};
