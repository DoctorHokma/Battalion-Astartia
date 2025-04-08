var Interceptor = -1;

//Map=Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Map;

/**
 * neyn 08.04.2025
 * 
 * @param {object} attacker 
 * @param {int[][]} map 
 * @param {string} traitID 
 * @returns 
 */
const getInterceptorByTrait = function(attacker, map, traitID) {
    const startX =  Math.max(attacker.x - 3, 0);
    const endX = Math.min(attacker.x + 3, map.length);
    const startY = Math.max(attacker.y - 3, 0);
    const endY = Math.min(attacker.y + 3, map[0].length);
    const interceptorList = [];

    for(let a = startX; a < endX; a++) {
        for(let b = startY; b < endY; b++) {
            const entity = rostermap[a][b];
            const canIntercept = entity && entity.hasCertainTrait(entity.unitType, traitID);

            if(canIntercept) {
                const range = (a - attacker.x) * (a - attacker.x) + (b - attacker.y) * (b - attacker.y);

                if(range <= 9) {
                    interceptorList.push({
                        x: a,
                        y: b
                    });
                }
            }
        }
    }

    return getRandomElement(interceptorList);
}

function Attack(Attacker, Defender, Map){
	const Atk = MapRoster[Attacker];
	const Def = MapRoster[Defender];
	const DefenderTile=Terrain[Map[Def.x][Def.y]];
	const startingDirection = Atk.direction;

    //x and y are inverted... why?
    const direction = getAttackingDirection(Atk.y, Atk.x, Def.y, Def.x);
	const distance = ((Atk.x-Def.x) * (Atk.x-Def.x) + (Atk.y-Def.y) * (Atk.y-Def.y));
    const biomeLogisticFactor= BiomeRegistry[BiomeMap[Atk.x][Atk.y]].LogisticIndex;

    if(direction !== Battalion.DIRECTION.NONE) {
        Atk.direction = direction;
    }
	//if(Atk.x>=StandardX&&Atk.x<StandardX+10&&Atk.y>=StandardY&&Atk.y<StandardY+10){AttackingAnimation(Attacker)};
	
	let DamageModifier = 1;

	if(hasCertainTrait(Atk.unitType, "Indomitable")) {
        DamageModifier = 1;
    }

	DamageModifier *= biomeLogisticFactor;

	if(Atk.damageType == Def.armor && Atk.damageType != "Medium") {
        DamageModifier *= 1.5;
    }

	if(Atk.damageType == "Light" && Def.armor == "Heavy"){
        DamageModifier *= 0.5;
    }

	if(Atk.damageType == "Heavy" && Def.armor == "Light"){
        DamageModifier *= 0.5;
    }

	if(hasCertainTrait(Atk.unitType, "Stealth")) {
        if(Atk.willAmbush) {
            Atk.willAmbush = false;
            DamageModifier *= 2;
        }
    }

	DamageModifier *= DefenderTile.protectionFactor;

	if(hasCertainTrait(Atk.unitType, "Commando") && DefenderTile.protectionFactor < 1) {
        DamageModifier *= 1.25;
    }

	if(hasCertainTrait(Def.unitType, "Commando") && DefenderTile.protectionFactor < 1) {
        DamageModifier *= 0.8;
    }

	//if(ChosenUnit.isCloaked){DamageModifier*=2};

	DamageModifier *= (5 + Atk.morale) / 5;

	let canCounterattack = true;
	let isIntercepted = false;

	if(hasCertainTrait(Atk.unitType, "Submerged") && hasCertainTrait(Def.unitType, "Sonar")) {
        isIntercepted = true;
    }

	if(Atk.movementType === "Flight") {
        const interceptor = getInterceptorByTrait(Atk, Map, "Anti-Air");

        if(interceptor) {
            isIntercepted = true;
            Interceptor = rostermap[interceptor.x][interceptor.y].index;
        }
	}

	if(hasCertainTrait(Atk.unitType, "Submerged") && !isIntercepted) {
        const interceptor = getInterceptorByTrait(Atk, Map, "Sonar");

        if(interceptor) {
            isIntercepted = true;
            Interceptor = rostermap[interceptor.x][interceptor.y].index;
        }
	}

	if(Def.unitType < 12 && hasCertainTrait(Atk.unitType, "Anti-Infantry")) {
        DamageModifier *= 3;
    }

	if(Def.unitType < 12 && hasCertainTrait(Atk.unitType, "Schwerpunkt")) {
        DamageModifier *= 1.4;
    }

	if(Def.movementType=="Tracked" && hasCertainTrait(Atk.unitType,"Anti-Tank") && !hasCertainTrait(Def.unitType,"Anti-Tank")){canCounterattack=false};
	if(Def.movementType=="Flight" && hasCertainTrait(Atk.unitType,"Anti-Air")){DamageModifier*=2};
		//alert(Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder");
	if(hasCertainTrait(Atk.unitType,"Anti-Ship") && (Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder")){DamageModifier*=3};
	//if(hasCertainTrait(Atk.unitType,"Anti-Ship")){if(Def.movementType!="Rudder" && Def.movementType!="Heavy Rudder"){DamageModifier*=0;}};
	if(Def.movementType=="Stationary" && hasCertainTrait(Atk.unitType,"Anti-Structure")){DamageModifier*=2};

	if(hasCertainTrait(Def.unitType,"Steer")&&(Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder")){DamageModifier*=1+(Math.max(Math.min(Atk.speed-Def.speed,0),-4)*0.15)};

	if(hasCertainTrait(Def.unitType,"Tank-Hunter") && Atk.movementType=="Tracked"){isIntercepted=true};
	if(hasCertainTrait(Atk.unitType,"Tank-Hunter")){isIntercepted=false};
	if(hasCertainTrait(Def.unitType,"Self-Destruct")){isIntercepted=false};
	
	//alert(distance);
	//alert(Def.unitType);
	if(distance>(Units[Def.unitType].MaxRange*Units[Def.unitType].MaxRange)){canCounterattack=false; isIntercepted=false};
	if(Atk.movementType=="Flight" && !hasCertainTrait(Def.unitType,"Skysweeper")){canCounterattack=false};
	if(hasCertainTrait(Atk.unitType,"Submerged") && !hasCertainTrait(Def.unitType,"Depth Strike")){canCounterattack=false};
	if(hasCertainTrait(Def.unitType,"Seabound") && Units[Atk.unitType].Movement!="Rudder" && Units[Atk.unitType].Movement!="Heavy Rudder"){canCounterattack=false};
	//alert(Units[Def.unitType].MaxRange*Units[Def.unitType].MaxRange);
	

	if(isIntercepted){GhostAttack(Attacker,0,0,25,"Standard")};

	DamageModifier*=Atk.life/Units[Atk.unitType].HP

	let Damage=Math.ceil(Atk.damage*DamageModifier);
	//if(hasCertainTrait(Atk.unitType,"Tank-Hunter") && Def.armor!="Heavy"){Damage-=25};
	if(hasCertainTrait(Def.unitType,"Cemented Steel Armor") && !hasCertainTrait(Atk.unitType,"Supply Distribution") && !hasCertainTrait(Atk.unitType,"Cavitation Explosion")){Damage-=20};
	Damage=Math.max(Damage,0);
	if(Def.movementType=="Flight" && !hasCertainTrait(Atk.unitType,"Anti-Air")){if(Damage>25){Damage=25}};
	if(hasCertainTrait(Atk.unitType,"Supply Distribution")){Damage*=-1; canCounterattack=false;};

	//Interceptor="UMF";
	/*
	if(Atk.faction==PlayerChoiceFaction){
			LastMove.ID=Attacker;
			LastMove.X=Atk.x;
			LastMove.Y=Atk.y;
			LastMove.HP=Atk.life;
			};*/

	if(hasCertainTrait(Atk.unitType,"Terrifying")){if(Units[Def.unitType].Cost<1000&&Def.morale>-3){Def.morale-=1}};
	if(hasCertainTrait(Atk.unitType,"Inflaming")){if(Def.morale<3){Def.morale+=1}};

	





	if(Atk.life>0){
	MarkerMap[Atk.x][Atk.y]=0;
	document.getElementById("Marker "+(Atk.x+1-StandardX)+"X"+(Atk.y+1-StandardY)).style.visibility="hidden";
	let HitAnimStyle="Standard";
	if(hasCertainTrait(Atk.unitType,"Supply Distribution")){HitAnimStyle="Supply"};
	if(hasCertainTrait(Atk.unitType,"Dispersion")){HitAnimStyle="Gaswave"};
	if(hasCertainTrait(Atk.unitType,"Streamblast")){HitAnimStyle="Neutron Wave"};
	if(Atk.x>=StandardX&&Atk.x<StandardX+Map.length&&Atk.y>=StandardY&&Atk.y<StandardY+Map[0].length){if(!isIntercepted){AttackingAnimation(Attacker)}else{setTimeout(AttackingAnimation, 800, Attacker)}};
	if(Def.x>=StandardX&&Def.x<StandardX+Map.length&&Def.y>=StandardY&&Def.y<StandardY+Map[0].length){if(!isIntercepted){HitAnimation(Defender,HitAnimStyle)}else{setTimeout(HitAnimation, 800, Defender, HitAnimStyle)}};

	//alert(Damage);
	//alert(Atk.x+" "+Atk.y);
	if(!hasCertainTrait(Atk.unitType,"Dispersion") && !hasCertainTrait(Atk.unitType,"JUDGEMENT") && ((LastMove.ID??0)==0 || hasCertainTrait(Atk.unitType,"Bewegungskrieg") || (LastMove.hasEngaged??false))){

		LastMove.ID=Attacker;
		if((LastMove.DIR??0)==0){LastMove.DIR=startingDirection};
		//alert(LastMove.DIR);
		if((LastMove.X??0)==0){LastMove.X=Atk.x};
		if((LastMove.Y??0)==0){LastMove.Y=Atk.y}; 
		LastMove.HP=Atk.life;
		//LastMove.cloak=Atk.isCloaked??false;
		if(Atk.canEncore){LastMove.encore=Atk.canEncore??false};

		if((LastMove.EID??0)==0){LastMove.EID=Defender; LastMove.EHP=Def.life; LastMove.EX=Def.x; LastMove.EY=Def.y; LastMove.GRV=Def}else{LastMove.E2ID=Defender; LastMove.E2HP=Def.life; LastMove.E2X=Def.x; LastMove.E2Y=Def.y; LastMove.GRV2=Def};

		}else if((LastMove.ID??0)!=0){
			//if((LastMove.DIR??0)==0){LastMove.DIR=startingDirection};
			//if((LastMove.X??0)==0){LastMove.X=Atk.x};
			//if((LastMove.Y??0)==0){LastMove.Y=Atk.y};
			//LastMove.HP=Atk.life;
		}else{LastMove.ID=0};

	//console.log(LastMove.X+" "+LastMove.Y);
	if(!hasCertainTrait(Atk.unitType,"Dispersion") && !hasCertainTrait(Atk.unitType,"JUDGEMENT") && Units[Atk.unitType].MaxRange>1){

		LastMove.ID=Attacker;
		LastMove.X=Atk.x;
		LastMove.Y=Atk.y;
		LastMove.HP=Atk.life;
		LastMove.DIR=startingDirection;
		LastMove.cloak=Atk.isCloaked??false;
		if(Atk.canEncore){LastMove.encore=Atk.canEncore??false};
		if((LastMove.EID??0)==0){LastMove.EID=Defender; LastMove.EHP=Def.life; LastMove.EX=Def.x; LastMove.EY=Def.y; LastMove.GRV=Def}else{LastMove.E2ID=Defender; LastMove.E2HP=Def.life; LastMove.E2X=Def.x; LastMove.E2Y=Def.y; LastMove.GRV2=Def}
		};





	if(HitAnimStyle=="Standard" || HitAnimStyle=="Supply"){Def.life-=Damage;
	}else if(HitAnimStyle=="Gaswave"){
		for(let x=Math.max(0,Def.x-1); x<=Math.min(Map.length-1,Def.x+1);x++){for(let y=Math.max(0,Def.y-1); y<=Math.min(Map[0].length-1,Def.y+1); y++){
			SplashAttack(Atk,x,y);
		}};


	}else if(HitAnimStyle=="Neutron Wave"){
		LaserVar=0;
		if(Def.x<Atk.x){LaserVar=1;LaserConstX=-1;LaserConstY=0};
		if(Def.x>Atk.x){LaserVar=3;LaserConstX=1;LaserConstY=0};
		if(Def.y>Atk.y){LaserVar=2;LaserConstX=0;LaserConstY=1};
		if(Def.y<Atk.y){LaserVar=4;LaserConstX=0;LaserConstY=-1};

		//for(let l=1; l<=Units[Atk.unitType].MaxRange; l++){
			//SplashAttack(Atk,Atk.x+l*(1+1),Atk.y+l*(1+1))};

		//if(LaserVar%2!=0){LaserCap=Map.length; LaserMin=Math.max(Def.x-7,0); LaserMax=Math.min(Def.x,LaserCap-7)};
		//if(LaserVar%2==0){LaserCap=Map[0].length; LaserMin=Math.max(Def.y-7,0); LaserMax=Math.min(Def.y,LaserCap-7)};

		//let r=Units[Atk.unitType].MaxRange;
		for(let l=1; l<=7; l++){
			//SplashAttack(Atk,Atk.x+l*LaserConstX,Atk.y+l*LaserConstY);
			if(Atk.x+l*LaserConstX<Map.length && Atk.y+l*LaserConstY<Map[0].length && Atk.x+l*LaserConstX>=0 && Atk.y+l*LaserConstY>=0){SplashAttack(Atk,Atk.x+l*LaserConstX,Atk.y+l*LaserConstY)};
		};
			//if(Atk.x-7>=0);



	}else if(HitAnimStyle=="Antimatter"){};

		ScoutVicinity(Atk.x,Atk.y);
		LastMove.Uncloaked=AdjacentCloakers;
		if(!rostermap[Atk.x][Atk.y].isCloaked){document.getElementById("EntityCore "+(Atk.x+1)+"X"+(Atk.y+1)).style.filter=Factions[Atk.faction].ChromaCode;};
		for(let c=0;c<AdjacentCloakers.length;c++){
		if(AdjacentCloakers[c]==1){document.getElementById("EntityCore "+(Atk.x)+"X"+(Atk.y+1)).style.filter=Factions[rostermap[Atk.x-1][Atk.y].faction].ChromaCode};
		if(AdjacentCloakers[c]==2){document.getElementById("EntityCore "+(Atk.x+1)+"X"+(Atk.y+2)).style.filter=Factions[rostermap[Atk.x][Atk.y+1].faction].ChromaCode};		
		if(AdjacentCloakers[c]==3){document.getElementById("EntityCore "+(Atk.x+2)+"X"+(Atk.y+1)).style.filter=Factions[rostermap[Atk.x+1][Atk.y].faction].ChromaCode};
		if(AdjacentCloakers[c]==4){document.getElementById("EntityCore "+(Atk.x+1)+"X"+(Atk.y)).style.filter=Factions[rostermap[Atk.x][Atk.y-1].faction].ChromaCode};
			};

	//alert(Damage);

	if(hasCertainTrait(Atk.unitType,"Absorber")){let HealIndex=Math.min(Damage,Math.abs(Def.life),Units[Atk.unitType].HP-Atk.life); Atk.life+=HealIndex};
	if(Def.life>Units[Def.unitType].HP){Def.life=Units[Def.unitType].HP};
	};

	if(hasCertainTrait(Atk.unitType,"Self-Destruct")){Atk.life=0;canCounterattack=false};
	if(Atk.life<=0){setTimeout(UnitLost,700,Attacker);};
	
	if(Def.life<=0){
		KillingUnit=true;
		let canEncore=false;
		setTimeout(UnitLost,700,Defender);
		if(hasCertainTrait(Atk.unitType,"Bewegungskrieg")&&Atk.canEncore){canEncore=true;Atk.canEncore=false};
		//alert(Atk.x+" "+Atk.y);
		if(canEncore){MarkerMap[Atk.x][Atk.y]=true;
		document.getElementById("Marker "+(Atk.x+1-StandardX)+"X"+(Atk.y+1-StandardY)).style.visibility="visible";}
	}else{
		//Counterattack(Defender,Attacker)
		if(distance<Def.minR*Def.minR){canCounterattack=false};
		if(distance>Def.maxR*Def.maxR){canCounterattack=false};
		//alert(Atk.MaxRange);
		if(hasCertainTrait(Atk.unitType,"Mobile Battery") && Units[Atk.unitType].MaxRange>1 && !hasCertainTrait(Def.unitType,"Mobile Battery")){canCounterattack=false};
		if(hasCertainTrait(Def.unitType,"Self-Destruct")){canCounterattack=false};
		if(hasCertainTrait(Def.unitType,"Dispersion")){canCounterattack=false};
		if(hasCertainTrait(Def.unitType,"JUDGEMENT")){canCounterattack=false};
		if(Def.damageType=="None"){canCounterattack=false};
		if(isIntercepted){canCounterattack=false};
		//if(false){canCounterattack=false};
		if(canCounterattack){
		setTimeout(Counterattack, 800, Defender, Attacker);};

	};

	EvaluateDynamicEvent('Action','null');
	
	if(Atk.isVized) {
		let ShouldProbablyCheck=false;

		for(let l=0; l<Constants.Defeat.length; l++){
			if(Constants.Defeat[l]==Defender && Def.life<=0){ShouldProbablyCheck=true}
		}

		for(let l=0; l<Constants.Protect.length; l++){
			if(Constants.Protect[l]==Attacker && Atk.life<=0){ShouldProbablyCheck=true}
		}

		if(Map.length*Map[0].length<=1000){ShouldProbablyCheck=true}

		if(ShouldProbablyCheck){Inspection(Turn,Constants,Roster);Atk.isVized=false}
	}
}