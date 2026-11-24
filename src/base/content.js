/* ======================= CATÁLOGO DE LUGARES =======================
   cats: imperdible | dia | noche | comida
   hours: [Dom,Lun,Mar,Mié,Jue,Vie,Sáb]  ""=cerrado · "24h" · "HH:MM-HH:MM"
   le: minutos antes del cierre en que termina el acceso
   approach: lo que la guía cuenta mientras caminan hacia el lugar
   narr: el brief que se lee y se escucha en la ficha y al llegar          */
const HOTEL = { id:"hotel", name:"Prestige Hotel", lat:47.50135, lng:19.04685 };
const CITY = "Budapest";
const INTRO = "Hola. Soy su guía por Budapest. Durante estos días los voy a ir llevando de un lugar a otro, siempre por el camino más corto. Mientras caminen, les cuento historias, leyendas y secretos de las calles; cuando lleguen, la historia del lugar. Si tienen la ubicación activada, me doy cuenta sola de que llegaron. Si no, toquen el botón Llegamos. Vamos.";
const PLACES = [
{
 id:"parlamento", name:"Parlamento", hu:"Országház", cats:["imperdible","dia"], lat:47.50705, lng:19.04640, r:80, visit:75,
 hours:["08:00-16:00","08:00-16:00","08:00-16:00","08:00-16:00","08:00-16:00","08:00-16:00","08:00-16:00"], le:0,
 hnote:"Solo con visita guiada de 45 min. Compren la entrada antes en jegymester.hu; el centro de visitantes está bajo la plaza Kossuth, del lado sur.",
 short:"El edificio más grande de Hungría y la corona de San Esteban",
 approach:`Vamos hacia el Parlamento. Mientras caminan, una pista: ese edificio no se hizo para que funcione un gobierno, se hizo para que todo el imperio austrohúngaro lo viera desde el río. Hungría quería decirle a Viena: nosotros también somos una gran nación.

Fíjense, cuando aparezca, en que no tiene un frente y un dorso como cualquier edificio: está pensado para mirarse desde el Danubio, como un barco gótico anclado en la orilla.`,
 narr:`Están frente al Parlamento de Hungría, el Országház, la casa del país.

Se empezó en 1885 y se inauguró a medias en 1896, para el milenio: los mil años de la llegada de los magiares a esta llanura. La cúpula mide exactamente 96 metros, por ese año, 896, la fecha que los húngaros toman como el nacimiento de su nación. Y en Budapest hay una regla no escrita: ningún edificio debería pasar esa altura. Solo hay otro que la iguala, la Basílica de San Esteban. La patria y la fe, a la misma altura.

Su arquitecto, Imre Steindl, se jugó la vida en este edificio. Se fue quedando ciego mientras lo terminaba y murió en 1902, semanas antes de verlo inaugurado.

Adentro hay unos 40 kilos de oro en decoraciones, casi 700 salas y una escalera principal que parece de ópera. Y bajo la cúpula, custodiada día y noche por dos soldados, está la Santa Corona de Hungría, la de la cruz torcida. Durante la Guerra Fría estuvo guardada en Fort Knox, en Estados Unidos, y volvió al país en 1978.

Un detalle encantador: en los pasillos junto a la antigua Cámara Alta hay unos portacigarros de bronce numerados. Los diputados dejaban ahí el habano encendido cuando sonaba la campana, y se decía que un discurso había sido "digno de un habano" si al volver el cigarro ya se había apagado.`,
 reto:"Cuenten las agujas y torrecitas del techo que alcancen a ver desde donde están. ¿Más o menos de cincuenta?",
 ans:"Muchas más. El edificio tiene unas 365 torrecitas y agujas, una por cada día del año, según la tradición.",
 tip:"Si no consiguen entrada, la mejor vista es desde la otra orilla, en Batthyány tér, sobre todo de noche."
},
{
 id:"zapatos", name:"Zapatos a orillas del Danubio", hu:"Cipők a Duna-parton", cats:["imperdible","dia","noche"], lat:47.50430, lng:19.04495, r:40, visit:10,
 hours:["24h","24h","24h","24h","24h","24h","24h"], hnote:"Memorial al aire libre, siempre abierto.",
 short:"Sesenta pares de zapatos de hierro frente al río",
 approach:`Vamos a un lugar que pide silencio. Mientras bajan hacia el río, les cuento el contexto: en el invierno de 1944, con la guerra casi perdida, Hungría estaba en manos del Partido de la Cruz Flechada, el nazismo húngaro. Y las milicias de ese partido usaban esta orilla.`,
 narr:`Miren la orilla: sesenta pares de zapatos de hierro, de hombre, de mujer y de niño, con el estilo de los años cuarenta.

En el invierno de 1944 a 1945, las milicias de la Cruz Flechada traían aquí a judíos de Budapest, los alineaban en el borde del agua y les ordenaban quitarse los zapatos, porque los zapatos valían dinero. Después les disparaban, para que el río se llevara los cuerpos.

El memorial lo crearon en 2005 el cineasta Can Togay y el escultor Gyula Pauer. Notarán que mucha gente deja velas, flores y piedritas dentro de los zapatos. Las piedras son una tradición judía: se dejan en las tumbas en lugar de flores, porque las piedras no se marchitan.

En esta misma ciudad hubo también quienes salvaron vidas. El diplomático sueco Raoul Wallenberg y el suizo Carl Lutz firmaron miles de pasaportes de protección y escondieron familias en casas protegidas. Hay una placa con sus nombres muy cerca de aquí.

Quédense un momento. Detrás de ustedes, del otro lado del río, está el Castillo, y a su lado el Parlamento: la belleza de la ciudad y su herida, en un mismo paisaje.`,
 reto:"Busquen entre los zapatos un par de niño. ¿Qué detalle tiene que los distingue de los de adulto?",
 ans:"Son pequeños, a veces con correa o cordones de colegial. El escultor copió modelos reales de la época.",
 tip:"Está a 5 minutos caminando del Parlamento: júntenlos en el mismo tramo."
},
{
 id:"puente", name:"Puente de las Cadenas", hu:"Széchenyi lánchíd", cats:["imperdible","dia","noche"], lat:47.49885, lng:19.04460, r:70, visit:20,
 hours:["24h","24h","24h","24h","24h","24h","24h"], hnote:"Se cruza a pie libremente. Desde 2023 los autos ya no lo cruzan: es de peatones, bicis y buses.",
 short:"El primer puente fijo entre Buda y Pest",
 approach:`Rumbo al Puente de las Cadenas. Antes de 1849, Buda y Pest eran dos ciudades separadas por un río enorme, sin un solo puente fijo. En verano se cruzaba por un puente de barcazas. En invierno, cuando el Danubio se congelaba, caminando sobre el hielo, o directamente no se cruzaba.`,
 narr:`Este es el Puente de las Cadenas, el abuelo de todos los puentes de Budapest.

Su historia empieza con un funeral perdido. En 1820, el conde István Széchenyi quiso cruzar a la otra orilla para el entierro de su padre, y el río, con témpanos de hielo, no lo dejó pasar durante días. Prometió entonces que construiría un puente permanente, aunque le costara una fortuna. Le costó eso y más.

Lo diseñó el inglés William Tierney Clark y lo construyó un escocés con casi el mismo apellido, Adam Clark, sin ningún parentesco. Adam se enamoró de la ciudad, se quedó a vivir y la plaza del lado de Buda lleva su nombre.

El puente trajo una revolución social: por primera vez, los nobles húngaros tuvieron que pagar peaje como cualquier campesino. Hasta entonces, la nobleza no pagaba impuestos.

Y ahora la leyenda. Miren los leones. Se cuenta que el día de la inauguración un chico gritó que los leones no tenían lengua, y que el escultor, avergonzado, se tiró al Danubio. Es falso: los leones sí tienen lengua, solo que no se ve desde abajo. Y el escultor, János Marschalkó, vivió muchos años más. Pero los húngaros todavía le dicen a alguien que habla de más: "tiene menos lengua que los leones del puente".

En 1945 el ejército alemán en retirada voló todos los puentes de la ciudad, también este. Se reinauguró en 1949, justo cien años después del original.`,
 reto:"Acérquense a un león y traten de ver si tiene lengua. ¿Cómo hay que mirarlo para encontrarla?",
 ans:"Desde arriba o de costado, mirando dentro de la boca: la lengua está, pero baja y plana. Desde la vereda no se ve.",
 tip:"Al cruzar hacia Buda llegan a Clark Ádám tér, donde sale el funicular al Castillo."
},
{
 id:"basilica", name:"Basílica de San Esteban", hu:"Szent István-bazilika", cats:["imperdible","dia","noche"], lat:47.50085, lng:19.05320, r:70, visit:50,
 hours:["13:00-17:45","09:00-17:45","09:00-17:45","09:00-17:45","09:00-17:45","09:00-17:45","09:00-17:45"], le:30,
 hnote:"La cúpula panorámica tiene su propia entrada y horario más largo. De noche, en la plaza: mercado navideño Advent Bazilika y proyecciones de luz sobre la fachada.",
 short:"96 metros de altura y la mano de un rey santo",
 approach:`Vamos a la Basílica. Mientras caminan, sepan que su construcción duró más de cincuenta años y pasó por tres arquitectos. Y que en una noche de 1868 ocurrió algo que todo Pest escuchó: la cúpula se vino abajo. Por suerte, sin nadie adentro.`,
 narr:`La Basílica de San Esteban es la iglesia más grande de Budapest, y su cúpula mide 96 metros, igual que la del Parlamento.

La empezó el arquitecto József Hild en 1851. Hild murió en 1867 y, al año siguiente, una tormenta y unos defectos de cálculo hicieron que la cúpula se derrumbara. Dicen que el estruendo se escuchó en media ciudad. La obra la retomó Miklós Ybl, el mismo de la Ópera, que tuvo que demoler casi todo y empezar de nuevo. Murió antes de terminarla, y la completó un tercero, József Kauser, en 1905.

Por eso los húngaros tienen un dicho para algo que nunca se termina: "como la Basílica".

Un dato curioso para ustedes: su hotel, el Prestige, ocupa una casa del siglo diecinueve atribuida al mismo József Hild. El arquitecto de la cúpula que se cayó.

Adentro está la reliquia más venerada del país: la Santa Diestra, la mano derecha momificada de San Esteban, el primer rey de Hungría, coronado en el año 1000. La tradición cuenta que, cuando abrieron su tumba, la mano estaba intacta. Se perdió durante siglos y la emperatriz María Teresa la recuperó en 1771 en Ragusa, la actual Dubrovnik. Cada 20 de agosto sale en procesión por estas calles.

Si suben a la cúpula, a 65 metros, tienen una de las mejores vistas de la ciudad. Y de noche, en esta época, la plaza se llena con el mercado navideño y proyecciones de luz sobre la fachada.`,
 reto:"Miren la inscripción en latín sobre la puerta principal. ¿La pueden traducir?",
 ans:"EGO SUM VIA VERITAS ET VITA: Yo soy el camino, la verdad y la vida, palabras de Jesús en el Evangelio de Juan.",
 tip:"La capilla de la Santa Diestra está a la izquierda del altar. Si la urna está a oscuras, una moneda en la ranura la ilumina un par de minutos."
},
{
 id:"bastion", name:"Bastión de los Pescadores", hu:"Halászbástya", cats:["imperdible","dia","noche"], lat:47.50225, lng:19.03490, r:70, visit:35,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"Las terrazas de abajo son libres siempre. Las torres superiores se pagan de 9 a 19 (unos 1.700 Ft); después de las 19 también son gratis.",
 short:"Siete torres de cuento sobre el Danubio",
 approach:`Subimos al Bastión de los Pescadores. Les adelanto un secreto: parece una fortaleza medieval, pero no lo es. Es más joven que la Torre Eiffel por apenas unos años. Nunca defendió nada.`,
 narr:`Están en el Bastión de los Pescadores, la postal más famosa de Budapest.

Es un decorado de piedra blanca construido entre 1895 y 1902 por el arquitecto Frigyes Schulek, el mismo que restauró la iglesia de Matías aquí al lado. Su función era puramente escénica: darle a la iglesia un balcón digno y a la ciudad un mirador.

¿Por qué "de los pescadores"? En la Edad Media, este tramo de la muralla le tocaba defenderlo al gremio de pescadores, que vivía abajo, en la Ciudad del Agua, junto al río. Y había un mercado de pescado al pie de la colina.

Cuenten las torres: son siete. Una por cada una de las siete tribus magiares que llegaron a la cuenca de los Cárpatos a fines del siglo noveno, guiadas por Árpád. Por eso tienen esa forma de tienda, de carpa nómade de piedra.

El jinete de bronce que tienen delante es San Esteban, el primer rey, con su doble cruz apostólica.

Y ahora asómense entre los arcos: del otro lado del río está el Parlamento. Esa vista, con el edificio reflejado en el Danubio, es la razón por la que esto existe. De noche, con todo iluminado, es todavía mejor, y las torres de arriba son gratis después de las siete.`,
 reto:"Cuenten las torres cónicas del bastión. ¿Cuántas son y qué representan?",
 ans:"Siete, por las siete tribus magiares que llegaron con Árpád en el siglo IX.",
 tip:"La foto clásica: desde el arco de la planta baja, encuadrando el Parlamento. Vuelvan de noche si pueden."
},
{
 id:"matias", name:"Iglesia de Matías", hu:"Mátyás-templom", cats:["imperdible","dia"], lat:47.50195, lng:19.03420, r:60, visit:35,
 hours:["13:00-17:00","09:00-17:00","09:00-17:00","09:00-17:00","09:00-17:00","09:00-17:00","09:00-12:00"], le:15,
 hnote:"Entrada unos 3.400 Ft. Puede cerrar por misas y bodas: revisen matyas-templom.hu el mismo día.",
 short:"Techo de cerámica, coronaciones y un cuervo con anillo",
 approach:`Vamos a la iglesia de Matías. Busquen en el camino, en lo alto de la torre, un pájaro negro con un anillo en el pico. Es el cuervo del rey Matías, y es la pista de la historia que les voy a contar.`,
 narr:`Esta es la iglesia de Nuestra Señora de Buda, pero todos la llaman de Matías, por el rey Matías Corvino, el gran rey del Renacimiento húngaro, que se casó dos veces aquí.

Miren el techo: esas tejas de colores son cerámica Zsolnay, de la ciudad de Pécs, resistentes a las heladas. El dibujo imita los techos de las iglesias de Viena y de los Cárpatos.

Ahora, el cuervo. Su apellido, Corvino, viene de corvus, cuervo en latín, y su escudo lleva un cuervo con un anillo de oro. La leyenda dice que, de joven, Matías estaba prisionero en Praga, y su madre, Erzsébet Szilágyi, le mandó una carta y su anillo atados a la pata de un cuervo, que voló hasta su ventana. Poco después, en 1458, fue elegido rey. Desde entonces, el cuervo y el anillo son su firma.

Durante los 145 años de dominio turco, esta iglesia fue la mezquita principal de Buda. Y aquí va otra leyenda: en 1686, durante el sitio cristiano, una explosión derrumbó un muro, y apareció una estatua de la Virgen que los católicos habían emparedado antes de la llegada de los turcos. Los soldados otomanos que rezaban vieron a la Virgen salir de la pared, entraron en pánico, y Buda cayó ese mismo día.

Aquí también fueron coronados, en 1867, Francisco José y la emperatriz Sisí como reyes de Hungría. Franz Liszt compuso para esa ceremonia su Misa de la Coronación.`,
 reto:"Encuentren el cuervo con el anillo. Pista: busquen en lo alto de la torre y en el escudo de la fachada.",
 ans:"Está en la punta de una de las torres y también aparece en escudos dentro de la iglesia. Es el emblema de Matías Corvino.",
 tip:"Adentro, las paredes están completamente pintadas con motivos húngaros, como un tapiz. No se queden solo con el exterior."
},
{
 id:"castillo", name:"Castillo de Buda y el Turul", hu:"Budavári Palota", cats:["imperdible","dia","noche"], lat:47.49690, lng:19.03960, r:90, visit:40,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"Los patios y terrazas son libres. Adentro funcionan museos con horario propio. Subida cómoda: funicular desde Clark Ádám tér.",
 short:"El palacio real, el ave mítica y la fuente de Matías",
 approach:`Vamos al Castillo de Buda. Les adelanto que este palacio fue destruido y reconstruido tantas veces que casi nada de lo que ven es original. Lo verdaderamente antiguo está debajo, en las cuevas y los cimientos.`,
 narr:`Bienvenidos a la colina del Castillo. Este palacio fue residencia de reyes húngaros desde el siglo trece, después de los Habsburgo, y fue arrasado una y otra vez: por los turcos, por el sitio de 1686, por un incendio en 1849 y, sobre todo, por el sitio de 1945, cuando la colina fue el último refugio del ejército alemán.

Junto a la escalera, miren esa enorme ave de bronce con una espada en las garras. Es el Turul, el pájaro mítico de los magiares. Cuenta la leyenda que una mujer llamada Emese soñó que un Turul descendía sobre ella, y que de su vientre brotaba un río que corría hacia el oeste. Ese río eran los reyes de su linaje. Su hijo fue Álmos, y su nieto, Árpád, quien guió a las siete tribus hasta esta tierra. Para los húngaros, el Turul es el ave que los trajo hasta aquí.

Y una más, la más romántica. En el patio del palacio está la Fuente de Matías: el rey vestido de cazador, con su presa y sus perros. A un costado, una muchacha lo mira. Es Ilonka, una campesina que se enamoró de un apuesto cazador sin saber que era el rey. Cuando descubrió quién era, entendió que ese amor era imposible y murió de pena. Dicen que si tiran una moneda en esta fuente, como en la Fontana de Trevi, volverán a Budapest.`,
 reto:"Busquen en la Fuente de Matías a Ilonka. ¿Qué está mirando ella?",
 ans:"Mira al rey cazador, que no la mira a ella: la historia de un amor no correspondido, en bronce.",
 tip:"Desde la terraza frente al palacio se ve todo Pest. El cambio de guardia en el Palacio Sándor es a cada hora en punto."
},
{
 id:"gellert", name:"Ciudadela y Estatua de la Libertad", hu:"Citadella · Szabadság-szobor", cats:["imperdible","dia","noche"], lat:47.48675, lng:19.04710, r:90, visit:45,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"Reabierta en 2026 tras su renovación: parque y miradores gratis. Es subida fuerte: 25-30 min a pie desde el Puente Isabel, o bus 27 casi hasta arriba.",
 short:"Brujas, un obispo mártir y la mejor vista de la ciudad",
 approach:`Subimos al monte Gellért. Va a costar un poco de piernas, así que les cuento algo para distraerlos: durante siglos, esta colina tuvo fama de ser el lugar donde se reunían las brujas de Hungría. Decían que volaban hasta aquí las noches de luna para su aquelarre. A mitad de camino les cuento por qué.`,
 narr:`Llegaron a lo más alto del monte Gellért, a 235 metros sobre el nivel del mar.

El monte lleva el nombre de San Gerardo, en húngaro Gellért, un obispo veneciano que vino a convertir a los magiares al cristianismo. En el año 1046, durante una revuelta pagana, lo atraparon aquí. La leyenda dice que lo metieron en un barril con clavos por dentro y lo echaron a rodar colina abajo hasta el Danubio. Su estatua, con la cruz en alto, mira el río desde la ladera, justo sobre el Puente Isabel.

La fortaleza que tienen al lado, la Ciudadela, la construyeron los austríacos después de la revolución de 1848. No era para defender la ciudad, sino para apuntarle: los cañones miraban hacia Pest y Buda, como diciéndoles a los húngaros que no se volvieran a sublevar. Nunca disparó. Estuvo cerrada más de una década y reabrió en 2026, con un parque, un corte en forma de V en sus muros y una exposición sobre la historia del país.

La mujer de bronce con la hoja de palma es la Estatua de la Libertad, de 1947. Se levantó en homenaje al ejército soviético, y tras el fin del comunismo se le quitaron los soldados soviéticos y se le dio un nuevo significado: la libertad de Hungría. Hay una leyenda urbana que dice que originalmente era un homenaje a un piloto, y que en lugar de la palma tenía una hélice. Los historiadores lo discuten, pero en Budapest todos la conocen.

Ahora miren la ciudad: los puentes, el Parlamento, el Castillo. Esta es la vista que justifica la subida.`,
 reto:"Desde el mirador, cuenten cuántos puentes alcanzan a ver sobre el Danubio.",
 ans:"Con buena visibilidad, entre cinco y siete: Libertad, Isabel, Cadenas, Margarita y, a lo lejos, los del norte y del sur.",
 tip:"Vengan al atardecer, que en esta época es temprano, hacia las 16. Bajen por el lado del Puente Isabel para pasar junto a la estatua de San Gerardo."
},
{
 id:"heroes", name:"Plaza de los Héroes", hu:"Hősök tere", cats:["imperdible","dia"], lat:47.51505, lng:19.07790, r:90, visit:20,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"Queda a 3,5 km del hotel: mejor en metro M1 (la línea amarilla, la más antigua del continente), estación Hősök tere.",
 short:"Mil años de historia húngara en una columnata",
 approach:`Vamos a la Plaza de los Héroes. Si van en el metro amarillo, el M1, presten atención: van en el subte más antiguo de Europa continental, inaugurado en 1896. Solo Londres tenía uno antes. Esos vagoncitos amarillos parecen de juguete, y las estaciones conservan los azulejos de la época.`,
 narr:`La Plaza de los Héroes, el gran escenario de la historia húngara.

El monumento se levantó para el milenio de 1896, aunque se terminó recién en 1929. En lo alto de la columna de 36 metros está el arcángel Gabriel. Sostiene la Santa Corona y la doble cruz: según la leyenda, se le apareció en sueños al rey Esteban y le ofreció la corona de Hungría.

Abajo, a caballo, están los siete jefes de las tribus magiares, con Árpád al frente. Fíjense en sus gorros y en sus caballos: son guerreros de las estepas, de aspecto casi oriental, porque los magiares venían del este, de las orillas de los Urales.

En las columnatas de los costados hay catorce figuras de la historia del país. Un detalle: en el diseño original, cinco de esos lugares eran para reyes Habsburgo. Tras la Segunda Guerra Mundial los reemplazaron por héroes húngaros de las luchas por la independencia, como Rákóczi y Kossuth.

Y la piedra delante del monumento es la Tumba al Soldado Desconocido. En esta plaza se hizo, en junio de 1989, el nuevo funeral de Imre Nagy, el primer ministro de la revolución de 1956, ante unas doscientas cincuenta mil personas. Fue uno de los momentos que marcaron el final del comunismo en Hungría.`,
 reto:"Busquen las cuatro estatuas que coronan las columnatas: el Trabajo, la Riqueza, la Paz y la Guerra. ¿De qué lado está la Guerra?",
 ans:"El Trabajo y la Riqueza, y la Guerra, coronan la columnata de la izquierda; la Paz, y el Conocimiento y la Gloria, la de la derecha.",
 tip:"Detrás está el Parque de la Ciudad: Castillo Vajdahunyad, la pista de hielo y los Baños Széchenyi, todo a pocos minutos."
},
{
 id:"szechenyi", name:"Baños Széchenyi", hu:"Széchenyi gyógyfürdő", cats:["imperdible","dia","noche"], lat:47.51870, lng:19.08170, r:80, visit:120,
 hours:["08:00-20:00","07:00-20:00","07:00-20:00","07:00-20:00","07:00-20:00","07:00-20:00","08:00-20:00"], le:60,
 hnote:"Compren la entrada online (szechenyibath.hu). Lleven malla, ojotas y toalla o alquilen ahí. El Gellért está cerrado por obras hasta 2028.",
 short:"Agua termal a 38 grados al aire libre, aunque haga cero",
 approach:`Vamos a los Baños Széchenyi. Para que entiendan dónde se van a meter: Budapest está sentada sobre más de cien fuentes termales. El agua de este baño sale de un pozo de más de mil metros de profundidad, a unos setenta grados, y se enfría hasta llegar a las piletas.`,
 narr:`Los Baños Széchenyi, el templo termal más grande de Europa.

Se inauguraron en 1913, en un palacio neobarroco amarillo, y tienen 18 piletas: 15 adentro y 3 al aire libre. Todo empezó en el siglo diecinueve, cuando el ingeniero Vilmos Zsigmondy perforó en este parque un pozo artesiano de casi mil metros y encontró agua termal. A él le debemos este lugar.

La experiencia que no se pueden perder es la de las piletas exteriores en invierno: el aire a cero grados, el agua a 38, y el vapor levantándose sobre las cabezas de la gente. Y entre ese vapor, los ancianos que juegan al ajedrez con el agua hasta el pecho, sobre tableros flotantes. Es una tradición que lleva décadas.

En la época turca, los otomanos ya habían convertido Buda en una ciudad de baños, y algunos de esos baños turcos todavía funcionan, como el Rudas, con su cúpula del siglo dieciséis. En 1934, Budapest recibió oficialmente el título de Ciudad de Balnearios.

Un consejo de guía: empiecen por las piletas de afuera, prueben el sauna, y terminen en la pileta del remolino, la redonda, donde la corriente los lleva en círculos.`,
 reto:"Busquen a los jugadores de ajedrez en la pileta exterior. ¿Juegan con piezas que flotan o sobre un tablero apoyado?",
 ans:"Sobre tableros apoyados en el borde o en flotadores, con piezas normales. Y nadie quiere perder ahí adentro.",
 tip:"Calculen al menos dos horas y media. Pueden combinarlo con el Castillo Vajdahunyad y la pista de hielo, que están al lado."
},
{
 id:"sinagoga", name:"Gran Sinagoga de Dohány", hu:"Dohány utcai zsinagóga", cats:["imperdible","dia"], lat:47.49585, lng:19.06050, r:60, visit:75,
 hours:["10:00-16:00","10:00-16:00","10:00-16:00","10:00-16:00","10:00-16:00","10:00-14:00",""], le:60,
 hnote:"Invierno: dom a jue 10-16, viernes 10-14, sábado cerrada. Última entrada una hora antes. La entrada incluye visita guiada. Hombros y rodillas cubiertos; a los hombres les dan kipá.",
 short:"La sinagoga más grande de Europa",
 approach:`Entramos al antiguo barrio judío, el distrito siete. Mientras caminan, miren los patios interiores de los edificios: este barrio fue, a fines del siglo diecinueve, el corazón de una de las comunidades judías más grandes y prósperas de Europa. En 1944 se convirtió en gueto.`,
 narr:`La Gran Sinagoga de la calle Dohány, la más grande de Europa y la segunda del mundo.

Se construyó entre 1854 y 1859, diseñada por el vienés Ludwig Förster, en estilo morisco, con esas dos torres que parecen minaretes con cúpulas de cebolla. Tiene lugar para unas tres mil personas. La comunidad quiso un templo que se pareciera a la Alhambra y a Jerusalén a la vez, para mostrar a la ciudad que eran parte de ella y orgullosos de su origen.

Tiene algo inusual para una sinagoga: un órgano. Y no cualquiera: lo tocaron Franz Liszt y Camille Saint-Saëns.

En la casa de al lado, donde hoy está el Museo Judío, nació en 1860 Theodor Herzl, el padre del sionismo moderno.

Pero el patio cuenta la parte más dura. Durante el invierno del gueto, de 1944 a 1945, miles de personas murieron de hambre y frío en este barrio. No había dónde enterrarlas, y se las enterró aquí mismo, en el jardín de la sinagoga, en fosas comunes. Detrás está el Árbol de la Vida, un sauce llorón de metal del escultor Imre Varga: cada hoja lleva el nombre de una víctima.`,
 reto:"Miren la fachada: entre las dos torres hay un rosetón y una inscripción en hebreo. ¿Qué forma tienen las cúpulas de las torres?",
 ans:"Forma de cebolla, doradas: es el estilo morisco que buscó Förster, inspirado en la arquitectura islámica de España.",
 tip:"El viernes cierra a las 14 y el sábado no abre: si la quieren ver por dentro, mejor miércoles o jueves."
},
{
 id:"mercado", name:"Gran Mercado Central", hu:"Nagy Vásárcsarnok", cats:["imperdible","dia","comida"], lat:47.48700, lng:19.05850, r:70, visit:60,
 hours:["","06:00-18:00","06:00-18:00","06:00-18:00","06:00-18:00","06:00-18:00","06:00-16:00"],
 hnote:"Lun a vie 6-18, sábado hasta las 16. Arriba, en la galería, los puestos de lángos y gulyás.",
 short:"Paprika, salamis y el mejor lángos de la ciudad",
 approach:`Vamos al Gran Mercado. Vayan con hambre. Les cuento algo: se dice que cuando se inauguró, un canal subterráneo lo conectaba con el Danubio para que las barcazas descargaran la mercadería casi en la puerta.`,
 narr:`El Gran Mercado Central, el mercado techado más grande y antiguo de Budapest.

Lo diseñó Samu Pecz y abrió en 1897. Miren el techo desde afuera: tejas de colores Zsolnay, la misma cerámica de la iglesia de Matías. Y adentro, esa estructura de hierro que parece una estación de tren.

Abajo están los puestos de verdad: carnes, salamis picantes, hígado de ganso, frutas, encurtidos y sobre todo paprika, el oro rojo de Hungría. La paprika llegó con los turcos en el siglo dieciséis y los húngaros la adoptaron como propia. Hay dulce, picante y ahumada; las regiones famosas son Szeged y Kalocsa. Y un dato: el científico húngaro Albert Szent-Györgyi aisló la vitamina C a partir de pimientos de Szeged, y recibió por eso el Nobel de Medicina en 1937.

Arriba, en la galería, está lo que vinieron a comer: el lángos, una masa frita, crocante y aireada, que se come con crema agria, queso rallado y ajo. Y, si quieren algo caliente, un plato de gulyás, que en Hungría no es un guiso sino una sopa. Su nombre viene de gulyás, el vaquero que la cocinaba en un caldero en la llanura.

El edificio de al lado, el de ladrillo junto al río, era la antigua aduana. Hoy es la Universidad Corvinus.`,
 reto:"Busquen un puesto de paprika y fíjense en las palabras de las bolsitas: ¿qué significan édes y csípős?",
 ans:"Édes es dulce y csípős es picante. Erős también significa fuerte o picante.",
 tip:"Al salir, crucen el Puente de la Libertad, el verde, hacia el monte Gellért. O tomen el tranvía 2 junto al río."
},
{
 id:"vajdahunyad", name:"Castillo Vajdahunyad y pista de hielo", hu:"Vajdahunyad vára · Műjégpálya", cats:["dia","noche"], lat:47.51530, lng:19.08380, r:90, visit:40,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"El parque y el patio del castillo son libres. La pista de hielo del Parque de la Ciudad abrió la temporada el 20 de noviembre; de noche está iluminada.",
 short:"Un castillo de cartón que se volvió de piedra",
 approach:`Vamos al Castillo Vajdahunyad, al borde del lago del parque. Les adelanto: nació como un decorado. Y en invierno, el lago se congela artificialmente y se convierte en una de las pistas de patinaje más antiguas de Europa.`,
 narr:`Este es el Castillo Vajdahunyad, y es una gran mentira hermosa.

En 1896, para la exposición del milenio, se armó aquí un castillo de cartón y madera que resumía la historia de la arquitectura húngara: una parte románica, otra gótica, otra renacentista y otra barroca. Gustó tanto que entre 1904 y 1908 lo rehicieron en piedra.

La parte más famosa copia el castillo de Hunyad, en Transilvania, hoy Rumania. Y ese castillo tiene su propia leyenda oscura: allí habría estado prisionero Vlad el Empalador, el príncipe que inspiró a Drácula.

En el patio, busquen a un monje sentado con la cara cubierta por una capucha. Es Anonymus, el cronista anónimo del rey Béla III, que escribió la primera historia de los húngaros y nunca firmó su obra. Por eso no tiene rostro. Fíjense en su pluma: brilla, porque los estudiantes la frotan para tener suerte en los exámenes. Si tienen algo que escribir, ya saben.

Delante está el lago, que en invierno se convierte en la pista de hielo del Parque de la Ciudad, en funcionamiento desde 1870. Patinar de noche con el castillo iluminado es de lo más lindo que pueden hacer en Budapest en noviembre.`,
 reto:"Busquen la estatua de Anonymus y su pluma. ¿Por qué brilla tanto?",
 ans:"Porque la gente la frota para tener suerte al escribir, sobre todo los estudiantes antes de un examen.",
 tip:"Combínenlo con los Baños Széchenyi y la Plaza de los Héroes, que están a pocos pasos."
},
{
 id:"opera", name:"Ópera Estatal", hu:"Magyar Állami Operaház", cats:["dia","noche"], lat:47.50255, lng:19.05835, r:60, visit:60,
 hours:["13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30"],
 hnote:"Solo se entra con la visita guiada (en inglés a las 13:30, 15:00 y 16:30, unos 12.000 Ft) o con entrada a una función: revisen opera.hu.",
 short:"Más linda que la de Viena, para fastidio del emperador",
 approach:`Rumbo a la Ópera, sobre la avenida Andrássy. Les cuento cómo empezó: el emperador Francisco José aceptó pagar buena parte de la obra con una condición. La ópera de Budapest no podía ser más grande que la de Viena. Los húngaros cumplieron. Lo que no prometieron fue que no sería más linda.`,
 narr:`La Ópera Estatal de Hungría, obra de Miklós Ybl, inaugurada en 1884.

La condición del emperador se cumplió al pie de la letra: es más chica que la de Viena. Pero el resultado, con sus mármoles, sus frescos y su lámpara de araña de tres toneladas, fue tan deslumbrante que se dice que Francisco José comentó, molesto, que era más hermosa que la suya.

En la entrada hay dos esfinges y las estatuas de Franz Liszt y de Ferenc Erkel, el compositor del himno húngaro y primer director de la casa. Entre 1888 y 1891 la dirigió un joven Gustav Mahler.

Y adentro está el palco real, con su propia escalera, donde se sentaba la emperatriz Sisí, la gran enamorada de Hungría. Tenía en Budapest más amigos que en Viena: hablaba húngaro y se sentía más libre aquí que en la corte.

Se dice que su acústica es de las mejores de Europa, solo comparada con la Scala de Milán y la Ópera de París. Si tienen una noche libre, una función aquí puede ser inolvidable, y las entradas más baratas cuestan menos que un café en el New York.`,
 reto:"Busquen las dos esfinges en la entrada. ¿Son iguales o tienen algo distinto?",
 ans:"Parecen gemelas pero no lo son: miren bien sus caras y sus peinados, cada una es una mujer distinta.",
 tip:"Enfrente está el Palacio Drechsler, de la misma época. Desde aquí, la avenida Andrássy los lleva a la Casa del Terror y a la Plaza de los Héroes."
},
{
 id:"terror", name:"Casa del Terror", hu:"Terror Háza", cats:["dia"], lat:47.50690, lng:19.06500, r:50, visit:90,
 hours:["10:00-18:00","","10:00-18:00","10:00-18:00","10:00-18:00","10:00-18:00","10:00-18:00"], le:30,
 hnote:"Martes a domingo 10-18, lunes cerrado. No se permiten fotos adentro. Es una visita intensa.",
 short:"Andrássy 60: la dirección que Budapest pronunciaba en voz baja",
 approach:`Vamos a Andrássy 60. Durante cincuenta años, en esta avenida elegante, había una dirección que los vecinos preferían no nombrar.`,
 narr:`Esta es la Casa del Terror, en el número 60 de la avenida Andrássy.

El edificio fue, en 1944, la sede del Partido de la Cruz Flechada, los nazis húngaros, que lo llamaban irónicamente la Casa de la Lealtad. Cuando terminó la guerra, la ocupó la policía política comunista, primero la ÁVO y después la ÁVH. En sus sótanos se interrogó, se torturó y se mató a opositores de los dos regímenes.

Desde 2002 es un museo y memorial de las víctimas de ambas dictaduras. Miren el marco negro que sobresale del techo: con el sol, proyecta sobre la fachada la palabra TERROR, junto a una estrella de cinco puntas y una cruz flechada.

En la pared de afuera hay cientos de fotos: son las caras de las víctimas.

Adentro, en el patio, hay un tanque soviético, y la visita termina bajando en un ascensor lento hacia las celdas del sótano, mientras una voz cuenta cómo se ejecutaba a los presos. Es una visita fuerte, pensada para que no se olvide.`,
 reto:"Miren el marco metálico del techo. ¿Qué tres palabras o símbolos aparecen recortados?",
 ans:"La palabra TERROR, la estrella roja del comunismo y la cruz flechada del nazismo húngaro.",
 tip:"Está a mitad de Andrássy: combínenlo con la Ópera y el Octógono."
},
{
 id:"hospital", name:"Hospital en la Roca", hu:"Sziklakórház", cats:["dia"], lat:47.50080, lng:19.03145, r:50, visit:70,
 hours:["10:00-19:00","10:00-19:00","10:00-19:00","10:00-19:00","10:00-19:00","10:00-19:00","10:00-19:00"], le:60,
 hnote:"Solo con visita guiada, que sale cada hora; la última a las 18. Conviene reservar en sziklakorhaz.eu.",
 short:"Un hospital secreto y un búnker nuclear bajo el Castillo",
 approach:`Vamos al Hospital en la Roca. Mientras caminan sobre la colina del Castillo, piensen que debajo de sus pies hay unos diez kilómetros de cuevas naturales, excavadas por el agua termal durante miles de años.`,
 narr:`Bajo la colina del Castillo hay un laberinto de cuevas, y en él, un secreto que se guardó durante décadas.

En los años treinta, ante la amenaza de guerra, se acondicionó una parte de las cuevas como hospital de emergencia. Durante el sitio de Budapest, en 1944 y 1945, fue de los pocos lugares seguros de la ciudad: un hospital pensado para setenta pacientes llegó a albergar a más de seiscientos heridos, de los dos bandos y civiles.

Volvió a funcionar en la revolución de 1956. Y después, en plena Guerra Fría, se transformó en un búnker antinuclear, con filtros de aire, generadores y reservas para sobrevivir a un ataque. Todo era secreto de Estado, y lo siguió siendo hasta 2002.

Hoy se recorre con guía, entre camas, quirófanos y figuras de cera que reconstruyen los días del sitio. La visita termina con una sala que recuerda Hiroshima y Nagasaki.`,
 reto:"Durante la visita, toquen las paredes: ¿dónde termina la cueva natural y empieza el hormigón?",
 ans:"Gran parte es roca caliza natural, excavada por el agua termal; los muros de hormigón y las puertas blindadas son del búnker de la Guerra Fría.",
 tip:"La entrada está en Lovas út, del lado oeste de la colina, a pocos minutos de la iglesia de Matías."
},
{
 id:"libertad", name:"Plaza de la Libertad", hu:"Szabadság tér", cats:["dia"], lat:47.50300, lng:19.05000, r:80, visit:20,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"Plaza abierta, a 5 minutos del hotel.",
 short:"La Guerra Fría resumida en una plaza",
 approach:`Vamos a la Plaza de la Libertad, a pasos de su hotel. Es una plaza tranquila, con un parque infantil y cafés. Pero tiene una de las historias políticas más curiosas de Europa.`,
 narr:`La Plaza de la Libertad parece un parque de barrio, pero es un tablero de la Guerra Fría.

En un extremo hay un obelisco con una estrella soviética: es uno de los pocos monumentos al Ejército Rojo que siguen en pie en Budapest, protegido por un acuerdo entre Hungría y Rusia. Y justo enfrente, mirándolo, está la Embajada de los Estados Unidos.

En esa embajada vivió quince años un huésped muy especial. En 1956, cuando los tanques soviéticos aplastaron la revolución, el cardenal József Mindszenty, cabeza de la Iglesia húngara, pidió asilo aquí. Se quedó encerrado en la embajada desde 1956 hasta 1971, sin poder salir.

Y entre los árboles, caminando hacia el Parlamento, hay una estatua de bronce de Ronald Reagan, inaugurada en 2011 por su papel en el fin de la Guerra Fría.

En el otro extremo hay un memorial de 2014 a las víctimas de la ocupación alemana, con un ángel y un águila. Fue muy polémico, y frente a él los vecinos armaron un contramemorial con fotos, valijas, zapatos y cartas de familias. Las dos memorias, una frente a la otra.

Los edificios enormes que rodean la plaza son el antiguo palacio de la Bolsa y el Banco Nacional.`,
 reto:"Busquen la estatua de Reagan. ¿Hacia qué edificio está caminando?",
 ans:"Hacia el Parlamento. La estatua parece dar un paseo por la plaza a tamaño natural.",
 tip:"Desde aquí al Parlamento hay 5 minutos, y al pasar busquen en la calle Zrínyi la estatua del policía gordo."
},
{
 id:"navidad", name:"Mercado navideño de Vörösmarty y Gerbeaud", hu:"Vörösmarty tér · Gerbeaud", cats:["noche","comida","dia"], night:true, lat:47.49630, lng:19.05090, r:70, visit:60,
 hours:["11:00-21:00","11:00-21:00","11:00-21:00","11:00-21:00","11:00-21:00","11:00-22:00","11:00-22:00"],
 hnote:"Mercado navideño del 13 de noviembre al 31 de diciembre: dom a jue 11-21, vie y sáb 11-22. La confitería Gerbeaud está en la misma plaza.",
 short:"Vino caliente, chimenea dulce y la confitería más famosa",
 approach:`Vamos a la plaza Vörösmarty. Si sienten olor a canela y a masa dulce asada, van bien encaminados: es el kürtőskalács, el pastel chimenea, que se hornea enrollado en un palo sobre las brasas.`,
 narr:`La plaza Vörösmarty, el corazón navideño de Budapest.

Lleva el nombre de Mihály Vörösmarty, el poeta que escribió el Szózat, el segundo himno de Hungría. Es él quien está sentado en el monumento de mármol del centro.

En estas semanas la plaza es el mercado navideño más antiguo de la ciudad. Pidan un forralt bor, el vino caliente con especias, y un kürtőskalács, el pastel chimenea, un cilindro de masa dulce enrollado en un palo, asado sobre carbón y pasado por azúcar, canela o nuez. Viene de los húngaros de Transilvania.

En el lado norte de la plaza está la confitería Gerbeaud, abierta desde 1858. La hizo famosa un suizo, Émile Gerbeaud, que inventó aquí bombones y el pastel que lleva su nombre: capas de masa con nuez y mermelada de damasco, cubiertas de chocolate.

Y un pastel más, con historia: la torta Dobos, de capas finas y techo de caramelo duro, la inventó en 1884 el pastelero József Dobos para que aguantara viajes largos sin estropearse. Guardó la receta en secreto durante años, hasta que en 1906 la regaló al gremio de pasteleros para que todos pudieran hacerla.

Debajo de sus pies, por cierto, termina la línea amarilla del metro, el M1, la más antigua del continente.`,
 reto:"Busquen el monumento a Vörösmarty en el centro. ¿De qué material es, y qué hay escrito en él?",
 ans:"Es de mármol de Carrara y lleva el primer verso del Szózat: 'Hazádnak rendületlenül légy híve, ó magyar', sé fiel a tu patria sin vacilar, húngaro.",
 tip:"De ahí sale la calle Váci, la peatonal comercial, y el paseo del Danubio está a una cuadra."
},
{
 id:"tranvia2", name:"Tranvía 2 junto al Danubio", hu:"2-es villamos", cats:["dia","noche"], lat:47.50620, lng:19.04460, r:60, visit:25,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"Sube en la parada Kossuth Lajos tér, junto al Parlamento, y vayan hacia el sur hasta Fővám tér (el Mercado). Boleto o pase BKK.",
 short:"El viaje en tranvía más lindo de la ciudad",
 approach:`Vamos a la parada del tranvía 2. No es una visita, es un paseo: un tranvía amarillo que corre pegado al río, con el Castillo del otro lado de la ventana.`,
 narr:`El tranvía número 2 recorre el borde del Danubio del lado de Pest, de norte a sur, y muchos lo consideran uno de los viajes en tranvía más lindos de Europa.

Siéntense del lado derecho si van hacia el sur. Van a ver pasar el Parlamento, el Bastión de los Pescadores y la iglesia de Matías en lo alto, el Castillo, el Puente de las Cadenas, el Puente Isabel y el monte Gellért con su estatua.

Budapest fue hasta 1873 tres ciudades: Buda, la colina de los reyes en la orilla oeste; Óbuda, la vieja ciudad romana al norte; y Pest, la llanura comercial al este. Ese año se unieron y nació Budapest. Este tranvía corre por Pest mirando a Buda, que es la mejor manera de entender esa unión.

Bájense en Fővám tér si quieren ir al Gran Mercado, o sigan hasta el final para ver los edificios nuevos de la orilla, como la ballena de vidrio del Bálna.

De noche, con los puentes y el castillo iluminados, el recorrido es todavía más lindo.`,
 reto:"Durante el viaje, cuenten cuántos puentes cruzan por debajo del tranvía o pasan a su lado.",
 ans:"Entre Kossuth tér y Fővám tér pasan junto al Puente de las Cadenas y al Puente Isabel, y terminan al pie del Puente de la Libertad.",
 tip:"De noche, hagan el mismo recorrido para ver la ciudad iluminada sin pagar un crucero."
},
{
 id:"museo", name:"Museo Nacional Húngaro", hu:"Magyar Nemzeti Múzeum", cats:["dia"], lat:47.49100, lng:19.06230, r:60, visit:60,
 hours:["10:00-18:00","","10:00-18:00","10:00-18:00","10:00-18:00","10:00-18:00","10:00-18:00"],
 hnote:"Martes a domingo 10-18; lunes cerrado.",
 short:"Las escaleras donde empezó la revolución de 1848",
 approach:`Vamos al Museo Nacional. El edificio es lindo, pero lo importante son sus escalinatas: ahí, según la tradición, empezó en 1848 la revolución húngara.`,
 narr:`El Museo Nacional Húngaro, un templo neoclásico de 1847, obra de Mihály Pollack.

Lo fundó en 1802 el conde Ferenc Széchényi, padre de István, el del Puente de las Cadenas, donando su colección de libros, monedas y mapas a la nación. Es una familia que, literalmente, construyó el país.

Pero el museo es famoso por una mañana: el 15 de marzo de 1848. Ese día, un grupo de jóvenes encabezados por el poeta Sándor Petőfi recorrió Pest exigiendo libertades. La tradición cuenta que Petőfi recitó en estas escalinatas su Canción Nacional, el Nemzeti dal, con su estribillo: "Juramos que no seremos más esclavos". Los historiadores discuten si realmente lo recitó aquí, pero cada 15 de marzo, fiesta nacional, Hungría se reúne en estas escaleras.

Adentro está el manto de coronación del rey Esteban, del año 1031, y una historia del país desde los romanos hasta el siglo veinte.`,
 reto:"Cuenten las columnas del frente del museo.",
 ans:"Ocho columnas corintias sostienen el frontón, al estilo de un templo griego.",
 tip:"Está a 5 minutos de la Sinagoga de Dohány y a 10 del Gran Mercado."
},
{
 id:"cueva", name:"Iglesia de la Roca", hu:"Sziklatemplom", cats:["dia"], lat:47.48465, lng:19.05100, r:50, visit:20,
 hours:["","09:30-19:30","09:30-19:30","09:30-19:30","09:30-19:30","09:30-19:30","09:30-19:30"],
 hnote:"Entrada paga, con audioguía. Puede cerrar durante misas. Queda al pie del monte Gellért, junto al Puente de la Libertad.",
 short:"Una iglesia en una cueva que los comunistas tapiaron",
 approach:`Vamos a la Iglesia de la Roca, excavada en la ladera del monte Gellért. Les cuento cómo terminó su primera vida: una noche de 1951, la policía entró, arrestó a los monjes y selló la entrada con un muro de hormigón.`,
 narr:`Esta iglesia está dentro de una cueva del monte Gellért. Antes, se decía que en ella había vivido un ermitaño que curaba a los enfermos con el agua termal de la colina.

En 1926, unos estudiantes que habían visto los santuarios rupestres de Lourdes decidieron hacer aquí una iglesia, y la confiaron a los monjes paulinos, la única orden religiosa fundada en Hungría.

En 1951, el régimen comunista disolvió las órdenes religiosas. Una noche la policía entró, se llevó a los monjes, y el prior fue condenado a muerte. La entrada se tapió con un muro de hormigón de casi dos metros de espesor. Durante casi cuarenta años, la gente pasó por aquí sin saber que detrás de esa pared había una iglesia.

El muro se abrió en 1989, con la caída del régimen, y los paulinos volvieron. Todavía pueden ver trozos de ese muro en la entrada.`,
 reto:"En la entrada busquen los restos del muro de hormigón de 1951. ¿Cuánto les parece que mide de grosor?",
 ans:"Casi dos metros. Se dejó un fragmento a la vista como recuerdo.",
 tip:"Desde aquí sale el camino más directo para subir a la Ciudadela."
},
{
 id:"rudas", name:"Baños Rudas", hu:"Rudas gyógyfürdő", cats:["dia"], lat:47.48920, lng:19.04720, r:60, visit:120,
 hours:["06:00-20:00","06:00-20:00","06:00-20:00","06:00-20:00","06:00-20:00","06:00-20:00","06:00-20:00"], le:60,
 hnote:"Abierto todos los días 6-20. Baño nocturno los viernes de 22 a 3. Pileta en la terraza con vista al Danubio.",
 short:"Un baño turco del siglo XVI con pileta en la azotea",
 approach:`Vamos a los Baños Rudas, al pie del monte Gellért. Este baño ya funcionaba cuando Buda era una ciudad del Imperio Otomano.`,
 narr:`Los Baños Rudas son una máquina del tiempo: el corazón del edificio es un baño turco construido hacia 1570 por orden del pachá Sokollu Mustafá.

Entren al baño turco y miren hacia arriba: una cúpula de piedra con pequeños agujeros de vidrio de colores, como estrellas, sobre una pileta octogonal de agua termal. La luz que entra en rayos entre el vapor es igual a la que veían los turcos hace cuatrocientos cincuenta años.

Para los otomanos el baño era un lugar social y religioso, y Buda tenía varios. Cuando los turcos se fueron en 1686, los baños se quedaron.

La parte moderna tiene una pileta en la terraza, en la azotea, con el agua caliente y el Danubio y los puentes delante. Y los viernes a la noche abren de 22 a 3 de la madrugada.`,
 reto:"Dentro del baño turco, cuenten los lados de la pileta central.",
 ans:"Ocho: es octogonal, como en los baños otomanos clásicos.",
 tip:"Es una alternativa más íntima que el Széchenyi, y queda cerca del Puente Isabel."
},
{
 id:"mirador", name:"El Parlamento iluminado desde Buda", hu:"Batthyány tér", cats:["noche"], night:true, lat:47.50665, lng:19.03885, r:70, visit:20,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"Gratis y siempre abierto. Ideal después del atardecer. Metro M2 hasta Batthyány tér, o cruzando a pie el Puente Margarita o el de las Cadenas.",
 short:"La foto que vinieron a buscar",
 approach:`Vamos al otro lado del río para ver el Parlamento de frente, iluminado. Mientras cruzan, miren hacia atrás: esta ciudad de noche es otra.`,
 narr:`Desde la plaza Batthyány, en la orilla de Buda, se ve el Parlamento entero, de frente, reflejado en el Danubio.

De noche lo iluminan miles de focos y el edificio parece de oro. Es la imagen más famosa de Hungría, y la razón por la que el Parlamento se diseñó mirando al río.

La plaza lleva el nombre de Lajos Batthyány, el primer primer ministro de Hungría, en 1848. Tras la derrota de la revolución, los austríacos lo fusilaron en Pest el 6 de octubre de 1849, el mismo día que ejecutaron en Arad a trece generales húngaros. Ese día, cuenta la tradición, los oficiales austríacos brindaron con cerveza para celebrar.

Por eso muchos húngaros todavía no chocan los vasos cuando toman cerveza. Juraron no hacerlo durante ciento cincuenta años. El plazo venció en 1999, pero la costumbre sigue. Si brindan con cerveza esta noche, ya saben: miren a los ojos, pero no choquen los vasos.

La iglesia de dos torres de la plaza es Santa Ana, uno de los templos barrocos más lindos de la ciudad.`,
 reto:"Busquen la cúpula del Parlamento reflejada en el agua. ¿Se ve entera en el reflejo?",
 ans:"Con el río calmo, sí: el reflejo duplica la cúpula. Si hay viento, se rompe en pinceladas doradas.",
 tip:"Las mejores fotos están en el borde del río, al sur de la plaza, frente a la cúpula."
},
{
 id:"crucero", name:"Crucero nocturno por el Danubio", hu:"Esti hajózás", cats:["noche"], night:true, lat:47.49560, lng:19.04900, r:70, visit:70,
 hours:["17:00-22:00","17:00-22:00","17:00-22:00","17:00-22:00","17:00-22:00","17:00-22:00","17:00-22:00"],
 hnote:"Varias compañías salen de los muelles frente a Vigadó tér (Legenda en el muelle 7). Hay paseos de 1 hora y cenas con música. Reserven el horario antes.",
 short:"La ciudad iluminada desde el agua",
 approach:`Vamos al muelle. Mientras caminan por el paseo del Danubio, fíjense en la barandita del tranvía: en algún lugar hay una pequeña princesa de bronce sentada. Es la mascota de este paseo.`,
 narr:`Esta noche, Budapest desde el agua.

El Danubio es el río que atraviesa más países del mundo: diez, desde Alemania hasta el Mar Negro. Y Budapest es, para muchos, la ciudad más hermosa de todo su recorrido. Las riberas entre el Puente Margarita y el Puente de la Libertad son Patrimonio de la Humanidad.

En el barco van a pasar bajo el Puente de las Cadenas, frente al Castillo y al Parlamento iluminados. Fíjense en el Puente de la Libertad, el verde, con sus pájaros Turul dorados en lo alto. Cuando se inauguró en 1896, el emperador Francisco José clavó en persona el último remache, de plata, con sus iniciales. Ese remache de plata, por supuesto, alguien se lo robó.

Y miren el Puente Isabel, el blanco: lleva el nombre de la emperatriz Sisí, la reina más querida por los húngaros. Ella amaba esta ciudad más que Viena, y la ciudad todavía la ama a ella.`,
 reto:"Desde el barco, busquen en el Puente de la Libertad los pájaros en lo alto de los pilares. ¿Cuántos son?",
 ans:"Cuatro aves Turul de bronce dorado, una sobre cada pilar.",
 tip:"Abríguense bien: en noviembre, sobre el agua, el frío pega fuerte. Los barcos tienen cubierta cerrada."
},
{
 id:"szimpla", name:"Szimpla Kert, el bar en ruinas", hu:"Szimpla Kert", cats:["noche"], night:true, lat:47.49700, lng:19.06320, r:50, visit:75,
 hours:["15:00-04:00","15:00-04:00","15:00-04:00","15:00-04:00","15:00-04:00","15:00-04:00","12:00-04:00"],
 hnote:"Entrada gratis. Entre semana abre a las 15 y cierra a las 4.",
 short:"El primer romkocsma: un edificio en ruinas convertido en bar",
 approach:`Vamos al Szimpla Kert, el primer bar en ruinas. Mientras caminan por la calle Kazinczy, piensen que a fines de los noventa este barrio estaba lleno de edificios abandonados que nadie quería, a punto de ser demolidos.`,
 narr:`Bienvenidos al Szimpla Kert, el bar que inventó una forma de salir de noche.

A comienzos de los dos mil, unos amigos alquilaron por poco dinero un edificio abandonado de este barrio, una antigua fábrica de estufas, y lo llenaron de muebles viejos, bicicletas, bañeras, monitores y cosas rescatadas de la basura. Lo llamaron romkocsma, bar en ruinas. La idea se copió en todo el barrio y en medio mundo.

Busquen el Trabant, el auto de plástico de la Alemania del Este, convertido en mesa. En el mundo comunista había que esperar años para conseguir uno.

Cada sala es distinta: una de cine, otra con un bar de vinos húngaros, un patio con árboles y lucecitas. Los domingos a la mañana, el mismo lugar se convierte en un mercado de productores.

Pidan un fröccs, la bebida más húngara: vino blanco con soda, en distintas proporciones con nombres propios. Dicen que el nombre lo inventó el poeta Vörösmarty, cuando el físico Ányos Jedlik, que fabricaba soda, le pidió una palabra húngara para su mezcla.`,
 reto:"Encuentren el Trabant. ¿Qué tiene adentro o encima?",
 ans:"Lo usan como reservado: se puede sentar uno adentro con los tragos. Cambia con los años, pero siempre está.",
 tip:"Alrededor hay otros bares en ruinas y la calle Kazinczy tiene puestos de comida al paso."
},
{
 id:"gozsdu", name:"Gozsdu udvar", hu:"Gozsdu udvar", cats:["noche","comida"], night:true, lat:47.49835, lng:19.05860, r:50, visit:40,
 hours:["24h","24h","24h","24h","24h","24h","24h"],
 hnote:"Un pasaje de patios con bares y restaurantes; de noche, lleno de gente.",
 short:"Siete patios unidos, del barrio judío a la noche de Budapest",
 approach:`Vamos al pasaje Gozsdu. Fíjense: es un atajo entre dos calles que atraviesa siete patios seguidos.`,
 narr:`El Gozsdu udvar es una cadena de siete patios conectados, construidos en 1901, entre las calles Király y Dob.

Su nombre viene de Manó Gozsdu, un abogado de origen rumano que dejó su fortuna a una fundación para becar a estudiantes rumanos pobres. Los alquileres de estos edificios pagaban esas becas.

En los años cuarenta estos patios quedaron dentro del gueto. Durante décadas estuvieron abandonados, hasta que se restauraron y se llenaron de bares y restaurantes.

Hoy es el punto de partida de la noche en el distrito siete. Y a dos pasos, en un patio de la calle Király, todavía queda un fragmento del muro del gueto de 1944.`,
 reto:"Cuenten los patios mientras cruzan de una calle a la otra.",
 ans:"Son siete patios en fila, de la calle Király a la calle Dob.",
 tip:"Buen lugar para cenar algo antes de seguir al Szimpla, que está a cinco minutos."
},
{
 id:"newyork", name:"New York Café", hu:"New York Kávéház", cats:["comida","noche","dia"], lat:47.49865, lng:19.07065, r:40, visit:60,
 hours:["07:00-01:00","07:00-00:00","07:00-00:00","07:00-00:00","07:00-01:00","07:00-01:00","07:00-01:00"],
 hnote:"Abre a las 7. Menos fila de 7 a 9 o después de las 22. De día no reserva; para cenar después de las 18, online.",
 short:"El café más lindo del mundo, según él mismo",
 approach:`Vamos al New York Café. Se presenta como el café más hermoso del mundo, y cuando entren entenderán que no es tan exagerado.`,
 narr:`El New York Café abrió en 1894 en la planta baja del palacio de una compañía de seguros neoyorquina, de ahí el nombre.

Columnas de mármol retorcidas, techos con frescos, arañas de cristal y oro por todas partes. Fue el café de los escritores de la revista Nyugat, la más importante de la literatura húngara: los mozos les daban papel y tinta gratis, y un plato barato, el "plato del escritor".

Cuenta la leyenda que la noche de la inauguración, el dramaturgo Ferenc Molnár tiró la llave de la puerta al Danubio para que el café nunca pudiera cerrar. Y durante décadas no cerró, ni de día ni de noche.

Pidan un café y una porción de Rigó Jancsi, un cubo de chocolate con crema. Lleva el nombre de un violinista gitano que, en 1896, enamoró a una princesa estadounidense casada con un príncipe belga. Ella abandonó a su marido y se fugó con él. El escándalo fue tan grande que un pastelero le dedicó una torta.`,
 reto:"Busquen en el salón las columnas retorcidas. ¿A qué les recuerda su forma?",
 ans:"A columnas salomónicas, como las del altar de San Pedro en Roma: retorcidas como un tirabuzón.",
 tip:"Si la fila es larga, el Centrál Kávéház, en la calle Károlyi, tiene historia literaria y menos espera."
},
{
 id:"hungarikum", name:"Hungarikum Bisztró", hu:"Hungarikum Bisztró", cats:["comida"], night:true, lat:47.50545, lng:19.04905, r:40, visit:90,
 hours:["12:00-22:00","12:00-22:00","12:00-22:00","12:00-22:00","12:00-22:00","12:00-22:00","12:00-22:00"],
 hnote:"Cocina húngara casera a 5 minutos del hotel (Steindl Imre u. 13). Es chico y se llena: reserven con días de anticipación. Horario aproximado; confírmenlo al reservar.",
 short:"Gulyás, paprikás y música en vivo, cerca del hotel",
 approach:`Vamos a comer al Hungarikum Bisztró. Les adelanto qué pedir para que lleguen decididos.`,
 narr:`El Hungarikum es una cocina húngara de las de siempre, a pocas cuadras del Parlamento y de su hotel.

Para empezar, una sopa gulyás. Para el plato fuerte, el clásico de los clásicos: paprikás csirke, pollo a la paprika con crema agria y nokedli, unos ñoquis pequeños de forma irregular. O el pörkölt, el guiso de carne con cebolla y paprika, que es lo que el resto del mundo llama, por error, gulash.

Otras dos cosas para probar: el töltött káposzta, repollo relleno, y el hortobágyi palacsinta, un panqueque relleno de carne con salsa de paprika.

Para tomar, pregunten por un vino de Eger o de Villány, o un fröccs. Para terminar, una copa de pálinka, el aguardiente de fruta, o un Unicum, el licor de hierbas negro en botella redonda. Cuenta la leyenda que el médico de la corte, el doctor Zwack, se lo dio a probar al emperador José II en 1790, y el emperador exclamó: "¡Das ist ein Unikum!", esto es algo único. Y así se quedó.`,
 reto:"Pidan al mozo que les enseñe a decir salud en húngaro.",
 ans:"Egészségedre, que se pronuncia más o menos 'éguesh-shé-gue-dre'. Y no choquen los vasos de cerveza.",
 tip:"Reserven. Si está lleno, el Kispiac, en la calle Hold, es otra excelente opción a pocas cuadras."
},
{
 id:"kispiac", name:"Kispiac Bisztró", hu:"Kispiac Bisztró", cats:["comida"], lat:47.50395, lng:19.05080, r:40, visit:75,
 hours:["","12:00-22:00","12:00-22:00","12:00-22:00","12:00-22:00","12:00-22:00","12:00-22:00"],
 hnote:"Bistró chico junto al mercado de la calle Hold (Hold u. 13). Conviene reservar; verifiquen el horario del día en Google Maps.",
 short:"Cocina de mercado húngara, sin vueltas",
 approach:`Vamos al Kispiac, en la calle Hold. Pegado está el mercado techado del centro, el Belvárosi Piac, de fines del siglo diecinueve.`,
 narr:`Kispiac significa pequeño mercado, y está junto al mercado de la calle Hold, uno de los cinco grandes mercados techados que abrieron en la ciudad a fines del siglo diecinueve.

Es una cocina de carnes, embutidos y guisos: codillo de cerdo, salchichas caseras, chicharrones, guisos con paprika y pickles de todo tipo, que en Hungría acompañan casi cualquier plato. Es comida de invierno, perfecta para noviembre.

Si quieren algo dulce de cierre, pregunten por el somlói galuska: un bizcocho con crema, chocolate y nueces, servido como una montaña desordenada. Es el postre favorito de muchos húngaros.`,
 reto:"Miren los frascos de pickles. ¿Cuántas verduras distintas distinguen?",
 ans:"Pepinos, repollo, pimientos, coliflor, zanahoria... En Hungría se encurte casi todo.",
 tip:"A pasos de la Plaza de la Libertad y de la Basílica."
},
{
 id:"kor", name:"Café Kör", hu:"Café Kör", cats:["comida"], lat:47.49985, lng:19.05250, r:40, visit:75,
 hours:["","10:00-22:00","10:00-22:00","10:00-22:00","10:00-22:00","10:00-22:00","10:00-22:00"],
 hnote:"Clásico desde 1995, en Sas utca 17, a la vuelta de la Basílica. Menú escrito en una gran hoja en la pared. Mediodía muy concurrido; verifiquen el horario del día.",
 short:"El clásico de los oficinistas, junto a la Basílica",
 approach:`Vamos al Café Kör, a la vuelta de la Basílica. Es de esos lugares donde almuerzan los de la zona y no solo los turistas.`,
 narr:`El Café Kör abrió en 1995 y es uno de esos restaurantes que no se volvieron una trampa para turistas.

El menú cambia según la estación y está escrito a mano en un gran papel en la pared. Es buen lugar para probar el főzelék, un plato muy húngaro que no existe en otros países: un puré espeso de verduras, de arvejas, de lentejas o de papas, servido con algo encima, una albóndiga, un huevo frito o una salchicha. Es la comida de todos los días de los húngaros, la que hacía la abuela.

También tienen hígado de ganso, schnitzel y sopas de temporada.`,
 reto:"Encuentren en la pared del menú la palabra főzelék y adivinen de qué verdura es.",
 ans:"Borsófőzelék es de arvejas, lencsefőzelék de lentejas, krumplifőzelék de papas.",
 tip:"A una cuadra de la Basílica: ideal para almorzar antes o después de subir a la cúpula."
},
{
 id:"frici", name:"Frici Papa", hu:"Frici Papa Kifőzdéje", cats:["comida"], lat:47.50110, lng:19.06320, r:40, visit:60,
 hours:["","11:00-22:00","11:00-22:00","11:00-22:00","11:00-22:00","11:00-22:00","11:00-22:00"],
 hnote:"Lun a sáb 11-22, domingo cerrado (Király u. 55). Barato, sin reserva, a veces con espera.",
 short:"La cocina del abuelo Frici: barata, abundante y verdadera",
 approach:`Vamos a lo del abuelo Frici, en la calle Király. Kifőzde es una palabra linda: un comedor casero, de los que daban de comer a los trabajadores del barrio.`,
 narr:`Frici Papa Kifőzdéje: la cocina del abuelo Frici.

Es un comedor de dos pisos, sencillo, con precios de barrio y platos enormes. Aquí se viene a comer gulyás de verdad, pörkölt, codillo de cerdo, conejo y guisos de arvejas.

La calle Király era, en el siglo diecinueve, la calle del comercio judío de Pest, con cientos de tiendas. Hoy es la frontera entre el barrio judío y el de las fiestas.`,
 reto:"Pidan pörkölt y gulyás y comparen: ¿cuál es sopa y cuál es guiso?",
 ans:"El gulyás es sopa, con caldo; el pörkölt es guiso espeso. Fuera de Hungría al pörkölt lo llaman gulash, y los húngaros sufren.",
 tip:"A la vuelta del Gozsdu y del Szimpla: perfecto para cenar antes de la noche en el distrito siete."
}
];
