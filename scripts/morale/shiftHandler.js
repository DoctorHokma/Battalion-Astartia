const MoraleShiftHandler = function() {
    this.particulators = new Map();
    this.shift = 0;
    this.costFactor = 1;
}

MoraleShiftHandler.prototype.addParticulator = function(particulatorID, shiftID) {
    if(this.particulators.has(particulatorID)) {
        return;
    }

    const shiftType = MORALE_SHIFT[shiftID];
    const shiftElement = document.getElementById(particulatorID);

    if(!shiftType || !shiftElement) {
        return;
    }

    const particulator = new Particulator(shiftElement, shiftType);

    shiftElement.src = MORALE_SHIFT.NEUTRAL.icon;
    shiftElement.onmouseout = () => particulator.onMouseOut();
    shiftElement.onmouseover = () => particulator.onMouseIn();
    shiftElement.onclick = () => this.onClick(particulatorID);

    this.particulators.set(particulatorID, particulator);
}

MoraleShiftHandler.prototype.onClick = function(particulatorID) {
    const particulator = this.particulators.get(particulatorID);

    if(!particulator) {
        return;
    }

    this.reset();
    
    particulator.onClick();

    const { type } = particulator;
    const { costFactor, shift } = type;

    this.shift = shift;
    this.costFactor = costFactor;

    updatePriceTags(costFactor);
} 

MoraleShiftHandler.prototype.getShift = function() {
    return this.shift;
}

MoraleShiftHandler.prototype.getCostFactor = function() {
    return this.costFactor;
}

MoraleShiftHandler.prototype.reset = function() {
    this.shift = 0;
    this.costFactor = 1;
    this.particulators.forEach(particulator => particulator.reset());
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
			unitFrame.src = "Assets/Miscellaneous/UnitUnavailableFrame.PNG";
		} else {
			unitFrame.src = "Assets/Miscellaneous/UnitAvailableFrame.PNG";
		}
	}
}