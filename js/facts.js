'use strict';

window.onload = function() {

	document.getElementById("build-id").innerHTML = navigator.buildID;

	//Memory
	navigator.getFeature("hardware.memory").then(function(mem){
		document.getElementById("memory").innerHTML = mem;
		console.log(mem);
	});
	//document.getElementById("memory").innerHTML = obj["hardware.memory"];

	//Going to use the Settings API to get stuff
	var lock = navigator.mozSettings.createLock();

	//O.S.
	var os = lock.get('deviceinfo.os');
	os.onsuccess = function () {
		var json = JSON.stringify(os.result), obj = JSON.parse(json);
		document.getElementById("os").innerHTML = obj["deviceinfo.os"];
	}

	//Platform Version
	var pltVersion = lock.get('deviceinfo.platform_version');
	pltVersion.onsuccess = function () {
		var json = JSON.stringify(pltVersion.result), obj = JSON.parse(json);
		document.getElementById("platform").innerHTML = obj["deviceinfo.platform_version"];
	}
	pltVersion.onerror = function () {
  console.warn('An error occured: ' + geckoRev.error);
	}

	//Gecko Version
	var geckoRev = lock.get('deviceinfo.hardware');
	geckoRev.onsuccess = function() {
		var json2 = JSON.stringify(geckoRev.result), obj2 = JSON.parse(json2);
		document.getElementById("gecko").innerHTML = obj2["deviceinfo.hardware"];
	}

	geckoRev.onerror = function () {
  console.warn('An error occured: ' + geckoRev.error);
	}
	
	

};