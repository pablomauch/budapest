/* ======================= FOTOS (Wikimedia Commons) ======================= */
const WM = f => "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(f) + "?width=1200";
const PH = {
  parl:     WM("Budapest-Parliament-0001.jpg"),
  parlN:    WM("Hungarian Parliament at Night.jpg"),
  parlN2:   WM("Budapest Parlament bei Nacht.jpg"),
  cruise:   WM("Hungarian Parliament Building, Budapest, Hungary-2548 - Start of the Night Cruise (7814823114).jpg"),
  shoes:    WM("Shoes on the Danube.jpg"),
  chainN:   WM("Széchenyi Chain Bridge in Budapest at night.jpg"),
  chain:    WM("Széchenyi Chain Bridge 2014.jpg"),
  basil:    WM("Saint Stephen's Basilica Budapest.jpg"),
  bastion:  WM("Fisherman's Bastion, Budapest, Hungary.jpg"),
  matyas:   WM("Matthias Church Budapest Roof Tiles.jpg"),
  castle:   WM("Budapest Budavári Palota (Buda Castle) (31224644612).jpg"),
  liberty:  WM("Statue of Liberty, Budapest, Svobody.jpg"),
  heroes:   WM("Heroes Square Budapest 2010 01.jpg"),
  szech:    WM("Budapest Széchenyi Baths R01.jpg"),
  syn:      WM("Synagoge Budapest 2014.jpg"),
  market:   WM("Great Market Hall Budapest.jpg"),
  vajda:    WM("Budapest Vajdahunyad Castle.jpg"),
  opera:    WM("Hungarian State Opera House, Budapest.jpg"),
  szimpla:  WM("Szimpla Kert Budapest 1.jpg"),
  nyc:      WM("New York café Budapest.jpg"),
  sunset:   WM("Hungarian Parliament Building from across the Danube from Gellért Hill. Budapest sunset (8130437015).jpg")
};
const IMG = { parlamento:PH.parl, zapatos:PH.shoes, puente:PH.chainN, basilica:PH.basil, bastion:PH.bastion, matias:PH.matyas,
  castillo:PH.castle, gellert:PH.liberty, heroes:PH.heroes, szechenyi:PH.szech, sinagoga:PH.syn, mercado:PH.market,
  vajdahunyad:PH.vajda, opera:PH.opera, tranvia2:PH.chain, mirador:PH.parlN2, crucero:PH.cruise, szimpla:PH.szimpla, newyork:PH.nyc };
/* sin foto propia: fondo de color + ícono */
const PICON = { terror:"🕯️", hospital:"🏥", libertad:"🗽", navidad:"🎄", museo:"🏛️", cueva:"⛪", rudas:"♨️", gozsdu:"🍸",
  hungarikum:"🍲", kispiac:"🥘", kor:"🍽️", frici:"🥣", hotel:"🛏️" };
const SLIDES = [
  [PH.parlN,"El Parlamento iluminado sobre el Danubio"],
  [PH.bastion,"Bastión de los Pescadores"],
  [PH.chainN,"Puente de las Cadenas de noche"],
  [PH.matyas,"El techo de cerámica de la iglesia de Matías"],
  [PH.szech,"Baños Széchenyi"],
  [PH.sunset,"Atardecer desde el Castillo"],
  [PH.nyc,"New York Café"]
];
