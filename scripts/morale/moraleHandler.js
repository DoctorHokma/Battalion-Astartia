const MoraleHandler = function() {
    this.buttons = [];
    this.shift = 0;
    this.costFactor = 1;
}

MoraleHandler.MORALE_OFFSET = 4; //Morale goes from -4 to +5;

MoraleHandler.clampMoraleValue = function(moraleIndex) {
    const shiftedIndex = moraleIndex + MoraleHandler.MORALE_OFFSET;

    if(shiftedIndex < 0) {
        return 0;
    } else if(shiftedIndex >= MORALE_MAP.length) {
        return MORALE_MAP.length - 1 - MoraleHandler.MORALE_OFFSET;
    } else {
        return moraleIndex;
    }
}

MoraleHandler.getDamageModifier = function(index) {
    const type = MoraleHandler.getMoraleTypeByIndex(index);

    if(!type) {
        return 1;
    }

    const { damageModifier } = type;

    return damageModifier;
}

MoraleHandler.getMoraleTypeByIndex = function(index) {
    const shiftedIndex = index + MoraleHandler.MORALE_OFFSET;

    if(shiftedIndex < 0 || shiftedIndex >= MORALE_MAP.length) {
        return null;
    }

    const moraleID = MORALE_MAP[shiftedIndex];
    const moraleType = MORALE[moraleID];

    return moraleType;
}

MoraleHandler.prototype.addMoraleShift = function(elementID, shiftType) {
    const shiftElement = document.getElementById(elementID);

    if(!shiftElement || !shiftType) {
        return;
    }

    const moraleButton = new MoraleButton(shiftElement, shiftType);

    shiftElement.src = MORALE_SHIFT.NEUTRAL.icon;
    shiftElement.onmouseout = () => moraleButton.onMouseOut();
    shiftElement.onmouseover = () => moraleButton.onMouseIn();
    shiftElement.onclick = () => this.onButtonClick(moraleButton);

    this.buttons.push(moraleButton);
}

MoraleHandler.prototype.onButtonClick = function(moraleButton) {
    this.reset();
    
    moraleButton.onClick();

    const shift = moraleButton.getShift();
    const costFactor = moraleButton.getCostFactor();

    this.shift = shift;
    this.costFactor = costFactor;

    updatePriceTags(costFactor);
} 

MoraleHandler.prototype.getShift = function() {
    return this.shift;
}

MoraleHandler.prototype.applyCostFactor = function(value) {
    return value * this.costFactor;
}

MoraleHandler.prototype.reset = function() {
    this.shift = 0;
    this.costFactor = 1;

    for(let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].reset();
    }
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