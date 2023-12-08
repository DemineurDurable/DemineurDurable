   // OK
   /////////////////////////////// PREPARATION DE LA CARTOGRPAHIE //////////////////////////////////////////////////////////////////////////////////////////////////////////

   var map_jeu = L.map('map_jeu',{
    maxZoom: 19,
    minZoom: 10,
    maxBounds: [[46, 6], [45.3, 4]
        ],});

    L.control.scale({imperial : false}).addTo(map_jeu);

  //Initialisation d'un objet map qui sera affiché dans la divave l'id  map
  var osmUrl= 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
 // var osmUrl= 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
  //var osmUrl= 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
  //la variable osmUrl contient l'url qui va nous permettre de récup les images qui constitueront le fond de notre carte

  var osmAttrib='Map data c OpenStreetMap contributors & test cartocdn.com';
  //la vaiable osmAttrib contient la source de la carte, elle s'affichera en bas à droite de notre carte
  var osm = new L.TileLayer(osmUrl, {attribution:osmAttrib}).addTo(map_jeu);

  
function JEU(requete_SQL){
  
  const start = Math.round(new Date() / 1000) ;
  console.log('debut : '+ start)
    //Initialisation d'un objet map qui sera affiché dans la divave l'id  map
  //var osmUrl= 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmUrl= 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
  //la variable osmUrl contient l'url qui va nous permettre de récup les images qui constitueront le fond de notre carte

  var osmAttrib='Map data c OpenStreetMap contributors & maps.stamen.com';
  //la vaiable osmAttrib contient la source de la carte, elle s'affichera en bas à droite de notre carte
  var osm = new L.TileLayer(osmUrl, {attribution:osmAttrib})

map_jeu.eachLayer(function (layer) {
  map_jeu.removeLayer(layer);
});
osm.addTo(map_jeu);
  
  PM10_SQL = requete_SQL
  var x = document.getElementById("lancer_emprise");
  var y = document.getElementById("lancer_jeu");

  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";

  } else {
    x.style.display = "none";
    y.style.display = "block";
  }

/////////////////////////////// PREPARATION DU JEU POUR LANCER UNE PARTIE  //////////////////////////////////////////////////////////////////////////////////////////////////////////


    // GESTION DES GROUPE
    grillebomb = new L.LayerGroup();
    map_jeu.addLayer(grillebomb);
    var nb_case_tot = PM10_SQL.features.length

    // GESTION DU NOMBRE DE BOMBE Création de la propriété bombes
    //console.log(PM10_SQL.features)
    var comptebomb3 = Math.round(0.1 * nb_case_tot)
    var comptebomb2 = Math.round(0.05 * nb_case_tot)
    var comptetot = comptebomb3 + comptebomb2
    var nbbombtot = comptetot
    var nb_case_ouv = 0
    var min_c0 = 100;
    var max_c0 = 0;
    var max_c1 = 0;
    var max_c2 = 0;
    var max_c3 = 0;
    console.log(Object.keys(PM10_SQL.features))

    // PLACEMENT DES BOMBES
    while (comptetot > 0) {
        var keyal = Math.floor(Math.random()* (PM10_SQL.features.length - 1) +1);
        console.log(keyal)
        if ((PM10_SQL.features[keyal].properties.classe == 4 && comptebomb3 > 0) || (PM10_SQL.features[keyal].properties.classe == 3 && comptebomb2 > 0)) {
          if (PM10_SQL.features[keyal].properties.Bombnum != 99) {
            PM10_SQL.features[keyal].properties.Bombnum = 99
          if (PM10_SQL.features[keyal].properties.classe == 4){
          comptebomb3--
          comptetot--
          console.log('comptebomb3 : '+comptebomb3)
          }
        else {
          comptebomb2--
          comptetot--
          console.log('comptebomb2 : '+comptebomb2)
          }
        }
      }
    }

    // GESTION DES DONNEES
    // à modifier faire appelle à un point py pour lancer une requête sur serveur

    var def_bomb = L.geoJSON(PM10_SQL)

    var test = L.geoJSON(PM10_SQL,{
        style : {fillColor : "#FFFFFF",
        weight: 2,
        opacity: 1,
        color: "#CCCCCC",
        fillOpacity: 0.7},
        onEachFeature : actionGeom
      }).addTo(grillebomb)

      

    // GESTION DES PANELS bombe
    map_jeu.createPane('imagebg');
    map_jeu.getPane('imagebg').style.zIndex = 0.5;
    map_jeu.fitBounds(test.getBounds());

    // DEFINITION DU CHEMIN DES IMAGES
    var imageUrl = 'images/bombe.png'
    // IMAGES BOMBES et VALEUR LEGENDE TOTALE
    var mintot = 0;
    var maxtot_c0 = 0;
    var maxtot_c1 = 0;
    var maxtot_c2 = 0;
    var maxtot_c3 = 0;

    var pm = document.getElementById("pm");
    var struc = document.getElementById("struc");
    var am = document.getElementById("am");
    if(pm.style.display === "block"){
      imageUrl = 'images/bombe1.png';
      mintot = 12.9;
      maxtot_c0 = 16.2;
      maxtot_c1 = 18.6;
      maxtot_c2 = 22.1;
      maxtot_c3 = 25;
      nommax = '25 +';
      coul_1 = '#F8E7D2';
      coul_2 = '#E0A7A5';
      coul_3 = '#A7496F';
      coul_4 = '#753256';
      haut_1 = ((maxtot_c0 - mintot)*100 / (maxtot_c3-mintot));
      haut_2 = ((maxtot_c1- maxtot_c0)*100 / (maxtot_c3-mintot));
      haut_3 = ((maxtot_c2 - maxtot_c1)*100 / (maxtot_c3-mintot));
      haut_4 = ((maxtot_c3 - maxtot_c2)*100 / (maxtot_c3-mintot));
      titre = "Moyenne annuelle de concentration en PM10 (en µm/m3)";

    }else if(struc.style.display === "block"){
      imageUrl = 'images/bombe2.png';
      mintot = 0;
      maxtot_c0 = 1000;
      maxtot_c1 = 2000;
      maxtot_c2 = 3000;
      maxtot_c3 = 4000;
      nommax = maxtot_c3;
      coul_1 ='#FFF3CB';
      coul_2 ='#FFD877';
      coul_3 ='#F5B618';
      coul_4 ='#C86818';
      haut_1 = ((maxtot_c0 - mintot)*100 / (maxtot_c3-mintot));
      haut_2 = ((maxtot_c1- maxtot_c0)*100 / (maxtot_c3-mintot));
      haut_3 = ((maxtot_c2 - maxtot_c1)*100 / (maxtot_c3-mintot));
      haut_4 = ((maxtot_c3 - maxtot_c2)*100 / (maxtot_c3-mintot));
      titre = "Distance aux structures sensibles (en m)";

    } else if (am.style.display === "block"){
      imageUrl = 'images/bombe3.png';
      mintot = 0.23;
      maxtot_c0 = 0.46;
      maxtot_c1 = 0.52;
      maxtot_c2 = 0.59;
      maxtot_c3 = 0.7;
      nommax = '0.7 +';
      coul_1 = '#FDE2BA';
      coul_2 = '#ECB75D';
      coul_3 = '#C07500';
      coul_4 = '#834734';

      haut_1 = ((maxtot_c0 - mintot)*100 / (maxtot_c3-mintot));
      haut_2 = ((maxtot_c1- maxtot_c0)*100 / (maxtot_c3-mintot));
      haut_3 = ((maxtot_c2 - maxtot_c1)*100 / (maxtot_c3-mintot));
      haut_4 = ((maxtot_c3 - maxtot_c2)*100 / (maxtot_c3-mintot));
      titre = "Indice de sensibilité à la pollution (de 0 à 1)";

    } else{

    }

   
  

    // IMAGES NUMEROS
    var imageUrl0 = 'images/0.png';
    var imageUrl1 = 'images/1.png';
    var imageUrl2 = 'images/2.png';
    var imageUrl3 = 'images/3.png';
    var imageUrl4 = 'images/4.png';
    var imageUrl5 = 'images/5.png';
    var imageUrl6 = 'images/6.png';
    var imageUrl7 = 'images/7.png';
    var imageUrl8 = 'images/8.png';
    //=================================================================== FONCTIONS =======================================================================================

    // ACTION SUR CASE
    function actionGeom(feature, layer) {
    // console.log('MES CASES BOMBE A COTEE :' + layer.feature.properties.Bombnum + ' GID : ' + layer.feature.properties.gid);
      num(layer);
     // console.log('feature')
     // console.log(feature)
      compteMaxclasses(feature);
      //compteMaxclasses(feature);
      layer.on({
          mouseover: highlightFeature,
          mouseout: resetHighlight,
          click: onclick_case_dem,
          contextmenu : onclick_droit
      });
    }


    // MISE EN FORME AU SURVOL DE LA SOURIE
    function highlightFeature(e) {
      e.target.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
      });
      }
      
      // REMISE EN FORME AU DEPART DE LA SOURIE
      function resetHighlight(e) {
        // e.target.bindPopup('Coucou')
        e.target.setStyle({ 
          weight: 2,
          color: "#CCCCCC"})  
      }

    // ACTION LORS D'UN CLIC
    function onclick_case_dem(e) {
      decouverte_case(e.target);
      style_analyse(e.target);
      add_image_info(e.target);
      if (e.target.feature.properties.ouvert != true) {
        nb_case_ouv++
      };
      e.target.feature.properties.ouvert = true;
      update_encart(info);
      
      perdu(e.target)
      if (e.target.feature.properties.Bombnum != 99) {
        gagne();
        }
    }

    // ACTION AU CLICK DROIT
    function onclick_droit(e) {
      drapeaux(e.target);
      update_encart(info);
    }

    ////////////////////////////////////////////////// AUTRES FONCTION REALISANT DES ACTIONS LORS D'UN CLIC //////////////////////////////////////////////////////////////////
    // Affichage de l'analyse sur une case 
    function style_analyse(e) {
      remove_drapeau(e);
      if (e.feature.properties.classe == 1) {
        e.setStyle({fillColor : "#C6DA4B"})
      } else if (e.feature.properties.classe == 2) {
        e.setStyle({fillColor : "#FEAB01"})      
      } else if (e.feature.properties.classe == 3) {
        e.setStyle({fillColor : "#CA1312"})  
      } else if (e.feature.properties.classe == 4) {
        e.setStyle({fillColor : "#7A318C"})  
      } 
    }
  

    // Affichage du numéro/bomb démineur sur une case 
    coucheImage = new L.LayerGroup();
    grillebomb.addLayer(coucheImage);

    function add_image_info(e) {
      if (e.feature.properties.Bombnum == 99) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      } else 
      if (e.feature.properties.Bombnum == 1) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl1, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      }else 
      if (e.feature.properties.Bombnum == 2) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl2, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (e.feature.properties.Bombnum == 3) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl3, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (e.feature.properties.Bombnum == 4) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl4, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (e.feature.properties.Bombnum == 5) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl5, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      } else
      if (e.feature.properties.Bombnum == 6) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl6, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (e.feature.properties.Bombnum == 7) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl7, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (e.feature.properties.Bombnum == 8) {
        imageBounds = [e.getBounds()];
        L.imageOverlay(imageUrl8, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(coucheImage);
      }else {} 
    }

    // Affichage de toute les bombes du démineurs
    function add_all_img_resultat (feature, layer) {
      if (feature.properties.Bombnum == 99) {
        imageBounds = [layer.getBounds()];
        var bomb = L.imageOverlay(imageUrl, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(grillebomb);
      }else
      if (feature.properties.Bombnum == 1) {
        imageBounds = [layer.getBounds()];
        L.imageOverlay(imageUrl1, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(coucheImage);
      }else 
      if (feature.properties.Bombnum == 2) {
        imageBounds = [layer.getBounds()];
        L.imageOverlay(imageUrl2, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (feature.properties.Bombnum == 3) {
        imageBounds = [layer.getBounds()];
        L.imageOverlay(imageUrl3, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (feature.properties.Bombnum == 4) {
        imageBounds = [layer.getBounds()];
        L.imageOverlay(imageUrl4, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (feature.properties.Bombnum == 5) {
        imageBounds = [layer.getBounds()];
        L.imageOverlay(imageUrl5, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(coucheImage);
      } else
      if (feature.properties.Bombnum == 6) {
        imageBounds = [layer.getBounds()];
        L.imageOverlay(imageUrl6, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (feature.properties.Bombnum == 7) {
        imageBounds = [layer.getBounds()];
        L.imageOverlay(imageUrl7, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(coucheImage);
      }else
      if (feature.properties.Bombnum == 8) {
        imageBounds = [layer.getBounds()];
        L.imageOverlay(imageUrl8, imageBounds, {opacity : 0.5, pane : 'imagebg'}).addTo(coucheImage);
      }else {}
    } 

    // Affichage de toute l'analyse de la thématique
    function visualisation(Donnees_JSON){
 // console.log('DONNEE_ANALYSE')
 // console.log(Donnees_JSON)
    var pm = document.getElementById("pm");
    var struc = document.getElementById("struc");
    var am = document.getElementById("am");

    if(pm.style.display === "block"){
    theme = 'moy_pm_10'
    couleur = ["#C6DA4B","#FEAB01","#CA1312","#7A318C"]
    L.choropleth(Donnees_JSON, {
        valueProperty: 'classe',
        scale: couleur,
        steps: 4, // Nombre de classes
        mode: 'q',
        style: {
        weight: 0,
        fillOpacity: 0.8,
        opacity: 1,
        color: "#CCCCCC"
    }
    }).addTo(map_jeu).bindPopup(function(layer){return('<b> classe N° ' + layer.feature.properties.classe + '<br> <b> Moyenne de pollution : ' + layer.feature.properties.moy_pm_10.toFixed(2) +' µg/m3')})
    
    }else if(struc.style.display === "block"){
    theme = 'dist_struc'
    couleur = ["#C6DA4B","#FEAB01","#CA1312","#7A318C"]

        L.choropleth(Donnees_JSON, {
            valueProperty: 'classe',
            scale: couleur,
            steps: 4, // Nombre de classes
            mode: 'q',
            style: {
            weight: 0,
            fillOpacity: 0.8,
            opacity: 1,
            color: "#CCCCCC"
        }
        }).addTo(map_jeu).bindPopup(function(layer){return('<b> classe N° ' + layer.feature.properties.classe + '<br> <b> Distance à une strucutre : ' + Math.round(layer.feature.properties.dist_struc) +'m')})
    } else if (am.style.display === "block"){
    theme = 'ind_am'
    couleur = ["#C6DA4B","#FEAB01","#CA1312","#7A318C"]
        L.choropleth(Donnees_JSON, {
            valueProperty: 'classe',
            scale: couleur,
            steps: 4, // Nombre de classes
            mode: 'q',
            style: {
            weight: 0,
            fillOpacity: 0.8,
            opacity: 1,
            color: "#CCCCCC"
        }
        }).addTo(map_jeu).bindPopup(function(layer){return('<b> classe N° ' + layer.feature.properties.classe + '<br> <b> indicateur de  ' + layer.feature.properties.ind_am.toFixed(2) +' ')})
    }

    
      }

    // PLACEMENT DES NUMEROS PROXIMITE BOMBES
    function num(bloc){
      //console.log('CLICK SUR :' + bloc.feature.properties.gid);
      if (bloc.feature.properties.Bombnum != 99){
       // console.log('MA CASE properties bombe :' + bloc.feature.properties.Bombnum + ' classe : ' + bloc.feature.properties.classe);
        var lim = bloc.getBounds();
        var buffer = lim.pad(0.1);
        var nb_bomb = 0;
        def_bomb.eachLayer(function(layer2){
          if (buffer.intersects(layer2._latlngs) == true){

            if (layer2.feature.properties.Bombnum == 99){
              nb_bomb++;
            //console.log('MES CASES BOMBE A COTEE :' + layer2.feature.properties.Bombnum + ' classe : ' + layer2.feature.properties.classe);
            } 
            //console.log('Nombre de bombe : ' + nb_bomb)
            bloc.feature.properties.Bombnum = nb_bomb; 
          }
        })
        //console.log('nbre :' + bloc.feature.properties.Bombnum);
      } else {}
    }

    function decouverte_case(bloc){
      //console.log('CLICK SUR :' + bloc.feature.properties.gid);
      if (bloc.feature.properties.Bombnum == 0){
        //console.log('MA CASE SUR CLIC :' + bloc.feature.properties.Bombnum + ' GID : ' + bloc.feature.properties.gid);
        var lim = bloc.getBounds();
        var buffer = lim.pad(0.1);
        //console.log('MA BOUND '+lim)
        test.eachLayer(function(layer2){
          if (buffer.intersects(layer2._latlngs) == true){
            if (layer2.feature.properties.Bombnum != 99 ){
              style_analyse(layer2);
              add_image_info(layer2);
              if (layer2.feature.properties.ouvert != true) {
                nb_case_ouv++
              };
              layer2.feature.properties.ouvert = true;
              update_encart(info);

            }
          }
        })
        //console.log('nbre :' + bloc.feature.properties.Bombnum);
      } else {}
    }

    // ajout popup pour chaque case
    function add_message(e) {
      if (e.target.feature.properties.Bombnum == 99) {
        test.bindPopup('PERDU');
      } else {
        test.bindPopup(function(layer){
          return('<b> classe N° ' + layer.feature.properties.classe + '<br> <b> Moyenne de pollution : ' + Math.round(layer.feature.properties.moy) +' mg')});
      }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ========================================== INTERFACE UTILISATEUR ===============================
    // poser des drapeaux
    var nbdrap = 0;
    var imageUrldrap = 'images/drapeau.png'

    function drapeaux(e) {
      if (e.feature.properties.ouvert != true && e.feature.properties.drapeau != true) {
        e.feature.properties.drapeau = true;
        imageBounds = [e.getBounds()];
        e.feature.properties.drap = L.imageOverlay(imageUrldrap, imageBounds, {opacity : 1, pane : 'imagebg'}).addTo(grillebomb);
        nbdrap++
      } else {
        remove_drapeau(e)
      }
    }

    function remove_drapeau(e){
        if (e.feature.properties.drapeau == true){
        e.feature.properties.drapeau = false
        e.feature.properties.drap.remove(map_jeu);
        nbdrap--
      }
    }


    // control pour montrer le nombre de bombes
    const info = L.control();

      info.onAdd = function (map) {
        
        this._div = L.DomUtil.create('div', 'info');
        update_encart(info);
        return this._div;

      };

    update_encart = function (encart) {

    
        encart._div.innerHTML = '<div id = tot style="width:120%;margin-left:-50%;border-top-right-radius : 20px;border-bottom-left-radius : 20px; background-color: rgba(199, 218, 75, 0.61)">' +
          '<h2 style = "margin-left:10%">Cases dans la zone : </h2>' +
          '<b style = "margin-left:10%">' + nbdrap + ' / '  + nbbombtot + ' bombes supposées </b>' +
          '<br /> <b style = "margin-left:10%">' + nb_case_ouv + ' / ' + (nb_case_tot - nbbombtot) + ' cases ouvertes </b>' +
        '</div>';
      };

      info.addTo(map_jeu);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ========================================= PARTIE GAGNEE / PERDUE ======================================

    // PARTIE GAGNEE
    gagne = function() {
      if (nb_case_ouv >= (nb_case_tot-nbbombtot)){
      // enlever la grille du jeu
          //alert('ENORME !!!! \nTu as gagné');
          coucheImage.removeFrom(grillebomb);
          coucheImage = new L.LayerGroup();
          grillebomb.addLayer(coucheImage);
            // Affichage grille bombes
            var resultat_bomb = L.geoJSON(PM10_SQL,{
              style : {fillColor : "#FFFFFF",
              weight: 2,
              opacity: 1,
              color: "#CCCCCC",
              fillOpacity: 0.1},
              onEachFeature : endgame
          }).addTo(map_jeu);  
            // ajouter la couche d'analyse 
          visualisation(PM10_SQL)
          test.removeFrom(grillebomb)
          message_end('gagner');
      }
    }

    // PARTIE PERDUE
    perdu = function(e) {
      if (e.feature.properties.Bombnum == 99) {    
          // enlever la grille du jeu
          //alert('Tu es nul');
          coucheImage.removeFrom(grillebomb);
          coucheImage = new L.LayerGroup();
          grillebomb.addLayer(coucheImage);
            // Affichage grille bombes
            var resultat_bomb = L.geoJSON(PM10_SQL,{
              style : {fillColor : "#FFFFFF",
              weight: 2,
              opacity: 1,
              color: "#CCCCCC",
              fillOpacity: 0.1},
              onEachFeature : endgame
          }).addTo(map_jeu);
          // ajouter la couche d'analyse 
          visualisation(PM10_SQL)
          test.removeFrom(grillebomb)
          message_end('perdu');      
        }
    }

    // Fonction pour refaire les numeros puis mettre les images
    endgame = function(feature,layer){
      num(layer)
      add_all_img_resultat(feature,layer)
    }

    
/////////////////////////////////////////////////////// LEGENDE
// recupération légende petite emprise 

message_end = function(resultat){
  const end = (Math.round(new Date() / 1000))- start;
  var minutes = Math.floor(end/60);  // 15        
  var seconds = end % 60;          // 21.856
  //var time = minutes + ":" + seconds;  // 15:21.86
  //console.log('timing : '+ time)
  if(resultat == 'gagner'){
    alert('ENORME !!!! \nTu as gagné \n tu a mis :'+minutes+' min et '+seconds+'sec');
  }else {
    var bombtot =  (100 - nbbombtot) 
    alert('Pas de chance ! essaye à nouveau \ntu a mis : '+minutes+' min et '+seconds+'sec \n'+nbdrap+'/'+nbbombtot+' bombes supposées \n'+nb_case_ouv+'/'+bombtot+'  cases ouvertes');
  }
  info.remove(map_jeu)
}







////////////////////////////


function compteMaxclasses(feature) {
  var pm = document.getElementById("pm");
    var struc = document.getElementById("struc");
    var am = document.getElementById("am");
    if(pm.style.display === "block"){
      if (feature.properties.classe == 1) {
        if (feature.properties.moy_pm_10 < min_c0){
          min_c0 = feature.properties.moy_pm_10;
        }
        if (feature.properties.moy_pm_10 > max_c0) {
          max_c0 =feature.properties.moy_pm_10;
        }
      } else if (feature.properties.classe == 2) {
        if (feature.properties.moy_pm_10 > max_c1) {
          max_c1 = feature.properties.moy_pm_10;
        }     
      } else if (feature.properties.classe == 3) {
        if (feature.properties.moy_pm_10 > max_c2) {
          max_c2 = feature.properties.moy_pm_10;
        } 
      } else if (feature.properties.classe == 4) {
        if (feature.properties.moy_pm_10 > max_c3) {
          max_c3 = feature.properties.moy_pm_10;
        } 
      } else {}

    }else if(struc.style.display === "block"){
      if (feature.properties.classe == 1) {
        if (feature.properties.dist_struc < min_c0){
          min_c0 = feature.properties.dist_struc;
        }
        if (feature.properties.dist_struc > max_c0) {
          max_c0 =feature.properties.dist_struc;
        }
      } else if (feature.properties.classe == 2) {
        if (feature.properties.dist_struc > max_c1) {
          max_c1 = feature.properties.dist_struc;
        }     
      } else if (feature.properties.classe == 3) {
        if (feature.properties.dist_struc > max_c2) {
          max_c2 = feature.properties.dist_struc;
        } 
      } else if (feature.properties.classe == 4) {
        if (feature.properties.dist_struc > max_c3) {
          max_c3 = feature.properties.dist_struc;
        } 
      } else {}

    } else if (am.style.display === "block"){
      if (feature.properties.classe == 1) {
        if (feature.properties.ind_am < min_c0){
          min_c0 = feature.properties.ind_am;
        }
        if (feature.properties.ind_am > max_c0) {
          max_c0 = feature.properties.ind_am;
        }
      } else if (feature.properties.classe == 2) {
        if (feature.properties.ind_am > max_c1) {
          max_c1 = feature.properties.ind_am;
        }     
      } else if (feature.properties.classe == 3) {
        if (feature.properties.ind_am > max_c2) {
          max_c2 = feature.properties.ind_am;
        } 
      } else if (feature.properties.classe == 4) {
        if (feature.properties.ind_am > max_c3) {
          max_c3 =feature.properties.ind_am;
        } 
      } else {}

    } else{

    }




}
  
  // Calculs pour gérer la position de la légende

/*var min_c0 = 15;
var max_c3 = 26;*/
if (max_c3 > maxtot_c3) {
	hautlegzone = ((maxtot_c3 - min_c0)*100 / (maxtot_c3-mintot));
	margebotzone = (100 / (maxtot_c3 - mintot))*(maxtot_c3 - maxtot_c3);
}else {
	hautlegzone = ((max_c3 - min_c0)*100 / (maxtot_c3-mintot));
	margebotzone = (100 / (maxtot_c3 - mintot))*(maxtot_c3 - max_c3);
}

// hautlegzone = ((max_c3 - min_c0)*100 / (maxtot_c3-mintot));
margetopzone = (100 / (maxtot_c3 - mintot))*(min_c0 - mintot);
// margebotzone = (100 / (maxtot_c3 - mintot))*(maxtot_c3 - max_c3);

console.log('hauteur : ' + hautlegzone);
console.log('top : ' + margetopzone);
console.log('bot : ' + margebotzone);
// Affichage légende double
console.log('min_c0 : '+min_c0)
console.log('mintot : '+mintot)
console.log('maxtot_c3 : '+maxtot_c3)

document.getElementById('div1').innerHTML = '<div id = tot>' +
'<div id= titre align = center style ="width : 100%; margin-bottom : 10%;"> <p>'+ titre  + '</p></div>' +
    '<div id=titredeb align = center style = "width : 100%">' +
      "<div id= titre> <p> Zone d'étude </p></div>" +
      "<div id= titre> <p> Métropole </p></div>" +
    '</div>' +
    '<div id = toutenglobe>' + 
      '<div id = zonetitre>' + 
      	'<div id = zone2 style = "height : '+ margetopzone +'%;">  </div>' + 
        '<div id = zone style = "height : '+ hautlegzone  +'%;">' +
          '<div id = zoneecriture align="right" >' +
            '<div id = "coul3" style="margin-top: -20%;">' + min_c0.toFixed(2) + '</div>' +
            '<div id = "coul2" style="justify-content : center;" >' + max_c0.toFixed(2) + '</div>' +
            '<div id = "coul2" style="justify-content : center;">' + max_c1.toFixed(2) + '</div>' +
            '<div id = "coul2" style="justify-content : center;">' + max_c2.toFixed(2) + '</div>' +
            '<div id = "coul3" style=" justify-content : flex-end; position : bottom; margin-bottom : -10%;">' + max_c3.toFixed(2) + '</div>' +
          '</div>' +
          '<div id = couleurcurseur>' +
            '<div id = zonecouleur>' +
              '<div id = "coul1" style="background-color: #C6DA4B; border-top-right-radius : 20px; border-top-left-radius : 20px;">   </div>' +
              '<div id = "coul1" style="background-color: #FEAB01;">   </div>' +
              '<div id = "coul1" style="background-color: #CA1312;">   </div>' +
              '<div id = "coul1" style="background-color: #7A318C; border-bottom-right-radius : 20px; border-bottom-left-radius : 20px;">  </div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div id = zone2 style = "height : '+ margebotzone +'%;">  </div>' +
      '</div>' +
      // Legende zone totale
      '<div id = totaltitre>' +
        '<div id = totale>' +
          '<div id = totalecouleur>' +
            '<div id = "coul1" style="height : '+ haut_1  +'%;background-color:'+ coul_1 +'; border-top-right-radius : 20px; border-top-left-radius : 20px;">  </div>' +
            '<div id = "coul1" style="height : '+ haut_2 +'%;background-color: '+ coul_2 +'; color : rgba(0,0,0,0)">  </div>' +
            '<div id = "coul1" style="height : '+ haut_3 +'%;background-color: '+ coul_3 +'; color : rgba(0,0,0,0)">  </div>' +
            '<div id = "coul1" style="height : '+ haut_4 +'%;background-color: '+ coul_4 +'; border-bottom-right-radius : 20px; border-bottom-left-radius : 20px;">  </div>' +
          '</div>' +
          '<div id = totaleecriture align = center>'+
            '<div id = "coul3">' + mintot + '</div>' +
            '<div id = "coul2" style = "height : '+ haut_1  +'%; margin-top : -20%;">' + maxtot_c0 + '</div>' +
            '<div id = "coul2" style = "height : '+ haut_2  +'%; margin-top : -20%;">' + maxtot_c1 + '</div>' +
            '<div id = "coul2" style = "height : '+ haut_3  +'%; margin-top : -20%;">' + maxtot_c2 + '</div>' +
            '<div id = "coul2" style = "height : '+ haut_4  +'%; margin-top : -20%;">' + nommax + '</div>' +
          '</div>' +
        '</div>' +
      '</div>'+
    '</div>'+
    // '<div id=titrefin align = center style = "width : 100%">  </div>' +
  '</div>'

  console.log('max_c2 : '+max_c2);
  console.log('max_c3 : '+max_c3);
  console.log('max_c1 : '+max_c1);
  console.log('max_c0 : '+max_c0);
  console.log('mmin_c0 : '+min_c0);

}

