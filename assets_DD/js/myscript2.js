
var pm = document.getElementById("pm");
var struc = document.getElementById("struc");
var am = document.getElementById("am");
pm.style.display = "block";
struc.style.display = "none";
am.style.display = "none";

// var pm_leg = document.getElementById("legende_pm10");
// var struc_leg = document.getElementById("legende_structure");
// var am_leg = document.getElementById("legende_indice");
// pm_leg.style.display = "block";
// struc_leg.style.display = "none";
// am_leg.style.display = "none";





// Mise à jours PM10
document.getElementById("theme-PM10").addEventListener("click", function () {
	document.getElementById("my-text-thematique").innerHTML = "Les PM10 sont des particules fines dont le diamètre est inférieur à 10 micromètres (µm). Elles font parties des particules polluantes pouvant présenter un risque pour notre santé. <br><br>La recommandation de <a onclick=" +"window. open(this. href); return false;" + "href="+"https://www.who.int/fr/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health"+"> <u>l’OMS</u> </a> (Organisation Mondiale de la Santé) est de ne pas dépasser les 20 µg/m3 en moyenne annuelle. <br><br>Les données que vous pourrez visualiser une fois la partie terminée, représentent une moyenne des concentrations annuelles en µg/m3 sur des carrés de 200m de côté.";
});

document.getElementById("theme-PM10").addEventListener("click", function () {
	document.getElementById("my-text-metode").innerHTML = "Les données ont à l’origine une résolution spatiale de 10m, elles ont été regroupées pour former des mailles de 200m de côté. Chacune des mailles comporte la moyenne annuelle des émissions de PM10 dans cette zone. ";
});

document.getElementById("theme-PM10").addEventListener("click", function () {
	document.getElementById("my-text-source").innerHTML = "Les données sur la qualité de l’aire proviennent de la carte des moyennes annuelles de concentration en PM10 pour l’année 2018 proviennent de l’organisme <a onclick="+"window. open(this. href); return false;"+"href="+"https://www.atmo-auvergnerhonealpes.fr/fiche-carte/exposition-la-pollution-atmospherique-en-2018"+"> <u>Atmo Auvergne-Rhône-Alpes.</u></a>";
});

document.getElementById("theme-PM10").addEventListener("click", function () {
	document.getElementById("titre_jeu").innerHTML = "Pollution de l'air";
});

document.getElementById("theme-PM10").addEventListener("click", function () {

	  var pm = document.getElementById("pm");
	  var struc = document.getElementById("struc");
	  var am = document.getElementById("am");
	  pm.style.display = "block";
	  struc.style.display = "none";
      am.style.display = "none";
      // var pm_leg = document.getElementById("legende_pm10");
      // var struc_leg = document.getElementById("legende_structure");
      // var am_leg = document.getElementById("legende_indice");
      // pm_leg.style.display = "block";
      // struc_leg.style.display = "none";
      // am_leg.style.display = "none";
      visu()
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

      document.getElementById('div1').innerHTML = '<div id = tot>' +
    '<div id=titredeb align = center style = "width : 100%">' +
      "<div id= titre>  Moyenne annuelle de concentration en PM10 (en µm/m3)</div>" +
    '</div>' +
    '<div id = toutenglobe>' + 
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
  '</div>'
});

// Mise à jour structure
document.getElementById("theme-structures").addEventListener("click", function () {
	document.getElementById("my-text-thematique").innerHTML = "Les structures sensibles sont des lieux susceptibles d’accueillir un public plus sensible à la pollution de l’air tel que les enfants, les personnes malades ou les sportifs durant leur activité physique. De façon plus concrète il s’agit des hôpitaux, des établissements scolaires (écoles élémentaires et collèges), ainsi que des parcs où beaucoup d’enfants et sportifs peuvent être présents.";
});

document.getElementById("theme-structures").addEventListener("click", function () {
	document.getElementById("my-text-metode").innerHTML = "Cette thématique a été traité de manière à figurer non pas une densité au sein des mailles, mais un éloignement. Ainsi, les valeurs indiquées dans la légende correspondent à la distance entre le centre de chacun des carrés et la structure la plus proche. Si un carré a une distance de 0m cela veut dire qu’une structure se trouve en son centre, si la distance est de 4000m cela veut dire que la structure la plus proche de son centre est à 4km.";
});

document.getElementById("theme-structures").addEventListener("click", function () {
	document.getElementById("my-text-source").innerHTML = "Les établissements scolaires (de la maternelle au collège), parcs et hôpitaux proviennent de l'Open Data de la Métropole de Lyon.";
});

document.getElementById("theme-structures").addEventListener("click", function () {
	document.getElementById("titre_jeu").innerHTML = "structures sensibles";
});

document.getElementById("theme-structures").addEventListener("click", function () {

	  var pm = document.getElementById("pm");
	  var struc = document.getElementById("struc");
	  var am = document.getElementById("am");
	  pm.style.display = "none";
	  struc.style.display = "block";
      am.style.display = "none";
      // var pm_leg = document.getElementById("legende_pm10");
      // var struc_leg = document.getElementById("legende_structure");
      // var am_leg = document.getElementById("legende_indice");
      // pm_leg.style.display = "none";
      // struc_leg.style.display = "block";
      // am_leg.style.display = "none";
      visu()
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

      document.getElementById('div1').innerHTML = '<div id = tot>' +
    '<div id=titredeb align = center style = "width : 100%">' +
      "<div id= titre> Distance aux structures sensibles (en m) </div>" +
    '</div>' +
    '<div id = toutenglobe>' + 
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
  '</div>'
});


// Mise à jour structure PM10
document.getElementById("theme-PM10-structures").addEventListener("click", function () {
	document.getElementById("my-text-thematique").innerHTML = "Il s’agit d’un indice de sensibilité à la pollution compris entre 0 et 1. Les zones proches de 0 sont peu polluées et éloignées des structures sensibles. A l’inverse, les zones proches de 1 sont proches des structures et fortement polluée, le risque y est donc plus élevé. Cet indicateur vous permet d’estimer le risque d’exposition des populations les plus sensibles à la pollution de l’air.";
});

document.getElementById("theme-PM10-structures").addEventListener("click", function () {
	document.getElementById("my-text-metode").innerHTML = "Afin de pouvoir être assemblées, les deux thématiques ont été combinées en un indicateur de sensibilité à la pollution, compris entre 0 à 1. <br><br> Pour obtenir une bonne visualisation, nous avons accordé 2 fois plus d’importance à la pollution qu’à la proximité aux structures sensibles. <br><br> Une maille peu polluée et éloignée des structures sensibles tendra vers 0, alors que si elle est très polluée et proche des structures elle se rapprochera de 1.<br><br>Dans les zones intermédiaires, il est plus complexe d’interpréter l’indicateur, d’autant plus qu’un double poids est accordé à la pollution. Par exemple, un indice autour de 0.6 pourrait s’expliquer par plusieurs combinaisons différentes de facteurs. Si l’on prend un exemple, cette zone pourrait avoir une proximité assez faible ou moyenne à la structure la plus proche, qui pourrait être contrebalancer par une valeur relativement élevée de pollution. Cette valeur serait toujours moins élevée que ne l’aurait requis un indicateur qui accorderait le même poids aux deux données pour le même indice de sensibilité. A l’inverse, pour avoir un indice élevé malgré une faible pollution, cela nécessiterait une proximité très forte à la structure sensible la plus proche de la maille considérée.<br><br>Pour plus de détails sur la méthode de traitement, vous pouvez consulter notre rapport sur la page d’accueil.";
});

document.getElementById("theme-PM10-structures").addEventListener("click", function () {
	document.getElementById("my-text-source").innerHTML = "Les établissements scolaires (de la maternelle au collège), parcs et hôpitaux proviennent des données de la métropole de Lyon. <br>Les données sur la qualité de l’aire proviennent de la carte des moyennes annuelles de concentration  en PM10 pour l’année 2018, réaliser par Atmo Auvergne-Rhône-Alpes.";
});

document.getElementById("theme-PM10-structures").addEventListener("click", function () {
	document.getElementById("titre_jeu").innerHTML = "Indice de sensibilité à la polution";
});

document.getElementById("theme-PM10-structures").addEventListener("click", function () {

	var pm = document.getElementById("pm");
	var struc = document.getElementById("struc");
	var am = document.getElementById("am");
	pm.style.display = "none";
	struc.style.display = "none";
    am.style.display = "block";
    // var pm_leg = document.getElementById("legende_pm10");
    // var struc_leg = document.getElementById("legende_structure");
    // var am_leg = document.getElementById("legende_indice");
    // pm_leg.style.display = "none";
    // struc_leg.style.display = "none";
    // am_leg.style.display = "block";
    visu()
    mintot = 0.23;
      maxtot_c0 = 0.46;
      maxtot_c1 = 0.52;
      maxtot_c2 = 0.59;
      maxtot_c3 = 0.7;
      nommax = '0.7+';
      coul_1 = '#FDE2BA';
      coul_2 = '#ECB75D';
      coul_3 = '#C07500';
      coul_4 = '#834734';

      haut_1 = ((maxtot_c0 - mintot)*100 / (maxtot_c3-mintot));
      haut_2 = ((maxtot_c1- maxtot_c0)*100 / (maxtot_c3-mintot));
      haut_3 = ((maxtot_c2 - maxtot_c1)*100 / (maxtot_c3-mintot));
      haut_4 = ((maxtot_c3 - maxtot_c2)*100 / (maxtot_c3-mintot));

      document.getElementById('div1').innerHTML = '<div id = tot>' +
    '<div id=titredeb align = center style = "width : 100%">' +
      "<div id= titre> Indice de sensibilité à la pollution </div>" +
    '</div>' +
    '<div id = toutenglobe>' + 
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
  '</div>'
    
});

// renvoie des varbiables 

/*document.getElementById("accepter").addEventListener("click", function () {
	var theme = "moy_pm_10"*/

/*document.getElementById("accepter").addEventListener("click", function () {
	document.getElementById("map_origin").id = "map_jeu"*/




	if(pm.style.display === "block"){
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

    }else if(struc.style.display === "block"){
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

    } else if (am.style.display === "block"){
      mintot = 0.23;
      maxtot_c0 = 0.46;
      maxtot_c1 = 0.52;
      maxtot_c2 = 0.59;
      maxtot_c3 = 0.7;
      nommax = '0.7+';
      coul_1 = '#FDE2BA';
      coul_2 = '#ECB75D';
      coul_3 = '#C07500';
      coul_4 = '#834734';

      haut_1 = ((maxtot_c0 - mintot)*100 / (maxtot_c3-mintot));
      haut_2 = ((maxtot_c1- maxtot_c0)*100 / (maxtot_c3-mintot));
      haut_3 = ((maxtot_c2 - maxtot_c1)*100 / (maxtot_c3-mintot));
      haut_4 = ((maxtot_c3 - maxtot_c2)*100 / (maxtot_c3-mintot));

    } else{

    }




document.getElementById('div1').innerHTML = '<div id = tot>' +
    '<div id=titredeb align = center style = "width : 100%">' +
      "<div id= titre>  Moyenne annuelle de concentration en PM10 (en µm/m3) </div>" +
    '</div>' +
    '<div id = toutenglobe>' + 
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
  '</div>'
  