/**
 * neyn ??.04.2025
 * 
 * Helper function to export missing language tags in order.
 * 
 * @param {string} fName 
 * @param {string[]} schema 
 * @param {string[]} toExport 
 */
const orderedExport = function(fName, schema, toExport) {
    const file = new PrettyJSON(4);
    file.open();

    for(let i = 0; i < schema.length; i++) {
        if(i >= toExport.length) {
            file.writeLine(schema[i], "");
        } else {
            file.writeLine(schema[i], toExport[i]);
        }
    }

    file.close();
    file.download(fName);
}

const T1 = [
    "TRAIT_NAME_UNEVEN",
	"TRAIT_NAME_RUGGED",
	"TRAIT_NAME_PRECIPITOUS",
	"TRAIT_NAME_IMPASSABLE",
	"TRAIT_NAME_TRICKY_WATERS",
	"TRAIT_NAME_CONCEALMENT",
	"TRAIT_NAME_NAVAL_CONCEALMENT",
	"TRAIT_NAME_BUNKER",
	"TRAIT_NAME_SHALLOW",
	"TRAIT_NAME_VANTAGE",
	"TRAIT_NAME_DANGEROUS",
	"TRAIT_NAME_LOGISTIC_CHALLENGE",
	"TRAIT_NAME_LOGISTIC_NIGHTMARE",
	"TRAIT_NAME_FINANCIAL_CENTER",
	"TRAIT_NAME_FISCAL_CENTER",
	"TRAIT_NAME_FIDUCIARY_CENTER",
	"TRAIT_NAME_CONQUEROR",
	"TRAIT_NAME_SKYSWEEPER",
	"TRAIT_NAME_DEPTH_CHARGE",
	"TRAIT_NAME_SONAR",
	"TRAIT_NAME_RADAR",
	"TRAIT_NAME_ANTI_INFANTRY",
	"TRAIT_NAME_ANTI_TANK",
	"TRAIT_NAME_ANTI_AIR",
	"TRAIT_NAME_ANTI_SHIP",
	"TRAIT_NAME_ANTI_STRUCTURE",
	"TRAIT_NAME_STEALTH",
	"TRAIT_NAME_SUBMERGED",
	"TRAIT_NAME_COMMANDO",
	"TRAIT_NAME_CRAB",
	"TRAIT_NAME_STEER",
	"TRAIT_NAME_INDOMITABLE",
	"TRAIT_NAME_SCHWERPUNKT",
	"TRAIT_NAME_BEWEGUNGSKRIEG",
	"TRAIT_NAME_MOBILE_BATTERY",
	"TRAIT_NAME_STREAMLINED",
	"TRAIT_NAME_CEMENTED_STEEL_ARMOR",
	"TRAIT_NAME_CAVITATION_EXPLOSION",
	"TRAIT_NAME_SEABOUND",
	"TRAIT_NAME_SELF_DESTRUCT",
	"TRAIT_NAME_DISPERSION",
	"TRAIT_NAME_JUDGEMENT",
	"TRAIT_NAME_SUPPLY_DISTRIBUTION",
	"TRAIT_NAME_INERTIAL",
	"TRAIT_NAME_STREAMBLAST",
	"TRAIT_NAME_AIRBORNE",
	"TRAIT_NAME_HEROIC",
	"TRAIT_NAME_TANK_HUNTER",
	"TRAIT_NAME_NAVAL_TRANSPORT",
	"TRAIT_NAME_AIR_TRANSPORT",
	"TRAIT_NAME_UNBUILT",
	"TRAIT_NAME_TANK_POOPER",
	"TRAIT_NAME_ABSORBER",
	"TRAIT_NAME_TERRIFYING",
	"TRAIT_NAME_LYNCHPIN",
	"TRAIT_NAME_INFLAMING"
];

const T2 = [
	"TRAIT_DESC_UNEVEN",
	"TRAIT_DESC_RUGGED",
	"TRAIT_DESC_PRECIPITOUS",
	"TRAIT_DESC_IMPASSABLE",
	"TRAIT_DESC_TRICKY_WATERS",
	"TRAIT_DESC_CONCEALMENT",
	"TRAIT_DESC_NAVAL_CONCEALMENT",
	"TRAIT_DESC_BUNKER",
	"TRAIT_DESC_SHALLOW",
	"TRAIT_DESC_VANTAGE",
	"TRAIT_DESC_DANGEROUS",
	"TRAIT_DESC_LOGISTIC_CHALLENGE",
	"TRAIT_DESC_LOGISTIC_NIGHTMARE",
	"TRAIT_DESC_FINANCIAL_CENTER",
	"TRAIT_DESC_FISCAL_CENTER",
	"TRAIT_DESC_FIDUCIARY_CENTER",
	"TRAIT_DESC_CONQUEROR",
	"TRAIT_DESC_SKYSWEEPER",
	"TRAIT_DESC_DEPTH_CHARGE",
	"TRAIT_DESC_SONAR",
	"TRAIT_DESC_RADAR",
	"TRAIT_DESC_ANTI_INFANTRY",
	"TRAIT_DESC_ANTI_TANK",
	"TRAIT_DESC_ANTI_AIR",
	"TRAIT_DESC_ANTI_SHIP",
	"TRAIT_DESC_ANTI_STRUCTURE",
	"TRAIT_DESC_STEALTH",
	"TRAIT_DESC_SUBMERGED",
	"TRAIT_DESC_COMMANDO",
	"TRAIT_DESC_CRAB",
	"TRAIT_DESC_STEER",
	"TRAIT_DESC_INDOMITABLE",
	"TRAIT_DESC_SCHWERPUNKT",
	"TRAIT_DESC_BEWEGUNGSKRIEG",
	"TRAIT_DESC_MOBILE_BATTERY",
	"TRAIT_DESC_STREAMLINED",
	"TRAIT_DESC_CEMENTED_STEEL_ARMOR",
	"TRAIT_DESC_CAVITATION_EXPLOSION",
	"TRAIT_DESC_SEABOUND",
	"TRAIT_DESC_SELF_DESTRUCT",
	"TRAIT_DESC_DISPERSION",
	"TRAIT_DESC_JUDGEMENT",
	"TRAIT_DESC_SUPPLY_DISTRIBUTION",
	"TRAIT_DESC_INERTIAL",
	"TRAIT_DESC_STREAMBLAST",
	"TRAIT_DESC_AIRBORNE",
	"TRAIT_DESC_HEROIC",
	"TRAIT_DESC_TANK_HUNTER",
	"TRAIT_DESC_NAVAL_TRANSPORT",
	"TRAIT_DESC_AIR_TRANSPORT",
	"TRAIT_DESC_UNBUILT",
	"TRAIT_DESC_TANK_POOPER",
	"TRAIT_DESC_ABSORBER",
	"TRAIT_DESC_TERRIFYING",
	"TRAIT_DESC_LYNCHPIN",
	"TRAIT_DESC_INFLAMING"
];

const T3 = [
    "TRAIT_NAME_LIGHT_ARMOR",
	"TRAIT_NAME_MEDIUM_ARMOR",
	"TRAIT_NAME_HEAVY_ARMOR",
	"TRAIT_NAME_LIGHT_WEAPON",
	"TRAIT_NAME_MEDIUM_WEAPON",
	"TRAIT_NAME_HEAVY_WEAPON",
    "TRAIT_NAME_NO_WEAPON",
	"TRAIT_NAME_STATIONARY",
	"TRAIT_NAME_FOOT",
	"TRAIT_NAME_WHEELED",
	"TRAIT_NAME_TRACKED",
	"TRAIT_NAME_FLIGHT",
	"TRAIT_NAME_RUDDER",
	"TRAIT_NAME_HEAVY_RUDDER",
	"TRAIT_NAME_AMBIBIOUS",
	"TRAIT_NAME_TEMPERATE",
	"TRAIT_NAME_ARID",
	"TRAIT_NAME_BOREAL",
	"TRAIT_NAME_BARREN",
	"TRAIT_NAME_ARCTIC",
	"TRAIT_NAME_LUNAR",
	"TRAIT_NAME_MARTIAN"
];

const T4 = [
    "TRAIT_DESC_LIGHT_ARMOR",
	"TRAIT_DESC_MEDIUM_ARMOR",
	"TRAIT_DESC_HEAVY_ARMOR",
	"TRAIT_DESC_LIGHT_WEAPON",
	"TRAIT_DESC_MEDIUM_WEAPON",
	"TRAIT_DESC_HEAVY_WEAPON",
    "TRAIT_DESC_NO_WEAPON",
	"TRAIT_DESC_STATIONARY",
	"TRAIT_DESC_FOOT:",
	"TRAIT_DESC_WHEELED",
	"TRAIT_DESC_TRACKED",
	"TRAIT_DESC_FLIGHT",
	"TRAIT_DESC_RUDDER",
	"TRAIT_DESC_HEAVY_RUDDER",
	"TRAIT_DESC_AMBIBIOUS",
	"TRAIT_DESC_TEMPERATE",
	"TRAIT_DESC_ARID",
	"TRAIT_DESC_BOREAL",
	"TRAIT_DESC_BARREN",
	"TRAIT_DESC_ARCTIC",
	"TRAIT_DESC_LUNAR",
	"TRAIT_DESC_MARTIAN"
];

//orderedExport("fName", T3, []);


/**
 * neyn 12.04.2025
 * 
 * Helper function to re-order traits.
 * 
 * @param {string} fName 
 */
const exportTraits = function(fName){
    const list = Object.keys(TRAITS);
    const file = new PrettyJSON(4);
    file.open();

    for(let i = 0; i < list.length; i++) {
        const traitID = list[i];
        const trait = TRAITS[traitID];
        const line = { "name": trait.name, "desc": trait.desc, "icon": `Assets/Traits/${traitID}.png` };

        file.writeLine(traitID, line);
    }

    file.close();
    file.download(fName);
}