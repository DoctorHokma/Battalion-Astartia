const RecruitMoraleHandler = function() {
    this.buttons = new Map();
    this.shift = 0;
    this.costFactor = 1;
}

RecruitMoraleHandler.prototype.addMoraleShift = function(buttonID, shiftType) {
    if(!shiftType || this.buttons.has(buttonID)) {
        return;
    }

    const shiftElement = document.getElementById(buttonID);

    if(!shiftElement) {
        return;
    }

    const shiftButton = new ShiftButton(shiftElement, shiftType);

    shiftElement.src = MORALE_SHIFT.NEUTRAL.icon;
    shiftElement.onmouseout = () => shiftButton.onMouseOut();
    shiftElement.onmouseover = () => shiftButton.onMouseIn();
    shiftElement.onclick = () => this.onClick(buttonID);

    this.buttons.set(buttonID, shiftButton);
}

RecruitMoraleHandler.prototype.onClick = function(buttonID) {
    const shiftButton = this.buttons.get(buttonID);

    if(!shiftButton) {
        return;
    }

    this.reset();
    
    shiftButton.onClick();

    const { type } = shiftButton;
    const { costFactor, shift } = type;

    this.shift = shift;
    this.costFactor = costFactor;

    updatePriceTags(costFactor);
} 

RecruitMoraleHandler.prototype.getShift = function() {
    return this.shift;
}

RecruitMoraleHandler.prototype.getCostFactor = function() {
    return this.costFactor;
}

RecruitMoraleHandler.prototype.reset = function() {
    this.shift = 0;
    this.costFactor = 1;
    this.buttons.forEach(button => button.reset());
}

const updatePriceTags = function(costFactor) {
    let industrialLimit = 40;

	if(IndustrialBranchBrowsed !== 1) {
		industrialLimit = 10;
	}

	for(let i = 1; i <= industrialLimit; i++) {
		const priceTagID = `PriceTag${i}`;
		const priceTag = document.getElementById(priceTagID);
		const cost = Math.round(Units[MontreIndexBasis + i].Cost * costFactor);

		priceTag.innerHTML = `₤${cost}`;

		const unitFrameID = `UnitFrame${i}`;
		const unitFrame = document.getElementById(unitFrameID);

		if(YourMoney < cost) {
			unitFrame.src = "Assets/Miscellaneous/UnitUnavailableFrame.png";
		} else {
			unitFrame.src = "Assets/Miscellaneous/UnitAvailableFrame.png";
		}
	}
}