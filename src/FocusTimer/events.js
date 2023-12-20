import * as actions from "./actions.js";
import * as el from "./elements.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";
import state from "./state.js";

export function registerControls() {
	controls.addEventListener("click", (event) => {
		const action = event.target.dataset.action;

		if (typeof actions[String(action)] !== "function") return;

		actions[String(action)]();
	});
}

export function registerSounds() {
	const buttons = el.soundsButtons.querySelectorAll("button");
	for (const button of buttons) {
		button.addEventListener("click", (event) => {
			const sound = event.currentTarget.dataset.sound;

			if (!state.currentSound) {
				sounds[String(sound)].play();
				event.currentTarget.classList.add("secondary");
				state.currentSound = sound;
				return;
			}

			if (state.currentSound && state.currentSound === sound) {
				sounds[String(sound)].pause();
				event.currentTarget.classList.remove("secondary");
				state.currentSound = null;
				return;
			}

			if (state.currentSound && state.currentSound !== sound) {
				sounds[String(state.currentSound)].pause();
				sounds[String(sound)].play();
				removeSecondaryClass();
				event.currentTarget.classList.add("secondary");
				state.currentSound = sound;
				return;
			}
		});
	}
}

function removeSecondaryClass() {
	elements.soundsButtons
		.querySelectorAll("button")
		.forEach((button) => button.classList.remove("secondary"));
}
