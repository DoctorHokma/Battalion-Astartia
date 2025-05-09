const MoraleHandler = function() {
    this.id = 0;
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