export const KEY = "TIMEREPORT";

export function addItemToLocalStorage(newItem) {
	// To-Do: item validation check

	let savedList = JSON.parse(localStorage.getItem(KEY)) || [];

	savedList.push(newItem);
	savedList.sort((a, b) => a.startTime - b.startTime);

	localStorage.setItem(KEY, JSON.stringify(savedList));
	// console.log(`savedList has been saved`);

	// return true unless localStorage throws error
	return true;
}

export function deleteOneItemFromLocalStorage(delItemDate) {
	let savedList = JSON.parse(localStorage.getItem(KEY)) || [];

	// console.log(typeof delItemDate);
	let delIndex = savedList.findIndex((v, i) => v.date === delItemDate);

	console.log(delIndex);

	if (delIndex === -1) return false;

	savedList.splice(delIndex, 1);
	localStorage.setItem(KEY, JSON.stringify(savedList));
	return true;
}
