const Tooltip = function(tooltipID) {
	const { language } = battalion;
	const tooltipHTML = language.get(tooltipID);

	let frame = 0;
	let interval = null;

	const tooltipDisplay = () => {
		switch(frame) {
			case 5: {
				document.getElementById("GeneralTooltipText").innerHTML = tooltipHTML;
				break;
			}
			case 10: {
				document.getElementById("GeneralTooltip").style.visibility = "inherit";
				break;
			}
			case 20: {
				document.getElementById("GeneralTooltip").style.visibility = "hidden";
				window.clearInterval(interval);
				break;
			}
		}

		frame++;
	}

	interval = window.setInterval(tooltipDisplay, 100);
}