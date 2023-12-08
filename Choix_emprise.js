//OK
var map = L.map('map', {
  minZoom: 10,
  maxZoom: 16
});
var osmUrl= 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
var osmAttrib = 'Map data © OpenStreetMap Contributeur';
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib}).addTo(map);

map.setView([45.72,4.88],12); // définir les paramètre de visualisation de la carte

var emprise = L.geoJSON(Emprise_jeux, {
  style: {
    fillColor : "#FFFFFF",
    fillOpacity: 0.9,
    weight: 2,
    fillOpacity: 0.8,
    opacity: 1,
    color: "#000000"
}}).addTo(map)




var poly = L.polygon([
  [4.77, 45.85],
  [4.77, 45.81],
  [4.83, 45.81],
  [4.83, 45.85]
])


emprise.on('click', placerMarqueur);


function placerMarqueur(e) {
  
    var coord = e.latlng;
    latmin = coord.lat - 0.02
    latmax = coord.lat + 0.02
    lngmin = coord.lng - 0.03
    lngmax = coord.lng + 0.03

    poly.removeFrom(map)

    poly = L.polygon([
          [latmin, lngmax],
          [latmin, lngmin],
          [latmax, lngmin],
          [latmax, lngmax]
      ]).addTo(map)

      console.log('latmin : ' + latmin.toPrecision(5)) 
      console.log('latmax : ' + latmax.toPrecision(5))
      console.log('lngmin : ' + lngmin.toPrecision(4))
      console.log('lngmax : ' + lngmax.toPrecision(4))

};





// ------------------------------- Affichage des couches  -------------------------------
//Fond de plan : OSM
var baseLayers = {
  "OpenStreetMap": osm
};

// Overlays : Couches qui viennent se superposer au fond de plan 
var overlays = {
  "Analyse de test":  emprise, poly
};
L.control.layers(baseLayers, overlays).addTo(map);
  
