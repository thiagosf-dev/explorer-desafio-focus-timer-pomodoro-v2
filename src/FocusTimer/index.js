import * as events from "./events.js";
import state from "./state.js";
import * as timer from "./timer.js";

export function start(minutes = state.minutes, seconds = state.seconds) {
	state.minutes = minutes;
	state.seconds = seconds;

	timer.updateDisplay();
	events.registerControls();
	events.registerSounds();
}
