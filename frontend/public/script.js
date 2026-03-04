const DATA = {
  rooms: [
    {
      id: 1,
      type: "River Villa 1BR",
      name: "River Villa – 1 Camera",
      size: 120,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      bed: "King Size",
      pool: true,
      terrace: true,
      jacuzzi: true,
      seaview: false,
      price: 480,
      desc: "Villa romantica con piscina privata collegata all'80m river pool. Bagno con doccia e vasca, arredamento tropicale. La scelta ideale per una coppia che cerca romanticismo nella natura.",
      filter: "river",
    },
    {
      id: 2,
      type: "River Villa 2BR",
      name: "River Villa – 2 Camere",
      size: 180,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      bed: "King Size ×2",
      pool: true,
      terrace: true,
      jacuzzi: true,
      seaview: false,
      price: 780,
      desc: "Spaziosa villa su due livelli con terrazza panoramica e accesso diretto alla river pool.",
      filter: "river",
    },
    {
      id: 3,
      type: "Lagoon Villa 1BR",
      name: "Lagoon Villa – 1 Camera",
      size: 60,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      bed: "King Size",
      pool: false,
      terrace: true,
      jacuzzi: false,
      seaview: true,
      price: 420,
      desc: "Villa intima sull'incantevole lago africano. Arredamento esotico e viste oceaniche mozzafiato.",
      filter: "lagoon",
    },
    {
      id: 4,
      type: "Lagoon Villa 2BR",
      name: "Lagoon Villa – 2 Camere",
      size: 96,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      bed: "King Size ×2",
      pool: false,
      terrace: true,
      jacuzzi: false,
      seaview: true,
      price: 680,
      desc: "Villa doppia sul lago con terrazza privata e viste sull'Oceano Atlantico.",
      filter: "lagoon",
    },
    {
      id: 5,
      type: "Pool Villa 1BR",
      name: "Pool Villa – 1 Camera",
      size: 140,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      bed: "King Size",
      pool: true,
      terrace: true,
      jacuzzi: true,
      seaview: true,
      price: 550,
      desc: "Grande terrazza con piscina privata e viste sul mare aperto. Il massimo del relax per una coppia romantica.",
      filter: "pool",
    },
    {
      id: 6,
      type: "Grand Pool Villa 1BR",
      name: "Grand Pool Villa – 1 Camera",
      size: 140,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      bed: "King Size",
      pool: true,
      terrace: true,
      jacuzzi: true,
      seaview: true,
      price: 680,
      desc: "Villa di lusso di fronte al campo da golf Costa Adeje. Infinity pool privata con vista sull'oceano.",
      filter: "grand",
    },
    {
      id: 7,
      type: "Grand Pool Villa 2BR",
      name: "Grand Pool Villa – 2 Camere",
      size: 207,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      bed: "King Size ×2",
      pool: true,
      terrace: true,
      jacuzzi: true,
      seaview: true,
      price: 950,
      desc: "207m² di puro lusso con piscina privata infinity. La preferita dalle coppie più esigenti.",
      filter: "grand",
    },
    {
      id: 8,
      type: "Paradise Villa",
      name: "Paradise Pool Villa",
      size: 325,
      guests: 7,
      bedrooms: 3,
      bathrooms: 3,
      bed: "King Size ×3",
      pool: true,
      terrace: true,
      jacuzzi: true,
      seaview: true,
      price: 1800,
      desc: "325m² con piscina privata, giardino esclusivo e butler personalizzato.",
      filter: "luxury",
    },
    {
      id: 9,
      type: "Sky Villa",
      name: "Sky Villa Sea View",
      size: 360,
      guests: 8,
      bedrooms: 4,
      bathrooms: 4,
      bed: "King Size ×4",
      pool: true,
      terrace: true,
      jacuzzi: true,
      seaview: true,
      price: 2500,
      desc: "La villa più esclusiva: 360m² ai piani alti con vista a 360° sull'Atlantico. Infinity pool e concierge h24.",
      filter: "luxury",
    },
  ],
  services: {
    Piscine: [
      {
        icon: "🏊",
        name: "River Pool 80m",
        desc: "Spettacolare piscina fiume lunga 80 metri circondata da vegetazione tropicale",
        included: true,
      },
      {
        icon: "🌊",
        name: "Infinity Pool Rooftop",
        desc: "Infinity pool panoramica con vista a 360° sull'Oceano Atlantico",
        included: true,
      },
      {
        icon: "🛁",
        name: "Piscina Privata Villa",
        desc: "Ogni villa dispone di piscina privata riscaldata (eccetto Lagoon 1BR)",
        included: true,
      },
      {
        icon: "💆",
        name: "Zone Idromassaggio",
        desc: "Zone idromassaggio integrate nella river pool e nelle piscine private",
        included: true,
      },
    ],
    Parcheggio: [
      {
        icon: "🚗",
        name: "Parcheggio Privato",
        desc: "Parcheggio gratuito e sorvegliato 24h all'interno della struttura",
        included: true,
      },
      {
        icon: "🤵",
        name: "Valet Parking",
        desc: "Servizio valet parking h24 su richiesta, senza costi aggiuntivi",
        included: true,
      },
    ],
    Benessere: [
      {
        icon: "🧖",
        name: "Serenity Spa",
        desc: "Centro benessere con circuito termale, trattamenti corpo e viso con prodotti canari",
        included: false,
        cost: "Da €60",
      },
      {
        icon: "🔥",
        name: "Sauna & Bagno Turco",
        desc: "Sauna finlandese tradizionale, bagno turco aromatico e docce emozionali",
        included: false,
        cost: "€45",
      },
      {
        icon: "💪",
        name: "Palestra Technogym",
        desc: "Attrezzata con macchine Technogym di ultima generazione, aperta h24",
        included: true,
      },
    ],
    "Sport & Attività": [
      {
        icon: "⛳",
        name: "Golf Costa Adeje",
        desc: "Accesso privilegiato al campo da golf 18 buche di fronte all'hotel",
        included: false,
        cost: "€120/giorno",
      },
      {
        icon: "🎾",
        name: "Tennis",
        desc: "Campo da tennis con istruttore disponibile su prenotazione",
        included: false,
        cost: "€30/ora",
      },
      {
        icon: "🧘",
        name: "Yoga al Tramonto",
        desc: "Sessioni quotidiane di yoga sul rooftop panoramico all'alba e al tramonto",
        included: true,
      },
      {
        icon: "🐋",
        name: "Whale Watching",
        desc: "Escursione in barca per avvistamento balene, delfini e tartarughe marine",
        included: false,
        cost: "€95/persona",
      },
    ],
    Tecnologia: [
      {
        icon: "📡",
        name: "Wi-Fi Premium",
        desc: "Wi-Fi ultra-veloce gratuito in tutta la struttura, fibra ottica in ogni villa",
        included: true,
      },
      {
        icon: "📺",
        name: "Smart TV 4K",
        desc: "Smart TV 4K in ogni villa con accesso Netflix, HBO e streaming incluso",
        included: true,
      },
      {
        icon: "🎵",
        name: "Sistema Audio Bang & Olufsen",
        desc: "Impianto audio premium Bang & Olufsen in ogni villa",
        included: true,
      },
    ],
  },
  restaurants: [
    {
      id: 1,
      name: "The Top Brasserie",
      cuisine: "Cucina Internazionale / Canaria Moderna",
      desc: "Il ristorante panoramico di punta. Cucina raffinata con ingredienti locali delle Canarie e influenze internazionali. Vista spettacolare sull'oceano.",
      hours: "19:30 – 23:00",
      dress: "Smart Casual",
      reservation: true,
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    },
    {
      id: 2,
      name: "Kokoro Asian Cuisine",
      cuisine: "Cucina Asiatica Fusion",
      desc: '"Kokoro" significa connessione tra cuore e anima. Un viaggio tra Giappone, Cina e Sud-Est Asiatico che sorprende e delizia i sensi.',
      hours: "19:00 – 23:00",
      dress: "Smart Casual",
      reservation: true,
      img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
    },
    {
      id: 3,
      name: "Flamingo French Bistro",
      cuisine: "Cucina Francese Contemporanea",
      desc: "Un'oasi di rosa e turchese. Bistrot francese moderno con tocchi colorati, perfetto per colazioni elaborate e cene romantiche.",
      hours: "08:00–11:00 / 19:30–23:00",
      dress: "Casual",
      reservation: false,
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    },
    {
      id: 4,
      name: "Pineapple Restaurant",
      cuisine: "Colazione & Brunch Internazionale",
      desc: "Il ristorante del mattino. Buffet completo con prodotti freschi locali, succhi di frutta naturali, eggs station live e specialità canarie.",
      hours: "07:30 – 11:30",
      dress: "Casual",
      reservation: false,
      img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
    },
  ],
  menu: {
    1: [
      {
        cat: "✦ Antipasto",
        items: [
          {
            name: "Tartare di Tonno Rosso",
            desc: "Tonno rosso selvaggio con avocado canario, mango e vinaigrette agli agrumi",
            price: 28,
            sig: true,
          },
          {
            name: "Gamberoni di Palamós",
            desc: "Gamberoni jumbo alla piastra su crema di batata canaria e olio al corallo",
            price: 32,
            sig: true,
          },
        ],
      },
      {
        cat: "✦ Primo",
        items: [
          {
            name: "Risotto al Nero di Seppia",
            desc: "Risotto Carnaroli con seppia fresca, polvere di limone e bottarga di cefalo",
            price: 35,
            sig: false,
          },
        ],
      },
      {
        cat: "✦ Secondo",
        items: [
          {
            name: "Cherne alla Canaria",
            desc: "Cernia delle Canarie al vapore con papas arrugadas e mojo verde artigianale",
            price: 48,
            sig: true,
          },
          {
            name: "Lombo di Wagyu A5",
            desc: "Wagyu giapponese con riduzione al vino Malvasía e tartufo nero",
            price: 95,
            sig: true,
          },
        ],
      },
      {
        cat: "✦ Dessert",
        items: [
          {
            name: "Coulant al Cioccolato Canario",
            desc: "Fondente caldo con cioccolato delle Canarie e gelato alla vaniglia Bourbon",
            price: 18,
            sig: false,
          },
        ],
      },
      {
        cat: "✦ Vini Selezionati",
        items: [
          {
            name: "Malvasía Volcánica DOC",
            desc: "Vino bianco canario aromatico, fresco e minerale – abbinamento perfetto per il pesce",
            price: 55,
            sig: false,
          },
        ],
      },
    ],
    2: [
      {
        cat: "✦ Sushi & Sashimi",
        items: [
          {
            name: "Omakase Board",
            desc: "Selezione del giorno del maestro sushi: 12 pezzi premium con foie gras e tartufo",
            price: 75,
            sig: true,
          },
          {
            name: "Tuna Tataki",
            desc: "Tonno scottato in crosta di sésamo con ponzu e jalapeño",
            price: 34,
            sig: false,
          },
        ],
      },
      {
        cat: "✦ Dim Sum",
        items: [
          {
            name: "Har Gao Luxury",
            desc: "Ravioli di gambero con tartufo nero e brodo di dashi",
            price: 28,
            sig: true,
          },
        ],
      },
      {
        cat: "✦ Wok & Grill",
        items: [
          {
            name: "Black Cod Miso",
            desc: "Merluzzo nero marinato nel miso bianco per 72 ore, con bok choy e riso di sushi",
            price: 58,
            sig: true,
          },
          {
            name: "Wagyu Gyudon",
            desc: "Wagyu stracotto su riso al vapore con uovo di quaglia e funghi shiitake",
            price: 65,
            sig: false,
          },
        ],
      },
      {
        cat: "✦ Cocktail Asiatici",
        items: [
          {
            name: "Yuzu Spritz",
            desc: "Yuzu fresco, Prosecco, liquore al lychee e foglia d'oro",
            price: 22,
            sig: false,
          },
        ],
      },
    ],
    3: [
      {
        cat: "✦ Colazione",
        items: [
          {
            name: "Croque Madame Gourmet",
            desc: "Brioche artigianale, prosciutto di Jabugo, uovo in camicia e besciamella al tartufo",
            price: 22,
            sig: true,
          },
          {
            name: "French Toast Flamingo",
            desc: "Pain perdu con fragole locali, panna montata e sciroppo d'acero biologico",
            price: 18,
            sig: false,
          },
        ],
      },
      {
        cat: "✦ Cena",
        items: [
          {
            name: "Steak Tartare Fumé",
            desc: "Tartare di manzo con senape di Digione, capperi e tuorlo – preparata al tavolo",
            price: 38,
            sig: true,
          },
          {
            name: "Duck Confit",
            desc: "Coscio d'anatra confit con lenticchie del Puy e salsa al Porto",
            price: 45,
            sig: false,
          },
        ],
      },
      {
        cat: "✦ Dessert & Cocktail",
        items: [
          {
            name: "Crème Brûlée alla Lavanda",
            desc: "Classica crème brûlée con essenza di lavanda canaria e frutti di bosco freschi",
            price: 16,
            sig: false,
          },
          {
            name: "Pink Flamingo Signature",
            desc: "Gin Hendricks, liquore di rose, pompelmo rosa e splash di Champagne",
            price: 25,
            sig: true,
          },
        ],
      },
    ],
    4: [
      {
        cat: "✦ Colazione Buffet (inclusa)",
        items: [
          {
            name: "Corner Frutta Tropicale",
            desc: "Papaya, mango, ananas, carambola – tutto fresco dalle Canarie",
            price: 0,
            sig: false,
          },
          {
            name: "Eggs Station Live",
            desc: "Uova preparate al momento: strapazzate, Benedict, frittata o occhio di bue",
            price: 0,
            sig: false,
          },
          {
            name: "Bakery Canaria",
            desc: "Bienmesabe, pan de leche, miel de palma e churros artigianali",
            price: 0,
            sig: false,
          },
          {
            name: "Succhi di Frutta Naturali",
            desc: "Succhi freschi di anguria, arancia, carota e zenzero – illimitati",
            price: 0,
            sig: false,
          },
        ],
      },
      {
        cat: "✦ Brunch Speciale",
        items: [
          {
            name: "Floating Tray Pool Brunch",
            desc: "Brunch servito su vassoio galleggiante in piscina privata – su prenotazione",
            price: 85,
            sig: true,
          },
        ],
      },
    ],
  },
  mealPlans: [
    {
      icon: "☕",
      code: "BB",
      name: "Solo Colazione",
      price: 0,
      desc: "Colazione buffet completa al Pineapple Restaurant. Accesso ai 4 ristoranti a prezzo di listino.",
      featured: false,
    },
    {
      icon: "🍽️",
      code: "HB",
      name: "Mezza Pensione",
      price: 85,
      desc: "Colazione buffet + cena a scelta in uno dei 4 ristoranti (credito €60/persona/pasto).",
      featured: false,
    },
    {
      icon: "🥂",
      code: "FB",
      name: "Pensione Completa",
      price: 160,
      desc: "Colazione + pranzo + cena in tutti i ristoranti (credito giornaliero €120/persona). Bevande ai pasti incluse.",
      featured: true,
    },
    {
      icon: "✨",
      code: "AI",
      name: "All Inclusive Premium",
      price: 220,
      desc: "Tutti i pasti + bevande premium tutto il giorno + afternoon tea + snack illimitati + minibar in villa rifornito.",
      featured: false,
    },
  ],
  spa: [
    {
      cat: "Massaggi",
      name: "Signature Royal River Massage",
      dur: 90,
      desc: "Massaggio con oli essenziali locali, hot stones vulcaniche di Tenerife e riflessologia integrata.",
      price: 185,
    },
    {
      cat: "Massaggi",
      name: "Lava Stone Therapy",
      dur: 60,
      desc: "Massaggio con pietre laviche calde del Teide per sciogliere tensioni e rigenerare il corpo.",
      price: 140,
    },
    {
      cat: "Rituali di Coppia",
      name: "Couples Ritual Canario",
      dur: 120,
      desc: "Bagno aromatico privato + doppio massaggio + champagne e fragole. Perfetto per coppie.",
      price: 380,
    },
    {
      cat: "Trattamenti Corpo",
      name: "Sea Salt & Lavender Scrub",
      dur: 45,
      desc: "Esfoliazione con sale marino canario e lavanda locale. Pelle setosa e profumata.",
      price: 95,
    },
    {
      cat: "Trattamenti Viso",
      name: "Facial Hyaluronic Glow",
      dur: 75,
      desc: "Trattamento viso con acido ialuronico, vitamina C e maschera di collagene marino.",
      price: 150,
    },
    {
      cat: "Idroterapia",
      name: "Thalasso Bathtub",
      dur: 40,
      desc: "Bagno con estratti di alghe atlantiche, sali minerali e oli di argan biologico.",
      price: 80,
    },
    {
      cat: "Circuito Termale",
      name: "Serenity Circuit",
      dur: 60,
      desc: "Percorso acquatico: piscina fredda, vasca calda, sauna finlandese, bagno turco, docce emozionali.",
      price: 60,
    },
    {
      cat: "Massaggi Speciali",
      name: "Prenatal Wellness",
      dur: 60,
      desc: "Massaggio dolce per future mamme con oli certificati biologici e attenzione totale.",
      price: 120,
    },
  ],
  packages: [
    {
      for: "Coppie",
      name: "Escapada Romántica",
      nights: 2,
      price: 1200,
      desc: "Pool Villa 1BR + colazione + bottiglia di cava + fiori + late check-out ore 14:00 + accesso Serenity Spa.",
    },
    {
      for: "Coppie / Luna di Miele",
      name: "Luna di Miele Royal",
      nights: 3,
      price: 2800,
      desc: "Grand Pool Villa 1BR + pensione completa + Couples Ritual Spa + cena romantica privata in villa + transfer aeroporto + champagne.",
    },
    {
      for: "Avventura di Coppia",
      name: "Tenerife Explorer",
      nights: 4,
      price: 1650,
      desc: "River Villa + colazione + whale watching + escursione Teide + Royal Boat Tour privato lungo la costa.",
    },
    {
      for: "Golf & Benessere",
      name: "Golf & Relax",
      nights: 3,
      price: 2200,
      desc: "Grand Pool Villa + mezza pensione + 2 green fee Costa Adeje Golf + 2 massaggi Lava Stone.",
    },
    {
      for: "Ultra Luxury",
      name: "Sky Experience",
      nights: 4,
      price: 8500,
      desc: "Sky Villa (uso esclusivo per 2) + all inclusive premium + butler h24 + helicopter tour + cena privata sul rooftop.",
    },
  ],
  gallery: [
    {
      cat: "Esterno",
      alt: "River pool al tramonto",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    },
    {
      cat: "Esterno",
      alt: "Infinity pool vista oceano",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    },
    {
      cat: "Villa",
      alt: "Grand Pool Villa con piscina",
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
    },
    {
      cat: "Villa",
      alt: "Interno villa di lusso",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    },
    {
      cat: "Villa",
      alt: "Bagno con vasca freestanding",
      url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    },
    {
      cat: "Ristorante",
      alt: "The Top Brasserie",
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    },
    {
      cat: "Ristorante",
      alt: "Kokoro Asian Cuisine",
      url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
    },
    {
      cat: "Spa",
      alt: "Serenity Spa trattamento",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
    },
    {
      cat: "Tenerife",
      alt: "Costa Adeje al tramonto",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    },
    {
      cat: "Tenerife",
      alt: "Vulcano Teide",
      url: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=600&q=80",
    },
  ],
};

const roomImages = [
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=600&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
];

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    renderAll();
    initScrollReveal();
    initNav();
    setMinDates();
  }, 2200);
});

function setMinDates() {
  const today = new Date().toISOString().split("T")[0];
  ["checkin", "checkout", "f-checkin", "f-checkout"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.min = today;
  });
}

function renderAll() {
  renderRooms("all");
  renderServices();
  renderRestaurants();
  renderMenu(1);
  renderMealPlans();
  renderSpa();
  renderPackages();
  renderGallery("Tutti");
  renderRestSelector();
  renderGalleryFilter();
}

function initNav() {
  window.addEventListener("scroll", () => {
    document
      .getElementById("navbar")
      .classList.toggle("scrolled", window.scrollY > 60);
  });
}
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

function renderRooms(filter) {
  const grid = document.getElementById("roomsGrid");
  const rooms =
    filter === "all"
      ? DATA.rooms
      : DATA.rooms.filter((r) => r.filter === filter);
  grid.innerHTML = rooms
    .map(
      (r, i) => `
    <div class="room-card reveal" onclick="openModal(${r.id})" style="transition-delay:${i * 0.08}s">
      <div class="room-img">
        <img src="${roomImages[i % roomImages.length]}" alt="${r.name}" loading="lazy">
        ${r.seaview ? '<div class="room-badge">Vista Mare</div>' : r.pool ? '<div class="room-badge">Piscina Privata</div>' : ""}
      </div>
      <div class="room-info">
        <div class="room-name">${r.name}</div>
        <div class="room-meta">
          <span><i>🛏</i> ${r.bedrooms} camera${r.bedrooms > 1 ? "e" : ""}</span>
          <span><i>🚿</i> ${r.bathrooms} bagno${r.bathrooms > 1 ? "i" : ""}</span>
          <span><i>📐</i> ${r.size} m²</span>
          <span><i>👥</i> fino a ${r.guests} ospiti</span>
        </div>
        <div class="room-desc">${r.desc}</div>
        <div class="room-footer">
          <div class="room-price">
            €${r.price.toLocaleString()}<span>a notte</span>
          </div>
          <button class="btn-sm">Dettagli</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
  observeReveal();
}

function filterRooms(btn, filter) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderRooms(filter);
}

function openModal(id) {
  const r = DATA.rooms.find((x) => x.id === id);
  if (!r) return;
  const imgs = roomImages;
  document.getElementById("modalImg").src = imgs[(id - 1) % imgs.length];
  document.getElementById("modalImg").alt = r.name;
  document.getElementById("modalBadge").textContent = r.type;
  document.getElementById("modalTitle").textContent = r.name;
  document.getElementById("modalDesc").textContent = r.desc;
  document.getElementById("modalPrice").textContent =
    "€" + r.price.toLocaleString();
  const features = [
    `${r.bedrooms} camera${r.bedrooms > 1 ? "e" : ""}`,
    `${r.bathrooms} bagno${r.bathrooms > 1 ? "i" : ""}`,
    `${r.size} m²`,
    `Letto ${r.bed}`,
    r.pool ? "✓ Piscina Privata" : "✗ Piscina Condivisa",
    r.terrace ? "✓ Terrazza Privata" : "",
    r.jacuzzi ? "✓ Idromassaggio" : "",
    r.seaview ? "✓ Vista Mare" : "✓ Vista Giardino",
    `Fino a ${r.guests} ospiti`,
    "✓ Wi-Fi Premium",
    "✓ Smart TV 4K",
    "✓ Adults Only",
  ].filter(Boolean);
  document.getElementById("modalFeatures").innerHTML = features
    .map((f) => `<div class="modal-feature">${f}</div>`)
    .join("");
  document.getElementById("roomModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(e) {
  if (e.target === document.getElementById("roomModal")) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById("roomModal").classList.remove("open");
  document.body.style.overflow = "";
}

function renderServices() {
  const cats = Object.keys(DATA.services);
  const tabs = document.getElementById("serviceTabs");
  const panels = document.getElementById("servicesPanels");
  tabs.innerHTML = cats
    .map(
      (c, i) =>
        `<button class="tab-btn${i === 0 ? " active" : ""}" onclick="switchTab(this,'tab-${i}')">${c}</button>`,
    )
    .join("");
  panels.innerHTML = cats
    .map(
      (c, i) => `
    <div class="tab-panel${i === 0 ? " active" : ""}" id="tab-${i}">
      <div class="services-grid">
        ${DATA.services[c]
          .map(
            (s) => `
          <div class="service-card reveal">
            <div class="service-icon">${s.icon}</div>
            <div class="service-name">${s.name}</div>
            <div class="service-desc">${s.desc}</div>
            ${s.included ? '<span class="service-cost" style="border-color:rgba(61,173,184,.3);color:var(--accent)">INCLUSO</span>' : `<span class="service-cost">EXTRA · ${s.cost}</span>`}
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
  observeReveal();
}
function switchTab(btn, panelId) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(panelId).classList.add("active");
}

function renderRestaurants() {
  document.getElementById("restaurantsGrid").innerHTML = DATA.restaurants
    .map(
      (r) => `
    <div class="rest-card reveal" onclick="showToast('${r.name}','Prenotazione al ristorante: chiamare il concierge al +34 922 788 482')">
      <div class="rest-img">
        <img src="${r.img}" alt="${r.name}" loading="lazy">
        <div class="rest-tag">
          <div>
            <span class="rest-cuisine">${r.cuisine}</span>
            <div class="rest-label">${r.name}</div>
          </div>
        </div>
      </div>
      <div class="rest-info">
        <p class="rest-desc">${r.desc}</p>
        <div class="rest-meta">
          <span>🕐 <strong>${r.hours}</strong></span>
          <span>👔 <strong>${r.dress}</strong></span>
          <span>${r.reservation ? "📞 Prenotazione consigliata" : "🚶 Accesso libero"}</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
  observeReveal();
}

function renderRestSelector() {
  document.getElementById("restSelector").innerHTML = DATA.restaurants
    .map(
      (r, i) => `
    <button class="rest-btn${i === 0 ? " active" : ""}" onclick="activateRestBtn(this);renderMenu(${r.id})">${r.name}</button>
  `,
    )
    .join("");
}
function activateRestBtn(btn) {
  document
    .querySelectorAll(".rest-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

function renderMenu(restId) {
  const cats = DATA.menu[restId] || [];
  document.getElementById("menuContent").innerHTML = cats
    .map(
      (c) => `
    <div class="menu-category">
      <div class="menu-cat-title">${c.cat}</div>
      ${c.items
        .map(
          (item) => `
        <div class="menu-item">
          <div class="menu-item-left">
            <div class="menu-item-name">
              ${item.name}
              ${item.sig ? '<span class="sig">Signature</span>' : ""}
            </div>
            <div class="menu-item-desc">${item.desc}</div>
          </div>
          <div class="menu-item-price">${item.price > 0 ? "€" + item.price : "Incluso"}</div>
        </div>
      `,
        )
        .join("")}
    </div>
  `,
    )
    .join("");
}

function renderMealPlans() {
  document.getElementById("plansGrid").innerHTML = DATA.mealPlans
    .map(
      (p) => `
    <div class="plan-card${p.featured ? " featured" : ""}" onclick="showToast('${p.name}','Seleziona questa formula nel form di prenotazione qui sotto.')">
      ${p.featured ? '<div class="plan-ribbon">Più Scelto</div>' : ""}
      <div class="plan-icon">${p.icon}</div>
      <div class="plan-code">${p.code}</div>
      <div class="plan-name">${p.name}</div>
      <div class="plan-price${p.price === 0 ? " free" : ""}">
        ${p.price === 0 ? "Incluso" : "+€" + p.price}
      </div>
      <div class="plan-per">per persona / per notte</div>
      <div class="plan-desc">${p.desc}</div>
    </div>
  `,
    )
    .join("");
}

function renderSpa() {
  document.getElementById("spaTreatments").innerHTML = DATA.spa
    .map(
      (t) => `
    <div class="treatment-card reveal" onclick="showToast('${t.name}','Prenota via concierge o direttamente alla Serenity Spa.')">
      <div class="treat-cat">${t.cat}</div>
      <div class="treat-name">${t.name}</div>
      <div class="treat-dur">⏱ ${t.dur} minuti</div>
      <div class="treat-desc">${t.desc}</div>
      <div class="treat-price">€${t.price}</div>
    </div>
  `,
    )
    .join("");
  observeReveal();
}

function renderPackages() {
  document.getElementById("packagesGrid").innerHTML = DATA.packages
    .map(
      (p) => `
    <div class="pkg-card" onclick="showToast('${p.name}','Contattaci per personalizzare questo pacchetto per il vostro soggiorno!')">
      <div class="pkg-top">
        <div class="pkg-for">✦ ${p.for}</div>
        <div class="pkg-name">${p.name}</div>
        <div class="pkg-nights"><strong>${p.nights}</strong><span>notti</span></div>
      </div>
      <div class="pkg-body">
        <div class="pkg-desc">${p.desc}</div>
        <div class="pkg-footer">
          <div class="pkg-price">€${p.price.toLocaleString()}<span>totale pacchetto</span></div>
          <button class="btn-sm">Prenota</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderGalleryFilter() {
  const cats = ["Tutti", ...new Set(DATA.gallery.map((g) => g.cat))];
  document.getElementById("galleryFilter").innerHTML = cats
    .map(
      (c, i) => `
    <button class="gal-btn${i === 0 ? " active" : ""}" onclick="activateGalBtn(this);renderGallery('${c}')">${c}</button>
  `,
    )
    .join("");
}
function activateGalBtn(btn) {
  document
    .querySelectorAll(".gal-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

function renderGallery(cat) {
  const imgs =
    cat === "Tutti" ? DATA.gallery : DATA.gallery.filter((g) => g.cat === cat);
  document.getElementById("galleryGrid").innerHTML = imgs
    .map(
      (g) => `
    <div class="gallery-item" onclick="showToast('${g.cat}','${g.alt}')">
      <img src="${g.url}" alt="${g.alt}" loading="lazy">
      <div class="gallery-item-overlay"><span>+</span></div>
    </div>
  `,
    )
    .join("");
}

function checkAvailability() {
  const ci = document.getElementById("checkin").value;
  const co = document.getElementById("checkout").value;
  const g = document.getElementById("guests").value;
  if (!ci || !co) {
    showToast("Attenzione", "Seleziona le date di check-in e check-out.");
    return;
  }
  if (new Date(co) <= new Date(ci)) {
    showToast("Attenzione", "Il check-out deve essere successivo al check-in.");
    return;
  }
  const nights = Math.ceil(
    (new Date(co) - new Date(ci)) / (1000 * 60 * 60 * 24),
  );
  showToast(
    "Disponibilità Verificata ✓",
    `${nights} notte${nights > 1 ? "i" : ""} per ${g} ospiti. Scorri verso il basso per scegliere la villa!`,
  );
  document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
}

let bookings = [];
let bookingCounter = 1;

function submitBooking() {
  const name = document.getElementById("f-name").value.trim();
  const email = document.getElementById("f-email").value.trim();
  const phone = document.getElementById("f-phone").value.trim();
  const ci = document.getElementById("f-checkin").value;
  const co = document.getElementById("f-checkout").value;
  const room = document.getElementById("f-room").value;
  const plan = document.getElementById("f-plan").value;
  const notes = document.getElementById("f-notes").value.trim();

  if (!name || !email || !ci || !co) {
    showToast(
      "Campi Mancanti",
      "Compila almeno nome, email e date per procedere.",
    );
    return;
  }
  if (new Date(co) <= new Date(ci)) {
    showToast(
      "Date non valide",
      "Il check-out deve essere successivo al check-in.",
    );
    return;
  }

  const nights = Math.ceil(
    (new Date(co) - new Date(ci)) / (1000 * 60 * 60 * 24),
  );
  const id = "RR-" + String(bookingCounter++).padStart(4, "0");
  const booking = {
    id,
    name,
    email,
    phone,
    ci,
    co,
    nights,
    room: room || "Da definire",
    plan,
    notes,
    createdAt: new Date().toLocaleString("it-IT"),
  };
  bookings.push(booking);

  renderBookings();
  document.getElementById("successMsg").style.display = "block";
  showToast(
    "Prenotazione Confermata ✦",
    `Ref. ${id} · ${nights} notte${nights > 1 ? "i" : ""} per ${name}`,
  );
  ["f-name", "f-email", "f-phone", "f-notes"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.getElementById("f-checkin").value = "";
  document.getElementById("f-checkout").value = "";
  setTimeout(() => {
    document
      .getElementById("bookings-section")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }, 800);
}

function deleteBooking(id) {
  bookings = bookings.filter((b) => b.id !== id);
  renderBookings();
  showToast(
    "Prenotazione Eliminata",
    "La prenotazione è stata rimossa con successo.",
  );
}

function renderBookings() {
  const container = document.getElementById("bookingsList");
  const countEl = document.getElementById("bookingsCount");
  countEl.textContent =
    bookings.length +
    " prenotazion" +
    (bookings.length === 1 ? "e attiva" : "i attive");

  if (bookings.length === 0) {
    container.innerHTML =
      '<div class="bookings-empty">Nessuna prenotazione ancora. Compila il form qui sopra per prenotare il tuo soggiorno.</div>';
    return;
  }

  const fmt = (d) => {
    const [y, m, day] = d.split("-");
    return `${day}/${m}/${y}`;
  };

  container.innerHTML =
    '<div class="bookings-list">' +
    bookings
      .map(
        (b) => `
    <div class="booking-item" id="booking-${b.id}">
      <div class="booking-item-info">
        <div class="booking-item-id">Ref. ${b.id} · Creata il ${b.createdAt}</div>
        <div class="booking-item-name">${b.name}</div>
        <div class="booking-item-details">
          ${b.email}${b.phone ? " · " + b.phone : ""}<br>
          <strong style="color:var(--text)">${b.room}</strong> &nbsp;·&nbsp; ${b.plan}<br>
          <strong style="color:var(--gold)">${b.nights} notte${b.nights > 1 ? "i" : ""}</strong>
          ${b.notes ? '<br><em style="color:var(--muted);font-size:.88rem">Note: ' + b.notes + "</em>" : ""}
        </div>
        <div class="booking-item-dates">
          <div class="booking-date-block">
            <span class="booking-date-label">Check-In</span>
            <span class="booking-date-val">${fmt(b.ci)}</span>
          </div>
          <div class="booking-date-block">
            <span class="booking-date-label">Check-Out</span>
            <span class="booking-date-val">${fmt(b.co)}</span>
          </div>
        </div>
      </div>
      <div class="booking-item-actions">
        <span class="booking-status">✓ Confermata</span>
        <button class="btn-delete" onclick="deleteBooking('${b.id}')">✕ Elimina</button>
      </div>
    </div>
  `,
      )
      .join("") +
    "</div>";
}

function showToast(title, msg) {
  const t = document.getElementById("toast");
  document.getElementById("toastTitle").textContent = title;
  document.getElementById("toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 4000);
}

function observeReveal() {
  const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  if (!window._revealObserver) {
    window._revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
  }
  els.forEach((el) => window._revealObserver.observe(el));
}

function initScrollReveal() {
  observeReveal();
}
