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
	allCivs["Brazil"] = true;
	allCivs["Bruneian"] = true;
	allCivs["Bulgaria"] = true;
	allCivs["Burma"] = true;
	allCivs["Byzantium"] = true;
	allCivs["Canada"] = true;
	allCivs["Carthage"] = true;
	allCivs["Celts"] = true;
	allCivs["China"] = true;
	allCivs["Denmark"] = true;
	allCivs["Egypt"] = true;
	allCivs["England"] = true;
	allCivs["Ethiopia"] = true;
	allCivs["Finland"] = true;
	allCivs["France"] = true;
	allCivs["Franks"] = true;
	allCivs["Gaul"] = true;
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
	allCivs["Malagasy"] = true
	allCivs["Manchuria"] = true;
	allCivs["Maya"] = true;
	allCivs["Mexican"] = true;
	allCivs["Mongolia"] = true;
	allCivs["Morocco"] = true;
	allCivs["Netherlands"] = true;
	allCivs["Normandy"] = true;
	allCivs["Norway"] = true;
	allCivs["Nubia"] = true;
	allCivs["Ottomans"] = true;
	allCivs["Persia"] = true;
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
	allCivs["Tibet"] = true;
	allCivs["Timurids"] = true;
	allCivs["Turkey"] = true;
	allCivs["Ukraine"] = true;
	allCivs["Vatican"] = true;
	allCivs["Venetian"] = true;
	allCivs["Vietnam"] = true;
	allCivs["Wales"] = true;
	allCivs["Zimbabwe"] = true;
	allCivs["Zulu"] = true;
	
	var bannedCivs = 0;
	var totalCivs = 91;
	var titleHTML = "";
	var allclicked = false;
	
	// toggle disable or enabled civ
	$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Brazil, .Bruneian, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .China, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Golden, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .India, .Ireland, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Malagasy, .Manchuria, .Maya, .Mexican, .Mongolia, .Morocco, .Netherlands, .Normandy, .Norway, .Nubia, .Ottomans, .Persia, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Tibet, .Timurids, .Turkey, .Ukraine, .Vatican, .Venetian, .Vietnam, .Wales, .Zimbabwe, .Zulu").bind('click', toggleState)
	
	function toggleState(e) {        // function_tr
		if ( !$(this).is(':animated') ) {
			if ($(this).css('opacity') < 1) {
				$(this).css("text-decoration", "none");
				$(this).css("background-color", "#282828");
				$(this).fadeTo( "slow" , 1, function() {});
				allCivs[this.className] = true;
				bannedCivs--;
			} else {
				$(this).css("background-color", "#1a1a1a");
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
			"background-color": "#282828"
			});
			
			$(".America, .Arabia, .Assyria, .Austria, .Aztec, .Babylon, .Brazil, .Byzantium, .Carthage, .Celts, .China, .Denmark, .Egypt, .England, .Ethiopia, .France, .Germany, .Greece, .Huns, .Inca, .India, .Indonesia, .Iroquois, .Japan, .Korea, .Maya, .Mongolia, .Morocco, .Netherlands, .Ottomans, .Persia, .Poland, .Polynesia, .Portugal, .Rome, .Russia, .Shoshone, .Siam, .Songhai, .Spain, .Sweden, .Zulu").fadeTo( "slow" , 1, function() {});
			
			$.each(allCivs, function (index, value) {
				if ((index == "Akkad") || (index == "Aksum") || (index == "Argentina") || (index == "Armenia") || (index == "Australia") || (index == "Ayyubids") || (index == "Belgium") || (index == "Boers")  || (index == "Bruneian") || (index == "Bulgaria") || (index == "Burma") || (index == "Canada") || (index == "Finland") || (index == "Franks") || (index == "Gaul") || (index == "Golden") || (index == "Goths") ||
					(index == "Hittites") || (index == "Hungary") || (index == "Ireland") || (index == "Israel") || (index == "Italy") || (index == "Jerusalem") || (index == "Khmer") || (index == "Kilwa") || (index == "Kongo") || (index == "Lithuania") || (index == "Macedonian") || (index == "Manchuria") || (index == "Malagasy") || (index == "Mexican") ||
					(index == "Normandy") || (index == "Norway") || (index == "Nubia") || (index == "Phoenician") || (index == "Prussian") || (index == "Romania") || (index == "Scotland") || (index == "Sioux") || (index == "Sumeria") || (index == "Tibet") || (index == "Timurids") || (index == "Turkey") || (index == "Ukraine") || (index == "Venetian") || (index == "Vietnam") || (index == "Vatican")|| (index == "Wales")|| (index == "Zimbabwe")) {
					allCivs[index] = false;
				} else {
					allCivs[index] = true;
				}
	  		});
					
	  		//update the title
	  		totalCivs = 42;
	  		bannedCivs = 0;
			updateBanned(totalCivs, bannedCivs);

		} else {
			$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Brazil, .Bruneian, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .China, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Gaul, .Golden, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .India, .Ireland, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Malagasy, .Manchuria, .Maya, .Mexican, .Mongolia, .Morocco, .Netherlands, .Normandy, .Norway, .Nubia, .Ottomans, .Persia, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Tibet, .Timurids, .Turkey, .Ukraine, .Vatican, .Venetian, .Vietnam, .Wales, .Zimbabwe, .Zulu").css(
			{"text-decoration": "none",
			"background-color": "#282828"
			});
			
			$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Brazil, .Bruneian, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .China, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Gaul, .Golden, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .India, .Ireland, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Malagasy, .Manchuria, .Maya, .Mexican, .Mongolia, .Morocco, .Netherlands, .Normandy, .Norway, .Nubia, .Ottomans, .Persia, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Tibet, .Timurids, .Turkey, .Ukraine, .Vatican, .Venetian, .Vietnam, .Wales, .Zimbabwe, .Zulu").fadeTo( "slow" , 1, function() {});
			
			$.each(allCivs, function (index, value) {
				allCivs[index] = true;
	  		});
					
	  		//update the title
	  		bannedCivs = 0;
			updateBanned(totalCivs, bannedCivs);
		}
		
		allclicked = false;
	});
	
	//set all to disabled
	$('#all').click(function() {
		$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Brazil, .Bruneian, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .China, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Golden, .Gaul, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .Ireland, .India, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Malagasy, .Manchuria, .Maya, .Mexican, .Mongolia, .Morocco, .Netherlands, .Normandy, .Norway, .Nubia, .Ottomans, .Persia, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Tibet, .Timurids, .Turkey, .Ukraine, .Vatican, .Venetian, .Vietnam, .Wales, .Zimbabwe, .Zulu").fadeTo( "slow" , 0.25, function() {$(this).css({"text-decoration": "line-through", "background-color": "#1a1a1a"});});;
		
		$.each(allCivs, function (index, value) {
			allCivs[index] = false;
  		});
  		
  		//update the title
  		totalCivs = 91;
  		bannedCivs = totalCivs;
		updateBanned(totalCivs, bannedCivs);
		
		allclicked = true;

	});

	//disable lek mod civs
	$('#slideThree').change(function() {
        if(this.checked) {
        	if (allclicked == false) {
	        	$(".Akkad, .Aksum, .Argentina, .Armenia, .Australia, .Ayyubids, .Belgium, .Boers, .Bruneian, .Bulgaria, .Burma, .Canada, .Finland, .Franks, .Golden, .Goths, .Gaul, .Hittites, .Hungary, .Ireland, .Israel, .Italy, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Lithuania, .Macedonian, .Manchuria, .Malagasy, .Mexican, .Normandy, .Norway, .Nubia, .Phoenician, .Prussian, .Romania, .Scotland, .Sioux, .Sumeria, .Tibet, .Timurids, .Turkey, .Ukraine, .Vatican, .Venetian, .Vietnam, .Wales, .Zimbabwe").fadeTo( "slow" , 0.25, function() {$(this).css({"text-decoration": "line-through", "background-color": "#1a1a1a"});});;
	        	
	        	$.each(allCivs, function (index, value) {
					if ((index == "Akkad") || (index == "Aksum") || (index == "Argentina") || (index == "Armenia") || (index == "Australia") || (index == "Ayyubids") || (index == "Belgium") || (index == "Boers")  || (index == "Bruneian") || (index == "Bulgaria") || (index == "Burma") || (index == "Canada") ||  (index == "Finland") || (index == "Franks") || (index == "Golden") || (index == "Goths") ||
					(index == "Gaul") || (index == "Hittites") || (index == "Hungary") || (index == "Ireland") || (index == "Israel") || (index == "Italy") || (index == "Jerusalem") || (index == "Khmer") || (index == "Kilwa") || (index == "Kongo") || (index == "Lithuania") || (index == "Macedonian") || (index == "Manchuria") || (index == "Malagasy") || (index == "Mexican") ||
					(index == "Normandy") || (index == "Norway") || (index == "Nubia") || (index == "Phoenician") || (index == "Prussian") || (index == "Romania") || (index == "Scotland") || (index == "Sioux") || (index == "Sumeria") || (index == "Tibet") || (index == "Timurids") || (index == "Turkey") || (index == "Ukraine") || (index == "Venetian") || (index == "Vietnam") || (index == "Vatican")||(index == "Wales")|| (index == "Zimbabwe")) {
						allCivs[index] = false;
					}
		  		});
	
	        	//update the title
	        	totalCivs = 42;
		  		bannedCivs = 0;
				updateBanned(totalCivs, bannedCivs);
			}
			
			$(".slideThree label").css({"left": "43px"});
            $(this).prop("checked");
        } else {
        	if (allclicked == false) {
	        	$(".Akkad, .Aksum, .Argentina, .Armenia, .Australia, .Ayyubids, .Belgium, .Boers, .Bruneian, .Bulgaria, .Burma, .Canada, .Finland, .Franks, .Golden, .Gaul, .Goths, .Hittites, .Hungary, .Ireland, .Israel, .Italy, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Lithuania, .Macedonian, .Manchuria, .Malagasy, .Mexican, .Normandy, .Norway, .Nubia, .Phoenician, .Prussian, .Romania, .Scotland, .Sioux, .Sumeria, .Tibet, .Timurids, .Turkey, .Ukraine, .Vatican, .Venetian, .Vietnam, .Wales, .Zimbabwe").css({"text-decoration": "none", "background-color": "#282828"});
	
	        	
	        	$(".Akkad, .Aksum, .Argentina, .Armenia, .Australia, .Ayyubids, .Belgium, .Boers, .Bruneian, .Bulgaria, .Burma, .Canada, .Finland, .Franks, .Golden, .Gaul, .Goths, .Hittites, .Hungary, .Ireland, .Israel, .Italy, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Lithuania, .Macedonian, .Manchuria, .Malagasy, .Mexican, .Normandy, .Norway, .Nubia, .Phoenician, .Prussian, .Romania, .Scotland, .Sioux, .Sumeria, .Tibet, .Timurids, .Turkey, .Ukraine, .Vatican, .Venetian, .Vietnam, .Wales, .Zimbabwe").fadeTo( "slow" , 1, function() {});
	        	
	        	$.each(allCivs, function (index, value) {
					if ((index == "Akkad") || (index == "Aksum") || (index == "Argentina") || (index == "Armenia") || (index == "Australia") || (index == "Ayyubids") || (index == "Belgium") || (index == "Boers")  || (index == "Bruneian") || (index == "Bulgaria") || (index == "Burma") || (index == "Canada") ||  (index == "Finland") || (index == "Franks") || (index == "Golden") || (index == "Goths") ||
					(index == "Gaul") || (index == "Hittites") || (index == "Hungary") || (index == "Ireland") || (index == "Israel") || (index == "Italy") || (index == "Jerusalem") || (index == "Khmer") || (index == "Kilwa") || (index == "Kongo") || (index == "Lithuania") || (index == "Macedonian") || (index == "Manchuria") || (index == "Malagasy") || (index == "Mexican") ||
					(index == "Normandy") || (index == "Norway") || (index == "Nubia") || (index == "Phoenician") || (index == "Prussian") || (index == "Romania") || (index == "Scotland") || (index == "Sioux") || (index == "Sumeria") || (index == "Tibet") || (index == "Timurids") || (index == "Turkey") || (index == "Ukraine") || (index == "Venetian") || (index == "Vietnam") || (index == "Vatican")|| (index == "Wales")|| (index == "Zimbabwe")) {
						allCivs[index] = true;
					}
		  		});
	
	        	//update the title
	        	totalCivs = 88;
		  		bannedCivs = 0;
				updateBanned(totalCivs, bannedCivs);
			}
			
        	$(".slideThree label").css({"left": "3px"});
            $(this).prop("unchecked");
        }      
    });
  

	function updateBanned(totalAllowed, totalBanned) {
		var titleHTML  = (totalAllowed - totalBanned) + " Allowed - " + totalBanned + " Banned";
		
		$(".selectorheadline").html(titleHTML );
	}
	
	// make the draft
	$('#create').click(function() {	  		
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
		if (neededCivs > 88) {
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

