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

const TRAIT_DESC_MAX_LENGTH = 65;

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
	//Bag pula-n curul lui Dincă <- lol -neyn

	const traitTooltip = document.getElementById("TraitTooltip");
	const traitID = getTraitIDFromHighlighted(tagID);

	if(!traitID) {
		console.warn(`Missing traitID!`);
		return;
	}

	switch(useCase) {
		case "Details": {
			traitTooltip.style.visibility = "visible";
			traitTooltip.style.left="400px";
			traitTooltip.style.top="-35px"
			break;
		}
		case "Constructor": {
			traitTooltip.style.visibility = "visible";
			traitTooltip.style.left="200px";
			traitTooltip.style.top="-525px"
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