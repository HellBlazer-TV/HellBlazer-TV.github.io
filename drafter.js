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
		"Akkad": { tags: ["modded", "seasonal"], displayName: "Akkad" },
		"Aksum": { tags: ["modded", "seasonal"], displayName: "Aksum" },
		"America": { tags: ["vanilla"], displayName: "America" },
		"Arabia": { tags: ["vanilla"], displayName: "Arabia" },
		"Argentina": { tags: ["modded", "seasonal"], displayName: "Argentina" },
		"Armenia": { tags: ["modded"], displayName: "Armenia" },
		"Assyria": { tags: ["vanilla", "seasonal"], displayName: "Assyria" },
		"Australia": { tags: ["modded", "coastal", "seasonal"], displayName: "Australia" },
		"Austria": { tags: ["vanilla"], displayName: "Austria" },
		"Ayyubids": { tags: ["modded", "seasonal"], displayName: "Ayyubids" },
		"Aztec": { tags: ["vanilla"], displayName: "Aztec" },
		"Babylon": { tags: ["vanilla", "seasonal"], displayName: "Babylon" },
		"Belgium": { tags: ["modded", "seasonal"], displayName: "Belgium" },
		"Boers": { tags: ["modded"], displayName: "Boers" },
		"Bolivia": { tags: ["modded", "seasonal"], displayName: "Bolivia" },
		"Brazil": { tags: ["vanilla"], displayName: "Brazil" },
		"Brunei": { tags: ["modded", "coastal", "seasonal"], displayName: "Brunei" },
		"Bulgaria": { tags: ["modded", "seasonal"], displayName: "Bulgaria" },
		"Burma": { tags: ["modded", "seasonal"], displayName: "Burma" },
		"Byzantium": { tags: ["vanilla"], displayName: "Byzantium" },
		"Canada": { tags: ["modded", "seasonal"], displayName: "Canada" },
		"Carthage": { tags: ["vanilla", "coastal"], displayName: "Carthage" },
		"Celts": { tags: ["vanilla"], displayName: "Celts" },
		"Chile": { tags: ["modded", "coastal"], displayName: "Chile" },
		"China": { tags: ["vanilla", "seasonal"], displayName: "China" },
		"Colombia": { tags: ["modded"], displayName: "Colombia" },
		"Cuba": { tags: ["modded", "seasonal"], displayName: "Cuba" },
		"Denmark": { tags: ["vanilla", "coastal", "seasonal"], displayName: "Denmark" },
		"Egypt": { tags: ["vanilla", "seasonal"], displayName: "Egypt" },
		"England": { tags: ["vanilla", "coastal"], displayName: "England" },
		"Ethiopia": { tags: ["vanilla"], displayName: "Ethiopia" },
		"Finland": { tags: ["modded", "seasonal"], displayName: "Finland" },
		"France": { tags: ["vanilla"], displayName: "France" },
		"Franks": { tags: ["modded", "seasonal"], displayName: "Franks" },
		"Gaul": { tags: ["modded", "seasonal"], displayName: "Gaul" },
		"Georgia": { tags: ["modded"], displayName: "Georgia" },
		"Germany": { tags: ["vanilla", "seasonal"], displayName: "Germany" },
		"Golden": { tags: ["modded", "seasonal"], displayName: "Golden Horde" },
		"Goths": { tags: ["modded", "seasonal"], displayName: "Goths" },
		"Greece": { tags: ["vanilla"], displayName: "Greece" },
		"Hittites": { tags: ["modded"], displayName: "Hittites" },
		"Hungary": { tags: ["modded"], displayName: "Hungary" },
		"Huns": { tags: ["vanilla"], displayName: "Huns" },
		"Inca": { tags: ["vanilla", "seasonal"], displayName: "Inca" },
		"India": { tags: ["vanilla"], displayName: "India" },
		"Indonesia": { tags: ["vanilla", "coastal", "seasonal"], displayName: "Indonesia" },
		"Ireland": { tags: ["modded", "seasonal"], displayName: "Ireland" },
		"Iroquois": { tags: ["vanilla", "seasonal"], displayName: "Iroquois" },
		"Israel": { tags: ["modded"], displayName: "Israel" },
		"Italy": { tags: ["modded"], displayName: "Italy" },
		"Japan": { tags: ["vanilla", "coastal"], displayName: "Japan" },
		"Jerusalem": { tags: ["modded"], displayName: "Jerusalem" },
		"Khmer": { tags: ["modded"], displayName: "Khmer" },
		"Kilwa": { tags: ["modded", "coastal", "seasonal"], displayName: "Kilwa" },
		"Kongo": { tags: ["modded", "seasonal"], displayName: "Kongo" },
		"Korea": { tags: ["vanilla", "coastal", "seasonal"], displayName: "Korea" },
		"Lithuania": { tags: ["modded"], displayName: "Lithuania" },
		"Macedonian": { tags: ["modded"], displayName: "Macedonia" },
		"Madagascar": { tags: ["modded", "seasonal"], displayName: "Madagascar" },
		"Manchuria": { tags: ["modded", "seasonal"], displayName: "Manchuria" },
		"Maori": { tags: ["modded", "seasonal"], displayName: "Maori" },
		"Maurya": { tags: ["modded", "seasonal"], displayName: "Maurya" },
		"Maya": { tags: ["vanilla"], displayName: "Maya" },
		"Mexican": { tags: ["modded", "seasonal"], displayName: "Mexico" },
		"Mongolia": { tags: ["vanilla"], displayName: "Mongolia" },
		"Moors": { tags: ["modded"], displayName: "Moors" },
		"Morocco": { tags: ["vanilla"], displayName: "Morocco" },
		"Mysore": { tags: ["modded", "seasonal"], displayName: "Mysore" },
		"Netherlands": { tags: ["vanilla", "coastal", "seasonal"], displayName: "Netherlands" },
		"NewZealand": { tags: ["modded", "coastal"], displayName: "New Zealand" },
		"Nabatea": { tags: ["modded", "seasonal"], displayName: "Nabatea" },
		"Normandy": { tags: ["modded", "seasonal"], displayName: "Normandy" },
		"Norway": { tags: ["modded", "coastal", "seasonal"], displayName: "Norway" },
		"Nubia": { tags: ["modded"], displayName: "Nubia" },
		"Oman": { tags: ["modded", "coastal"], displayName: "Oman" },
		"Ottomans": { tags: ["vanilla", "seasonal"], displayName: "Ottomans" },
		"Palmyra": { tags: ["modded"], displayName: "Palmyra" },
		"Persia": { tags: ["vanilla", "seasonal"], displayName: "Persia" },
		"Philippines": { tags: ["modded", "coastal"], displayName: "Philippines" },
		"Phoenician": { tags: ["modded", "coastal", "seasonal"], displayName: "Phoenician" },
		"Poland": { tags: ["vanilla", "seasonal"], displayName: "Poland" },
		"Polynesia": { tags: ["vanilla", "coastal"], displayName: "Polynesia" },
		"Portugal": { tags: ["vanilla", "coastal", "seasonal"], displayName: "Portugal" },
		"Prussian": { tags: ["modded", "seasonal"], displayName: "Prussia" },
		"Romania": { tags: ["modded", "seasonal"], displayName: "Romania" },
		"Rome": { tags: ["vanilla", "seasonal"], displayName: "Rome" },
		"Russia": { tags: ["vanilla", "seasonal"], displayName: "Russia" },
		"Scotland": { tags: ["modded", "seasonal"], displayName: "Scotland" },
		"Shoshone": { tags: ["vanilla", "seasonal"], displayName: "Shoshone" },
		"Siam": { tags: ["vanilla", "seasonal"], displayName: "Siam" },
		"Sioux": { tags: ["modded"], displayName: "Sioux" },
		"Songhai": { tags: ["vanilla", "seasonal"], displayName: "Songhai" },
		"Spain": { tags: ["vanilla", "coastal"], displayName: "Spain" },
		"Sumeria": { tags: ["modded", "seasonal"], displayName: "Sumeria" },
		"Sweden": { tags: ["vanilla", "seasonal"], displayName: "Sweden" },
		"Switzerland": { tags: ["modded", "seasonal"], displayName: "Switzerland" },
		"Tibet": { tags: ["modded"], displayName: "Tibet" },
		"Timurids": { tags: ["modded", "seasonal"], displayName: "Timurids" },
		"Tonga": { tags: ["modded", "coastal", "seasonal"], displayName: "Tonga" },
		"Turkey": { tags: ["modded"], displayName: "Turkey" },
		"Ukraine": { tags: ["modded"], displayName: "Ukraine" },
		"UAE": { tags: ["modded", "coastal"], displayName: "UAE" },
		"Vatican": { tags: ["modded", "seasonal"], displayName: "Vatican" },
		"Venetian": { tags: ["modded", "coastal"], displayName: "Venice" },
		"Vietnam": { tags: ["modded"], displayName: "Vietnam" },
		"Wales": { tags: ["modded", "seasonal"], displayName: "Wales" },
		"Yugoslavia": { tags: ["modded"], displayName: "Yugoslavia" },
		"Zimbabwe": { tags: ["modded"], displayName: "Zimbabwe" },
		"Zulu": { tags: ["vanilla"], displayName: "Zulu" },
		"Tunisia": { tags: ["modded", "coastal"], displayName: "Tunisia" },
		"Czechia": { tags: ["modded"], displayName: "Czechia" },
		"Mughals": { tags: ["modded"], displayName: "Mughals" }
	};

	// Generate civilization table automatically
	function generateCivTable() {
		try {
			console.log('Starting generateCivTable...');
			var civKeys = Object.keys(civData);
			console.log('Found ' + civKeys.length + ' civilizations');
			
			// Sort civilizations alphabetically by display name
			civKeys.sort(function(a, b) {
				return civData[a].displayName.localeCompare(civData[b].displayName);
			});
			
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
		updateGuaranteedOptions();
	}, 100);

	// Function to update guaranteed civs dropdown options based on number of picks
	function updateGuaranteedOptions() {
		var totalPicks = $("#picks option:selected").index() + 1;
		var currentCoastalsText = $("#coastals option:selected").text();
		var currentInlandsText = $("#inlands option:selected").text();
		
		// Clear existing options
		$('#coastals').empty();
		$('#inlands').empty();
		
		// Add "Random" option first
		$('#coastals').append('<option value="-1">Random</option>');
		$('#inlands').append('<option value="-1">Random</option>');
		
		// Add options from 1 to totalPicks
		for (var i = 1; i <= totalPicks; i++) {
			var coastalText = i === 1 ? '1 Coastal' : i + ' Coastals';
			var inlandText = i === 1 ? '1 Inland' : i + ' Inlands';
			
			$('#coastals').append('<option value="' + i + '">' + coastalText + '</option>');
			$('#inlands').append('<option value="' + i + '">' + inlandText + '</option>');
		}
		
		// Try to restore previous selections by text, otherwise default to "Random"
		var coastalRestored = false;
		var inlandRestored = false;
		
		$('#coastals option').each(function() {
			if ($(this).text() === currentCoastalsText) {
				$(this).prop('selected', true);
				coastalRestored = true;
				return false;
			}
		});
		
		$('#inlands option').each(function() {
			if ($(this).text() === currentInlandsText) {
				$(this).prop('selected', true);
				inlandRestored = true;
				return false;
			}
		});
		
		// If we couldn't restore, default to "Random"
		if (!coastalRestored) {
			$('#coastals').prop('selectedIndex', 0);
		}
		if (!inlandRestored) {
			$('#inlands').prop('selectedIndex', 0);
		}
	}

	// Update guaranteed options when picks dropdown changes
	$('#picks').change(function() {
		updateGuaranteedOptions();
	});

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
					$elem.css("background-color", "");
					$elem.fadeTo("slow", 1);
					bannedCivs--;
				} else {
					$elem.css("background-color", "rgba(7, 19, 5, 0)");
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
				$(this).css("background-color", "");
				$(this).fadeTo( "slow" , 1, function() {});
				allCivs[this.className] = true;
				bannedCivs--;
			} else {
				$(this).css("background-color", "rgba(7, 19, 5, 0)");
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
				$elem.css({"text-decoration": "none", "background-color": ""});
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
		$('#civilizations td').css({"text-decoration": "none", "background-color": ""});
		$('#civilizations td').fadeTo("slow", 1);
		
		if($('#slideThree').is(':checked') && bannedCivs > 0) {
			// Disable modded civs visually
			var moddedCivs = getCivsByTag("modded");
			moddedCivs.forEach(function(civ) {
				var $elem = $('.' + civ);
				$elem.css("background-color", "rgba(7, 19, 5, 0)");
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
			$(this).css({"text-decoration": "line-through", "background-color": "rgba(7, 19, 5, 0)"});
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

	//lekmod seasonal bans
	$('#slideFour').change(function() {
		if(this.checked) {
			if (allclicked == false) {
				toggleCivsByTag("seasonal", false);
				updateBanned(totalCivs, bannedCivs);
			}
			
			$(".slideFour label").css({"left": "43px"});
			$(this).prop("checked");
		} else {
			if (allclicked == false) {
				toggleCivsByTag("seasonal", true);
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
			guaranteedCoastals: $("#coastals option:selected").val(),
			guaranteedInlands: $("#inlands option:selected").val(),
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
				
				// Update guaranteed options based on new picks selection
				updateGuaranteedOptions();
				
				// Apply guaranteed coastals and inlands (with defaults for backward compatibility)
				if (settings.guaranteedCoastals !== undefined) {
					$("#coastals").val(settings.guaranteedCoastals);
				} else {
					$("#coastals").val("-1"); // Default to Random
				}
				
				if (settings.guaranteedInlands !== undefined) {
					$("#inlands").val(settings.guaranteedInlands);
				} else {
					$("#inlands").val("-1"); // Default to Random
				}
				
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
				$('#civilizations td')
					.css({"text-decoration": "none", "background-color": ""})
					.fadeTo("fast", 1);

				// Apply banned civs
				bannedCivs = 0;
				$.each(settings.bannedCivs, function(civ, enabled) {
					allCivs[civ] = enabled;
					if (!enabled) {
						bannedCivs++;
						$('.' + civ)
							.css({"text-decoration": "line-through", "background-color": "rgba(7, 19, 5, 0)"})
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
  		var allowedInlandCivs = [];
  		var playerPicks = {};
  		var guaranteedCoastals = parseInt($("#coastals option:selected").val());
  		var guaranteedInlands = parseInt($("#inlands option:selected").val());
  		
  		// Convert -1 (Random) to 0 for calculations
  		if (guaranteedCoastals === -1) guaranteedCoastals = 0;
  		if (guaranteedInlands === -1) guaranteedInlands = 0;
  		
  		//clear any previous results
  		$("#results").empty();
  		
  		//check how many civs are enabled and separate coastal and inland civs
  		$.each(allCivs, function (index, value) {
			if (allCivs[index] == true) {
				allowedCivs[enabledCivs] = index;
				enabledCivs++;
				
				// Check if this civ is coastal or inland
				if (civData[index].tags.includes("coastal")) {
					allowedCoastalCivs.push(index);
				} else {
					allowedInlandCivs.push(index);
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

		// check if guaranteed civs per player exceed picks per player
		} else if (guaranteedCoastals + guaranteedInlands > rndpicks) {
			$("#results").html("<p class='drawerror'>The sum of guaranteed coastals (" + guaranteedCoastals + ") and guaranteed inlands (" + guaranteedInlands + ") per player exceeds the number of picks per player (" + rndpicks + ")!</br>Please reduce the guaranteed amounts.</p>");

		// check if we have enough coastal civs for all players
		} else if (guaranteedCoastals > 0 && allowedCoastalCivs.length < guaranteedCoastals * players) {
			$("#results").html("<p class='drawerror'>Not enough coastal civilizations available! Need at least " + (guaranteedCoastals * players) + " coastal civs for " + players + " players with " + guaranteedCoastals + " guaranteed each, but only " + allowedCoastalCivs.length + " are available.</br>Please unban more coastal civilizations or reduce the guaranteed coastal amount.</p>");

		// check if we have enough inland civs for all players
		} else if (guaranteedInlands > 0 && allowedInlandCivs.length < guaranteedInlands * players) {
			$("#results").html("<p class='drawerror'>Not enough inland civilizations available! Need at least " + (guaranteedInlands * players) + " inland civs for " + players + " players with " + guaranteedInlands + " guaranteed each, but only " + allowedInlandCivs.length + " are available.</br>Please unban more inland civilizations or reduce the guaranteed inland amount.</p>");

		// errors handled we can now make the draw
		} else {
		
			// Create working copies of arrays
			var workingAllowedCivs = allowedCivs.slice();
			var workingCoastalCivs = allowedCoastalCivs.slice();
			var workingInlandCivs = allowedInlandCivs.slice();
			
			var picksHTML = "<p class='rescopied'>Draft results have been copied to clipboard</p>";
			var resCopy = "";
			
			picksHTML = picksHTML + "<table class='drawresults'>";
			$("#results").css("text-align", "left");
			
			//loop thru each player
			for (var i = 1; i <= players; i++) { 
				
				//add this player to the results HTML
				picksHTML = picksHTML + "<tr><td>Player " + i + " choose from:</td>";
				resCopy = resCopy  + "Player " + i + " choose from: - ";
				
				var playerCoastalsNeeded = guaranteedCoastals;
				var playerInlandsNeeded = guaranteedInlands;
				
				//loop however many picks are needed
				for (var k = 1; k <= rndpicks; k++) {
					var selectedCiv;
					var selectedCivIndex;
					
					// First priority: Select guaranteed coastal civs
					if (playerCoastalsNeeded > 0 && workingCoastalCivs.length > 0) {
						selectedCivIndex = Math.floor(Math.random() * workingCoastalCivs.length);
						selectedCiv = workingCoastalCivs[selectedCivIndex];
						playerCoastalsNeeded--;
						
						// Remove from coastal array
						workingCoastalCivs.splice(selectedCivIndex, 1);
						
					// Second priority: Select guaranteed inland civs
					} else if (playerInlandsNeeded > 0 && workingInlandCivs.length > 0) {
						selectedCivIndex = Math.floor(Math.random() * workingInlandCivs.length);
						selectedCiv = workingInlandCivs[selectedCivIndex];
						playerInlandsNeeded--;
						
						// Remove from inland array
						workingInlandCivs.splice(selectedCivIndex, 1);
						
					// Third priority: Select from any remaining civs
					} else if (workingAllowedCivs.length > 0) {
						selectedCivIndex = Math.floor(Math.random() * workingAllowedCivs.length);
						selectedCiv = workingAllowedCivs[selectedCivIndex];
					}
					
					// Remove selected civ from main allowed list
					var mainCivIndex = workingAllowedCivs.indexOf(selectedCiv);
					if (mainCivIndex > -1) {
						workingAllowedCivs.splice(mainCivIndex, 1);
					}
					
					// Also remove from coastal/inland arrays if it was selected randomly
					if (civData[selectedCiv].tags.includes("coastal")) {
						var coastalIndex = workingCoastalCivs.indexOf(selectedCiv);
						if (coastalIndex > -1) {
							workingCoastalCivs.splice(coastalIndex, 1);
						}
					} else {
						var inlandIndex = workingInlandCivs.indexOf(selectedCiv);
						if (inlandIndex > -1) {
							workingInlandCivs.splice(inlandIndex, 1);
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

