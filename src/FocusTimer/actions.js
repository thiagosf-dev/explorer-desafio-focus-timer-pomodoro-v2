import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import state from "./state.js";
import * as timer from "./timer.js";

export function toggleRunning() {
	state.isRunning = document.documentElement.classList.toggle("running");
	timer.countdown();
	sounds.buttonPressAudio.play();
}

export function reset() {
	state.isRunning = false;
	document.documentElement.classList.remove("running");
	timer.updateDisplay();
	sounds.buttonPressAudio.play();
}

export function addFiveMinutes() {
	state.minutes += 5;
	if (state.minutes > 60) return;
	timer.updateDisplay(state.minutes, el.seconds.textContent);
	sounds.buttonPressAudio.play();
}

export function removeFiveTime() {
	state.minutes -= 5;
	if (state.minutes < 0) return;
	timer.updateDisplay(state.minutes, el.seconds.textContent);
	sounds.buttonPressAudio.play();
}
