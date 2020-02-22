
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let mymap = L.map('mapid').setView([-2.1550227,-79.8903264,104], 13);

	L.tileLayer(tilesProvider, {
		maxZoom: 50,
	}).addTo(mymap);

	// let popup = L.popup()
 //    .setLatLng([-2.1550227,-79.8903264,104])
 //    .setContent("BARRIO LINDO CIA.LTDA")
 //    .openOn(mymap);

    L.marker([-2.1550227,-79.8903264,104]).addTo(mymap)
		.bindPopup("<b>BARRIO LINDO CIA.LTDA</b>").openPopup();