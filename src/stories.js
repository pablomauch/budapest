/* ======================= HISTORIAS POR CALLE ======================= */
/* k = palabras clave que se buscan en el nombre de la calle (sin tildes, minúsculas) */
const STREETS = [
 {id:"vigyazo", k:["vigyazo ferenc"], t:"Están en la calle de su hotel, Vigyázó Ferenc. Lleva el nombre de un conde que, al morir en 1928, dejó toda su enorme fortuna a la Academia de Ciencias, la que tienen a la vuelta. En este barrio la generosidad con la Academia parece ser costumbre."},
 {id:"andrassy", k:["andrassy"], t:"Van por la avenida Andrássy, los Campos Elíseos de Budapest. Se abrió en 1876 y es Patrimonio de la Humanidad, con palacios a los dos lados y, debajo, el metro más antiguo del continente. Lleva el nombre del conde Gyula Andrássy, primer ministro y gran amigo de Sisí. En la época comunista se llamó avenida Stalin y después avenida de la República Popular."},
 {id:"vaci", k:["vaci utca"], t:"Están en la calle Váci, la peatonal comercial del centro. En los tiempos del comunismo era el único lugar de Budapest donde se podían encontrar productos occidentales, y la gente venía de todo el país solo a mirar vidrieras."},
 {id:"kiraly", k:["kiraly utca"], t:"Están en la calle Király, la calle del Rey. En el siglo diecinueve fue la calle comercial del barrio judío, con cientos de tiendas. Hoy es la frontera entre el barrio judío y el barrio de la noche."},
 {id:"dohany", k:["dohany utca"], t:"La calle Dohány significa calle del Tabaco. Aquí había depósitos y comercios de tabaco, y de ahí el nombre de la gran sinagoga."},
 {id:"kazinczy", k:["kazinczy"], t:"Van por la calle Kazinczy, que lleva el nombre de Ferenc Kazinczy, el escritor que renovó el idioma húngaro inventando cientos de palabras nuevas a fines del siglo dieciocho. Hoy es la calle de los bares en ruinas y la comida al paso."},
 {id:"dob", k:["dob utca"], t:"La calle Dob significa calle del Tambor. Busquen en las paredes los murales: el barrio está lleno de arte callejero en las medianeras."},
 {id:"zrinyi", k:["zrinyi"], t:"La calle Zrínyi recuerda a Miklós Zrínyi, el héroe de Szigetvár. En 1566, con dos mil quinientos hombres, resistió durante un mes al ejército del sultán Solimán el Magnífico. Cuando ya no quedaba nada, se vistió con sus mejores ropas y salió con sus últimos soldados a una carga suicida. El sultán, por cierto, murió durante el sitio."},
 {id:"oktober6", k:["oktober 6"], t:"La calle Octubre 6 recuerda la fecha más triste de la historia húngara: el 6 de octubre de 1849, cuando los austríacos ejecutaron a trece generales en Arad y al primer ministro Batthyány en Pest."},
 {id:"nador", k:["nador utca"], t:"La calle Nádor lleva el nombre del palatino José, el Nádor, un archiduque Habsburgo que se enamoró de Pest, impulsó su urbanismo y fue tan querido que la ciudad le dedicó calles y una plaza."},
 {id:"hold", k:["hold utca"], t:"Hold significa Luna. En esta calle está el mercado techado del centro, de fines del siglo diecinueve, donde hoy hay puestos de comida."},
 {id:"bajcsy", k:["bajcsy"], t:"Van por la avenida Bajcsy-Zsilinszky, que recuerda a Endre Bajcsy-Zsilinszky, un político que se opuso a la ocupación alemana en 1944, fue detenido a tiros en su casa y ejecutado poco antes del final de la guerra."},
 {id:"bulevar", k:["erzsebet korut","terez korut"], t:"Están en el Gran Bulevar, el anillo que rodea el centro de Pest. Por aquí corren los tranvías 4 y 6, que llevan cada día a cientos de miles de pasajeros. Funcionan toda la noche."},
 {id:"haining", k:["jane haining"], t:"Este muelle se llama Jane Haining. Era una maestra escocesa que dirigía un internado de niñas en Budapest. En 1944 la iglesia le ordenó volver a Escocia, y ella se negó: dijo que si sus alumnas la necesitaban en los días buenos, más la necesitarían en los malos. La deportaron a Auschwitz, donde murió."},
 {id:"uri", k:["uri utca"], t:"Están en la calle Úri, la calle de los Señores, en el barrio del Castillo. Debajo corre el laberinto de cuevas de la colina, que durante siglos se usó como bodega, refugio y prisión."},
 {id:"tancsics", k:["tancsics"], t:"La calle Táncsics Mihály tiene un huésped ilustre: en 1800 Beethoven se alojó en el número 7 y dio un concierto en Buda. En el número 26 hay una casa de oración judía medieval, de cuando esta calle era el barrio judío de Buda."},
 {id:"fo", k:["fo utca"], t:"Van por la calle Fő, la calle principal de la Ciudad del Agua, el barrio entre el Castillo y el río. Aquí vivían los pescadores y artesanos que defendían el bastión."},
 {id:"rakpart", k:["szechenyi rakpart","belgrad rakpart","id. antall jozsef rakpart"], t:"Caminan por el muelle del Danubio, del lado de Pest. Estas orillas, del Puente Margarita al de la Libertad, son Patrimonio de la Humanidad. De frente, la colina de Buda; a sus espaldas, la ciudad comercial de Pest."}
];

/* ======================= DATOS AL PASO (relleno mientras caminan) ======================= */
const FILL = [
 {id:"szia", t:"Un dato práctico: en húngaro, szia sirve para saludar y para despedirse. Y köszönöm es gracias. Si les sale, los van a mirar con cariño."},
 {id:"apellido", t:"En Hungría el apellido va primero y el nombre después. El compositor que ustedes conocen como Franz Liszt, aquí es Liszt Ferenc. En las placas de las calles lo van a ver así."},
 {id:"idioma", t:"El húngaro no se parece a casi ningún idioma de Europa. Es pariente lejano del finlandés y del estonio, y sus primos más cercanos son lenguas que se hablan junto a los Urales, en Siberia. Tiene casi veinte casos gramaticales."},
 {id:"pest", t:"Un detalle de pronunciación: en húngaro la s suena como sh. Así que Pest se dice Pesht. Y Budapest, Budapesht."},
 {id:"puskas", t:"Un dato futbolero: en 1953, la selección húngara de Ferenc Puskás le ganó seis a tres a Inglaterra en Wembley. Fue la primera vez que Inglaterra perdía en casa contra un equipo de fuera de las islas. Lo llamaron el partido del siglo. Puskás terminó brillando en el Real Madrid."},
 {id:"waterpolo", t:"Hungría es la gran potencia del waterpolo: ha ganado nueve medallas de oro olímpicas en hombres, más que ningún otro país. Con tanta agua termal, era de esperar."},
 {id:"tokaji", t:"Hungría tiene un vino legendario, el Tokaji Aszú, dulce, hecho con uvas atacadas por un hongo noble. Cuentan que Luis XIV lo llamó el vino de los reyes y el rey de los vinos."},
 {id:"propina", t:"Un consejo: en muchos restaurantes la cuenta ya incluye un cargo por servicio, que dice szervízdíj. Si aparece, no hace falta dejar más propina."},
 {id:"danubio", t:"El Danubio no es azul, pese al vals de Strauss. Hay un dicho que dice que solo lo ven azul los enamorados. Ustedes díganme de qué color lo ven."},
 {id:"forint", t:"La moneda es el forint. Su nombre viene de Florencia, de los florines de oro que se acuñaban allá en la Edad Media."},
 {id:"magyar", t:"Los húngaros no se llaman a sí mismos húngaros: se llaman magyares, y a su país, Magyarország. La palabra húngaro probablemente viene de onogur, el nombre de una antigua confederación de tribus."},
 {id:"cuatroestaciones", t:"Budapest tiene unos ciento veinte manantiales termales y produce millones de litros de agua caliente por día. Algunos edificios del centro se calientan con agua termal."},
 {id:"cafes", t:"Hacia 1900, Budapest tenía cientos de cafés. Eran la oficina de los periodistas, el estudio de los escritores y la sala de estar de quienes vivían en piezas pequeñas. Algunos no cerraban nunca."},
 {id:"metro", t:"El metro de Budapest tiene cuatro líneas, de colores. La amarilla, la M1, es de 1896; la verde, la M4, se inauguró en 2014, con estaciones que parecen esculturas."},
 {id:"kurtos", t:"Si ven un puesto con cilindros de masa girando sobre brasas, es kürtőskalács, el pastel chimenea. Pidan uno con canela y tírenle el vapor del centro al aire frío: así se come."},
 {id:"unicum", t:"La botella redonda y negra con una cruz que van a ver en todos los bares es el Unicum, un licor de más de cuarenta hierbas. Tiene un sabor amargo que divide a los visitantes en dos bandos."},
 {id:"rubik", t:"El cubo de Rubik se inventó en esta ciudad en 1974. Ernő Rubik era profesor de arquitectura y lo hizo para explicar a sus alumnos cómo mover piezas en el espacio. Tardó un mes en resolverlo él mismo."},
 {id:"bolígrafo", t:"El bolígrafo lo inventó un húngaro, László Bíró, periodista, que se cansó de que la tinta de la pluma manchara. Lo patentó en Argentina, adonde emigró, y por eso allá se le dice birome."}
];
