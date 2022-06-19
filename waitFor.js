// Wait For Element to be available
export async function waitForElement(selector, timeout = 5000, interval = 0) {
	const rafAsync = () => new Promise((resolve) => requestAnimationFrame(resolve));
	const sleep = () => new Promise((r) => setTimeout(r, interval));
	const start = Date.now();
	while (!document.querySelector(selector)) {
		if (Date.now() - start >= timeout) {
			console.error(`Element Check For Selector ${selector} Timed Out`);
			return false;
		}
		if (interval) await sleep();
		await rafAsync();
	}
	return document.querySelector(selector);
}

//Wait for Object to be available
export async function waitForObject(obj, key, once, callback) {
	let val = obj[key];
	let target = new EventTarget();
	let event = new CustomEvent('propertychange', {
		eventValue: val,
	});
	Object.defineProperty(obj, key, {
		get: () => {
			return val;
		},
		set: (value) => {
			event.eventValue = value;
			target.dispatchEvent(event);
			val = value;
		},
	});
	let eventFunction = (e) => {
		if (once) target.removeEventListener('propertychange', eventFunction);
		callback(e.eventValue);
	};
	target.addEventListener('propertychange', eventFunction);
	return target;
}
