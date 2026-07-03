/* ---------- DATOS DE LOS PLANES ---------- */
const planes = {
  ballenas:{
    titulo:"Avistamiento de Ballenas 🐋",
    sub:"Bahía Málaga · Pacífico colombiano · 2 noches",
    grad:"linear-gradient(150deg,#06283d,#1363a8 60%,#37b4c3)",
    foto:"Bahia Malaga/Principal Bahia Malaga.png",
    incluye:[
      "Transporte terrestre y marítimo ida y regreso",
      "2 noches en Hotel Magüipi (Bahía Málaga) con piscina",
      "Alimentación: 2 desayunos, 3 almuerzos y 2 cenas",
      "Tour en lancha para avistamiento de ballenas",
      "Playa Magüipi, Playa Dorada y recorrido por manglar",
      "Impuesto de muelle turístico",
      "Seguro hotelero y coordinador de viaje"
    ],
    precios:[["Acomodación múltiple","$1.020.000"],["Acomodación doble","$1.160.000"]],
    nota:"Opcional: segundo avistamiento de ballenas por $100.000. Salida viernes ~5:00 p.m. desde Medellín y Oriente.",
    ws:"Hola Orientours, quiero información del plan Avistamiento de Ballenas en Bahía Málaga 🐋",
    pdf:"pdf/Ballenas Bahia Malaga Pacifico colombiano 2026.pdf"
  },
  capurgana:{
    titulo:"Capurganá + Sapzurro + La Miel 🌴",
    sub:"Chocó caribeño y Panamá · Sin pasaporte",
    grad:"linear-gradient(150deg,#0c7489,#19b3a6 55%,#9be8c4)",
    foto:"Capurgana/Principal Capurgana.jpeg",
    incluye:[
      "Bus ida y regreso desde Medellín y El Carmen de Viboral",
      "Transporte marítimo Necoclí – Capurganá – Necoclí",
      "Hotel con piscina y habitaciones con aire acondicionado",
      "2 desayunos + 1 almuerzo + 1 cena",
      "Visita a Capurganá, Sapzurro, Cabo Tiburón y La Miel (Panamá)",
      "Seguro de viaje y coordinador durante todo el plan"
    ],
    precios:[["Acomodación múltiple","$875.000"],["Acomodación doble","$975.000"]],
    nota:"No incluye tasas portuarias (~$30.000 en efectivo). Tour opcional a Playa Soledad + Bahía Aguacate: $70.000. Lleva ropa blanca para la fiesta de la primera noche.",
    ws:"Hola Orientours, quiero información del plan Capurganá + Sapzurro + La Miel, Panamá 🌴",
    pdf:"pdf/Capurganá 2026.pdf"
  },
  islafuerte:{
    titulo:"Isla Fuerte 🏝️",
    sub:"Caribe diferente y auténtico · 2 noches",
    grad:"linear-gradient(150deg,#f7b733,#ec7e3c 55%,#d6543a)",
    foto:"Isla fuerte/Principal Isla fuerte.jpg",
    incluye:[
      "Bus desde Medellín y Oriente (El Carmen) + traslados en lancha",
      "2 noches de hospedaje en la isla",
      "Toda la alimentación (2 desayunos, 2 almuerzos, 2 cenas)",
      "Vuelta a la isla en lancha",
      "Tour: la Bonga, el Árbol que Camina y la Cueva de Morgan",
      "Punta del Inglés, Playa San Diego, Punta Arena y Cebolleta",
      "Seguros y coordinador acompañante"
    ],
    precios:[["Acomodación múltiple","$735.000"],["Acomodación doble (+10%)","$808.500"]],
    nota:"No incluye: ingreso a la isla ($10.000 en efectivo) ni alimentación en carretera. Lleva gafas de snorkel, ¡súper recomendado!",
    ws:"Hola Orientours, quiero información del plan Isla Fuerte 🏝️",
    pdf:"pdf/Isla Fuerte 2026.pdf"
  },
  murillo:{
    titulo:"Murillo y Nevado del Ruiz 🏔️",
    sub:"Tolima · Parque Nacional Natural Los Nevados",
    grad:"linear-gradient(150deg,#314f6e,#6f8ba6 55%,#aebfce)",
    foto:"Murillo/Principal murillo.jpg",
    incluye:[
      "Transporte ida y regreso desde Medellín",
      "1 noche de hospedaje en Murillo",
      "2 desayunos y 2 almuerzos",
      "Ingreso al PNN Los Nevados",
      "Cascada El Silencio, Laguna Escondida y pueblito Murillo",
      "Laguna Negra, Arenales, Valle de las Tumbas y más (en vehículo)",
      "Guía local, charla interpretativa y coordinador de viaje"
    ],
    precios:[["Habitación múltiple","$500.000"],["Cuádruple","$520.000"],["Doble","$540.000"]],
    nota:"Edad permitida: 7 a 69 años. Destino de alta montaña (+4.000 msnm): lleva muy buen abrigo, capa de lluvia y bloqueador. No recomendado para personas con afecciones respiratorias o cardíacas, ni embarazadas.",
    ws:"Hola Orientours, quiero información del plan Murillo y Nevado del Ruiz 🏔️",
    pdf:"pdf/Murillo 2026.pdf"
  },
  ejecafetero:{
    titulo:"Eje Cafetero ☕",
    sub:"Quindío, Risaralda y Caldas · 4 días, 3 noches · Salidas todos los fines de semana",
    grad:"linear-gradient(150deg,#5c3d2e,#865439 55%,#c68b59)",
    foto:"Eje cafetero/Principal eje cafetero.jpeg",
    plus:["Valle del Cócora","Termales Santa Rosa de Cabal","Parque del Café","Parque Panaca","🏊 Hospedaje con piscina"],
    incluye:[
      "Transporte terrestre ida y regreso en bus de turismo desde Medellín y Oriente",
      "3 noches de hospedaje en Finca Hotel Campestre con piscina",
      "Alimentación: 3 desayunos y 3 cenas",
      "Entrada y pasaporte al Parque del Café",
      "Entrada al Parque Panaca",
      "Entrada a los Termales de Santa Rosa de Cabal",
      "Visita a Salento y el Valle de Cocora",
      "Visita a Filandia y el Mirador Colina Iluminada / Encanto",
      "Tours panorámicos por Armenia y Pereira",
      "Tarjeta de asistencia médica y coordinador de viaje"
    ],
    precios:[
      ["Acomodación Múltiple","$745.000"],
      ["Acomodación Doble","Consultar"]
    ],
    nota:"Salida 4:30 a.m. desde Medellín y Oriente. No incluye gastos no especificados ni miradores privados en Cocora. Para viajes con niños consultar tarifas especiales.",
    ws:"Hola Orientours, quiero información del plan Eje Cafetero ☕",
    pdf:"pdf/Eje cafetero.pdf"
  },
  norcasia:{
    titulo:"Norcasia y Río La Miel 🛶",
    sub:"Caldas · 2 días, 1 noche",
    grad:"linear-gradient(150deg,#0a7e8c,#23a8a0 55%,#7fd0c2)",
    foto:"Norcasia/Principal Norcasia.jpg",
    incluye:[
      "Transporte ida y regreso desde Medellín",
      "Hospedaje en hotel del pueblo",
      "2 almuerzos, 1 desayuno y 1 snack",
      "Body rafting por el Río La Miel (con chaleco, apto si no sabes nadar)",
      "Visita a la Cascada La Clara",
      "Mirador del Embalse Amaní",
      "Coordinador de viaje y asistencia médica"
    ],
    precios:[["Acomodación múltiple","$420.000"],["Doble (pareja)","$462.000"],["Individual","$485.000"]],
    nota:"Tour opcional en el embalse: $60.000. Reserva desde $150.000. Importante: lleva tenis cerrados que se puedan mojar para el río (no crocs ni sandalias). Nivel de aventura 2/5.",
    ws:"Hola Orientours, quiero información del plan Norcasia y Río La Miel 🛶",
    pdf:"pdf/Norcasia 2026.pdf"
  },
  mutata:{
    titulo:"Mutatá Mágico 💦",
    sub:"Urabá antioqueño · 2 días, 1 noche",
    grad:"linear-gradient(150deg,#1c6b46,#2e9e63 55%,#8fd0a4)",
    foto:"Mutata/principal_mutata.jpg",
    incluye:[
      "Bus ida y regreso desde El Carmen de Viboral y Medellín",
      "Hospedaje 1 noche en Linda Mariana",
      "2 almuerzos y 1 desayuno",
      "Charco Puenteadero (día 1)",
      "Cavernas del Río Bedó (día 2)",
      "Visita al parque principal de Mutatá",
      "Seguro de viaje y coordinador"
    ],
    precios:[["Acomodación múltiple","$280.000"],["Acomodación doble","$308.000"],["Individual","$322.000"]],
    nota:"Tour de tubing opcional: $60.000. Reserva con $100.000. En festivos aplica un pequeño incremento. Niños desde los 0 años son bienvenidos.",
    ws:"Hola Orientours, quiero información del plan Mutatá Mágico 💦",
    pdf:"pdf/Mutatá 2026.pdf"
  },
  makai:{
    titulo:"Solos y Solas · Makai 🎉",
    sub:"Necoclí · Viernes a lunes · 20 a 45 años",
    grad:"linear-gradient(150deg,#b53471,#ee5253 55%,#feca57)",
    foto:"Necocli/Principal Necocli.jpeg",
    incluye:[
      "Transporte desde Oriente Antioqueño y Medellín (bus de hombres y bus de mujeres: ¡se conocen al llegar!)",
      "Hospedaje según acomodación elegida",
      "2 desayunos y 2 cenas",
      "Pool party con DJ invitado y fiesta de blanco",
      "Fiesta Solos y Solas con manillas de colores",
      "Clases de champeta y coctelería",
      "Torneo de vóley playa y acceso a la playa 24 horas"
    ],
    precios:[["Habitación óctuple (hostal)","$730.000"],["Quíntuple (baño privado)","$780.000"],["Doble con ventilador","$860.000"],["Doble con aire","$885.000"],["VIP doble (piscina privada y vista al mar)","$975.000"]],
    nota:"Evento para solteros y solteras de 20 a 45 años. Reserva con $200.000 y paga en abonos mensuales (pago total 10 días antes). Lleva outfit blanco para la fiesta. ¡Cupos limitados!",
    ws:"Hola Orientours, quiero información del plan Solos y Solas en Necoclí 🎉",
    pdf:"pdf/Solos y solas makai 2026.pdf"
  },
  sancarlos:{
    titulo:"San Carlos: Tranqui o Xtremo 🌿⚡",
    sub:"San Carlos, Antioquia · Excursión de día",
    grad:"linear-gradient(150deg,#155543,#1f8c70 55%,#56d0a0)",
    foto:"San Carlos/Principal San Carlos.jpeg",
    incluye:[
      "Transporte ida y regreso desde Medellín y Oriente",
      "Almuerzo incluido",
      "Seguro de viaje",
      "Coordinador acompañante"
    ],
    precios:[["San Carlos Tranqui – Cascada La Viejita (caminata suave)","$145.000"],["San Carlos Xtremo – El Chispero (canyoning + neopreno + equipo)","$260.000"]],
    nota:"Salida 5:00 a.m., regreso ~4:30 p.m. Zapatos cerrados obligatorios que se puedan mojar (no crocs ni sandalias). Para Xtremo: incluye equipo de seguridad y traje neopreno. Cupos limitados.",
    ws:"Hola Orientours, quiero información del plan San Carlos (Tranqui o Xtremo) 🌿⚡",
    pdf:"pdf/🌿⚡ SAN CARLOS- TRANQUI O XTREMO 💦.pdf"
  },
  melcocho:{
    titulo:"Reserva Natural · Río Melcocho 🍃",
    sub:"Oriente Antioqueño · Excursión de día",
    grad:"linear-gradient(150deg,#1b4332,#2d6a4f 55%,#74c69d)",
    foto:"Rio melcocho/Principal Rio melcocho.jpg",
    incluye:[
      "Transporte ida y regreso desde Medellín y Oriente + transbordo en chiva",
      "Ingreso a la Reserva Natural Río Melcocho",
      "Almuerzo incluido",
      "Póliza de seguro",
      "Tour guiado: Puente Amarillo, Puente Azul y La Playita (plan normal)"
    ],
    precios:[["Melcocho Normal – recorrido turístico 6 km, nivel 2.5","$135.000"],["Melcocho Xtremo – toboganes + body rafting + canopy + cascada","$195.000"]],
    nota:"Separar cupo con $60.000. Plan pago mínimo 3 días antes. Tennis cerrados obligatorios que se puedan mojar. Para Xtremo: no llevar objetos de valor durante la actividad.",
    ws:"Hola Orientours, quiero información del plan Reserva Natural Río Melcocho 🍃",
    pdf:"pdf/🍃 RESERVA NATURAL, RÍO MELCOCHO.pdf"
  },
  rioclaro:{
    titulo:"Rafting en Río Claro 🏞️💦",
    sub:"Doradal, Antioquia · Excursión de día",
    grad:"linear-gradient(150deg,#0d4b71,#1875a8 55%,#4eb8d8)",
    foto:"Rio Claro/Principal Rio Claro.jpg",
    incluye:[
      "Transporte ida y regreso desde Medellín y Oriente",
      "Almuerzo tipo fiambre",
      "Rafting nivel 1 (apto para primera vez, con chaleco salvavidas y guías)",
      "Visita a las Cavernas de los Guácharos",
      "Visita al Santorini Colombiano",
      "Coordinador de viaje y póliza de asistencia"
    ],
    precios:[["Excursión completa (rafting + cuevas + Santorini)","$220.000"]],
    nota:"Reserva con solo $50.000 por persona. Salida 5:00 a.m., regreso ~4:30 p.m. Lleva linterna para las cuevas. Zapatos cerrados aptos para mojar (no crocs ni sandalias). Cupos limitados.",
    ws:"Hola Orientours, quiero información del plan Rafting en Río Claro 🏞️💦",
    pdf:"pdf/🏞️💦 ¡RAFTING EN RÍO CLARO.pdf"
  },
  taparto:{
    titulo:"Chorros de Tapartó 🌄",
    sub:"Tapartó, Antioquia · Senderismo y Aventura",
    grad:"linear-gradient(150deg,#2a5f3a,#3d8c57 55%,#7fd494)",
    foto:"Taparto/Principal Taparto.jpeg",
    incluye:[
      "Transporte en bus ida y regreso",
      "Póliza de viaje",
      "Almuerzo tipo fiambre",
      "Guías locales capacitados y coordinador Orientours",
      "Poza natural para nadar",
      "Circuito Xtremo incluye: canopy (42 m + 345 m), puentes tibetanos, El Paraíso y recorrido por cascadas"
    ],
    precios:[["Solo caminata – 12 km ida y regreso","$130.000"],["Caminata + Canopy (340 metros)","$200.000"],["Circuito Xtremo completo (solo 19 cupos por fecha)","$250.000"]],
    nota:"Salida desde El Carmen de Viboral 4:00 a.m. / Terminal del Norte Medellín ~5:10 a.m. Zapatos de caminata obligatorios (no crocs ni sandalias). Para el Circuito Xtremo: lleva celular protegido contra el agua.",
    ws:"Hola Orientours, quiero información del plan Chorros de Tapartó 🌄",
    pdf:"pdf/¡Vive Chorros de Tapartó con Orientours.pdf"
  }
};

const WS_NUM = "573135476626"; // ← Reemplaza por el número de WhatsApp real de Orientours

/* ---------- CARRUSEL DEL HERO ---------- */
const slides = document.querySelectorAll('.hero-slide');
const heroLugar = document.getElementById('heroLugar');
const heroPuntos = document.getElementById('heroPuntos');
let slideActual = 0, timerHero;

slides.forEach((s,i)=>{
  const b = document.createElement('button');
  b.setAttribute('aria-label','Foto '+(i+1));
  b.addEventListener('click',()=>{ irSlide(i); reiniciarTimer(); });
  heroPuntos.appendChild(b);
});
function irSlide(i){
  slides[slideActual].classList.remove('activa');
  heroPuntos.children[slideActual].classList.remove('activa');
  slideActual = i;
  slides[i].classList.add('activa');
  heroPuntos.children[i].classList.add('activa');
  heroLugar.textContent = slides[i].dataset.lugar;
}
function reiniciarTimer(){
  clearInterval(timerHero);
  timerHero = setInterval(()=>irSlide((slideActual+1)%slides.length), 5500);
}
irSlide(0); reiniciarTimer();

/* ---------- MENÚ MÓVIL ---------- */
const hamb = document.getElementById('hamb');
const menu = document.getElementById('menu');
hamb.addEventListener('click',()=>{
  menu.classList.toggle('abierto');
  hamb.classList.toggle('activo');
});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  menu.classList.remove('abierto');hamb.classList.remove('activo');
}));

/* ---------- FILTROS ---------- */
document.querySelectorAll('.filtro').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filtro').forEach(b=>b.classList.remove('activo'));
    btn.classList.add('activo');
    const f = btn.dataset.filtro;
    document.querySelectorAll('.card').forEach(card=>{
      const mostrar = f==='todos' || card.dataset.cat.split(' ').includes(f);
      card.classList.toggle('oculta',!mostrar);
      if(mostrar) requestAnimationFrame(()=>card.classList.add('visible'));
    });
  });
});

/* ---------- MODAL ---------- */
const fondo = document.getElementById('modalFondo');
const caja  = document.getElementById('modalCaja');

document.querySelectorAll('[data-modal]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card = btn.closest('.card');
    if(card){
      card.scrollIntoView({behavior:'smooth',block:'center'});
      setTimeout(()=>abrirModal(btn.dataset.modal), 350);
    } else {
      abrirModal(btn.dataset.modal);
    }
  });
});

function abrirModal(id){
  const p = planes[id];
  if(!p) return;
  caja.innerHTML = `
    <div class="modal-cab" style="background:${p.grad}">
      <button class="cerrar" onclick="cerrarModal()" aria-label="Cerrar">✕</button>
      <h3>${p.titulo}</h3>
      <div class="sub-modal">${p.sub}</div>
      ${p.plus ? `<div class="plus-badges">${p.plus.map(b=>`<span class="plus-badge">${b}</span>`).join('')}</div>` : ''}
    </div>
    <div class="modal-cuerpo">
      ${p.foto ? `<img src="${p.foto}" alt="${p.titulo}" class="modal-foto">` : ''}
      <h4>✅ El plan incluye</h4>
      <ul class="incluye">${p.incluye.map(i=>`<li>${i}</li>`).join('')}</ul>
      <h4>💰 Precio por persona</h4>
      <table class="tabla-precios">
        ${p.precios.map(([a,v])=>`<tr><td>${a}</td><td>${v}</td></tr>`).join('')}
      </table>
      <div class="nota-modal">ℹ️ ${p.nota}</div>
      <div class="modal-cta">
        <a class="btn btn-ws" target="_blank" rel="noopener"
           href="https://wa.me/${WS_NUM}?text=${encodeURIComponent(p.ws)}">
           💬 Reservar por WhatsApp
        </a>
      </div>
    </div>`;
  fondo.classList.add('abierto');
  document.body.style.overflow='hidden';
  caja.scrollTop = 0;
}
function cerrarModal(){
  fondo.classList.remove('abierto');
  document.body.style.overflow='';
}
fondo.addEventListener('click',e=>{ if(e.target===fondo) cerrarModal(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') cerrarModal(); });

/* Botones del footer que abren modales directamente */
document.querySelectorAll('.footer-dest').forEach(btn=>{
  btn.addEventListener('click',()=>{ abrirModal(btn.dataset.modal); });
});

/* ---------- FORMULARIO DE COTIZACIÓN ---------- */
document.getElementById('formCotizar').addEventListener('submit',e=>{
  e.preventDefault();
  const nombre  = document.getElementById('nombre').value.trim();
  const destino = document.getElementById('destino').value;
  const pers    = document.getElementById('personas').value;
  const msj     = document.getElementById('mensaje').value.trim();
  let texto = `Hola Orientours 👋 Soy ${nombre} y quiero cotizar el plan: ${destino}.`;
  if(pers) texto += ` Somos ${pers} persona(s).`;
  if(msj)  texto += ` ${msj}`;
  window.open(`https://wa.me/${WS_NUM}?text=${encodeURIComponent(texto)}`,'_blank');
});

/* ---------- ANIMACIONES AL HACER SCROLL ---------- */
const observador = new IntersectionObserver(entradas=>{
  entradas.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('visible'); observador.unobserve(en.target); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal,.card').forEach(el=>observador.observe(el));

/* ---------- ACTUALIZAR ENLACES DE WHATSAPP DINÁMICOS ---------- */
function actualizarEnlacesWhatsApp() {
  document.querySelectorAll('.ws-link').forEach(el => {
    const texto = el.dataset.wsText;
    let url = `https://wa.me/${WS_NUM}`;
    if (texto) {
      url += `?text=${encodeURIComponent(texto)}`;
    }
    el.href = url;
  });
}
actualizarEnlacesWhatsApp();