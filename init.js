for (let i = 0; i < localStorage.length; i++) {
	// console.log(localStorage.key(i));
	let key = localStorage.key(i);
	let timeReportItem = JSON.parse(localStorage.getItem(key));
	console.log(timeReportItem);
	appendTimeReportItem(timeReportItem);
}
