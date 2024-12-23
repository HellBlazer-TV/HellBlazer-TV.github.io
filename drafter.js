$(document).ready(function() {

	//var America = {Enabled:false};
	var allCivs = {};
	allCivs["Akkad"] = true;
	allCivs["Aksum"] = true;
	allCivs["America"] = true;
	allCivs["Arabia"] = true;
	allCivs["Argentina"] = true;
	allCivs["Armenia"] = true;
	allCivs["Assyria"] = true;
	allCivs["Australia"] = true;
	allCivs["Austria"] = true;
	allCivs["Ayyubids"] = true;
	allCivs["Aztec"] = true;
	allCivs["Babylon"] = true;
	allCivs["Belgium"] = true;
	allCivs["Boers"] = true;
	allCivs["Bolivia"] = true;
	allCivs["Brazil"] = true;
	allCivs["Brunei"] = true;
	allCivs["Bulgaria"] = true;
	allCivs["Burma"] = true;
	allCivs["Byzantium"] = true;
	allCivs["Canada"] = true;
	allCivs["Carthage"] = true;
	allCivs["Celts"] = true;
	allCivs["Chile"] = true;
	allCivs["China"] = true;
	allCivs["Colombia"] = true;
	allCivs["Cuba"] = true;
	allCivs["Denmark"] = true;
	allCivs["Egypt"] = true;
	allCivs["England"] = true;
	allCivs["Ethiopia"] = true;
	allCivs["Finland"] = true;
	allCivs["France"] = true;
	allCivs["Franks"] = true;
	allCivs["Gaul"] = true;
	allCivs["Georgia"] = true;
	allCivs["Germany"] = true;
	allCivs["Golden"] = true;
	allCivs["Goths"] = true;
	allCivs["Greece"] = true;
	allCivs["Hittites"] = true;
	allCivs["Hungary"] = true;
	allCivs["Huns"] = true;
	allCivs["Inca"] = true;
	allCivs["India"] = true;
	allCivs["Indonesia"] = true;
	allCivs["Ireland"] = true;
	allCivs["Iroquois"] = true;
	allCivs["Israel"] = true;
	allCivs["Italy"] = true;
	allCivs["Japan"] = true;
	allCivs["Jerusalem"] = true;
	allCivs["Khmer"] = true;
	allCivs["Kilwa"] = true;
	allCivs["Kongo"] = true;
	allCivs["Korea"] = true;
	allCivs["Lithuania"] = true;
	allCivs["Macedonian"] = true
	allCivs["Madagascar"] = true
	allCivs["Manchuria"] = true;
	allCivs["Maori"] = true;
	allCivs["Maurya"] = true;
	allCivs["Maya"] = true;
	allCivs["Mexican"] = true;
	allCivs["Mongolia"] = true;
	allCivs["Moors"] = true;
	allCivs["Morocco"] = true;
	allCivs["Mysore"] = true;
	allCivs["Netherlands"] = true;
	allCivs["NewZealand"] = true;
	allCivs["Nabatea"] = true;
	allCivs["Normandy"] = true;
	allCivs["Norway"] = true;
	allCivs["Nubia"] = true;
	allCivs["Oman"] = true;
	allCivs["Ottomans"] = true;
	allCivs["Palmyra"] = true;
	allCivs["Persia"] = true;
	allCivs["Philippines"] = true;
	allCivs["Phoenician"] = true;
	allCivs["Poland"] = true;
	allCivs["Polynesia"] = true;
	allCivs["Portugal"] = true;
	allCivs["Prussian"] = true;
	allCivs["Romania"] = true;
	allCivs["Rome"] = true;
	allCivs["Russia"] = true;
	allCivs["Scotland"] = true;
	allCivs["Shoshone"] = true;
	allCivs["Siam"] = true;
	allCivs["Sioux"] = true;
	allCivs["Songhai"] = true;
	allCivs["Spain"] = true;
	allCivs["Sumeria"] = true;
	allCivs["Sweden"] = true;
	allCivs["Switzerland"] = true;
	allCivs["Tibet"] = true;
	allCivs["Timurids"] = true;
	allCivs["Tonga"] = true;
	allCivs["Turkey"] = true;
	allCivs["Ukraine"] = true;
	allCivs["UAE"] = true;
	allCivs["Vatican"] = true;
	allCivs["Venetian"] = true;
	allCivs["Vietnam"] = true;
	allCivs["Wales"] = true;
	allCivs["Yugoslavia"] = true;
	allCivs["Zimbabwe"] = true;
	allCivs["Zulu"] = true;
	
	var bannedCivs = 0;
	var totalCivs = 109;
	var titleHTML = "";
	var allclicked = false;
	
	// toggle disable or enabled civ
	$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .Chile, .China, .Colombia, .Cuba, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Georgia, .Germany, .Golden, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .India, .Ireland, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Madagascar, .Manchuria, .Maori, .Maurya, .Maya, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Ottomans, .Palmyra, .Persia, .Philippines, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe, .Zulu").bind('click', toggleState)
	
	function toggleState(e) {        // function_tr
		if ( !$(this).is(':animated') ) {
			if ($(this).css('opacity') < 1) {
				$(this).css("text-decoration", "none");
				$(this).css("background-color", "#8d6309");
				$(this).fadeTo( "slow" , 1, function() {});
				allCivs[this.className] = true;
				bannedCivs--;
			} else {
				$(this).css("background-color", "#5f4309");
				$(this).fadeTo( "slow" , 0.25, function() {$(this).css("text-decoration", "line-through");});
				allCivs[this.className] = false;
				bannedCivs++;
			}
		}
		
		updateBanned(totalCivs, bannedCivs);
	};
	
	//reset all to enabled
	$('#reset').click(function() {
	
		if($('#slideThree').is(':checked')) {
			$(".America, .Arabia, .Assyria, .Austria, .Aztec, .Babylon, .Brazil, .Byzantium, .Carthage, .Celts, .China, .Denmark, .Egypt, .England, .Ethiopia, .France, .Germany, .Greece, .Huns, .Inca, .India, .Indonesia, .Iroquois, .Japan, .Korea, .Maya, .Mongolia, .Morocco, .Netherlands, .Ottomans, .Persia, .Poland, .Polynesia, .Portugal, .Rome, .Russia, .Shoshone, .Siam, .Songhai, .Spain, .Sweden, .Zulu").css(
			{"text-decoration": "none",
			"background-color": "#8d6309"
			});
			
			$(".America, .Arabia, .Assyria, .Austria, .Aztec, .Babylon, .Brazil, .Byzantium, .Carthage, .Celts, .China, .Denmark, .Egypt, .England, .Ethiopia, .France, .Germany, .Greece, .Huns, .Inca, .India, .Indonesia, .Iroquois, .Japan, .Korea, .Maya, .Mongolia, .Morocco, .Netherlands, .Ottomans, .Persia, .Poland, .Polynesia, .Portugal, .Rome, .Russia, .Shoshone, .Siam, .Songhai, .Spain, .Sweden, .Zulu").fadeTo( "slow" , 1, function() {});
			
			$.each(allCivs, function (index, value) {
				if ((index == "Akkad") || (index == "Aksum") || (index == "Argentina") || (index == "Armenia") || (index == "Australia") || (index == "Ayyubids") || (index == "Belgium") || (index == "Boers")  || (index == "Bolivia") || (index == "Brunei") || (index == "Bulgaria") || (index == "Burma") || (index == "Canada") ||  (index == "Chile") ||  (index == "Colombia") ||  (index == "Cuba") ||(index == "Finland") || (index == "Franks") || (index == "Gaul") || (index == "Georgia") || (index == "Golden") || (index == "Goths") ||
					(index == "Hittites") || (index == "Hungary") || (index == "Ireland") || (index == "Israel") || (index == "Italy") || (index == "Jerusalem") || (index == "Khmer") || (index == "Kilwa") || (index == "Kongo") || (index == "Lithuania") || (index == "Macedonian") || (index == "Manchuria") || (index == "Maori") || (index == "Madagascar") || (index == "Maurya") || (index == "Mexican") || (index == "Moors") || (index == "Mysore") || (index == "NewZealand") || (index == "Nabatea") ||
					(index == "Normandy") || (index == "Norway") || (index == "Nubia") || (index == "Oman") || (index == "Palmyra") || (index == "Philippines") || (index == "Phoenician") || (index == "Prussian") || (index == "Romania") || (index == "Scotland") || (index == "Sioux") || (index == "Sumeria") || (index == "Switzerland") || (index == "Tibet") || (index == "Timurids") || (index == "Tonga") || (index == "Turkey") || (index == "Ukraine") || (index == "UAE") || (index == "Vietnam") || (index == "Vatican")|| (index == "Wales")|| (index == "Yugoslavia")|| (index == "Zimbabwe")) {
					
					if (allCivs[index] == true) {
						allCivs[index] = false;
						bannedCivs++;
					}
				} else {
					if (allCivs[index] == false) {
						allCivs[index] = true;
						bannedCivs--;
					}
				}
	  		});
					
	  		//update the title
			updateBanned(totalCivs, bannedCivs);

		} else {
			$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .Chile, .China, .Colombia, .Cuba, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Gaul, .Georgia, .Golden, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .India, .Ireland, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Madagascar, .Manchuria, .Maori, .Maurya, .Maya, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Ottomans, .Palmyra, .Persia, .Philippines, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe, .Zulu").css(
			{"text-decoration": "none",
			"background-color": "#8d6309"
			});
			
			$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .Chile, .China, .Colombia, .Cuba, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Gaul, .Georgia, .Golden, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .India, .Ireland, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Madagascar, .Manchuria, .Maori, .Maurya, .Maya, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Ottomans, .Palmyra, .Persia, .Philippines, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe, .Zulu").fadeTo( "slow" , 1, function() {});
			
			$.each(allCivs, function (index, value) {
				allCivs[index] = true;
	  		});
					
	  		//update the title
	  		bannedCivs = 0;
			updateBanned(totalCivs, bannedCivs);
		}
		
		allclicked = false;
		$('#create').attr("disabled", false);
	});
	
	//set all to disabled
	$('#all').click(function() {
		$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .Chile, .China, .Colombia, .Cuba, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Golden, .Gaul, .Georgia, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .Ireland, .India, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Madagascar, .Manchuria, .Maori, .Maurya, .Maya, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Ottomans, .Palmyra, .Persia, .Philippines, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe, .Zulu").fadeTo( "slow" , 0.25, function() {$(this).css({"text-decoration": "line-through", "background-color": "#8d6309"});});;
		
		$.each(allCivs, function (index, value) {
			allCivs[index] = false;
  		});
  		
  		//update the title
  		totalCivs = totalAllowed - totalBanned;
  		bannedCivs = totalCivs;
		updateBanned(totalCivs, bannedCivs);
		
		allclicked = true;

	});

	//disable lek mod civs
	$('#slideThree').change(function() {
        if(this.checked) {
        	if (allclicked == false) {
	        	$(".Akkad, .Aksum, .Argentina, .Armenia, .Australia, .Ayyubids, .Belgium, .Boers, .Bolivia, .Brunei, .Bulgaria, .Burma, .Canada, .Chile, .Colombia, .Cuba, .Finland, .Franks, .Golden, .Goths, .Gaul, .Georgia, .Hittites, .Hungary, .Ireland, .Israel, .Italy, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Lithuania, .Macedonian, .Manchuria, .Maori, .Madagascar, .Maurya, .Mexican, .Moors, .Mysore, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Palmyra, .Philippines, .Phoenician, .Prussian, .Romania, .Scotland, .Sioux, .Sumeria, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe").fadeTo( "slow" , 0.25, function() {$(this).css({"text-decoration": "line-through", "background-color": "#8d6309"});});;
	        	
	        	$.each(allCivs, function (index, value) {
					if ((index == "Akkad") || (index == "Aksum") || (index == "Argentina") || (index == "Armenia") || (index == "Australia") || (index == "Ayyubids") || (index == "Belgium") || (index == "Boers") || (index == "Bolivia")  || (index == "Brunei") || (index == "Bulgaria") || (index == "Burma") || (index == "Canada") || (index == "Chile") || (index == "Colombia") || (index == "Cuba") || (index == "Finland") || (index == "Franks") || (index == "Golden") || (index == "Goths") ||
					(index == "Gaul") || (index == "Georgia") || (index == "Hittites") || (index == "Hungary") || (index == "Ireland") || (index == "Israel") || (index == "Italy") || (index == "Jerusalem") || (index == "Khmer") || (index == "Kilwa") || (index == "Kongo") || (index == "Lithuania") || (index == "Macedonian") || (index == "Maori") || (index == "Manchuria") || (index == "Madagascar") || (index == "Maurya") || (index == "Mexican") || (index == "Moors") || (index == "Mysore") || (index == "NewZealand") || (index == "Nabatea") ||
					(index == "Normandy") || (index == "Norway") || (index == "Nubia") || (index == "Oman") || (index == "Palmyra") || (index == "Philippines") ||  (index == "Phoenician") || (index == "Prussian") || (index == "Romania") || (index == "Scotland") || (index == "Sioux") || (index == "Sumeria") || (index == "Switzerland") || (index == "Tibet") || (index == "Timurids") || (index == "Tonga") || (index == "Turkey") || (index == "Ukraine") || (index == "UAE") || (index == "Vietnam") || (index == "Vatican")|| (index == "Wales")|| (index == "Yugoslavia")|| (index == "Zimbabwe")) {
						
						if (allCivs[index] == true) {
							allCivs[index] = false;
							// increase the number of banned civs
							bannedCivs++;
						}
					}
		  		});
	
	        	//update the title to include the number of banned civs and now available civs
				updateBanned(totalCivs, bannedCivs);
			}
			
			$(".slideThree label").css({"left": "43px"});
            $(this).prop("checked");
        } else {
        	if (allclicked == false) {
	        	$(".Akkad, .Aksum, .Argentina, .Armenia, .Australia, .Ayyubids, .Belgium, .Boers, .Bolivia, .Brunei, .Bulgaria, .Burma, .Canada, .Chile, .Colombia, .Cuba, .Finland, .Franks, .Golden, .Gaul, .Georgia, .Goths, .Hittites, .Hungary, .Ireland, .Israel, .Italy, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Lithuania, .Macedonian, .Manchuria, .Maori, .Madagascar, .Maurya, .Mexican, .Moors, .Mysore, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Palmyra, .Philippines, .Phoenician, .Prussian, .Romania, .Scotland, .Sioux, .Sumeria, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe").css({"text-decoration": "none", "background-color": "#8d6309"});
	
	        	
	        	$(".Akkad, .Aksum, .Argentina, .Armenia, .Australia, .Ayyubids, .Belgium, .Boers, .Bolivia, .Brunei, .Bulgaria, .Burma, .Canada, .Chile, .Colombia, .Cuba, .Finland, .Franks, .Golden, .Gaul, .Georgia, .Goths, .Hittites, .Hungary, .Ireland, .Israel, .Italy, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Lithuania, .Macedonian, .Manchuria, .Maori, .Madagascar, .Maurya, .Mexican, .Moors, .Mysore, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Palmyra, .Philippines, .Phoenician, .Prussian, .Romania, .Scotland, .Sioux, .Sumeria, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe").fadeTo( "slow" , 1, function() {});
	        	
	        	$.each(allCivs, function (index, value) {
					if ((index == "Akkad") || (index == "Aksum") || (index == "Argentina") || (index == "Armenia") || (index == "Australia") || (index == "Ayyubids") || (index == "Belgium") || (index == "Boers") || (index == "Bolivia") || (index == "Brunei") || (index == "Bulgaria") || (index == "Burma") || (index == "Canada") ||  (index == "Chile") || (index == "Colombia") ||  (index == "Cuba") || (index == "Finland") || (index == "Franks") || (index == "Golden") || (index == "Goths") ||
					(index == "Gaul") || (index == "Georgia") || (index == "Hittites") || (index == "Hungary") || (index == "Ireland") || (index == "Israel") || (index == "Italy") || (index == "Jerusalem") || (index == "Khmer") || (index == "Kilwa") || (index == "Kongo") || (index == "Lithuania") || (index == "Macedonian") || (index == "Manchuria") || (index == "Maori") || (index == "Madagascar") || (index == "Maurya") || (index == "Mexican") || (index == "Moors") || (index == "Mysore") || (index == "NewZealand") || (index == "Nabatea") ||
					(index == "Normandy") || (index == "Norway") || (index == "Nubia") || (index == "Oman") || (index == "Palmyra") || (index == "Philippines") || (index == "Phoenician") || (index == "Prussian") || (index == "Romania") || (index == "Scotland") || (index == "Sioux") || (index == "Sumeria") || (index == "Switzerland") || (index == "Tibet") || (index == "Timurids") || (index == "Tonga") || (index == "Turkey") || (index == "Ukraine") || (index == "UAE") || (index == "Vietnam") || (index == "Vatican")|| (index == "Wales")|| (index == "Yugoslavia")|| (index == "Zimbabwe")) {
						
						if (allCivs[index] == false) {
							allCivs[index] = true;
							// decrease the number of banned civs
							bannedCivs--;
						}
					}
		  		});
	
				updateBanned(totalCivs, bannedCivs);
			}
			
        	$(".slideThree label").css({"left": "3px"});
            $(this).prop("unchecked");
        }      
    });

	//lekmod seasonal bans
	$('#slideFour').change(function() {
		if(this.checked) {
			if (allclicked == false) {
					
					$(".America, .Argentina, .Australia, .Austria, .Ayyubids, .Aztec, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Canada, .Chile, .Colombia, .Cuba, .England, .Ethiopia, .Finland, .France, .Franks, .Georgia, .Germany, .Golden, .Hungary, .Inca, .India, .Indonesia, .Ireland, .Iroquois, .Italy, .Japan, .Jerusalem, .Kilwa, .Korea, .Lithuania, .Manchuria, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Normandy, .Norway, .Oman, .Ottomans, .Philippines, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Russia, .Scotland, .Shoshone, .Siam, .Songhai, .Spain, .Sweden, .Switzerland, .Timurids, .Tonga, .Turkey, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zulu").fadeTo( "slow" , 0.25, function() {$(this).css({"text-decoration": "line-through", "background-color": "#8d6309"});});
					$.each(allCivs, function (index, value) {
						if ((index == "America") || (index == "Argentina") || (index == "Australia") || (index == "Austria") || (index == "Ayyubids") || (index == "Aztec") || (index == "Belgium") || (index == "Boers") || (index == "Bolivia") || (index == "Brazil") || (index == "Brunei") || (index == "Bulgaria") || (index == "Canada") || (index == "Chile") || (index == "Colombia") || (index == "Cuba") || (index == "England") || (index == "Ethiopia") || (index == "Finland") || (index == "France") || (index == "Franks") || (index == "Georgia") || (index == "Germany") || (index == "Golden") || (index == "Hungary") || (index == "Inca") || (index == "India") || (index == "Indonesia") || (index == "Ireland") || (index == "Iroquois") || (index == "Italy") || (index == "Japan") || (index == "Jerusalem") || (index == "Kilwa") || (index == "Korea") || (index == "Lithuania") || (index == "Manchuria") || (index == "Mexican") || (index == "Mongolia") || (index == "Moors") || (index == "Morocco") || (index == "Mysore") || (index == "Netherlands") || (index == "NewZealand") || (index == "Normandy") || (index == "Norway") || (index == "Oman") || (index == "Ottomans") || (index == "Philippines") || (index == "Poland") || (index == "Polynesia") || (index == "Portugal") || (index == "Prussian") || (index == "Romania") || (index == "Russia") || (index == "Scotland") || (index == "Shoshone") || (index == "Siam") || (index == "Songhai") || (index == "Spain") || (index == "Sweden") || (index == "Switzerland") || (index == "Timurids") || (index == "Tonga") || (index == "Turkey") || (index == "UAE") || (index == "Ukraine") || (index == "Vatican") || (index == "Venetian") || (index == "Vietnam") || (index == "Wales") || (index == "Yugoslavia") || (index == "Zulu")) {
							if (allCivs[index] == true) {
								allCivs[index] = false;
								bannedCivs++;
							}
						}
					});
		
					//update the title
					updateBanned(totalCivs, bannedCivs);
				}
				
				$(".slideFour label").css({"left": "43px"});
			$(this).prop("checked");
		} else {
			if (allclicked == false) {
				$(".America, .Argentina, .Australia, .Austria, .Ayyubids, .Aztec, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Canada, .Chile, .Colombia, .Cuba, .England, .Ethiopia, .Finland, .France, .Franks, .Georgia, .Germany, .Golden, .Hungary, .Inca, .India, .Indonesia, .Ireland, .Iroquois, .Italy, .Japan, .Jerusalem, .Kilwa, .Korea, .Lithuania, .Manchuria, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Normandy, .Norway, .Oman, .Ottomans, .Philippines, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Russia, .Scotland, .Shoshone, .Siam, .Songhai, .Spain, .Sweden, .Switzerland, .Timurids, .Tonga, .Turkey, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zulu").css({"text-decoration": "none", "background-color": "#8d6309"});
				
				$(".America, .Argentina, .Australia, .Austria, .Ayyubids, .Aztec, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Canada, .Chile, .Colombia, .Cuba, .England, .Ethiopia, .Finland, .France, .Franks, .Georgia, .Germany, .Golden, .Hungary, .Inca, .India, .Indonesia, .Ireland, .Iroquois, .Italy, .Japan, .Jerusalem, .Kilwa, .Korea, .Lithuania, .Manchuria, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Normandy, .Norway, .Oman, .Ottomans, .Philippines, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Russia, .Scotland, .Shoshone, .Siam, .Songhai, .Spain, .Sweden, .Switzerland, .Timurids, .Tonga, .Turkey, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zulu").fadeTo( "slow" , 1, function() {});
				
	        	$.each(allCivs, function (index, value) {
					if ((index == "America") || (index == "Argentina") || (index == "Australia") || (index == "Austria") || (index == "Ayyubids") || (index == "Aztec") || (index == "Belgium") || (index == "Boers") || (index == "Bolivia") || (index == "Brazil") || (index == "Brunei") || (index == "Bulgaria") || (index == "Canada") || (index == "Chile") || (index == "Colombia") || (index == "Cuba") || (index == "England") || (index == "Ethiopia") || (index == "Finland") || (index == "France") || (index == "Franks") || (index == "Georgia") || (index == "Germany") || (index == "Golden") || (index == "Hungary") || (index == "Inca") || (index == "India") || (index == "Indonesia") || (index == "Ireland") || (index == "Iroquois") || (index == "Italy") || (index == "Japan") || (index == "Jerusalem") || (index == "Kilwa") || (index == "Korea") || (index == "Lithuania") || (index == "Manchuria") || (index == "Mexican") || (index == "Mongolia") || (index == "Moors") || (index == "Morocco") || (index == "Mysore") || (index == "Netherlands") || (index == "NewZealand") || (index == "Normandy") || (index == "Norway") || (index == "Oman") || (index == "Ottomans") || (index == "Philippines") || (index == "Poland") || (index == "Polynesia") || (index == "Portugal") || (index == "Prussian") || (index == "Romania") || (index == "Russia") || (index == "Scotland") || (index == "Shoshone") || (index == "Siam") || (index == "Songhai") || (index == "Spain") || (index == "Sweden") || (index == "Switzerland") || (index == "Timurids") || (index == "Tonga") || (index == "Turkey") || (index == "UAE") || (index == "Ukraine") || (index == "Vatican") || (index == "Venetian") || (index == "Vietnam") || (index == "Wales") || (index == "Yugoslavia") || (index == "Zulu")) {
						if (allCivs[index] == false) {
							allCivs[index] = true;
							bannedCivs--;
						}
					}
				});
	
				updateBanned(totalCivs, bannedCivs);
			}
			
        	$(".slideFour label").css({"left": "3px"});
            $(this).prop("unchecked");
        }      
    });

	// Export settings functionality
	$('#export').click(function() {
		// Gather current settings
		var settings = {
			players: $("#gameplayers option:selected").index() + 1,
			picks: $("#picks option:selected").index() + 1,
			vanillaCivsOnly: $('#slideThree').is(':checked'),
			lekmodBans: $('#slideFour').is(':checked'),
			bannedCivs: {}
		};

		// Save banned/allowed status for each civ
		$.each(allCivs, function(index, value) {
			settings.bannedCivs[index] = allCivs[index];
		});

		// Create and download the JSON file
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings));
		var downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute("href", dataStr);
		downloadAnchorNode.setAttribute("download", "civ5_drafter_settings.json");
		document.body.appendChild(downloadAnchorNode);
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	});

	// Import settings functionality
	$('#import').click(function() {
		$('#importFile').click();
	});

	$('#importFile').change(function(e) {
		var file = e.target.files[0];
		if (!file) return;

		var reader = new FileReader();
		reader.onload = function(e) {
			try {
				var settings = JSON.parse(e.target.result);
				
				// Apply number of players
				$("#gameplayers").prop('selectedIndex', settings.players - 1);
				
				// Apply number of picks
				$("#picks").prop('selectedIndex', settings.picks - 1);
				
				// Apply vanilla civs toggle
				if (settings.vanillaCivsOnly) {
					$('#slideThree').prop('checked', true);
					$(".slideThree label").css({"left": "43px"});
				} else {
					$('#slideThree').prop('checked', false);
					$(".slideThree label").css({"left": "3px"});
				}
				
				// Apply lekmod bans toggle
				if (settings.lekmodBans) {
					$('#slideFour').prop('checked', true);
					$(".slideFour label").css({"left": "43px"});
				} else {
					$('#slideFour').prop('checked', false);
					$(".slideFour label").css({"left": "3px"});
				}
				
				// Reset all civs first
				$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .Chile, .China, .Colombia, .Cuba, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Gaul, .Georgia, .Golden, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .India, .Ireland, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Madagascar, .Manchuria, .Maori, .Maurya, .Maya, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Ottomans, .Palmyra, .Persia, .Philippines, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe, .Zulu")
					.css({"text-decoration": "none", "background-color": "#8d6309"})
					.fadeTo("fast", 1);

				// Apply banned civs
				bannedCivs = 0;
				$.each(settings.bannedCivs, function(civ, enabled) {
					allCivs[civ] = enabled;
					if (!enabled) {
						bannedCivs++;
						$('.' + civ)
							.css({"text-decoration": "line-through", "background-color": "#5f4309"})
							.fadeTo("fast", 0.25);
					}
				});

				// Update the header count
				updateBanned(totalCivs, bannedCivs);

			} catch (error) {
				console.error('Error importing settings:', error);
				alert('Error importing settings. Please check if the file is valid.');
			}
		};
		reader.readAsText(file);
		
		// Reset the input so the same file can be selected again
		$(this).val('');
	});  

	function updateBanned(totalAllowed, totalBanned) {
		var titleHTML  = (totalAllowed - totalBanned) + " Allowed - " + totalBanned + " Banned";
		
		$(".selectorheadline").html(titleHTML );
	}
	
	// make the draft
	$('#create').click(function() {	
		$('#create').attr("disabled", false);
  		var players = $("#gameplayers option:selected").index() + 1;
  		var rndpicks = $("#picks option:selected").index() + 1;
  		var neededCivs = players * rndpicks;
  		var enabledCivs = 0;
  		var missingCivs = 0;
  		var allowedCivs = [];
  		var playerPicks = {};
  		
  		//clear any previous results
  		$("#results").empty();
  		
  		//check how many civs are enabled
  		$.each(allCivs, function (index, value) {
			if (allCivs[index] == true) {
				allowedCivs[enabledCivs] = index;
				enabledCivs++;
			};
  		});
		
		//check if the user is trying to pick more civs than avaliable
		if (neededCivs > 109) {
			$("#results").html("<p class='drawerror'>There are not enough civilizations for " + players + " players to have " + rndpicks + " picks each!</br>Select a different number of players or lower the number of random picks and try again!</p>");

		// check if we have enough enabled civs process the draft
		} else if (enabledCivs < neededCivs) { 
			missingCivs = neededCivs - enabledCivs;
			$("#results").html("<p class='drawerror'>There are not enough available civilizations to make the draw!</br>Please unban at least another " + missingCivs +" civilizations and try again!</p>");

		// errors handled we can now make the draw
		} else {
		
			// pick 3 rand civs for each player
			var i;
			var k;
			var picksHTML = "<p class='rescopied'>Draft results have been copied to clipboard</p>";
			var resCopy = ""
			
			picksHTML = picksHTML + "<table class='drawresults'>";

			$("#results").css("text-align", "left");
			//loop thru each player
			for (i = 1; i <= players; i++) { 
				
				//add this player to the results HTML
				picksHTML = picksHTML + "<tr><td>Player " + i + " choose from:</td>";
				resCopy = resCopy  + "Player " + i + " choose from: - ";
				
				//loop however many picks are needed
				for (k = 1; k <= rndpicks; k++) {
					
					//loop thru the avlaiable civs and pick 3 at random
					var thisciv = Math.floor(Math.random() * allowedCivs.length);
					picksHTML = picksHTML + "<td><img src='img/" + allowedCivs[thisciv].toLowerCase() + ".png'></img>" + allowedCivs[thisciv];
					
					if (k < rndpicks) {
						picksHTML = picksHTML + "<td>";
						resCopy = resCopy  + allowedCivs[thisciv] + " or ";
					} else {
						picksHTML = picksHTML + "<td>";
						resCopy = resCopy  + allowedCivs[thisciv] + "\r\n";
					}
					
					// remove this item from the array, create new temp array and then assign it to allowed civs						
					enabledCivs = 0;
					var tmpCivs = [];
					
					$.each(allowedCivs, function (index, value) {
						if (index != thisciv) {
							tmpCivs[enabledCivs] = value;
							enabledCivs++;
						};
					});
					
					allowedCivs = tmpCivs.slice();
				}
				
				picksHTML = picksHTML + "</br>"
			}
			
			picksHTML = picksHTML + "</table>"
			picksHTML = picksHTML + "<div id='copyresults'><input class='submitbutton' name='copyres' id='copyres' type='button' value='Copy Results' /></div>"
			$("#results").html(picksHTML);
			
			$("#copyTarget").val(resCopy);
			
			document.getElementById("copyres").addEventListener("click", function() {
			    copyToClipboard(document.getElementById("copyTarget"));
			});
			
			$("#copyres").click();
			
			function copyToClipboard(elem) {
				  // create hidden text element, if it doesn't already exist
			    var targetId = "_hiddenCopyText_";
			    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
			    var origSelectionStart, origSelectionEnd;
			    if (isInput) {
			        // can just use the original source element for the selection and copy
			        target = elem;
			        origSelectionStart = elem.selectionStart;
			        origSelectionEnd = elem.selectionEnd;
			    } else {
			        // must use a temporary form element for the selection and copy
			        target = document.getElementById(targetId);
			        if (!target) {
			            var target = document.createElement("textarea");
			            target.style.position = "absolute";
			            target.style.left = "-9999px";
			            target.style.top = "0";
			            target.id = targetId;
			            document.body.appendChild(target);
			        }
			        target.textContent = elem.textContent;
			    }
			    // select the content
			    var currentFocus = document.activeElement;
			    target.focus();
			    target.setSelectionRange(0, target.value.length);
			    
			    // copy the selection
			    var succeed;
			    try {
			    	  succeed = document.execCommand("copy");
			    } catch(e) {
			        succeed = false;
			    }
			    // restore original focus
			    if (currentFocus && typeof currentFocus.focus === "function") {
			        currentFocus.focus();
			    }
			    
			    if (isInput) {
			        // restore prior selection
			        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
			    } else {
			        // clear temporary content
			        target.textContent = "";
			    }
			    return succeed;
			}
		}
	});
});				

