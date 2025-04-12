var Interceptor = -1;

const HIT_ANIM_STYLE = {
	STANDARD: "Standard",
	SUPPLY: "Supply",
	GASWAVE: "Gaswave",
	NEUTRON_WAVE: "Neutron Wave",
	ANTIMATTER: "Antimatter"
};

const ATTACK_TYPE = {
	FIRST: 0,
	COUNTER: 1
};

/**
 * neyn 09.04.2025
 * 
 * @param {object} attacker 
 * @param {int[][]} map 
 * @param {object[][]} roster
 * @param {string} traitID 
 * @returns {object | null}
 */
const getInterceptorByTrait = function(attacker, map, roster, traitID) {
	const INTERCEPTOR_RANGE = 3;
    const startX =  Math.max(attacker.x - INTERCEPTOR_RANGE, 0);
    const endX = Math.min(attacker.x + INTERCEPTOR_RANGE, map.length);
    const startY = Math.max(attacker.y - INTERCEPTOR_RANGE, 0);
    const endY = Math.min(attacker.y + INTERCEPTOR_RANGE, map[0].length);
    const interceptorList = [];

    for(let i = startX; i < endX; i++) {
        for(let j = startY; j < endY; j++) {
            const entity = roster[i][j];
            const canIntercept = entity && hasCertainTrait(entity.unitType, traitID);

            if(canIntercept) {
                const range = (i - attacker.x) * (i - attacker.x) + (j - attacker.y) * (j - attacker.y);

                if(range <= 9) {
                    interceptorList.push(entity);
                }
            }
        }
    }

    return getRandomElement(interceptorList);
}

/**
 * neyn 09.04.2025
 * 
 * @param {int} attackerX 
 * @param {int} attackerY 
 * @param {int} defenderX 
 * @param {int} defenderY 
 * @returns {int}
 */
const getAttackingDirection = function(attackerX, attackerY, defenderX, defenderY) {
	if(attackerY === defenderY) {
		if(attackerX > defenderX) {
			return Battalion.DIRECTION.EAST;
		}

		if(defenderX < attackerX) {
			return Battalion.DIRECTION.WEST;
		}
	} else if(attackerY < defenderY) {
		return Battalion.DIRECTION.SOUTH;
	} else {
		return Battalion.DIRECTION.NORTH;
	}

	return Battalion.DIRECTION.NONE;
}

/**
 * neyn 09.04.2025
 * 
 * @param {object} attacker 
 */
const getHitAnimStyle = function(attacker) {
	const unitType = attacker.unitType;

	if(hasCertainTrait(unitType, "Supply Distribution")) {
		HIT_ANIM_STYLE.SUPPLY;
	}

	if(hasCertainTrait(unitType, "Dispersion")) {
		return HIT_ANIM_STYLE.GASWAVE;
	}

	if(hasCertainTrait(unitType, "Streamblast")) {
		return HIT_ANIM_STYLE.NEUTRON_WAVE;
	}

	return HIT_ANIM_STYLE.STANDARD;
}

/**
 * neyn 12.04.2025
 * 
 * @param {object} attacker 
 * @param {object} defender 
 * @param {object} worldMap
 * @param {int} attackType 
 * @returns 
 */
const getDamageModifier = function(attacker, defender, worldMap, attackType) {
	const DefenderTile = Terrain[worldMap[defender.x][defender.y]];
    const biomeLogisticFactor = BIOMES[BiomeMap[attacker.x][attacker.y]].logisticIndex;

	let DamageModifier = 1;

	DamageModifier *= attacker.life / Units[attacker.unitType].HP;

	if(hasCertainTrait(attacker.unitType, "Indomitable")) {
        DamageModifier = 1;
    }

	DamageModifier *= biomeLogisticFactor;

	if(attacker.damageType == defender.armor && attacker.damageType != "Medium") {
        DamageModifier *= 1.5;
    }

	if(attacker.damageType == "Light" && defender.armor == "Heavy"){
        DamageModifier *= 0.5;
    }

	if(attacker.damageType == "Heavy" && defender.armor == "Light"){
        DamageModifier *= 0.5;
    }

	DamageModifier *= DefenderTile.protectionFactor;

	if(hasCertainTrait(attacker.unitType, "Commando") && DefenderTile.protectionFactor < 1) {
        DamageModifier *= 1.25;
    }

	if(hasCertainTrait(defender.unitType, "Commando") && DefenderTile.protectionFactor < 1) {
        DamageModifier *= 0.8;
    }

	DamageModifier *= (5 + attacker.morale) / 5;

	if(defender.unitType.movementType == "Foot" && hasCertainTrait(attacker.unitType, "Anti-Infantry")) {
        DamageModifier *= 3;
    }

	if(defender.movementType == "Flight" && hasCertainTrait(attacker.unitType, "Anti-Air")) {
        DamageModifier *= 2;
    }

	if((Units[defender.unitType].Movement == "Rudder" || Units[defender.unitType].Movement == "Heavy Rudder") && hasCertainTrait(attacker.unitType, "Anti-Ship")) {
        DamageModifier *= 3;
    }

	if(defender.movementType == "Stationary" && hasCertainTrait(attacker.unitType, "Anti-Structure")) {
        DamageModifier *= 2;
    }

	if(hasCertainTrait(defender.unitType, "Steer") && (Units[defender.unitType].Movement == "Rudder" || Units[defender.unitType].Movement == "Heavy Rudder")) {
		const speedMultiplier = (1 + (Math.max(Math.min(attacker.speed - defender.speed, 0), -4) * 0.15));

		DamageModifier *= speedMultiplier;
	}

	if(attackType === ATTACK_TYPE.FIRST) {
		if(hasCertainTrait(attacker.unitType, "Stealth") && attacker.willAmbush) {
			DamageModifier *= 2;
		}

		if(defender.unitType.movementType == "Foot" && hasCertainTrait(attacker.unitType, "Schwerpunkt")) {
			DamageModifier *= 1.4;
		}
	}

	return DamageModifier;
}

/**
 * neyn 12.04.2025
 * 
 * @param {object} attacker 
 * @param {object} defender 
 * @param {object} worldMap
 * @param {int} attackType 
 * @returns 
 */
const getDamage = function(attacker, defender, worldMap, attackType) {	
	const DamageModifier = getDamageModifier(attacker, defender, worldMap, attackType);

	let Damage = Math.ceil(attacker.damage * DamageModifier);

	if(hasCertainTrait(defender.unitType, "Cemented Steel Armor") && !hasCertainTrait(attacker.unitType, "Supply Distribution") && !hasCertainTrait(attacker.unitType, "Cavitation Explosion")) {
		Damage -= 20;
	}

	if(Damage < 0) {
		Damage = 0;
	}

	if(defender.movementType == "Flight" && !hasCertainTrait(attacker.unitType, "Anti-Air") && Damage > 25) {
		Damage = 25;
	}

	if(attackType === ATTACK_TYPE.FIRST) {
		if(hasCertainTrait(attacker.unitType, "Supply Distribution")) {
			Damage *= -1;
		}
	}

	return Damage;
}

function Attack(Attacker, Defender, Map){
	const Atk = MapRoster[Attacker];
	const Def = MapRoster[Defender];
	const startingDirection = Atk.direction;

    //x and y are inverted... why?
	const Damage = getDamage(Atk, Def, Map, ATTACK_TYPE.FIRST);
    const direction = getAttackingDirection(Atk.y, Atk.x, Def.y, Def.x);
	const distance = ((Atk.x-Def.x) * (Atk.x-Def.x) + (Atk.y-Def.y) * (Atk.y-Def.y));

    if(direction !== Battalion.DIRECTION.NONE) {
        Atk.direction = direction;
    }

	let canCounterattack = true;
	let isIntercepted = false;

	if(hasCertainTrait(Atk.unitType, "Stealth") && Atk.willAmbush) {
		Atk.willAmbush = false;
    }

	if(hasCertainTrait(Atk.unitType, "Submerged") && hasCertainTrait(Def.unitType, "Sonar")) {
        isIntercepted = true;
    }

	if(Atk.movementType === "Flight") {
        const interceptor = getInterceptorByTrait(Atk, Map, rostermap, "Anti-Air");

        if(interceptor) {
            isIntercepted = true;
            Interceptor = interceptor.index;
        }
	}

	if(hasCertainTrait(Atk.unitType, "Submerged") && !isIntercepted) {
        const interceptor = getInterceptorByTrait(Atk, Map, rostermap, "Sonar");

        if(interceptor) {
            isIntercepted = true;
            Interceptor = interceptor.index;
        }
	}

	if(Def.movementType == "Tracked") {
        if(hasCertainTrait(Atk.unitType, "Anti-Tank") && !hasCertainTrait(Def.unitType, "Anti-Tank")) {
            canCounterattack = false;
        }
    }

	if(hasCertainTrait(Def.unitType, "Tank-Hunter") && Atk.movementType == "Tracked") {
		isIntercepted = true;
	}

	if(hasCertainTrait(Atk.unitType, "Tank-Hunter")) {
		isIntercepted = false;
	}

	if(hasCertainTrait(Def.unitType, "Self-Destruct")) {
		isIntercepted = false;
	}
	
	if(distance > (Units[Def.unitType].MaxRange * Units[Def.unitType].MaxRange)) {
		canCounterattack = false;
		isIntercepted = false;
	}

	if(Atk.movementType == "Flight" && !hasCertainTrait(Def.unitType, "Skysweeper")) {
		canCounterattack = false;
	}

	if(hasCertainTrait(Atk.unitType, "Submerged") && !hasCertainTrait(Def.unitType, "Depth Strike")) {
		canCounterattack = false;
	}

	if(hasCertainTrait(Def.unitType, "Seabound") && Units[Atk.unitType].Movement != "Rudder" && Units[Atk.unitType].Movement != "Heavy Rudder") {
		canCounterattack = false;
	}	

	if(isIntercepted) {
		//Call to ghost attack. Is this necessary here?
		GhostAttack(Attacker, 0, 0, 25, "Standard");
	}

	if(hasCertainTrait(Atk.unitType, "Supply Distribution")) {
		canCounterattack = false;
	}

	if(hasCertainTrait(Atk.unitType, "Terrifying")) {
		const TERRIFYING_COST = 1000;
		const TERRIFYING_MORALE = -3;

		if(Units[Def.unitType].Cost < TERRIFYING_COST && Def.morale > TERRIFYING_MORALE) {
			Def.morale -= 1;
		}
	}

	if(hasCertainTrait(Atk.unitType, "Inflaming")) {
		const INFLAMING_MORALE = 3;
	
		if(Def.morale < INFLAMING_MORALE) {
			Def.morale += 1;
		}
	}

	if(Atk.life > 0) {
		MarkerMap[Atk.x][Atk.y] = 0; //Whatever that does...
		document.getElementById(`Marker ${Atk.x + 1 - StandardX}X${Atk.y + 1 - StandardY}`).style.visibility = "hidden"; //Hide marker?

		const HitAnimStyle = getHitAnimStyle(Atk);

		if(Atk.x >= StandardX && Atk.x < StandardX + Map.length && Atk.y >= StandardY && Atk.y < StandardY + Map[0].length) {
			if(!isIntercepted) {
				AttackingAnimation(Attacker);
			} else {
				setTimeout(() => {
					AttackingAnimation(Attacker);
				}, 800);
			}
		}

		if(Def.x >= StandardX && Def.x < StandardX + Map.length && Def.y >= StandardY && Def.y < StandardY + Map[0].length) {
			if(!isIntercepted) {
				HitAnimation(Defender, HitAnimStyle);
			} else {
				setTimeout(() => {
					HitAnimation(Defender, HitAnimStyle);
				}, 800);
			}
		}

		if(!hasCertainTrait(Atk.unitType, "Dispersion") && !hasCertainTrait(Atk.unitType, "JUDGEMENT") && ((LastMove.ID ?? 0) == 0 || hasCertainTrait(Atk.unitType, "Bewegungskrieg") || (LastMove.hasEngaged ?? false))) {
			LastMove.ID=Attacker;
			if((LastMove.DIR ?? 0) == 0) LastMove.DIR=startingDirection;
			//alert(LastMove.DIR);
			if((LastMove.X ?? 0) == 0) LastMove.X=Atk.x;
			if((LastMove.Y ?? 0) == 0) LastMove.Y=Atk.y;

			LastMove.HP=Atk.life;
			//LastMove.cloak=Atk.isCloaked ?? false;
			if(Atk.canEncore) LastMove.encore=Atk.canEncore ?? false;

			if((LastMove.EID ?? 0) == 0) {
				LastMove.EID=Defender;
				LastMove.EHP=Def.life;
				LastMove.EX=Def.x;
				LastMove.EY=Def.y;
				LastMove.GRV=Def;
			} else {
				LastMove.E2ID=Defender;
				LastMove.E2HP=Def.life;
				LastMove.E2X=Def.x;
				LastMove.E2Y=Def.y;
				LastMove.GRV2=Def;
			}

		} else if((LastMove.ID ?? 0) != 0) {
				//if((LastMove.DIR??0)==0){LastMove.DIR=startingDirection};
				//if((LastMove.X??0)==0){LastMove.X=Atk.x};
				//if((LastMove.Y??0)==0){LastMove.Y=Atk.y};
				//LastMove.HP=Atk.life;
		} else {
			LastMove.ID = 0
		}

		if(!hasCertainTrait(Atk.unitType, "Dispersion") && !hasCertainTrait(Atk.unitType,"JUDGEMENT") && Units[Atk.unitType].MaxRange > 1) {
			LastMove.ID = Attacker;
			LastMove.X = Atk.x;
			LastMove.Y = Atk.y;
			LastMove.HP = Atk.life;
			LastMove.DIR = startingDirection;
			LastMove.cloak = Atk.isCloaked ?? false;

			if(Atk.canEncore) {
				LastMove.encore = Atk.canEncore ?? false
			}

			if((LastMove.EID ?? 0) == 0) {
				LastMove.EID=Defender;
				LastMove.EHP=Def.life;
				LastMove.EX=Def.x;
				LastMove.EY=Def.y;
				LastMove.GRV=Def;
			} else {
				LastMove.E2ID=Defender;
				LastMove.E2HP=Def.life;
				LastMove.E2X=Def.x;
				LastMove.E2Y=Def.y;
				LastMove.GRV2=Def;
			}
		}

		switch(HitAnimStyle) {
			case HIT_ANIM_STYLE.STANDARD:
			case HIT_ANIM_STYLE.SUPPLY: {
				Def.life -= Damage;
				break;
			}
			case HIT_ANIM_STYLE.GASWAVE: {
				for(let x=Math.max(0,Def.x-1); x<=Math.min(Map.length-1,Def.x+1);x++) {
					for(let y=Math.max(0,Def.y-1); y<=Math.min(Map[0].length-1,Def.y+1); y++) {
						SplashAttack(Atk, Map, x, y);
					}
				}
				break;
			}
			case HIT_ANIM_STYLE.NEUTRON_WAVE: {
				let LaserVar = 0;
				let LaserConstX = 0;
				let LaserConstY = 0;

				if(Def.x<Atk.x) {
					LaserVar=1;
					LaserConstX=-1;
					LaserConstY=0;
				}

				if(Def.x>Atk.x) {
					LaserVar=3;
					LaserConstX=1;
					LaserConstY=0;
				}

				if(Def.y>Atk.y) {
					LaserVar=2;
					LaserConstX=0;
					LaserConstY=1;
				}

				if(Def.y<Atk.y) {
					LaserVar=4;
					LaserConstX=0;
					LaserConstY=-1;
				}

				//for(let l=1; l<=Units[Atk.unitType].MaxRange; l++){
				//SplashAttack(Atk,Atk.x+l*(1+1),Atk.y+l*(1+1))};

				//if(LaserVar%2!=0){LaserCap=Map.length; LaserMin=Math.max(Def.x-7,0); LaserMax=Math.min(Def.x,LaserCap-7)};
				//if(LaserVar%2==0){LaserCap=Map[0].length; LaserMin=Math.max(Def.y-7,0); LaserMax=Math.min(Def.y,LaserCap-7)};

				//let r=Units[Atk.unitType].MaxRange;
				for(let l = 1; l <= 7; l++) {
					const laserX = Atk.x + l * LaserConstX;
					const laserY = Atk.y + l * LaserConstY;

					//SplashAttack(Atk,Atk.x+l*LaserConstX,Atk.y+l*LaserConstY);
					if(laserX >= 0 && laserY >= 0 && laserX < Map.length && laserY < Map[0].length) {
						SplashAttack(Atk, Map, laserX, laserY);
					}
				}
				break;
			}
			case HIT_ANIM_STYLE.ANTIMATTER: {
				break;
			}
			default: {
				console.warn("Missing hit animation!");
				break;
			}
		}

		ScoutVicinity(Atk.x, Atk.y);

		LastMove.Uncloaked = AdjacentCloakers;

		if(!rostermap[Atk.x][Atk.y].isCloaked) {
			const entityID = `EntityCore ${Atk.x + 1}X${Atk.y + 1}`;

			document.getElementById(entityID).style.filter = Factions[Atk.faction].ChromaCode;
		}

		for(let c = 0; c < AdjacentCloakers.length; c++) {
			switch(AdjacentCloakers[c]) {
				case 1: {
					document.getElementById("EntityCore "+(Atk.x)+"X"+(Atk.y+1)).style.filter=Factions[rostermap[Atk.x-1][Atk.y].faction].ChromaCode;
					break;
				}
				case 2: {
					document.getElementById("EntityCore "+(Atk.x+1)+"X"+(Atk.y+2)).style.filter=Factions[rostermap[Atk.x][Atk.y+1].faction].ChromaCode;
					break;
				}
				case 3: {
					document.getElementById("EntityCore "+(Atk.x+2)+"X"+(Atk.y+1)).style.filter=Factions[rostermap[Atk.x+1][Atk.y].faction].ChromaCode;
					break;
				}
				case 4: {
					document.getElementById("EntityCore "+(Atk.x+1)+"X"+(Atk.y)).style.filter=Factions[rostermap[Atk.x][Atk.y-1].faction].ChromaCode;
					break;
				}
			}
		}

		if(hasCertainTrait(Atk.unitType, "Absorber")) {
			const absorbedDamage = Math.min(Damage, Math.abs(Def.life), Units[Atk.unitType].HP - Atk.life);

			Atk.life += absorbedDamage;
		}

		if(Def.life > Units[Def.unitType].HP) {
			Def.life = Units[Def.unitType].HP;
		}
	}

	if(hasCertainTrait(Atk.unitType, "Self-Destruct")) {
		Atk.life = 0;
		canCounterattack = false;
	}

	if(Atk.life <= 0) {
		setTimeout(() => {
			UnitLost(Attacker);
		}, 700);
	}
	
	if(Def.life <= 0) {
		KillingUnit = true;
		let canEncore = false;

		setTimeout(() => {
			UnitLost(Defender);
		}, 700);

		if(hasCertainTrait(Atk.unitType, "Bewegungskrieg") && Atk.canEncore) {
			canEncore = true;
			Atk.canEncore = false;
		}

		if(canEncore) {
			const markerID = `Marker ${Atk.x + 1 - StandardX}X${Atk.y + 1 - StandardY}`;

			MarkerMap[Atk.x][Atk.y] = true;
			document.getElementById(markerID).style.visibility = "visible";
		}
	} else {
		if(distance < Def.minR * Def.minR) canCounterattack = false;
		if(distance > Def.maxR * Def.maxR) canCounterattack = false;
		if(hasCertainTrait(Atk.unitType, "Mobile Battery") && Units[Atk.unitType].MaxRange > 1 && !hasCertainTrait(Def.unitType, "Mobile Battery")) canCounterattack = false;
		if(hasCertainTrait(Def.unitType, "Self-Destruct")) canCounterattack = false;
		if(hasCertainTrait(Def.unitType, "Dispersion")) canCounterattack = false;
		if(hasCertainTrait(Def.unitType, "JUDGEMENT")) canCounterattack = false;
		if(Def.damageType=="None") canCounterattack = false;
		if(isIntercepted) canCounterattack = false;
		if(canCounterattack){
			setTimeout(() => {
				Counterattack(Defender, Attacker, Map);
			}, 800);
		}
	}

	EvaluateDynamicEvent('Action', 'null');
	
	if(Atk.isVized) {
		let ShouldProbablyCheck = false;

		for(let l = 0; l < Constants.Defeat.length; l++) {
			if(Constants.Defeat[l] == Defender && Def.life <= 0) {
				ShouldProbablyCheck = true;
				break;
			}
		}

		if(!ShouldProbablyCheck) {
			for(let l = 0; l < Constants.Protect.length; l++) {
				if(Constants.Protect[l] == Attacker && Atk.life <= 0) {
					ShouldProbablyCheck = true;
					break;
				}
			}
		}

		if(!ShouldProbablyCheck) {
			if(Map.length * Map[0].length <= 1000) {
				ShouldProbablyCheck = true;
			}
		}

		if(ShouldProbablyCheck) {
			Inspection(Turn, Constants, Roster);
			Atk.isVized = false;
		}
	}
}

/**
 *
 * 
 * @param {int} unitID index in MapRoster
 */
function AttackingAnimation(unitID){
	if(unitID < 0 || unitID >= MapRoster.length) {
		return;
	}

	const { soundPlayer } = battalion;
	const unit = MapRoster[unitID];
	const { direction, unitType } = unit;
	const type = Units[unitType];
	const CORE_ID = `EntityCore ${unit.x + 1}X${unit.y + 1}`;
	const ENTITY_ID = `Entity ${unit.x + 1}X${unit.y + 1}`;
	const MESH_ID = `EntityMesh ${unit.x + 1}X${unit.y + 1}`;
	const core = document.getElementById(CORE_ID);
	const entity = document.getElementById(ENTITY_ID);
	const mesh = document.getElementById(MESH_ID);

	soundPlayer.playSound(type.shortname + "Attack");

	core.src = "Assets/Units/Attack/" + type.shortname + "Attack" + direction + ".gif";

	if(!type.MLPR) {
		mesh.src = "Assets/Units/AttackMeshes/" + type.shortname + "Attack" + "Mesh" + direction + ".GIF";
	} else {
		mesh.style.visibility = "hidden";
	}

	entity.style.left = (type.AttackOffsetX ?? [0,0,0,0,0])[unit.direction] + "px";
	entity.style.top = (type.AttackOffsetY ?? [0,0,0,0,0])[unit.direction] + "px";
	entity.style.zIndex = 6;

	let frame = 0;
	let interval = null;

	const Act = () => {
		frame++;

		if(frame == 17) {
			if(!type.MLPR) {
				mesh.src = "Assets/Units/StaticMeshes/" + type.shortname + "Mesh" + direction + ".PNG";
			} else {
				mesh.style.visibility = "hidden";
			}

			core.src = "Assets/Units/Static/" + type.shortname + direction + ".PNG";
			entity.style.left = (type.StaticOffsetX ?? [0,0,0,0,0])[unit.direction] + "px";
			entity.style.top = (type.StaticOffsetY ?? [0,0,0,0,0])[unit.direction] + "px";
			entity.style.zIndex = 4;

			window.clearInterval(interval);
		}
	}

	interval = window.setInterval(Act, 35);
}

/**
 * 
 * @param {int} TargetInd 
 * @param {int} TargetX 
 * @param {int} TargetY 
 * @param {int} DMG 
 * @param {string} Anim 
 */
function GhostAttack(TargetInd, TargetX, TargetY, DMG, Anim){
	if((TargetInd ?? 0) != 0){
		const target = MapRoster[TargetInd];
		
		rostermap[target.x][target.y].life -= DMG;

		AttackingAnimation(Interceptor);
		HitAnimation(TargetInd, Anim);

		if(rostermap[target.x][target.y].life <= 0) {
			UnitLost(TargetInd);
		}
	} else {
		if(rostermap[TargetX][TargetY] != 0){
			rostermap[TargetX][TargetY].life -= DMG;

			HitAnimation(rostermap[TargetX][TargetY].index, Anim);

			if(rostermap[TargetX][TargetY].life <= 0) {
				UnitLost(rostermap[TargetX][TargetY].index);
			}
		} else {
			HitAnimation({
				stt: "Temporary",
				x: TargetX ?? 0,
				y: TargetY ?? 0
			}, Anim);
		}
	}
}

/**
 * 
 * @param {int} Attacker 
 * @param {int} Defender 
 * @param {int[][]} Map 
 */
function Counterattack(Attacker, Defender, Map){
	const Atk = MapRoster[Attacker];
	const Def = MapRoster[Defender];
	
	Atk.direction = Battalion.DIRECTION_FLIP[Def.direction];

	AttackingAnimation(Attacker);

	setTimeout(() => {
		HitAnimation(Defender, HIT_ANIM_STYLE.STANDARD);
	}, 200);

	const Damage = getDamage(Atk, Def, Map, ATTACK_TYPE.COUNTER);

	if(hasCertainTrait(Atk.unitType, "Terrifying")) {
		if(Units[Def.unitType].Cost < 1000 && Def.morale > -3) {
			Def.morale -= 1;
		}
	}

	if(hasCertainTrait(Atk.unitType, "Inflaming")) {
		if(Def.morale < 3) {
			Def.morale += 1;
		}
	}

	if(hasCertainTrait(Atk.unitType, "Absorber")) {
		const HealIndex = Math.min(Damage, Math.abs(Def.life), Units[Atk.unitType].HP - Atk.life);

		Atk.life += HealIndex;
	}

	Def.life -= Damage;

	if(Def.life <= 0) {
		setTimeout(() => {
			UnitLost(Defender);
		}, 1000);
	}

	EvaluateDynamicEvent('Action','null');
}

/**
 * 
 * @param {object} Atk 
 * @param {int} X 
 * @param {int} Y 
 * @returns 
 */
function SplashAttack(Atk, Map, X, Y){
	if(rostermap[X][Y] == 0) {
		return;
	}

	const Def = rostermap[X][Y];
	const Damage = getDamage(Atk, Def, Map, ATTACK_TYPE.FIRST);

	Def.life -= Damage;

	if(Def.life <= 0) {
		setTimeout(() => {
			UnitLost(Def.index);
		}, 700);
	}
}