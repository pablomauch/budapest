/* ======================= GUÍA PRÁCTICA ======================= */
const TIPS = [
{ic:"🚇", t:"Moverse por la ciudad", h:`
<p>El centro se camina entero. Para lo lejano (Plaza de los Héroes, Széchenyi, monte Gellért) usen metro, tranvía o bus.</p>
<ul>
<li><b>Bajen la app BudapestGO</b> (la oficial): planifica viajes, muestra horarios en tiempo real y vende boletos en el teléfono.</li>
<li><b>Pase de 72 horas: 5.750 Ft</b> (unos 16 €) por persona. Les cubre los tres días sin pensar. El de 24 horas cuesta 2.750 Ft.</li>
<li><b>Boleto suelto: 500 Ft</b>, un viaje sin transbordos (700 Ft si lo compran al chofer). En el metro M1 y en algunos buses pueden pagar acercando la tarjeta al validador.</li>
<li><b>Validen siempre</b> el boleto en papel al subir: los controles son frecuentes y la multa es alta. El pase digital va a nombre de cada uno, con documento.</li>
<li>Viajes que les sirven: <b>M1 amarilla</b> por Andrássy hasta Hősök tere; <b>tranvía 2</b> por el río; <b>tranvías 4 y 6</b> por el Gran Bulevar, toda la noche; <b>bus 16</b> desde Deák tér a la colina del Castillo.</li>
<li><b>Taxis:</b> usen <b>Bolt</b> o <b>Uber</b> (en Budapest Uber manda taxis de Főtaxi). La tarifa está regulada por la ciudad y ven el precio antes. No tomen taxis en la calle ni acepten ofertas en las estaciones.</li>
</ul>`},
{ic:"🎟️", t:"Entradas que conviene reservar", h:`
<ul>
<li><b>Parlamento:</b> solo con visita guiada; se agotan. <a href="https://www.jegymester.hu/parlament" target="_blank" rel="noopener">jegymester.hu</a></li>
<li><b>Baños Széchenyi:</b> online sale más barato y evitan fila. <a href="https://www.szechenyibath.hu" target="_blank" rel="noopener">szechenyibath.hu</a></li>
<li><b>Hospital en la Roca:</b> visitas a hora fija. <a href="https://www.sziklakorhaz.eu" target="_blank" rel="noopener">sziklakorhaz.eu</a></li>
<li><b>Ópera:</b> visita guiada o función. <a href="https://www.opera.hu" target="_blank" rel="noopener">opera.hu</a></li>
<li><b>Crucero nocturno:</b> reserven el horario; salen de los muelles frente a Vigadó tér.</li>
<li><b>Hungarikum Bisztró:</b> reserva con días de anticipación.</li>
<li>Sin reserva: Basílica, Matías, Bastión, Sinagoga (compran en la puerta), Mercado, Casa del Terror.</li>
</ul>`},
{ic:"🍲", t:"Qué comer", h:`
<ul>
<li><b>Gulyás:</b> sopa de carne con paprika y papa. No es un guiso: es sopa.</li>
<li><b>Pörkölt:</b> el guiso espeso de carne y paprika que en el resto del mundo llaman gulash.</li>
<li><b>Csirkepaprikás:</b> pollo a la paprika con crema agria, con <b>nokedli</b> (ñoquis chiquitos).</li>
<li><b>Lángos:</b> masa frita con crema agria, queso y ajo. El del Gran Mercado es el clásico.</li>
<li><b>Töltött káposzta:</b> repollo relleno de carne y arroz, con chucrut.</li>
<li><b>Halászlé:</b> sopa de pescado de río, roja y picante.</li>
<li><b>Főzelék:</b> puré espeso de verduras con algo encima. La comida de todos los días.</li>
<li><b>Hortobágyi palacsinta:</b> panqueque relleno de carne con salsa de paprika.</li>
<li><b>Kolbász y téliszalámi:</b> chorizo picante y salame de invierno.</li>
</ul>
<p>Dónde: <a data-open="mercado">Gran Mercado</a> · <a data-open="hungarikum">Hungarikum</a> · <a data-open="kispiac">Kispiac</a> · <a data-open="kor">Café Kör</a> · <a data-open="frici">Frici Papa</a></p>`},
{ic:"🍰", t:"Dulces y cafés", h:`
<ul>
<li><b>Kürtőskalács:</b> el pastel chimenea de los mercados navideños, con canela o nuez.</li>
<li><b>Torta Dobos:</b> capas finas de bizcocho y crema de chocolate, con techo de caramelo duro.</li>
<li><b>Esterházy:</b> crema de almendras con glaseado blanco rayado.</li>
<li><b>Rigó Jancsi:</b> cubo de mousse de chocolate. Tiene historia de amor escandaloso.</li>
<li><b>Somlói galuska:</b> bizcocho, crema, chocolate y nueces, servido desordenado. El postre favorito de los húngaros.</li>
<li><b>Túró Rudi:</b> barrita de requesón dulce bañada en chocolate. Búsquenla en la heladera de cualquier súper.</li>
<li><b>Bejgli:</b> rollo de nuez o de amapola, típico de Navidad.</li>
</ul>
<p>Dónde: <a data-open="navidad">Gerbeaud</a> · <a data-open="newyork">New York Café</a> · Centrál Kávéház (Károlyi u. 9).</p>`},
{ic:"🍷", t:"Qué tomar", h:`
<ul>
<li><b>Fröccs:</b> vino blanco con soda. El "kisfröccs" es mitad y mitad, chico.</li>
<li><b>Pálinka:</b> aguardiente de fruta (ciruela, damasco, pera). Fuerte: más de 40 grados.</li>
<li><b>Unicum:</b> licor de hierbas amargo, botella redonda. Lo aman o lo odian.</li>
<li><b>Tokaji Aszú:</b> vino dulce, "el vino de los reyes". Ideal con postre o para llevar.</li>
<li><b>Egri Bikavér:</b> "Sangre de Toro" de Eger, tinto. Cuenta la leyenda que los defensores de Eger lo tomaban antes de pelear contra los turcos, y los turcos creyeron que bebían sangre de toro.</li>
<li><b>Forralt bor:</b> vino caliente con especias, en todos los mercados navideños.</li>
<li>Al brindar con cerveza, muchos húngaros <b>no chocan los vasos</b>. Con vino o pálinka sí.</li>
</ul>`},
{ic:"💶", t:"Plata y propinas", h:`
<ul>
<li>La moneda es el <b>forint (Ft)</b>. En noviembre de 2026, <b>1 € ≈ 365 Ft</b>. Truco: 1.000 Ft ≈ 2,75 €.</li>
<li>Se paga con <b>tarjeta</b> en casi todos lados, incluso montos chicos. Lleven algo de efectivo para mercados navideños y baños públicos.</li>
<li>Si la terminal o el cajero preguntan en qué moneda cobrar, elijan <b>forint</b>. Si eligen euros, les aplican un tipo de cambio peor.</li>
<li>Eviten las casas de cambio de las zonas turísticas y los cajeros independientes azules y amarillos: cobran comisiones altas.</li>
<li><b>Propina:</b> 10 a 15 %. Pero revisen la cuenta: si dice <b>"szervízdíj"</b>, el servicio ya está incluido.</li>
<li>Costumbre: no se deja la plata en la mesa. Al pagar, le dicen al mozo cuánto cobrar en total, propina incluida.</li>
</ul>`},
{ic:"🗣️", t:"Diez palabras útiles", words:[
 ["Szia","sí-a","Hola / chau (informal)"],
 ["Jó napot","ió nápot","Buen día (formal)"],
 ["Köszönöm","kö-sö-nöm","Gracias"],
 ["Kérem","ké-rem","Por favor"],
 ["Igen / Nem","í-guen / nem","Sí / No"],
 ["Bocsánat","bó-cha-nat","Perdón"],
 ["Egészségedre","é-gués-shé-gue-dre","¡Salud!"],
 ["Finom","fí-nom","Rico"],
 ["A számlát kérem","a sám-lat ké-rem","La cuenta, por favor"],
 ["Mennyi?","mé-ñi","¿Cuánto cuesta?"]
]},
{ic:"🛍️", t:"Qué llevarse", h:`
<ul>
<li><b>Paprika</b> en lata o bolsita (dulce "édes", picante "csípős") y la pasta <b>Erős Pista</b>.</li>
<li><b>Salame Pick</b> de Szeged y <b>foie gras</b> de ganso.</li>
<li><b>Tokaji Aszú</b> o una botella de <b>pálinka</b>. Si vuelan, a la valija despachada.</li>
<li><b>Porcelana Herend o Zsolnay</b>, si quieren algo de verdad.</li>
<li>Un <b>cubo de Rubik</b>: inventado en Budapest.</li>
<li>Mejores precios: en los supermercados (Spar, Lidl) para comida y bebida; el Gran Mercado para paprika.</li>
</ul>`},
{ic:"⚠️", t:"Trampas para turistas", h:`
<ul>
<li><b>Bares y restaurantes de la calle Váci</b> con gente invitando desde la puerta: menús sin precios y cuentas infladas. Si alguien en la calle los invita a tomar algo, digan que no.</li>
<li><b>Taxis</b> que se ofrecen en estaciones o en la calle. Usen Bolt o Uber.</li>
<li><b>Cambio:</b> nunca en la calle. Y desconfíen de las casas que anuncian "0 % de comisión".</li>
<li><b>Carteristas</b> en los tranvías 2, 4 y 6, en el metro y en los mercados navideños. Mochila adelante.</li>
<li>Siempre pidan ver los precios antes de pedir.</li>
</ul>`},
{ic:"🧥", t:"Clima y luz", h:`
<ul>
<li>A fines de noviembre: entre <b>0 y 7 grados</b>, a menudo gris, a veces con niebla sobre el río.</li>
<li><b>Atardece hacia las 16</b> y a las 17 ya es de noche. Prioricen los miradores al mediodía.</li>
<li>Capas, gorro y guantes. En el crucero y en los miradores el viento pega fuerte.</li>
<li>Para los baños termales: malla y ojotas. Caminar mojados en el frío dura unos segundos y vale la pena.</li>
</ul>`},
{ic:"🆘", t:"Emergencias", h:`
<ul>
<li>Emergencias (policía, ambulancia, bomberos): <b>112</b></li>
<li>Policía turística, atienden en inglés: <b>+36 1 438 8080</b></li>
<li>Su hotel: <b>Prestige Hotel Budapest</b>, Vigyázó Ferenc u. 5.</li>
<li>Farmacia se dice <b>gyógyszertár</b> o <b>patika</b>.</li>
</ul>`}
];
