const MoraleHandler = function() {
    this.particulators = new Map();
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
    const type = MoraleHandler.getMoraleType(index);

    if(!type) {
        return 1;
    }

    const { damageModifier } = type;

    return damageModifier;
}

MoraleHandler.getMoraleType = function(index) {
    const shiftedIndex = index + MoraleHandler.MORALE_OFFSET;

    if(shiftedIndex < 0 || shiftedIndex >= MORALE_MAP.length) {
        return null;
    }

    const moraleID = MORALE_MAP[shiftedIndex];
    const moraleType = MORALE[moraleID];

    return moraleType;
}

MoraleHandler.prototype.addParticulator = function(particulatorID, shiftID) {
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

MoraleHandler.prototype.onClick = function(particulatorID) {
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

MoraleHandler.prototype.getShift = function() {
    return this.shift;
}

MoraleHandler.prototype.getCostFactor = function() {
    return this.costFactor;
}

MoraleHandler.prototype.reset = function() {
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