const MoraleHandler = function() {
    this.buttons = [];
    this.shift = 0;
    this.costFactor = 1;
}

MoraleHandler.MORALE_OFFSET = 4; //Morale translates from -4 to 0!

//TODO: Uses globals!
MoraleHandler.updatePriceTags = function(costFactor) {
    let industrialLimit = 40;

	if(IndustrialBranchBrowsed !== 1) {
		industrialLimit = 10;
	}

	for(let i = 1; i <= industrialLimit; i++) {
		const priceTagID = `PriceTag${i}`;
		const priceTag = document.getElementById(priceTagID);
		const cost = Math.floor(Units[MontreIndexBasis + i].Cost * costFactor);

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

MoraleHandler.getMoraleTypeByIndex = function(index) {
    const shiftedIndex = index + MoraleHandler.MORALE_OFFSET;

    if(shiftedIndex < 0 || shiftedIndex >= MORALE_MAP.length) {
        return null;
    }

    const moraleID = MORALE_MAP[shiftedIndex];
    const moraleType = MORALE[moraleID];

    return moraleType;
}

MoraleHandler.getDamageModifier = function(index) {
    const type = MoraleHandler.getMoraleTypeByIndex(index);

    if(!type) {
        return 1;
    }

    const { damageModifier } = type;

    return damageModifier;
}

MoraleHandler.prototype.createMoraleButton = function(elementID, shiftType) {
    const moraleButton = new MoraleButton(elementID, shiftType);

    moraleButton.init();
    moraleButton.setClick((shift, costFactor) => this.updateMorale(shift, costFactor));

    this.buttons.push(moraleButton);
}

MoraleHandler.prototype.updateMorale = function(shift, costFactor) {
    this.reset();
    this.shift = shift;
    this.costFactor = costFactor;

    MoraleHandler.updatePriceTags(costFactor);
} 

MoraleHandler.prototype.getBuyMorale = function() {
    return this.shift + 5;
}

MoraleHandler.prototype.applyCostFactor = function(value) {
    return Math.floor(value * this.costFactor);
}

MoraleHandler.prototype.reset = function() {
    this.shift = 0;
    this.costFactor = 1;

    for(let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].reset();
    }
}

MoraleHandler.prototype.init = function(battalion) {
   this.createMoraleButton("MoraleParticulator0", MORALE_SHIFT.VERY_NEGATIVE);
   this.createMoraleButton("MoraleParticulator1", MORALE_SHIFT.NEGATIVE);
   this.createMoraleButton("MoraleParticulator2", MORALE_SHIFT.NEUTRAL);
   this.createMoraleButton("MoraleParticulator3", MORALE_SHIFT.POSITIVE);
   this.createMoraleButton("MoraleParticulator4", MORALE_SHIFT.VERY_POSITIVE);
}