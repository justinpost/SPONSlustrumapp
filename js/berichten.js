function showBerichten(obj){
	jQuery.each(obj, function(i, val) {
		
		var html = '<li data-role="list-divider">' + val['date'] + '</li>';
		html = html + '<li data-icon="false">' + '<h3>' + val['title'] + '</h3>' + '<p>' + val['content'] + '</p>' + '<p class="ui-li-aside"><strong>' + val['time'] + '</strong></p>' + 	'</li>';
		$( "#berichtenbox" ).append( html );
	});
}

function laadBerichten(){
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for older browsers
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//console.log(xmlhttp.responseText);
			var obj = JSON.parse(xmlhttp.responseText);
			showBerichten(obj);
		}
	};
	xmlhttp.open("GET", "https://justinpost.nl/app/data/berichten.json", true);
	xmlhttp.send();
}

laadBerichten();
// $( "#berichten" ).on( "pagecontainerbeforeshow", function( event, ui ) {} );