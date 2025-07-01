// Check if jQuery is loaded
if (typeof jQuery === 'undefined') {
	console.error('jQuery is not loaded!');
	// Try to show an error message
	window.onload = function() {
		var headline = document.querySelector('.selectorheadline');
		if (headline) {
			headline.innerHTML = 'Error: jQuery not loaded. Please refresh the page.';
		}
	};
} else {
	$(document).ready(function() {
		console.log('Document ready, starting initialization...');

	// Civilization data with tags and display names
	var civData = {
		"Akkad": { tags: ["modded"], displayName: "Akkad" },
		"Aksum": { tags: ["modded"], displayName: "Aksum" },
		"America": { tags: ["vanilla"], displayName: "America" },
		"Arabia": { tags: ["vanilla"], displayName: "Arabia" },
		"Argentina": { tags: ["modded"], displayName: "Argentina" },
		"Armenia": { tags: ["modded"], displayName: "Armenia" },
		"Assyria": { tags: ["vanilla"], displayName: "Assyria" },
		"Australia": { tags: ["modded", "coastal"], displayName: "Australia" },
		"Austria": { tags: ["vanilla"], displayName: "Austria" },
		"Ayyubids": { tags: ["modded"], displayName: "Ayyubids" },
		"Aztec": { tags: ["vanilla"], displayName: "Aztec" },
		"Babylon": { tags: ["vanilla"], displayName: "Babylon" },
		"Belgium": { tags: ["modded"], displayName: "Belgium" },
		"Boers": { tags: ["modded"], displayName: "Boers" },
		"Bolivia": { tags: ["modded"], displayName: "Bolivia" },
		"Brazil": { tags: ["vanilla"], displayName: "Brazil" },
		"Brunei": { tags: ["modded", "coastal"], displayName: "Brunei" },
		"Bulgaria": { tags: ["modded"], displayName: "Bulgaria" },
		"Burma": { tags: ["modded"], displayName: "Burma" },
		"Byzantium": { tags: ["vanilla"], displayName: "Byzantium" },
		"Canada": { tags: ["modded"], displayName: "Canada" },
		"Carthage": { tags: ["vanilla", "coastal"], displayName: "Carthage" },
		"Celts": { tags: ["vanilla"], displayName: "Celts" },
		"Chile": { tags: ["modded", "coastal"], displayName: "Chile" },
		"China": { tags: ["vanilla"], displayName: "China" },
		"Colombia": { tags: ["modded"], displayName: "Colombia" },
		"Cuba": { tags: ["modded"], displayName: "Cuba" },
		"Denmark": { tags: ["vanilla", "coastal"], displayName: "Denmark" },
		"Egypt": { tags: ["vanilla"], displayName: "Egypt" },
		"England": { tags: ["vanilla", "coastal"], displayName: "England" },
		"Ethiopia": { tags: ["vanilla"], displayName: "Ethiopia" },
		"Finland": { tags: ["modded"], displayName: "Finland" },
		"France": { tags: ["vanilla"], displayName: "France" },
		"Franks": { tags: ["modded"], displayName: "Franks" },
		"Gaul": { tags: ["modded"], displayName: "Gaul" },
		"Georgia": { tags: ["modded"], displayName: "Georgia" },
		"Germany": { tags: ["vanilla"], displayName: "Germany" },
		"Golden": { tags: ["modded"], displayName: "Golden Horde" },
		"Goths": { tags: ["modded"], displayName: "Goths" },
		"Greece": { tags: ["vanilla"], displayName: "Greece" },
		"Hittites": { tags: ["modded"], displayName: "Hittites" },
		"Hungary": { tags: ["modded"], displayName: "Hungary" },
		"Huns": { tags: ["vanilla"], displayName: "Huns" },
		"Inca": { tags: ["vanilla"], displayName: "Inca" },
		"India": { tags: ["vanilla"], displayName: "India" },
		"Indonesia": { tags: ["vanilla", "coastal"], displayName: "Indonesia" },
		"Ireland": { tags: ["modded"], displayName: "Ireland" },
		"Iroquois": { tags: ["vanilla"], displayName: "Iroquois" },
		"Israel": { tags: ["modded"], displayName: "Israel" },
		"Italy": { tags: ["modded"], displayName: "Italy" },
		"Japan": { tags: ["vanilla", "coastal"], displayName: "Japan" },
		"Jerusalem": { tags: ["modded"], displayName: "Jerusalem" },
		"Khmer": { tags: ["modded"], displayName: "Khmer" },
		"Kilwa": { tags: ["modded", "coastal"], displayName: "Kilwa" },
		"Kongo": { tags: ["modded"], displayName: "Kongo" },
		"Korea": { tags: ["vanilla", "coastal"], displayName: "Korea" },
		"Lithuania": { tags: ["modded"], displayName: "Lithuania" },
		"Macedonian": { tags: ["modded"], displayName: "Macedonia" },
		"Madagascar": { tags: ["modded"], displayName: "Madagascar" },
		"Manchuria": { tags: ["modded"], displayName: "Manchuria" },
		"Maori": { tags: ["modded"], displayName: "Maori" },
		"Maurya": { tags: ["modded"], displayName: "Maurya" },
		"Maya": { tags: ["vanilla"], displayName: "Maya" },
		"Mexican": { tags: ["modded"], displayName: "Mexico" },
		"Mongolia": { tags: ["vanilla"], displayName: "Mongolia" },
		"Moors": { tags: ["modded"], displayName: "Moors" },
		"Morocco": { tags: ["vanilla"], displayName: "Morocco" },
		"Mysore": { tags: ["modded"], displayName: "Mysore" },
		"Netherlands": { tags: ["vanilla", "coastal"], displayName: "Netherlands" },
		"NewZealand": { tags: ["modded", "coastal"], displayName: "New Zealand" },
		"Nabatea": { tags: ["modded"], displayName: "Nabatea" },
		"Normandy": { tags: ["modded"], displayName: "Normandy" },
		"Norway": { tags: ["modded", "coastal"], displayName: "Norway" },
		"Nubia": { tags: ["modded"], displayName: "Nubia" },
		"Oman": { tags: ["modded", "coastal"], displayName: "Oman" },
		"Ottomans": { tags: ["vanilla"], displayName: "Ottomans" },
		"Palmyra": { tags: ["modded"], displayName: "Palmyra" },
		"Persia": { tags: ["vanilla"], displayName: "Persia" },
		"Philippines": { tags: ["modded", "coastal"], displayName: "Philippines" },
		"Phoenician": { tags: ["modded", "coastal"], displayName: "Phoenician" },
		"Poland": { tags: ["vanilla"], displayName: "Poland" },
		"Polynesia": { tags: ["vanilla", "coastal"], displayName: "Polynesia" },
		"Portugal": { tags: ["vanilla", "coastal"], displayName: "Portugal" },
		"Prussian": { tags: ["modded"], displayName: "Prussia" },
		"Romania": { tags: ["modded"], displayName: "Romania" },
		"Rome": { tags: ["vanilla"], displayName: "Rome" },
		"Russia": { tags: ["vanilla"], displayName: "Russia" },
		"Scotland": { tags: ["modded"], displayName: "Scotland" },
		"Shoshone": { tags: ["vanilla"], displayName: "Shoshone" },
		"Siam": { tags: ["vanilla"], displayName: "Siam" },
		"Sioux": { tags: ["modded"], displayName: "Sioux" },
		"Songhai": { tags: ["vanilla"], displayName: "Songhai" },
		"Spain": { tags: ["vanilla", "coastal"], displayName: "Spain" },
		"Sumeria": { tags: ["modded"], displayName: "Sumeria" },
		"Sweden": { tags: ["vanilla"], displayName: "Sweden" },
		"Switzerland": { tags: ["modded"], displayName: "Switzerland" },
		"Tibet": { tags: ["modded"], displayName: "Tibet" },
		"Timurids": { tags: ["modded"], displayName: "Timurids" },
		"Tonga": { tags: ["modded", "coastal"], displayName: "Tonga" },
		"Turkey": { tags: ["modded"], displayName: "Turkey" },
		"Ukraine": { tags: ["modded"], displayName: "Ukraine" },
		"UAE": { tags: ["modded", "coastal"], displayName: "UAE" },
		"Vatican": { tags: ["modded"], displayName: "Vatican" },
		"Venetian": { tags: ["modded", "coastal"], displayName: "Venice" },
		"Vietnam": { tags: ["modded"], displayName: "Vietnam" },
		"Wales": { tags: ["modded"], displayName: "Wales" },
		"Yugoslavia": { tags: ["modded"], displayName: "Yugoslavia" },
		"Zimbabwe": { tags: ["modded"], displayName: "Zimbabwe" },
		"Zulu": { tags: ["vanilla"], displayName: "Zulu" }
	};

	// Generate civilization table automatically
	function generateCivTable() {
		try {
			console.log('Starting generateCivTable...');
			var civKeys = Object.keys(civData);
			console.log('Found ' + civKeys.length + ' civilizations');
			
			var civsPerRow = 8;
			var tableHTML = "";
			
			for (var i = 0; i < civKeys.length; i += civsPerRow) {
				tableHTML += "<tr>";
				for (var j = i; j < i + civsPerRow && j < civKeys.length; j++) {
									var civKey = civKeys[j];
				var civInfo = civData[civKey];
				var imageName = civKey.toLowerCase();
				
				tableHTML += '<td class="' + civKey + '">';
				tableHTML += '<img src="img/' + imageName + '.png" alt="' + civInfo.displayName + '">';
					tableHTML += civInfo.displayName;
					tableHTML += '</td>';
				}
				tableHTML += "</tr>";
			}
			
			console.log('Generated table HTML, length:', tableHTML.length);
			
			// Make sure the element exists before trying to update it
			if ($('#civilizations').length > 0) {
				$('#civilizations').html(tableHTML);
				console.log('Table updated successfully');
			} else {
				console.error('Could not find #civilizations element');
			}
			
			// Update the count in the header
			if ($('.selectorheadline').length > 0) {
				$('.selectorheadline').html(totalCivs + ' Allowed - 0 Banned');
			} else {
				console.error('Could not find .selectorheadline element');
			}
			
		} catch (error) {
			console.error('Error in generateCivTable:', error);
			// Fallback: show error message
			if ($('.selectorheadline').length > 0) {
				$('.selectorheadline').html('Error loading civilizations. Please refresh the page.');
			}
		}
	}

	//var America = {Enabled:false};
	var allCivs = {};
	// Initialize all civs as enabled
	Object.keys(civData).forEach(function(civ) {
		allCivs[civ] = true;
	});
	
	var bannedCivs = 0;
	var totalCivs = Object.keys(civData).length;
	var titleHTML = "";
	var allclicked = false;

	// Generate the civilization table after a small delay to ensure DOM is ready
	setTimeout(function() {
		generateCivTable();
	}, 100);

	// Helper function to get civs by tag
	function getCivsByTag(tag) {
		return Object.keys(civData).filter(function(civ) {
			return civData[civ].tags.includes(tag);
		});
	}

	// Helper function to toggle civs by tag
	function toggleCivsByTag(tag, enable) {
		var civs = getCivsByTag(tag);
		civs.forEach(function(civ) {
			if (allCivs[civ] !== enable) {
				allCivs[civ] = enable;
				var $elem = $('.' + civ);
				
				if (enable) {
					$elem.css("text-decoration", "none");
					$elem.css("background-color", "#8d6309");
					$elem.fadeTo("slow", 1);
					bannedCivs--;
				} else {
					$elem.css("background-color", "#5f4309");
					$elem.fadeTo("slow", 0.25, function() {
						$elem.css("text-decoration", "line-through");
					});
					bannedCivs++;
				}
			}
		});
	}
	
	// toggle disable or enabled civ - use dynamic binding for generated content
	$(document).on('click', '#civilizations td', toggleState);
	
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
			// Reset to vanilla only
			Object.keys(allCivs).forEach(function(civ) {
				allCivs[civ] = civData[civ].tags.includes("vanilla");
			});
			
			bannedCivs = getCivsByTag("modded").length;
			
			// Update UI for vanilla civs
			var vanillaCivs = getCivsByTag("vanilla");
			vanillaCivs.forEach(function(civ) {
				var $elem = $('.' + civ);
				$elem.css({"text-decoration": "none", "background-color": "#8d6309"});
				$elem.fadeTo("slow", 1);
			});

		} else {
			// Reset all to enabled
			Object.keys(allCivs).forEach(function(civ) {
				allCivs[civ] = true;
			});
			bannedCivs = 0;
		}
		
		// Update UI for all civs
		$('#civilizations td').css({"text-decoration": "none", "background-color": "#8d6309"});
		$('#civilizations td').fadeTo("slow", 1);
		
		if($('#slideThree').is(':checked') && bannedCivs > 0) {
			// Disable modded civs visually
			var moddedCivs = getCivsByTag("modded");
			moddedCivs.forEach(function(civ) {
				var $elem = $('.' + civ);
				$elem.css("background-color", "#5f4309");
				$elem.fadeTo("slow", 0.25, function() {
					$elem.css("text-decoration", "line-through");
				});
			});
		}
		
		updateBanned(totalCivs, bannedCivs);
		allclicked = false;
		$('#create').attr("disabled", false);
	});
	
	//set all to disabled
	$('#all').click(function() {
		$('#civilizations td').fadeTo("slow", 0.25, function() {
			$(this).css({"text-decoration": "line-through", "background-color": "#8d6309"});
		});
		
		Object.keys(allCivs).forEach(function(civ) {
			allCivs[civ] = false;
		});
  		
  		//update the title
  		bannedCivs = totalCivs;
		updateBanned(totalCivs, bannedCivs);
		
		allclicked = true;
	});

	//disable lek mod civs
	$('#slideThree').change(function() {
        if(this.checked) {
        	if (allclicked == false) {
	        	toggleCivsByTag("modded", false);
	        	updateBanned(totalCivs, bannedCivs);
			}
			
			$(".slideThree label").css({"left": "43px"});
            $(this).prop("checked");
        } else {
        	if (allclicked == false) {
	        	toggleCivsByTag("modded", true);
				updateBanned(totalCivs, bannedCivs);
			}
			
        	$(".slideThree label").css({"left": "3px"});
            $(this).prop("unchecked");
        }      
    });

	//lekmod seasonal bans - keeping the original hardcoded list for now since I don't have the seasonal ban data
	$('#slideFour').change(function() {
		if(this.checked) {
			if (allclicked == false) {
				// This would need to be converted to use tags when you have the seasonal ban list
				var seasonalBannedCivs = ["America", "Argentina", "Australia", "Austria", "Ayyubids", "Aztec", "Belgium", "Boers", "Bolivia", "Brazil", "Brunei", "Bulgaria", "Canada", "Chile", "Colombia", "Cuba", "England", "Ethiopia", "Finland", "France", "Franks", "Georgia", "Germany", "Golden", "Hungary", "Inca", "India", "Indonesia", "Ireland", "Iroquois", "Italy", "Japan", "Jerusalem", "Kilwa", "Korea", "Lithuania", "Manchuria", "Mexican", "Mongolia", "Moors", "Morocco", "Mysore", "Netherlands", "NewZealand", "Normandy", "Norway", "Oman", "Ottomans", "Philippines", "Poland", "Polynesia", "Portugal", "Prussian", "Romania", "Russia", "Scotland", "Shoshone", "Siam", "Songhai", "Spain", "Sweden", "Switzerland", "Timurids", "Tonga", "Turkey", "UAE", "Ukraine", "Vatican", "Venetian", "Vietnam", "Wales", "Yugoslavia", "Zulu"];
				
				seasonalBannedCivs.forEach(function(civ) {
					if (allCivs[civ] === true) {
						allCivs[civ] = false;
						bannedCivs++;
						var $elem = $('.' + civ);
						$elem.fadeTo("slow", 0.25, function() {
							$elem.css({"text-decoration": "line-through", "background-color": "#8d6309"});
						});
					}
				});
	
				updateBanned(totalCivs, bannedCivs);
			}
			
			$(".slideFour label").css({"left": "43px"});
			$(this).prop("checked");
		} else {
			if (allclicked == false) {
				var seasonalBannedCivs = ["America", "Argentina", "Australia", "Austria", "Ayyubids", "Aztec", "Belgium", "Boers", "Bolivia", "Brazil", "Brunei", "Bulgaria", "Canada", "Chile", "Colombia", "Cuba", "England", "Ethiopia", "Finland", "France", "Franks", "Georgia", "Germany", "Golden", "Hungary", "Inca", "India", "Indonesia", "Ireland", "Iroquois", "Italy", "Japan", "Jerusalem", "Kilwa", "Korea", "Lithuania", "Manchuria", "Mexican", "Mongolia", "Moors", "Morocco", "Mysore", "Netherlands", "NewZealand", "Normandy", "Norway", "Oman", "Ottomans", "Philippines", "Poland", "Polynesia", "Portugal", "Prussian", "Romania", "Russia", "Scotland", "Shoshone", "Siam", "Songhai", "Spain", "Sweden", "Switzerland", "Timurids", "Tonga", "Turkey", "UAE", "Ukraine", "Vatican", "Venetian", "Vietnam", "Wales", "Yugoslavia", "Zulu"];
				
				seasonalBannedCivs.forEach(function(civ) {
					if (allCivs[civ] === false) {
						allCivs[civ] = true;
						bannedCivs--;
						var $elem = $('.' + civ);
						$elem.css({"text-decoration": "none", "background-color": "#8d6309"});
						$elem.fadeTo("slow", 1);
					}
				});

				updateBanned(totalCivs, bannedCivs);
			}
			
        	$(".slideFour label").css({"left": "3px"});
            $(this).prop("unchecked");
        }      
    });

	// Add coastal requirement toggle
	$('#slideFive').change(function() {
		if(this.checked) {
			$(".slideFive label").css({"left": "43px"});
			$(this).prop("checked");
		} else {
			$(".slideFive label").css({"left": "3px"});
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
			alwaysIncludeCoastals: $('#slideFive').is(':checked'),
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
				
				// Apply coastal requirement toggle
				if (settings.alwaysIncludeCoastals) {
					$('#slideFive').prop('checked', true);
					$(".slideFive label").css({"left": "43px"});
				} else {
					$('#slideFive').prop('checked', false);
					$(".slideFive label").css({"left": "3px"});
				}
				
				// Reset all civs first
				$('#civilizations td')
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
  		var allowedCoastalCivs = [];
  		var playerPicks = {};
  		var requireCoastals = $('#slideFive').is(':checked');
  		
  		//clear any previous results
  		$("#results").empty();
  		
  		//check how many civs are enabled and separate coastal civs
  		$.each(allCivs, function (index, value) {
			if (allCivs[index] == true) {
				allowedCivs[enabledCivs] = index;
				enabledCivs++;
				
				// Check if this civ is coastal
				if (civData[index].tags.includes("coastal")) {
					allowedCoastalCivs.push(index);
				}
			};
  		});
		
		//check if the user is trying to pick more civs than available
		if (neededCivs > totalCivs) {
			$("#results").html("<p class='drawerror'>There are not enough civilizations for " + players + " players to have " + rndpicks + " picks each!</br>Select a different number of players or lower the number of random picks and try again!</p>");

		// check if we have enough enabled civs to process the draft
		} else if (enabledCivs < neededCivs) { 
			missingCivs = neededCivs - enabledCivs;
			$("#results").html("<p class='drawerror'>There are not enough available civilizations to make the draw!</br>Please unban at least another " + missingCivs +" civilizations and try again!</p>");

		// check if we have enough coastal civs when required
		} else if (requireCoastals && allowedCoastalCivs.length < players) {
			$("#results").html("<p class='drawerror'>Not enough coastal civilizations available! Need at least " + players + " coastal civs for each player, but only " + allowedCoastalCivs.length + " are available.</br>Please unban more coastal civilizations or disable the 'Always include coastals' option.</p>");

		// errors handled we can now make the draw
		} else {
		
			// pick civs for each player
			var i;
			var k;
			var picksHTML = "<p class='rescopied'>Draft results have been copied to clipboard</p>";
			var resCopy = ""
			
			picksHTML = picksHTML + "<table class='drawresults'>";

			$("#results").css("text-align", "left");
			
			// Create working copies of arrays
			var workingAllowedCivs = allowedCivs.slice();
			var workingCoastalCivs = allowedCoastalCivs.slice();
			
			//loop thru each player
			for (i = 1; i <= players; i++) { 
				
				//add this player to the results HTML
				picksHTML = picksHTML + "<tr><td>Player " + i + " choose from:</td>";
				resCopy = resCopy  + "Player " + i + " choose from: - ";
				
				var playerHasCoastal = false;
				
				//loop however many picks are needed
				for (k = 1; k <= rndpicks; k++) {
					var selectedCiv;
					var selectedCivIndex;
					var availablePool;
					
					// If we need coastals and this player doesn't have one yet, force a coastal on first pick
					if (requireCoastals && !playerHasCoastal && k === 1 && workingCoastalCivs.length > 0) {
						// Force pick a coastal civ on first pick
						selectedCivIndex = Math.floor(Math.random() * workingCoastalCivs.length);
						selectedCiv = workingCoastalCivs[selectedCivIndex];
						playerHasCoastal = true;
						
						// Remove from coastal array
						workingCoastalCivs.splice(selectedCivIndex, 1);
					} else {
						// Create available pool excluding coastal civs if player already has one
						if (requireCoastals && playerHasCoastal) {
							// Player already has a coastal, exclude coastal civs from selection
							availablePool = workingAllowedCivs.filter(function(civ) {
								return !civData[civ].tags.includes("coastal");
							});
						} else {
							// Player doesn't have coastal requirement or doesn't have one yet
							availablePool = workingAllowedCivs.slice();
						}
						
						// If we need coastals, this player doesn't have one, and this is the last pick, force coastal
						if (requireCoastals && !playerHasCoastal && k === rndpicks && workingCoastalCivs.length > 0) {
							// Force pick a coastal civ on last pick
							selectedCivIndex = Math.floor(Math.random() * workingCoastalCivs.length);
							selectedCiv = workingCoastalCivs[selectedCivIndex];
							playerHasCoastal = true;
							
							// Remove from coastal array
							workingCoastalCivs.splice(selectedCivIndex, 1);
						} else {
							// Pick from available pool
							selectedCivIndex = Math.floor(Math.random() * availablePool.length);
							selectedCiv = availablePool[selectedCivIndex];
							
							// Check if this happens to be coastal (only matters if player doesn't have coastal requirement)
							if (!requireCoastals && civData[selectedCiv].tags.includes("coastal")) {
								// Remove from coastal array if it's there
								var coastalIndex = workingCoastalCivs.indexOf(selectedCiv);
								if (coastalIndex > -1) {
									workingCoastalCivs.splice(coastalIndex, 1);
								}
							}
						}
					}
					
					picksHTML = picksHTML + "<td><img src='img/" + selectedCiv.toLowerCase() + ".png'></img>" + civData[selectedCiv].displayName;
					
					if (k < rndpicks) {
						picksHTML = picksHTML + "<td>";
						resCopy = resCopy  + civData[selectedCiv].displayName + " or ";
					} else {
						picksHTML = picksHTML + "<td>";
						resCopy = resCopy  + civData[selectedCiv].displayName + "\r\n";
					}
					
					// Remove selected civ from working array
					var mainCivIndex = workingAllowedCivs.indexOf(selectedCiv);
					if (mainCivIndex > -1) {
						workingAllowedCivs.splice(mainCivIndex, 1);
					}
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
}			

