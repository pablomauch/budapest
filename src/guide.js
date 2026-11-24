/* ======================= HISTORIAS DE GUÍA (flujo continuo) =======================
   Se eligen por cercanía (lat/lng) o, si no tienen lugar, como historia general.      */
const GUIDE = [
 {id:"tres", t:"Una ciudad hecha de tres", x:`Les cuento cómo nació el nombre de esta ciudad. Hasta 1873, aquí había tres ciudades distintas. Óbuda, la más vieja, al norte, donde los romanos tuvieron su ciudad, Aquincum. Buda, en la orilla oeste, sobre las colinas, la ciudad de los reyes y del castillo. Y Pest, en la orilla este, en la llanura, la ciudad de los comerciantes, que crecía a toda velocidad.

En 1873 se unieron en una sola: Budapest. Pero los vecinos todavía hablan de ir a Buda o a Pest como si fueran a otro lugar. Y tienen razón: tienen otra cara. Buda es verde, empinada, tranquila. Pest es plana, ruidosa y viva. Ustedes están parando en Pest.`},
 {id:"kossuth56", lat:47.5068, lng:19.0480, t:"El jueves sangriento", x:`Les cuento lo que pasó en esta plaza el 25 de octubre de 1956. La revolución llevaba dos días. Una multitud desarmada, miles de personas, se reunió frente al Parlamento. Algunos incluso charlaban con los soldados de los tanques soviéticos, creyendo que se pasarían a su lado.

De pronto, empezaron los disparos desde los techos. Nunca se aclaró del todo quién disparó primero. Murieron decenas de personas, quizás más de cien. Las bolitas de metal en la fachada del ministerio de enfrente marcan dónde pegaron las balas. Bajo la plaza hay un pequeño memorial que cuenta esa mañana.`},
 {id:"turcos", lat:47.4920, lng:19.0440, t:"Ciento cuarenta y cinco años de turcos", x:`En 1526, en la batalla de Mohács, el ejército húngaro fue destrozado por el del sultán Solimán el Magnífico, y el joven rey Luis Segundo murió ahogado en un arroyo mientras huía. En 1541 los otomanos tomaron Buda, y se quedaron ciento cuarenta y cinco años.

Dejaron mezquitas, que después se convirtieron en iglesias; baños, que todavía funcionan; y costumbres que los húngaros adoptaron como propias: la paprika, el café y ciertos dulces. Al norte de la colina del Castillo todavía está la tumba de Gül Baba, un derviche turco al que llamaban el padre de las rosas. Es un lugar de peregrinación para los turcos hasta hoy.`},
 {id:"sitio45", lat:47.4985, lng:19.0365, t:"El invierno del sitio", x:`En diciembre de 1944, el Ejército Rojo rodeó Budapest. Hitler ordenó defender la ciudad casa por casa. Siguió uno de los sitios más largos y sangrientos de la Segunda Guerra Mundial: más de cien días.

Los civiles vivieron semanas en los sótanos, sin agua ni calefacción. Los alemanes, al retirarse de Pest a Buda, volaron todos los puentes del Danubio. Cuando terminó, en febrero de 1945, la colina del Castillo era un campo de ruinas. Lo que ven hoy es, en gran parte, una reconstrucción heroica de la posguerra.`},
 {id:"andrassy", lat:47.5040, lng:19.0610, t:"Sisí y el conde Andrássy", x:`El hombre que da nombre a esta avenida, el conde Gyula Andrássy, tenía una historia novelesca. En 1849 había luchado contra Austria, y los austríacos lo condenaron a muerte en ausencia: colgaron su efigie en la horca porque él ya había huido. En París lo apodaron "el bello ahorcado".

Volvió perdonado, y se convirtió en el gran negociador del Compromiso de 1867, que dio a Hungría su autonomía dentro del imperio. Fue primer ministro, y después canciller de todo el imperio. Y fue el gran amigo, quizás algo más, de la emperatriz Sisí. Del ahorcado en efigie a ministro del emperador: solo en Hungría.`},
 {id:"metro", lat:47.5005, lng:19.0560, t:"El metro de juguete", x:`Debajo de esta zona corre la línea amarilla del metro, la M1. Se inauguró en 1896 y fue el primer metro de Europa continental. Solo Londres tenía uno antes.

La construyeron en menos de dos años, a muy poca profundidad, para no tener que cavar: abrieron la avenida, pusieron las vías y la volvieron a tapar. Por eso se baja a las estaciones por unas escaleras cortas, casi como a un sótano. Los azulejos y los carteles de madera de las estaciones son los originales. El emperador Francisco José viajó en ella el día de la inauguración.`},
 {id:"hielo", lat:47.4975, lng:19.0465, t:"Cuando el Danubio se congelaba", x:`Antes de los puentes fijos, el Danubio en invierno era un problema serio. Cuando se congelaba, la gente cruzaba a pie sobre el hielo. Y cuando el hielo empezaba a romperse, nadie cruzaba durante días.

Lo peor era el deshielo. En marzo de 1838, los bloques de hielo hicieron un dique río abajo y el agua inundó Pest. Miles de casas, muchas de adobe, se derrumbaron. Después de esa catástrofe, Pest se reconstruyó en piedra y ladrillo, y por eso el centro que ven hoy parece tan nuevo y tan elegante.`},
 {id:"wallenberg", t:"El hombre de los pasaportes", x:`Raoul Wallenberg tenía treinta y un años cuando llegó a Budapest en julio de 1944, como diplomático de la neutral Suecia. Inventó un pasaporte de protección sueco, el Schutz-Pass, con escudos y sellos que impresionaban a los burócratas nazis, y alquiló treinta y dos edificios donde los protegidos vivían bajo bandera sueca.

Se cuenta que subía a los trenes de deportación y repartía pasaportes por las ventanillas, gritando a los guardias que esas personas estaban bajo protección de Suecia. En enero de 1945 fue a ver a los soviéticos, y nunca regresó. Murió en prisión en la Unión Soviética, en circunstancias nunca aclaradas.`},
 {id:"liszt", lat:47.5040, lng:19.0636, t:"Liszt, la primera estrella de rock", x:`Franz Liszt fue la primera superestrella de la historia de la música. En sus conciertos, las mujeres se desmayaban, se peleaban por sus guantes y guardaban como reliquia las colillas de sus cigarros. Un poeta alemán, Heinrich Heine, inventó una palabra para eso: lisztomanía.

Fue el primero en dar recitales de piano solo, sin orquesta, y en poner el piano de costado para que el público viera su perfil. Nació en un pueblo de la frontera, hablaba más alemán y francés que húngaro, pero se sintió siempre húngaro, y fundó en esta ciudad la Academia de Música que lleva su nombre.`},
 {id:"pestboom", t:"La Manhattan del Danubio", x:`Miren los edificios a su alrededor: casi todos tienen entre cien y ciento cincuenta años. Después del Compromiso de 1867, Pest vivió un crecimiento explosivo. En cuarenta años, la ciudad pasó de unos trescientos mil a cerca de un millón de habitantes.

Se construían bulevares, palacios de alquiler, cafés, teatros y bancos a un ritmo que en Europa solo tenían Berlín o Viena. Por eso las fachadas son tan parecidas en su exuberancia: columnas, cariátides, balcones de hierro. Cada propietario quería que su edificio pareciera un palacio. Y si entran en un patio interior, verán los pasillos abiertos, los famosos gangos, donde la vida de los vecinos transcurría a la vista de todos.`},
 {id:"tunel", lat:47.4983, lng:19.0400, t:"El túnel para guardar el puente", x:`Frente al Puente de las Cadenas, la colina del Castillo está atravesada por un túnel, también obra de Adam Clark. Los húngaros tienen un chiste sobre él: dicen que lo construyeron para guardar el puente adentro cuando llueve.

Y como el túnel mide casi lo mismo que el puente, a los chicos se lo cuentan muy en serio.`},
 {id:"houdini", lat:47.4997, lng:19.0362, t:"El mago que nació en Pest", x:`Harry Houdini, el escapista más famoso de la historia, nació en Budapest en 1874 con el nombre de Erik Weisz. Era hijo de un rabino, y la familia emigró a Estados Unidos cuando él tenía cuatro años.

Se escapaba de esposas, de celdas, de baúles cerrados bajo el agua y de camisas de fuerza colgado cabeza abajo de un rascacielos. Y aunque se fue de chico, siempre dijo que había nacido en Appleton, Wisconsin. Budapest, igual, lo reclama como suyo, y tiene un pequeño museo dedicado a él aquí, en el Castillo.`},
 {id:"cafesociety", t:"El café como oficina", x:`En la Budapest de 1900, los cafés no eran solo para tomar café. Cada uno tenía su clientela: el de los periodistas, el de los actores, el de los jugadores de ajedrez, el de los abogados.

Con un solo café uno podía quedarse el día entero. El mozo traía diarios de todo el mundo, colgados en varillas de madera, papel y tinta, y mensajes. Algunos escritores daban como dirección postal la de su café. Y hubo uno que, cuando le preguntaron dónde vivía, contestó: vivo en el café; a dormir voy a mi casa.`},
 {id:"aranycsapat", t:"El equipo de oro", x:`En los años cincuenta, Hungría tuvo uno de los mejores equipos de fútbol de la historia, el Aranycsapat, el equipo de oro. Con Ferenc Puskás, Sándor Kocsis y Nándor Hidegkuti, estuvo más de treinta partidos sin perder, ganó el oro olímpico de 1952 y humilló a Inglaterra seis a tres en Wembley.

Llegó a la final del Mundial de 1954 como gran favorito y perdió contra Alemania Occidental, a la que había goleado ocho a tres en la primera fase. En Alemania lo llaman el milagro de Berna. En Hungría, todavía duele. Y el estadio nacional de Budapest lleva hoy el nombre de Puskás.`}
];
