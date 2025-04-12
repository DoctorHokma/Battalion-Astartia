const orderedExport = function(fName, schema, toExport) {
    const file = new InefficientJSONExporter(4);
    file.open();

    for(let i = 0; i < schema.length; i++) {
        if(i >= toExport.length) {
            file.writeLine(schema[i], 1, "");
        } else {
            file.writeLine(schema[i], 1, toExport[i]);
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

/**
 * neyn 12.04.2025
 * 
 * Helper function to re-order traits.
 * 
 * @param {string} fName 
 */
const exportTraits = function(fName){
    const list = Object.keys(TRAITS);
    const file = new InefficientJSONExporter(4);
    file.open();

    for(let i = 0; i < list.length; i++) {
        const traitID = list[i];
        const trait = TRAITS[traitID];
        const line = { "name": trait.name, "desc": trait.desc, "icon": `Assets/Traits/${traitID}.png` };

        file.writeLine(traitID, 1, line);
    }

    file.close();
    file.download(fName);
};

//exportTraits("traits");

/*
orderedExport("esp_t1", T1, [
    "Desigual","Escabroso","Precipitado","Infranqueable","Aguas engañosas",
    "Ocultación","Ocultación naval","Búnker",
    "Poco profundo","Ventaja","Peligroso",
    "Reto logístico","Pesadilla logística",
    "Centro financiero","Centro Fiscal","Centro fiduciario",
    "Conquistador","Destructor del cielo","Golpe profundo","Sonar","Radar",
    "Anti-Infantería","Anti-Tanque","Anti-aéreo","Anti-Barcos","Anti-Estructuras",
    "Sigilo","Sumergido","Comando","Cangrejo","Dirigir o ",
    "Indomable","Punto escencial","Guerra de Movimiento","Batería móvil","Simplificado",
    "Armadura de acero cementado","Explosión de cavitación","Marítimo","Autodestrucción","Dispersión","JUICIO",
    "Distribución de suministros","Inercial","Chorro de agua","Aerotransportado","Heroíco","Cazador de tanques",
    "Transporte Naval","Transporte aéreo","Sin construir",
    "Aguafiestas de tanque","Amortiguador","Terrorífico","Eje","Alentador"
]);

orderedExport("esp_t2", T2, [
    "Los vehículos tendrán una ligera dificultad para cruzarlo","Terreno duro, no es fácil de cruzar.","Desniveles elevados y terreno muy difícil","Ninguna unidad puede pasar",
    "Los barcos tendrán más dificultades para navegar",	"Reduce el daño recibido por 20%","Reduce el daño recibido por 20%","Reduce el daño recibido por 40%",	"Los barcos de timón bajo deben evitar estas fichas o encallarán","Las unidades a distancia aquí disparan más lejos porque tienen un terreno más alto","Quedarse aquí daña a tus unidades 20 HP por turno",
    "Habilidad de lucha obstaculizada en un 20%","Habilidad de lucha obstaculizada en un 40%",
    "Gana 100 créditos por turno","Gana 200 créditos por turno","Gana 300 créditos por turno",
    "Esta unidad puede capturar edificios","Esta unidad puede atacar aviones","Esta unidad puede atacar submarinos","Esta unidad puede interceptar unidades sumergidas","Esta unidad puede detectar unidades sigilosas",
    "Inflige x3 de daño contra infantería","No puede ser contraatacado por tanques","Intercepta aviones cercanos","Inflige 3 veces más daño contra barcos","Inflige más daño a estructuras",
    "Si esta unidad ataca mientras está camuflada, inflige el doble de daño","No puede ser atacada por la mayoría de las unidades","Inflige más daño y recibe menos en terreno accidentado","Puede cruzar ríos y no está indefenso en el proceso. Pero NO es un cangrejo","Recibe menos daño de unidades lentas",
    "¡Sin retirada, sin rendición!", "Inflige +40% de daño a la infantería si ataca primero", "Si destruye una unidad, puede atacar de nuevo (solo una vez por turno)", "No puede ser contraatacada", "Se puede desplegar más lejos de la base",
    "Recibe menos daño de las armas medianas o ligeras","Ignora el rasgo Armadura de acero cementado","Solo puede atacar unidades navales","Después de atacar, esta unidad se autodestruye","Su ataque golpea en un círculo de 3x3","TÚ ESTÁS JODIDOS",
    "Su acción repone la fuerza de las unidades aliadas","La supervivencia de esta unidad no evita la derrota militar","Golpea a todos los enemigos en línea directa","Puede abordar un avión de transporte y saltar detrás de las líneas enemigas","Esta unidad se niega morirá y sobrevivirá con 1HP","Atacará primero si es atacado por un tanque",
    "No es un método muy rápido para transportar unidades, pero puede transportar cualquier cosa","El transporte más rápido, pero se puede derribar fácilmente","Esta unidad aún no se ha construido",

    "¡Hace mierda a los tanques!", "Recupera HP en función del daño infligido", "Sus ataques devastan la moral de una unidad", "El control de esto es esencial", "Aumenta la Moral"
]);

orderedExport("por_t1", T1, [
    "Desigual","Robusto","Precipitado","Intransponível","Águas complicadas",
    "Ocultação","Ocultação Naval","Bunker",
    "Raso","Vantagem","Perigoso",
    "Desafio logístico","Pesadelo Logístico",
    "Centro Financeiro","Centro Fiscal","Centro Fiduciário",
    "Conquistador","M51 Skysweeper","Golpe de Profundidade","Sonar","Radar",
    "Anti-Infantaria","Anti-Tanque","Anti-Aério","Anti-Navio","Anti-Estrutura",
    "Furtivo","Submerso","Comando","Caranguejo","Dirigir",
    "Indomável","Schwerpunkt","Bewegungskrieg","Bateria Móvel","Simplificado",
    "Armadura de aço cimentado","Explosão de cavitação","Marítimo","Autodestruição","Dispersão","JULGAMENTO",
    "Distribuição de suprimentos","Inercial","Explosão de fluxo","Aerotransportado","Heroico","Caça-tanques",
    "Transporte Naval","Transporte Aéreo","Não Construído",
    "Tanque criador de Tanques","Absorvedor","Aterrorizante","Eixo Central","Desafiador"
]);

orderedExport("por_t2", T2, [
    "Veículos terão uma leve dificuldade para atravessar isso","Terreno acidentado, difícil de atravessar","Declives altos e terreno muito difícil","Nenhuma unidade pode passar","Navios terão mais dificuldade em navegar",
    "Reduz o dano recebido em 20%","Reduz o dano recebido em 20%","Reduz o dano recebido em 40%",
    "Navios com leme baixo devem evitar esses ladrilhos ou encalharão","Unidades de longo alcance aqui atiram mais longe porque têm terreno mais alto.","Ficar aqui danifica suas unidades em 20HP por turno",
    "Habilidade de luta prejudicada em 20%","Habilidade de luta prejudicada em 40%",
    "Ganha 100 créditos por turno","Ganha 200 créditos por turno","Ganha 300 créditos por turno",
    "Esta unidade pode capturar edifícios","Esta unidade pode atacar aeronaves","Esta unidade pode atacar submarinos","Esta unidade pode localizar unidades submersas","Esta unidade pode detectar unidades furtivas",
    "Causa x3 de dano contra infantaria","Não pode ser contra-atacado por tanques","Intercepta aeronaves próximas","Causa 3x mais dano contra navios","Causa mais dano a estruturas",
    "Se esta unidade atacar camuflada, causa o dobro de dano","Não pode ser atacada pela maioria das unidades","Causa mais dano e recebe menos em terreno acidentado","Pode cruzar rios e não fica indefesa no processo. Mas NÃO é um caranguejo","Recebe menos dano de submarinos; e sempre os atinge primeiro",
    "Sem retirada; sem rendição!","Causa +40% de dano à infantaria se atacar primeiro","Se destruir uma unidade, ela pode atacar novamente (apenas uma vez por turno)","Não pode ser contra-atacado","Pode ser implantado mais longe da base",
    "Recebe menos dano de armas médias ou leves","Ignora o tipo de armadura de aço cimentado","Só pode atacar unidades marítimas","Depois de atacar, esta unidade autodestrói-se","Seu ataque atinge um círculo de 3x3","VOCÊS ESTÃO FUDIDOS",
    "Sua ação reabastece a força das unidades aliadas","A sobrevivência desta unidade não impede a derrota militar","Atinge todos os inimigos em linha direta","Pode embarcar em um avião de transporte e pular atrás das linhas inimigas","Esta unidade recusa-se a morrer e sobreviverá com 1HP","Atacará primeiro se for atacado por um tanque",
    "Não é um método muito rápido de transportar unidades, mas carrega qualquer coisa","O transporte mais rápido, mas pode ser facilmente abatido","Esta unidade ainda não foi construída",
    "Põe Tanques!","Recupera HP com base no dano causado","Os seus ataques devastam o moral de uma unidade","O controle disto é essencial",
]);

orderedExport("rom_t1", T1, [
    "Inconstant","Teren accidentat","Teren în pantă","Impasabil","Ape dificile",
    "Ascunziș","Acoperire navală","Buncăr",
    "Vad","Punct strategic","Periculos",
    "Provocare Logistică","Coșmar Logistic",
    "Centru Financiar","Centru Fiscal","Centru Fiduciar",
    "Cuceritor","Bofors","Șarje de profunzime","Sonar","Radar",
    "Anti-Infanterie","Anti-Tanc","Anti-Aerian","Anti-Naval","Anti-Fortificație",
    "Stealth","Submorjat","Comando","Crab","Manevrabil",
    "Indomitabil","Schwerpunkt","Bewegungskrieg","Artilerie Mobilă","Standardizat",
    "Blindaj Oțel-Crom","Explozie cu Cavitație","Exclusiv Marin","Autodistrugere","Dispersie","ANIHILARE",
    "Logistic","Inert","Val Neutronic","Aeropurtat","Eroic","Vânător de Tancuri",
    "Transport Naval","Transport Aerian","Incomplet",
    "Căcător de tancuri","Drenaj","Terifiant","Strategic","Vivifiant"
]);

orderedExport("rom_t2", T2, [
    "Vehiculele vor avea o oarecare dificultate la traversare","Dificil de parcurs","Pante abrupte și serpentine","Pe aici nu se trece","Greu de navigat în această zonă",
    "Reduce pagubele primite cu 20%","Reduce pagubele primite cu 20%","Reduce pagubele primite cu 40%",
    "Navele cu pescaj adânc trebuie să evite această zonă","Uniățile de distanță pot trage mai departe fiindcă sunt pe teren înalt","Unitățile staționate aici primesc pagube în fiecare tură",
    "Pagubele provocate de unitatea staționată aici -20%","Pagubele provocate de unitatea staționată aici -40%",
    "În fiecare tură, produce 100 de credite","În fiecare tură, produce 200 de credite","În fiecare tură, produce 300 de credite",
    "Această unitate poate captura proprietăți","Această unitate poate ataca avioane","Această unitate poate ataca submearine","Această unitate poate intercepta submarine","Această unitate poate depista unități stealth",
    "Provoacă pagube triple infanteriei","Nu poate fi contraatacat de blindate","Interceptează unitățile aeriene","Provoacă pagube triple navelor","Provoacă mai multe pagube fortificațiilor",
    "Dacă atacă nedepistat, provoacă pagube duble","Nu poate fi atacat de majoritatea unităților","Provoacă mai multe pagube și primește mai puține","Poate trece rîuri și vaduri dar NU e crab","Primește mai puține pagube de la unități încete",
    "Vom lupta pînă la moarte!","Provoacă 40% mai multe pagube infanteriei","Poate ataca de două ori dacă distruge o unitate","Nu poate fi contraatacat","Poate fi deplasat mai departe de unitatea industrială",
    "Primește cu 25 de pagube mai puțin","Ignora Blindajul Greu","Ataca exclusiv unități navale","Această unitate se auto-distruge după atac","Atacul său lovește o zonă de 3X3 sectoare","AI BELIT PULA",
    "Acțiunea sa realimentează unitățile aliate","Această unitate nu contează la calcularea eșecului militar","Lovește toate țintele în linie dreaptă","Poate fi transportat aerian","Această unitate supraviețuiește cu 1HP","Dacă e atacat de un blindat, atacă primul",
    "Nu e rapid, dar transportă orice unitate","Transport rapid, dar fragil","Această structură nu e terminată",
    "Cacă tancuri!","Recuperează HP când provoacă pagube","Devastează moralul unităților pe care le atacă","Pierderea acestuia este catastrofală","Mărește moralul unui aliat"
]);

orderedExport("tur_t1", T1, [
    "Düz olmayan", "Engebeli", "Dik", "Geçilmez", "Zorlu Sular",
    "Kamuflaj", "Deniz Kamuflajı", "Sığınak",
    "Sığ", "Stratejik nokta", "Tehlikeli",
    "Problemli Lojistik", "Lojistik Cehennemi", 
    "Finans Merkezi", "Mali Merkezi","Güven Merkezi",
    "Fatih", "Gökyüzü Süpürücü", "Derin Darbe", "Sonar", "Radar",
    "Piyadesavar", "TankSavar", "Ucaksavar", "Gemisavar", "Yapı Tahripçisi",
    "Kamufle", "Sualtında ", "Komando", "Yengeç", "Yönlendir",
    "Dirençli", "Schwerpunkt", "Bewegungskrieg", "Mobil Batarya", "Hızlı akışlı ",
    "Cemented Steel Armor", "Kavitasyon Patlaması", "Denize Bağlı", "Kendini İmha Eden", "Dağınık", "YARGIÇ",
    "Tedarik Dağıtımı", "İnertial", "Streamblast", "Havadan indirilen", "Kahraman", "Tank Avcısı",
    "Deniz Taşımacılığı", "Hava Taşımacılığı", "İnşa Edilmemiş",
    "Tank Sıçan","Süngüleyici","Dehşet Verici","Stratejik Nokta","Kararlı"
]);

orderedExport("tur_t2", T2, [
    "Araçlar buradan geçerken biraz zorlanacaklar","Zorlu arazi, kolay geçilemez","Dik yamaçlarla dolu çok zorlu arazi","Hiçbir birim bu bölgeden geçemez","Gemiler bu bölgeden geçerken zorlanacak",
    "Alınan hasarı %20 azaltır","Alınan hasarı %20 azaltır","Alınan hasarı %40 azaltır",
    "Düşük dümenli gemiler bu karelerden kaçınmalıdır, aksi takdirde karaya otururlar.","Bu alanda bulunan menzilli birimler daha uzak mesafeden ateş eder çünkü daha yüksek yerdedirler.","Burada duran birime tur başına 20 can hasarı verir",
    "Bu birim binaları ele geçirebilir","Bu birim uçaklara saldırabilir","Bu birim denizaltılara saldırabilir","Bu birim, dalış yapmış birimleri tespit edebilir","Bu birim, kamufle olan birimleri tespit edebilir.",
    "DPiyade birimlerine karşı x3 hasar verir","Tanklar tarafından karşı saldırıya uğramaz","Yakınındaki uçakları engeller","Gemilere karşı 3 kat daha fazla hasar verir","Yapılara daha fazla hasar verir",
    "Bu birim kamufle iken saldırırsa, hasarı ikiye katlanır.","Coğu birim tarafından saldırılamaz","Engebeli arazide daha fazla hasar verir ve daha az hasar alır.","Nehirleri geçebilir ve bu süreçte savunmasız değildir. Ancak bir yengeç DEĞİLDİR.","Denizaltılardan daha az hasar alır ve her zaman onlara ilk vuran taraf olur.",
    "Geri adım ve teslim olmak yok!","Eğer ilk saldırıyı yaparsa piyade birimlerine +%40 daha fazla hasar verir.","Bir birimi yok ederse, tekrar saldırabilir (sadece bir turda bir kez).","Karşı saldırıya uğramaz.","Üsten daha uzak bir noktaya konuşlandırılabilir.",
    "Orta veya Hafif silahlardan daha az hasar alır","Cemented Steel Armor özelliğini yoksayar","Sadece deniz birimlerine saldırabilir","Saldırdıktan sonra kendini imha eder","Saldırısı 3x3 alanı etkiler. alan piyade dolu ise geçmiş olsun",
    "Eylemi müttefik birimlerin gücünü yeniden doldurur","Bu birimin hayatta kalması, askeri yenilgiyi engellemez.","Düz bir çizgide tüm düşmanlara saldırır","Bir taşıma uçağına binip düşman hatlarının arkasına atlayabilir","Bu birim ölmeyi reddeder ve 1HP ile hayatta kalır","Bir tank tarafından saldırıya uğrarsa ilk saldıran olur",
    "Uniteleri taşımak için çok hızlı bir yöntem değil, ancak her şeyi taşır","En hızlı taşıma aracı, ancak kolaylıkla vurulabilir","Bu birim henüz inşa edilmemiştir",
    "Tank sıçar!","Verdiği hasara bağlı olarak canını yeniler.","Saldırıları bir birimin Moralini altüst eder.","Bunun kontrolü hayati öneme sahiptir.","Bu birimi 1HP dışında ölmeyi reddeder."
]);
*/