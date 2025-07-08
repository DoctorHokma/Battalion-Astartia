const Entity = function(id) {
    this.ID = id;
    this.id = id;
    this.config = null;
    this.type = Entity.TYPE.NONE;
    this.index = -1;

    this.life = 0;
    this.maxLife = 0;
    this.damage = 0;
    this.damageType = "";
    this.minR = 1;
    this.maxR = 1;
    this.armor = "";
    this.speed = 0;
    this.movementType = "";

    this.x = -1;
    this.y = -1;
    this.unitType = -1;

    this.faction = -1;
    this.coallition = "";
    this.morale = 0;
    this.direction = Entity.DIRECTION.NONE;
    this.cargo = 0;
    this.isCloaked = false;
    this.specialNameID = -1;
    this.specialDescID = -1;
    this.customName = "";
    this.customDesc = "";
    this.canEncore = false;
    this.isVized = false;
    this.willAmbush = false;
    this.building = -1;
    this.constructionTime = 0;
}

Entity.TRAIT = {
    INDOMITABLE: "Indomitable",
    COMMANDO: "Commando",
    ANTI_INFANTRY: "Anti-Infantry",
    ANTI_AIR: "Anti-Air",
    ANTI_SHIP: "Anti-Ship",
    ANTI_TANK: "Anti-Tank",
    ANTI_STRUCTURE: "Anti-Structure",
    STEER: "Steer",
    STEALTH: "Stealth",
    SCHWERPUNKT: "Schwerpunkt",
    CEMENTED_STEEL_ARMOR: "Cemented Steel Armor",
    SUPPLY_DISTRIBUTION: "Supply Distribution",
    CAVITATION_EXPLOSION: "Cavitation Explosion",
    SONAR: "Sonar",
    SUBMERGED: "Submerged",
    TANK_HUNTER: "Tank-Hunter",
    SUICIDE: "Self-Destruct",
    SKYSWEEPER: "Skysweeper",
    DEPTH_STRIKE: "Depth Strike",
    SEABOUND: "Seabound",
    TERRIFYING: "Terrifying",
    INFLAMING: "Inflaming",
    ABSORBER: "Absorber",
    DISPERSION: "Dispersion",
    JUDGEMENT: "JUDGEMENT",
    BEWEGUNGSKRIEG: "Bewegungskrieg",
    MOBILE_BATTERY: "Mobile Battery",
    STREAMBLAST: "Streamblast"
};

Entity.TYPE = {
    NONE: 0,
    UNIT: 1,
    CONSTRUCTION: 2,
    BUILDING: 3
};

Entity.DIRECTION = {
    NONE: 0,
    NORTH: 1,
    WEST: 2,
    SOUTH: 3,
    EAST: 4
};

Entity.DIRECTION_FLIP = {
    [Entity.DIRECTION.NONE]: Entity.DIRECTION.NONE,
    [Entity.DIRECTION.NORTH]: Entity.DIRECTION.SOUTH,
    [Entity.DIRECTION.WEST]: Entity.DIRECTION.EAST,
    [Entity.DIRECTION.SOUTH]: Entity.DIRECTION.NORTH,
    [Entity.DIRECTION.EAST]: Entity.DIRECTION.WEST
};

Entity.prototype.toMaxHP = function() {
    this.life = this.maxLife;
}

Entity.prototype.setMorale = function(value) {
    this.morale = MoraleHandler.clampMoraleValue(value);
}

Entity.prototype.updateMorale = function(value) {
    this.setMorale(this.morale + value);
}

Entity.prototype.initType = function(id) {
    if(id < 0 || id >= UNITS.length) {
        return;
    }

    const unitType = UNITS[id];

    this.config = unitType;
    this.unitType = id;
    this.life = unitType.HP;
    this.maxLife = unitType.HP;
    this.damage = unitType.Attack; 	
    this.damageType = unitType.Weapon;
    this.minR = unitType.MinRange;
    this.maxR = unitType.MaxRange; 
    this.armor = unitType.Armor; 
    this.speed = unitType.Speed; 
    this.movementType = unitType.Movement; 
}

Entity.prototype.completeBuilding = function() {
    if(this.type !== Entity.TYPE.CONSTRUCTION) {
        return;
    }

    this.initType(this.building);

    this.building = -1;
    this.morale = 0;
    this.direction = Entity.DIRECTION.SOUTH;
    this.type = Entity.TYPE.BUILDING;
}

Entity.prototype.getDescription = function(battalion) {
    const { language } = battalion;

    if(this.customDesc) {
        return this.customDesc;
    }
    
    if(this.specialDescID !== -1) {
        const desc = Language.UnitSpecialDesc[this.specialDescID];

        if(!desc || desc.length === 0) {
            return "NOT_TRANSLATED_YET";
        }

        return desc;
    } 

    return language.get(this.config.desc);
}

Entity.prototype.getName = function(battalion) {
    const { language } = battalion;

    if(this.customName) {
        return this.customName;
    }
    
    if(this.specialNameID !== -1) {
        const name = Language.UnitSpecialNames[this.specialNameID];

        if(!name || name.length === 0) {
            return "NOT_TRANSLATED_YET";
        }

        return name;
    }

    return language.get(this.config.name);
}

Entity.prototype.hasTrait = function(traitID) {
    const traitType = TRAITS[traitID];

	if(!traitType) {
		console.warn(`Trait ${traitID} does not exist!`);
		return false;
	}

	const { tag1, tag2, tag3, tag4 } = this.config;

	if(tag1 === traitID) return true;
	if(tag2 === traitID) return true;
	if(tag3 === traitID) return true;
	if(tag4 === traitID) return true;

	return false;
}