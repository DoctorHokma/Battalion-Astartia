var Flair = -1;
var Aphorism = -1;

/**
 * neyn 07.04.2025
 * 
 * @param {Battalion} context 
 * @param {int} aphorismID 
 * @returns  
 */
const writeAphorism = function(context, aphorismID) {
	if(aphorismID < 0 || aphorismID >= APHORISMS.length) {
		return;
	}

	const { language } = context;
	const aphorism = APHORISMS[aphorismID];
	const { narrator, text } = aphorism;
	const aphorismHTML = "\"" + language.get(text) + "\"" + "<br><br>" + language.get(narrator);

	document.getElementById("AphorismText").innerHTML = aphorismHTML;
}

/**
 * neyn 07.04.2025
 * 
 * Returns a random index in APHORISMS.
 * 
 * Returns -1 if APHORISMS is empty.
 * 
 * Also sets the "AphorismIllustration".
 * 
 * @returns {int}
 */
const pickAphorism = function() {
	if(APHORISMS.length === 0) {
		return -1;
	}

	const aphorismID = Math.floor(Math.random() * APHORISMS.length);
	const aphorism = APHORISMS[aphorismID];
	const { image } = aphorism;

	if(image) {
		document.getElementById("AphorismIllustration").src = image;
	}

	return aphorismID;
}

/**
 * neyn 07.04.2025
 * 
 * @param {Battalion} context 
 * @param {int} flairID 
 * @returns 
 */
const writeFlair = function(context, flairID) {
	if(flairID < 0 || flairID >= FLAIRS.length) {
		return;
	}

	const { language } = context;
	const flair = FLAIRS[flairID];
	const { text } = flair;
	const flairHTML = language.get(text);

	document.getElementById("PreloaderSplash").innerHTML = flairHTML;
}

/**
 * neyn 07.04.2025
 * 
 * Returns a random index in FLAIRS.
 * 
 * Returns -1 if FLAIRS is empty.
 * 
 * @returns {int}
 */
const pickFlair = function() {
	if(FLAIRS.length === 0) {
		return -1;
	}

	const flairID = Math.floor(Math.random() * FLAIRS.length);

	return flairID;
}

function CallPreloader() {
	document.getElementById("Disclaimer2").style.visibility = "visible";

	Aphorism = pickAphorism();
	Flair = pickFlair();

	writeAphorism(battalion, Aphorism);
	writeFlair(battalion, Flair);

	let frame = 0;
	let loader = null;

	const preload = () => {
		if(frame < 35) frame++;

		if(frame % 7 === 0) {
			Flair = pickFlair();
			writeFlair(battalion, Flair);
		}

		if(frame === 35) {
			window.clearInterval(loader);
		}

		document.getElementById("PreloaderBar").style.width = `${frame * 20}px`;
	}

	loader = window.setInterval(preload, 50);
}