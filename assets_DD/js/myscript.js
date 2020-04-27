var pm = document.getElementById("pm");
var struc = document.getElementById("struc");
var am = document.getElementById("am");

var y = document.getElementById("lancer_emprise");
var z = document.getElementById("lancer_jeu");

var page = document.getElementById("NB_page");

page.style.display = "none";

y.style.display = "block";
z.style.display = "none";

pm.style.display = "block";
struc.style.display = "none";
am.style.display = "none";

document.getElementById("nombre_depage").addEventListener("click", function () {
	var y = document.getElementById("NB_page");
	if(y.style.display == "block"){
		y.style.display = "none";
	} else{
		y.style.display = "block";
	}
	 
});

document.getElementById("theme-PM10").addEventListener("click", function () {
	document.getElementById("my-text-thematique").innerHTML = "Les PM10 sont des particules fines dont le diamètre est inférieur à 10 micromètres (µm). Elles font parties des particules polluantes pouvant présenter un risque pour notre santé. <br><br>La recommandation de <a onclick=" +"window. open(this. href); return false;" + "href="+"https://www.who.int/fr/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health"+"> <u>l’OMS</u> </a> (Organisation Mondiale de la Santé) est de ne pas dépasser les 20 µg/m3 en moyenne annuelle. <br><br>Les données que vous pourrez visualiser une fois la partie terminée, représentent une moyenne des concentrations annuelles en µg/m3 sur des carrés de 200m de côté.";
	document.getElementById("my-text-metode").innerHTML = "Les données ont à l’origine une résolution spatiale de 10m, elles ont été regroupées pour former des mailles de 200m de côté. Chacune des mailles comporte la moyenne annuelle des concentrations de PM10 dans cette zone.";
	document.getElementById("my-text-source").innerHTML = "Les données sur la qualité de l’aire proviennent de la carte des moyennes annuelles de concentration en PM10 pour l’année 2018 proviennent de l’organisme <a onclick="+"window. open(this. href); return false;"+"href="+"https://www.atmo-auvergnerhonealpes.fr/fiche-carte/exposition-la-pollution-atmospherique-en-2018"+"> <u>Atmo Auvergne-Rhône-Alpes.</u></a>";
	document.getElementById("titre_jeu").innerHTML = "Pollution de l'air";
	var y = document.getElementById("lancer_emprise");
	var z = document.getElementById("lancer_jeu");
	  y.style.display = "block";
	  z.style.display = "none";
	  var pm = document.getElementById("pm");
	  var struc = document.getElementById("struc");
	  var am = document.getElementById("am");
	  pm.style.display = "block";
	  struc.style.display = "none";
	  am.style.display = "none";
});



document.getElementById("theme-structures").addEventListener("click", function () {
	document.getElementById("titre_jeu").innerHTML = "structures sensibles";
	document.getElementById("my-text-source").innerHTML = "Les établissements scolaires (de la maternelle au collège), parcs et hôpitaux proviennent de l'Open Data de la Métropole de Lyon.";
	document.getElementById("my-text-metode").innerHTML = "Cette thématique a été traité de manière à figurer non pas une densité au sein des mailles, mais un éloignement. Ainsi, les valeurs indiquées dans la légende correspondent à la distance entre le centre de chacun des carrés et la structure la plus proche. Si un carré a une distance de 0m cela veut dire qu’une structure se trouve en son centre, si la distance est de 4000m cela veut dire que la structure la plus proche de son centre est à 4km.";
	document.getElementById("my-text-thematique").innerHTML = "Les structures sensibles sont des lieux susceptibles d’accueillir un public plus sensible à la pollution de l’air tel que les enfants, les personnes malades ou les sportifs durant leur activité physique. De façon plus concrète il s’agit des hôpitaux, des établissements scolaires (écoles élémentaires et collèges), ainsi que des parcs où beaucoup d’enfants et sportifs peuvent être présents.";

	var y = document.getElementById("lancer_emprise");
	var z = document.getElementById("lancer_jeu");
	 
	  y.style.display = "block";
	  z.style.display = "none";
	  var pm = document.getElementById("pm");
	  var struc = document.getElementById("struc");
	  var am = document.getElementById("am");
	  pm.style.display = "none";
	  struc.style.display = "block";
	  am.style.display = "none";
	
});


document.getElementById("theme-PM10-structures").addEventListener("click", function () {
	document.getElementById("my-text-thematique").innerHTML = "Il s’agit d’un indice de sensibilité à la pollution compris entre 0 et 1. Les zones proches de 0 sont peu polluées et éloignées des structures sensibles. A l’inverse, les zones proches de 1 sont proches des structures et fortement polluée, le risque y est donc plus élevé. Cet indicateur vous permet d’estimer le risque d’exposition des populations les plus sensibles à la pollution de l’air.";
	document.getElementById("my-text-metode").innerHTML = "Afin de pouvoir être assemblées, les deux thématiques ont été combinées en un indicateur de sensibilité à la pollution, compris entre 0 à 1. <br><br> Pour obtenir une bonne visualisation, nous avons accordé 2 fois plus d’importance à la pollution qu’à la proximité aux structures sensibles. <br><br> Une maille peu polluée et éloignée des structures sensibles tendra vers 0, alors que si elle est très polluée et proche des structures elle se rapprochera de 1.<br><br>Dans les zones intermédiaires, il est plus complexe d’interpréter l’indicateur, d’autant plus qu’un double poids est accordé à la pollution. Par exemple, un indice autour de 0.6 pourrait s’expliquer par plusieurs combinaisons différentes de facteurs. Si l’on prend un exemple, cette zone pourrait avoir une proximité assez faible ou moyenne à la structure la plus proche, qui pourrait être contrebalancer par une valeur relativement élevée de pollution. Cette valeur serait toujours moins élevée que ne l’aurait requis un indicateur qui accorderait le même poids aux deux données pour le même indice de sensibilité. A l’inverse, pour avoir un indice élevé malgré une faible pollution, cela nécessiterait une proximité très forte à la structure sensible la plus proche de la maille considérée.<br><br>Pour plus de détails sur la méthode de traitement, vous pouvez consulter notre rapport sur la page d’accueil.";
	document.getElementById("my-text-source").innerHTML = "Les établissements scolaires (de la maternelle au collège), parcs et hôpitaux proviennent des données de la métropole de Lyon. <br>Les données sur la qualité de l’aire proviennent de la carte des moyennes annuelles de concentration  en PM10 pour l’année 2018, réaliser par Atmo Auvergne-Rhône-Alpes.";
	document.getElementById("titre_jeu").innerHTML = "Indice de sensibilité à la pollution";

	var y = document.getElementById("lancer_emprise");
	var z = document.getElementById("lancer_jeu");

	y.style.display = "block";
	z.style.display = "none";
	var pm = document.getElementById("pm");
	var struc = document.getElementById("struc");
	var am = document.getElementById("am");
	pm.style.display = "none";
	struc.style.display = "none";
	am.style.display = "block";
});

// renvoie des varbiables 

/*document.getElementById("accepter").addEventListener("click", function () {
	var theme = "moy_pm_10"*/

/*document.getElementById("accepter").addEventListener("click", function () {
	document.getElementById("map_origin").id = "map_jeu"*/
