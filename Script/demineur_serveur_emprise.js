function Quartile(data, q) {
  data=Array_Sort_Numbers(data);
  var pos = ((data.length) - 1) * q;
  var base = Math.floor(pos);
  var rest = pos - base;
  if( (data[base+1]!==undefined) ) {
    return data[base] + rest * (data[base+1] - data[base]);
  } else {
    return data[base];
  }
}

function Array_Sort_Numbers(inputarray){
  return inputarray.sort(function(a, b) {
    return a - b;
  });
}
// ----------------------------------Déclaration fonds de carte-----------------------------------------------------
var map = L.map('map',{
  maxZoom: 19,
  minZoom: 10,
  maxBounds: [[46, 6], [45.3, 4]
      ],});
  L.control.scale({imperial : false}).addTo(map);

    var osmUrl= 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
  //la variable osmUrl contient l'url qui va nous permettre de récup les images qui constitueront le fond de notre carte
  
  var osmAttrib='Map data c OpenStreetMap contributors';
  //la vaiable osmAttrib contient la source de la carte, elle s'affichera en bas à droite de notre carte
  var osm = new L.TileLayer(osmUrl, {attribution:osmAttrib}).addTo(map);

  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });
  osm.addTo(map);
  //map
  map.setView([45.75,4.8],10);
  //--------------------------------Déclaration de l'emprise du jeu et du polygone d'intersection-----------------------------------------------------

var emprise = L.geoJSON(Emprise_jeux, {
  style: {
    fillColor : '#C6DA4B',
    fillOpacity : 0.5,
    weight: 1,
  fillOpacity: 0.8,
  opacity: 1,
  color: "#C6DA4B"
}}).addTo(map)

var lat = 45.6788 + (Math.random() * (45.7930 - 45.6788));
var lng = 4.78729 + (Math.random() * (4.97955 - 4.78729));
// remplace le var poly =  
var buffer = L.circle([lat, lng], {
  color: '#FFFFFF',
  fillColor: '#FFFFFF',
  fillOpacity: 0.5,
  radius: 950}).addTo(map);


// ----------------------------------Configuration du marqueur d'emprise-----------------------------------------------------

emprise.on('click', placerMarqueur);

function placerMarqueur(e) {
  var coord = e.latlng;
  console.log(coord)

  lat = coord.lat;
  lng = coord.lng;

  buffer.removeFrom(map)
  
  buffer = L.circle([coord.lat, coord.lng], {
    color: '#FFFFFF',
    fillColor: '#FFFFFF',
    fillOpacity: 0.5,
    radius: 950}).addTo(map);
  }


// ----------------------------------Lien au serveur-----------------------------------------------------

var PM10_SQL = L.geoJSON();

function requête_SQL(lat,lng){  

  var theme = 'NULL'
  console.log(lat)
  console.log(lng)
  var pm = document.getElementById("pm");
  var struc = document.getElementById("struc");
  var am = document.getElementById("am");
  if(pm.style.display === "block"){


  theme = 'moy_pm_10'


  }else if(struc.style.display === "block"){


  theme = 'dist_struc'


  } else if (am.style.display === "block"){

    
  theme = 'ind_am'
  }
  
 

  test = L.circle([lat.toFixed(3), lng.toFixed(3)], {
    color: '#FFFFFF',
    fillColor: '#FFFFFF',
    fillOpacity: 0.5,
    radius: 625}).addTo(map);
  

 // data_geojson

 console.log('PM10 _ Geojson')
 console.log(PM10)

 //JEU(PM10)

    // var zone_clic = L.marker([lat,lng]);
    // var zone_clic2 = L.marker([lat,lng+0.0001]);

    var data_all = L.geoJSON(data_geojson)

    group = new L.FeatureGroup();

    data_all.eachLayer(function(layer2){
       if (test.getBounds().intersects(layer2._latlngs)  == true){
         group.addLayer(layer2);     
      }
    })

  
    // console.log('groupe  :');
    // group.setStyle(
    //   function(feature){
    //       return {color: 'red'};
    //   });
    // group.addTo(map);

    // console.log('groJSON  :');
    var geoJson2 = group.toGeoJSON();
     
    // console.log(geoJson2);   
   // console.log(geoJson2.feature.properties.moy_pm_10);


   
   var copie = [];
   for (var i = 0; i < geoJson2.features.length; i++) {
    copie.push(geoJson2.features[i].properties.moy_pm_10);
   }
   console.log(copie); 

  var q1 = Quartile(copie, 0.25) 
  var q2 = Quartile(copie, 0.5) 
  var q3 = Quartile(copie, 0.75) 
  // console.log('q1 : '+ q1);     
  // console.log('q2 : '+ q2);
  // console.log('q3 : '+ q3);

  for (var i = 0; i < geoJson2.features.length; i++) {
    if (geoJson2.features[i].properties.moy_pm_10 < q1) {
      geoJson2.features[i].properties.classe = 1
    } else if (geoJson2.features[i].properties.moy_pm_10 < q2 ){
      geoJson2.features[i].properties.classe = 2
    } else if (geoJson2.features[i].properties.moy_pm_10 < q3 ){
      geoJson2.features[i].properties.classe = 3
    } else if (geoJson2.features[i].properties.moy_pm_10 >= q3 ){
      geoJson2.features[i].properties.classe = 4
    }
   }
   console.log('Fichier OK :');
   console.log(geoJson2);
  JEU(geoJson2)

      //console.log('nbre :' + bloc.feature.properties.Bombnum);


  // var demineur = $.ajax({
  //   type: 'POST',
  //   url:"http://127.0.0.1:5000/emprise?lat="+lat+'&lng='+lng+'&theme='+theme,
  //   dataType: "json",
  //   responseType: "json",
  //   success: console.log("Démineur data successfully loaded."),
  //   success : function(json, code) {
  
  //     console.log('JSON :')
  //   console.log(json)
  //    //JEU(json)
     
  //   },
  //   error: function (xhr) {
  //     alert(xhr.statusText)
  //   }
  // });

  }
