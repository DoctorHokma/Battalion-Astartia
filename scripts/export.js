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

/*
[
	["Kargit Dogs","Anima Ante Mortem"],
	["Let us die","To make men free"],
	["Ancestral Gangrene","A New Era"],
	["Freedom, Equality, Tolerance","Elysium Shattered"],
	["A taste of Warfare","A giant awakens"],
	[]
];
*/

/*
const CHAPTER_NAME = [];
const NAMES = [];

for(let i = 0; i < 5; i++) {
	const list = CHAPTER_NAME[i];

	for(let j = 0; j < 7; j++) {
		if(j >= list.length) {
			NAMES.push("");
		} else {
			NAMES.push(list[j]);
		}
	}
}
*/