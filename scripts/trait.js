const TRAIT_DESC_MAX_LENGTH = 65;

/**
 * neyn 07.04.2025
 * 
 * @param {int} typeID 
 * @param {string} traitID 
 * @returns 
 */
const hasCertainTrait = function(typeID, traitID){
	const unitType = UNITS[typeID];

	if(!unitType) {
		console.warn(`Unit ${typeID} does not exist!`);
		return false;
	}

	const traitType = TRAITS[traitID];

	if(!traitType) {
		console.warn(`Trait ${traitID} does not exist!`);
		return false;
	}

	const { tag1, tag2, tag3, tag4 } = unitType;

	if(tag1 === traitID) return true;
	if(tag2 === traitID) return true;
	if(tag3 === traitID) return true;
	if(tag4 === traitID) return true;

	return false;
}

/**
 * neyn 11.04.2025
 */
const hideTraitDetail = function() {
	document.getElementById("TraitTooltip").style.visibility = "hidden";
}

/**
 * neyn 07.04.2025
 * 
 * @param {int} tagID 
 * @returns 
 */
const getTraitIDFromHighlighted = function(tagID) {
	if(!HighlightedEntity) {
		console.warn("No highlighted entity!");
		return null;
	}

	switch(tagID) {
		case 1: return HighlightedEntity.tag1;
		case 2: return HighlightedEntity.tag2;
		case 3: return HighlightedEntity.tag3;
		case 4: return HighlightedEntity.tag4;
		default: return null;
	}
}

/**
 * neyn 12.04.2025
 * 
 * @param {string} traitID 
 * @returns {string}
 */
const getTraitIcon = function(traitID) {
	const trait = TRAITS[traitID];

	if(!trait) {
		console.warn(`Trait ${traitID} does not exist!`);
		return "";
	}

	const { icon } = trait;

	return icon;
}

/**
 * neyn 07.04.2025
 * 
 * @param {Battalion} context 
 * @param {string} traitID 
 * @returns 
 */
const showTraitDetail = function(context, traitID) {
	const { language } = context;
	const trait = TRAITS[traitID];

	if(!trait) {
		console.log(`Trait ${traitID} does not exist!`);
		return;
	}

	const { name, desc } = trait;
	const traitName = language.get(name);
	const traitDesc = language.get(desc);

	if(traitDesc.length > TRAIT_DESC_MAX_LENGTH) {
		document.getElementById("TraitTooltipImage").src = "Assets/Miscellaneous/TraitTooltipPlus.PNG";
	} else {
		document.getElementById("TraitTooltipImage").src = "Assets/Miscellaneous/TraitTooltip.PNG";
	}
	
	document.getElementById("TraitName").innerHTML = traitName;
	document.getElementById("TraitDescription").innerHTML = traitDesc;
}

/**
 * neyn 07.04.2025
 * 
 * @param {int} tagID 
 * @param {string} useCase 
 * @returns 
 */
const traitDetail = function(tagID, useCase){
	const traitTooltip = document.getElementById("TraitTooltip");
	const traitID = getTraitIDFromHighlighted(tagID);

	if(!traitID) {
		console.log(`Trait ${traitID} does not exist!`);
		return;
	}

	switch(useCase) {
		case "Details": {
			traitTooltip.style.visibility = "visible";
			traitTooltip.style.left = "400px";
			traitTooltip.style.top = "-35px";
			break;
		}
		case "Constructor": {
			traitTooltip.style.visibility = "visible";
			traitTooltip.style.left = "200px";
			traitTooltip.style.top = "-525px";
			break;
		}
		default: {
			console.warn(`Invalid useCase! ${useCase}`);
			//traitTooltip.style.left="400px";
			//traitTooltip.style.top="0px";
			break;
		}
	}

	showTraitDetail(battalion, traitID);
}

/**
 * neyn 13.04.2025
 * 
 * @param {string} slot 
 * @param {string} useCase 
 */
const classTraitDetail = function(slot, useCase) {
	const traitTooltip = document.getElementById("TraitTooltip");
	let traitID = "";

	switch(useCase) {
		case "Details": {
			traitTooltip.style.visibility = "visible";
			traitTooltip.style.top = "-35px";

			switch(slot) {
				case "ArmorType": {
					traitTooltip.style.left = "200px";
					traitID = ArmorShowcase + "Armor";
					break;
				}
				case "DamageType": {
					traitTooltip.style.left = "280px";
					traitID = WeaponShowcase + "Weapon";
					break;
				}
				case "MovementType": {
					traitTooltip.style.left = "357px";
					traitID = MovementShowcase;
					break;
				}
				case "Biome": {
					traitTooltip.style.left = "357px";
					traitID = BIOMES[LocalBiome].nominator;
					break;
				}
			}
			break;
		}
		case "Constructor": {
			traitTooltip.style.visibility = "visible";
			traitTooltip.style.top = "-525px";

			ArmorShowcase = HighlightedEntity.Armor;
			WeaponShowcase = HighlightedEntity.Weapon;
			MovementShowcase = HighlightedEntity.Movement;

			switch(slot) {
				case "ArmorType": {
					traitTooltip.style.left = "-70px";
					traitID = ArmorShowcase + "Armor";
					break;
				}
				case "DamageType": {
					traitTooltip.style.left = "0px";
					traitID = WeaponShowcase + "Weapon";
					break;
				}
				case "MovementType": {
					traitTooltip.style.left = "70px";
					traitID = MovementShowcase;
					break;
				}
			}
			break;
		}
		default: {
			console.warn(`Invalid useCase! ${useCase}`);
			break;
		}
	}

	showTraitDetail(battalion, traitID);
}