import { render } from "./view.js";
import { submitHandler } from "./controller.js";
import { KEY } from "./model.js";

export const inputForm = document.querySelector("#inputForm");

export const main = document.querySelector(".main");
export const timeReportList = document.querySelector(".js-timereport-ul");
export const projectCodeInput = document.getElementById("projectCodeInput");
export const startTimeInput = document.getElementById("startTime");
export const endTimeInput = document.getElementById("endTime");
const submitBtn = document.querySelector('input[type="submit"]');
const clearBtn = document.querySelector('input[type="button"]');

clearBtn.addEventListener("click", (event) => {
	// To-DO: prompt("Are you sure to clear all timereports?")
	localStorage.removeItem(KEY);
	render();
});

inputForm.addEventListener("submit", submitHandler);

render();
