// ----------------------------------Déclaration fonds de carte-----------------------------------------------------
var map = L.map('map', {
    minZoom: 10,
    maxZoom: 16
  });
  var osmUrl= 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png';
  //la variable osmUrl contient l'url qui va nous permettre de récup les images qui constitueront le fond de notre carte
  
  var osmAttrib='Map data c OpenStreetMap contributors';
  //la vaiable osmAttrib contient la source de la carte, elle s'affichera en bas à droite de notre carte
  var osm = new L.TileLayer(osmUrl, {attribution:osmAttrib}).addTo(map);
  
  //map
  map.setView([45.75,4.8],11);
// ----------------------------------Lien au serveur-----------------------------------------------------

visu = function() {
var theme = 'moy_pm_10'

var pm = document.getElementById("pm");
var struc = document.getElementById("struc");
var am = document.getElementById("am");

map.eachLayer(function (layer) {
  map.removeLayer(layer);
});
osm.addTo(map);

if(pm.style.display === "block"){
  theme = 'moy_pm_10'

 // couleur = ["#753256","#A7496F","#E0A7A5","#F8E7D2"]
  function getColor(d) {
    return d > 3   ? '#753256' :
           d > 2   ? '#A7496F' :
           d > 1  ? '#E0A7A5' :
                     '#F8E7D2';
    }

    function style(feature) {
      return {
          fillColor: getColor(feature.properties.classe),
          weight: 0,
          fillOpacity: 0.7
      };
  }
  
  var test = L.geoJson(geoJSON_POL, {style: style}).addTo(map)
 
}else if(struc.style.display === "block"){
  theme = 'dist_struc'

} else if (am.style.display === "block"){
  theme = 'ind_am'
}


}

visu()