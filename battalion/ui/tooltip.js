const GeneralTooltip = function() {
    this.element = document.getElementById("GeneralTooltip");
    this.text = document.getElementById("GeneralTooltipText");
}

GeneralTooltip.hide = function() {
	document.getElementById("GeneralTooltip").style.visibility = "hidden";
}

GeneralTooltip.show = function() {
    document.getElementById("GeneralTooltip").style.visibility = "inherit";
}

GeneralTooltip.setText = function(text) {
    document.getElementById("GeneralTooltipText").innerHTML = text;
}

const Tooltip = function(tooltipID) {
	const { language } = battalion;
	const tooltipHTML = language.get(tooltipID);

	let frame = 0;
	let interval = null;

	const tooltipDisplay = () => {
		switch(frame) {
			case 5: {
				GeneralTooltip.setText(tooltipHTML);
				break;
			}
			case 10: {
				GeneralTooltip.show();
				break;
			}
			case 20: {
				GeneralTooltip.hide();
				window.clearInterval(interval);
				break;
			}
		}

		frame++;
	}

	interval = window.setInterval(tooltipDisplay, 100);
}