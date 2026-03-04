/**
 * Royal River Luxury Hotel - Backend API
 * Node.js + Express + SQLite (better-sqlite3)
 *
 * Avvio: node server.js
 * Endpoint disponibili su http://localhost:3001/api/...
 */

const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/public")));

// ─── DATABASE INIT ────────────────────────────────────────────────────────────
const db = new Database(path.join(__dirname, "hotel.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS hotel (
    id INTEGER PRIMARY KEY,
    name TEXT,
    stars INTEGER,
    category TEXT,
    address TEXT,
    city TEXT,
    island TEXT,
    phone TEXT,
    email TEXT,
    website TEXT,
    description TEXT,
    latitude REAL,
    longitude REAL
  );

  CREATE TABLE IF NOT EXISTS rooms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT,
    name TEXT,
    size_m2 INTEGER,
    max_guests INTEGER,
    bedrooms INTEGER,
    bathrooms INTEGER,
    bed_type TEXT,
    has_private_pool INTEGER,
    has_terrace INTEGER,
    has_jacuzzi INTEGER,
    has_sea_view INTEGER,
    price_per_night REAL,
    description TEXT
  );

  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    name TEXT,
    description TEXT,
    included INTEGER,
    extra_cost REAL
  );

  CREATE TABLE IF NOT EXISTS restaurants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    cuisine TEXT,
    description TEXT,
    open_hours TEXT,
    dress_code TEXT,
    reservation_required INTEGER
  );

  CREATE TABLE IF NOT EXISTS menu_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER,
    category TEXT,
    name TEXT,
    description TEXT,
    price REAL,
    is_signature INTEGER,
    FOREIGN KEY(restaurant_id) REFERENCES restaurants(id)
  );

  CREATE TABLE IF NOT EXISTS meal_plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    code TEXT,
    description TEXT,
    price_per_person_per_night REAL
  );

  CREATE TABLE IF NOT EXISTS spa_treatments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    duration_min INTEGER,
    description TEXT,
    price REAL,
    category TEXT
  );

  CREATE TABLE IF NOT EXISTS packages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    price REAL,
    duration_nights INTEGER,
    ideal_for TEXT
  );

  CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    alt TEXT,
    url TEXT
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    checkin TEXT NOT NULL,
    checkout TEXT NOT NULL,
    nights INTEGER,
    room TEXT,
    plan TEXT,
    notes TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);

// ─── SEED DATA (solo al primo avvio) ──────────────────────────────────────────
const alreadySeeded = db.prepare("SELECT COUNT(*) as n FROM hotel").get().n > 0;

if (!alreadySeeded) {
  db.prepare(
    `INSERT INTO hotel VALUES (
  1,
  'Royal River Luxury Hotel',
  5,
  'GL - Gran Lujo',
  'Costa Adeje Golf Course, Avenida de los Océanos',
  'Adeje, Costa Adeje',
  'Tenerife, Isole Canarie',
  '+34 922 788 482',
  'info@royalriver.es',
  'https://www.royalriver.es',
  'Il Royal River Luxury Hotel 5★ GL è l''unico hotel adults-only al mondo con 50 ville private ciascuna dotata di piscina privata. Situato nella destinazione più esclusiva del sud di Tenerife, di fronte al campo da golf Costa Adeje, offre viste panoramiche eccezionali sull''Oceano Atlantico dal suo spettacolare rooftop con infinity pool. Un''esperienza sensoriale completa tra gastronomia stellata, Serenity Spa e paesaggi mozzafiato.',
  28.0835,
  -16.7310
)`,
  ).run();

  // VILLE/CAMERE
  const roomInsert = db.prepare(
    `INSERT INTO rooms (type, name, size_m2, max_guests, bedrooms, bathrooms, bed_type, has_private_pool, has_terrace, has_jacuzzi, has_sea_view, price_per_night, description) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  );

  const rooms = [
    [
      "River Villa 1BR",
      "River Villa - 1 Camera",
      120,
      2,
      1,
      1,
      "King Size",
      1,
      1,
      1,
      0,
      480,
      "Villa romantica con piscina privata collegata all'80m river pool. Bagno con doccia e vasca. Vista giardino tropicale.",
    ],
    [
      "River Villa 2BR",
      "River Villa - 2 Camere",
      180,
      4,
      2,
      2,
      "King Size x2",
      1,
      1,
      1,
      0,
      780,
      "Spaziosa villa su due livelli con terrazza panoramica e accesso diretto alla river pool. Perfetta per coppie che desiderano spazio extra.",
    ],
    [
      "Lagoon Villa 1BR",
      "Lagoon Villa - 1 Camera",
      60,
      2,
      1,
      1,
      "King Size",
      0,
      1,
      0,
      1,
      420,
      "Villa intima sul lago africano con viste oceaniche mozzafiato. Arredamento esotico ispirato all'Africa.",
    ],
    [
      "Lagoon Villa 2BR",
      "Lagoon Villa - 2 Camere",
      96,
      4,
      2,
      2,
      "King Size x2",
      0,
      1,
      0,
      1,
      680,
      "Villa doppia sul lago con terrazza privata e viste sull'Oceano Atlantico.",
    ],
    [
      "Pool Villa 1BR",
      "Pool Villa - 1 Camera",
      140,
      2,
      1,
      1,
      "King Size",
      1,
      1,
      1,
      1,
      550,
      "Grande terrazza con piscina privata e viste sul mare. Il massimo del relax per una coppia.",
    ],
    [
      "Grand Pool Villa 1BR",
      "Grand Pool Villa - 1 Camera",
      140,
      2,
      1,
      1,
      "King Size",
      1,
      1,
      1,
      1,
      680,
      "Villa di lusso di fronte al campo da golf Costa Adeje. Piscina privata infinity con vista oceano.",
    ],
    [
      "Grand Pool Villa 2BR",
      "Grand Pool Villa - 2 Camere",
      207,
      4,
      2,
      2,
      "King Size x2",
      1,
      1,
      1,
      1,
      950,
      "La villa preferita dalle coppie più esigenti. 207m² di puro lusso con piscina privata infinity.",
    ],
    [
      "Grand Pool Villa 3BR",
      "Grand Pool Villa - 3 Camere",
      250,
      7,
      3,
      3,
      "King Size x3",
      1,
      1,
      1,
      1,
      1350,
      "Villa signorile per gruppi selezionati. 250m² con piscina privata panoramica.",
    ],
    [
      "Paradise Villa",
      "Paradise Pool Villa - 3 Camere",
      325,
      7,
      3,
      3,
      "King Size x3",
      1,
      1,
      1,
      1,
      1800,
      "L'apice del lusso: 325m² con piscina privata, giardino esclusivo e servizi butler personalizzati.",
    ],
    [
      "Sky Villa",
      "Sky Villa Sea View - 4 Camere",
      360,
      8,
      4,
      4,
      "King Size x4",
      1,
      1,
      1,
      1,
      2500,
      "La villa più esclusiva dell'hotel. 360m² ai piani alti con vista a 360° sull'Atlantico. Infinity pool privata e servizio concierge h24.",
    ],
  ];
  rooms.forEach((r) => roomInsert.run(...r));

  // SERVIZI
  const srvInsert = db.prepare(
    `INSERT INTO services (category, name, description, included, extra_cost) VALUES (?,?,?,?,?)`,
  );
  const services = [
    [
      "Piscine",
      "River Pool 80m",
      "Spettacolare piscina fiume lunga 80 metri circondata da vegetazione tropicale",
      1,
      0,
    ],
    [
      "Piscine",
      "Infinity Pool Rooftop",
      "Infinity pool panoramica sul tetto con vista a 360° sull'Oceano Atlantico",
      1,
      0,
    ],
    [
      "Piscine",
      "Piscina Privata Villa",
      "Ogni villa dispone di piscina privata riscaldata (esclusa Lagoon Villa 1BR)",
      1,
      0,
    ],
    [
      "Piscine",
      "River Pool con Idromassaggio",
      "Zone idromassaggio integrate nella river pool",
      1,
      0,
    ],
    [
      "Parcheggio",
      "Parcheggio Privato",
      "Parcheggio gratuito e sorvegliato all'interno della struttura",
      1,
      0,
    ],
    [
      "Parcheggio",
      "Valet Parking",
      "Servizio valet parking su richiesta",
      1,
      0,
    ],
    [
      "Benessere",
      "Serenity Spa",
      "Centro benessere con bagno di piedi alla lavanda, maschera occhi calda e massaggio testa in omaggio",
      0,
      80,
    ],
    [
      "Benessere",
      "Sauna & Bagno Turco",
      "Circuito termale completo con sauna finlandese, bagno turco e docce emozionali",
      0,
      45,
    ],
    ["Benessere", "Palestra", "Attrezzata con macchinari Technogym", 1, 0],
    [
      "Sport",
      "Golf – Costa Adeje",
      "Accesso privilegiato al campo da golf Costa Adeje 18 buche (di fronte all'hotel)",
      0,
      120,
    ],
    [
      "Sport",
      "Tennis",
      "Campo da tennis in terra battuta con istruttore disponibile",
      0,
      30,
    ],
    [
      "Sport",
      "Yoga & Meditazione",
      "Sessioni giornaliere di yoga all'alba sul rooftop panoramico",
      1,
      0,
    ],
    [
      "Escursioni",
      "Whale Watching",
      "Escursione in barca per avvistamento balene e delfini",
      0,
      95,
    ],
    [
      "Escursioni",
      "Royal Boat Tour",
      "Tour privato in barca lungo la costa di Costa Adeje",
      0,
      250,
    ],
    [
      "Escursioni",
      "Teide National Park",
      "Escursione guidata al vulcano Teide (UNESCO)",
      0,
      85,
    ],
    [
      "Tecnologia",
      "Wi-Fi Premium",
      "Wi-Fi ultra-veloce gratuito in tutta la struttura",
      1,
      0,
    ],
    [
      "Tecnologia",
      "Smart TV 4K",
      "Smart TV 4K in ogni villa con streaming incluso",
      1,
      0,
    ],
    [
      "Concierge",
      "Butler Service",
      "Servizio butler h24 disponibile per Paradise Villa e Sky Villa",
      1,
      0,
    ],
    [
      "Spiaggia",
      "Beach Service",
      "Ombrellone e lettini riservati alla Playa de las Américas",
      1,
      0,
    ],
    [
      "Trasporti",
      "Airport Transfer",
      "Transfer privato dall'aeroporto TFS (25 min)",
      0,
      150,
    ],
  ];
  services.forEach((s) => srvInsert.run(...s));

  // RISTORANTI
  const restInsert = db.prepare(
    `INSERT INTO restaurants (name, cuisine, description, open_hours, dress_code, reservation_required) VALUES (?,?,?,?,?,?)`,
  );
  const restaurants = [
    [
      "The Top Brasserie",
      "Cucina Internazionale / Canaria Moderna",
      "Il ristorante panoramico di punta dell'hotel. Cucina raffinata con ingredienti locali delle Canarie e influenze internazionali. Vista spettacolare sull'oceano.",
      "19:30 – 23:00",
      "Smart Casual",
      1,
    ],
    [
      "Kokoro Asian Cuisine",
      "Cucina Asiatica Fusion",
      'Un viaggio sensoriale tra Giappone, Cina e Sud-Est Asiatico. "Kokoro" significa connessione tra cuore e anima – ogni piatto racconta una storia.',
      "19:00 – 23:00",
      "Smart Casual",
      1,
    ],
    [
      "Flamingo French Bistro",
      "Cucina Francese Contemporanea",
      "Un'oasi di rosa e turchese. Bistrot francese moderno con tocchi colorati e atmosfera trendy. Perfetto per colazioni elaborate e cene romantiche.",
      "08:00 – 11:00 / 19:30 – 23:00",
      "Casual",
      0,
    ],
    [
      "Pineapple Restaurant",
      "Colazione & Brunch Internazionale",
      "Il ristorante per la colazione buffet e i brunch del weekend. Ampia selezione di prodotti freschi locali, succhi naturali e specialità canarie.",
      "07:30 – 11:30",
      "Casual",
      0,
    ],
  ];
  restaurants.forEach((r) => restInsert.run(...r));

  // MENU
  const menuInsert = db.prepare(
    `INSERT INTO menu_items (restaurant_id, category, name, description, price, is_signature) VALUES (?,?,?,?,?,?)`,
  );
  const menuItems = [
    // The Top (id=1)
    [
      1,
      "Antipasto",
      "Tartare di Tonno Rosso",
      "Tonno rosso selvaggio con avocado canario, mango e vinaigrette agli agrumi",
      28,
      1,
    ],
    [
      1,
      "Antipasto",
      "Gamberoni di Palamós",
      "Gamberoni jumbo alla piastra su crema di batata canaria e olio al corallo",
      32,
      1,
    ],
    [
      1,
      "Primo",
      "Risotto al Nero di Seppia",
      "Risotto Carnaroli con seppia fresca, polvere di limone e bottarga di cefalo",
      35,
      0,
    ],
    [
      1,
      "Secondo",
      "Cherne alla Canaria",
      "Cernia delle Canarie al vapore con papas arrugadas e mojo verde artigianale",
      48,
      1,
    ],
    [
      1,
      "Secondo",
      "Lombo di Wagyu A5",
      "Wagyu giapponese con riduzione al vino Malvasía e tartufo nero",
      95,
      1,
    ],
    [
      1,
      "Dessert",
      "Coulant al Cioccolato Canario",
      "Fondente caldo con cioccolato delle Canarie e gelato alla vaniglia Bourbon",
      18,
      0,
    ],
    [
      1,
      "Vini",
      "Malvasía Volcánica DOC",
      "Vino bianco canario aromatico, fresco e minerale – abbinamento perfetto per il pesce",
      55,
      0,
    ],

    // Kokoro (id=2)
    [
      2,
      "Sushi & Sashimi",
      "Omakase Board",
      "Selezione del giorno del maestro sushi: 12 pezzi premium con foie gras e tartufo",
      75,
      1,
    ],
    [
      2,
      "Sushi & Sashimi",
      "Tuna Tataki",
      "Tonno scottato in crosta di sésamo con ponzu e jalapeño",
      34,
      0,
    ],
    [
      2,
      "Dim Sum",
      "Har Gao Luxury",
      "Ravioli di gambero con tartufo nero e brodo di dashi",
      28,
      1,
    ],
    [
      2,
      "Wok",
      "Black Cod Miso",
      "Merluzzo nero marinato nel miso bianco per 72 ore, con bok choy e riso di sushi",
      58,
      1,
    ],
    [
      2,
      "Wok",
      "Wagyu Gyudon",
      "Wagyu stracotto su riso al vapore con uovo di quaglia e funghi shiitake",
      65,
      0,
    ],
    [
      2,
      "Cocktail Asiatici",
      "Yuzu Spritz",
      "Yuzu fresco, Prosecco, liquore al lychee e foglia d'oro",
      22,
      0,
    ],

    // Flamingo (id=3)
    [
      3,
      "Colazione",
      "Croque Madame Gourmet",
      "Brioche artigianale, prosciutto di Jabugo, uovo in camicia e besciamella al tartufo",
      22,
      1,
    ],
    [
      3,
      "Colazione",
      "French Toast Flamingo",
      "Pain perdu con fragole locali, panna montata e sciroppo d'acero biologico",
      18,
      0,
    ],
    [
      3,
      "Cena",
      "Steak Tartare Fumé",
      "Tartare di manzo con senape di Digione, capperi e tuorlo d'uovo – preparata al tavolo",
      38,
      1,
    ],
    [
      3,
      "Cena",
      "Duck Confit",
      "Coscio d'anatra confit con lenticchie del Puy e salsa al Porto",
      45,
      0,
    ],
    [
      3,
      "Dessert",
      "Crème Brûlée alla Lavanda",
      "Classica crème brûlée con essenza di lavanda canaria e frutti di bosco freschi",
      16,
      0,
    ],
    [
      3,
      "Cocktail",
      "Pink Flamingo Signature",
      "Gin Hendricks, liquore di rose, pompelmo rosa fresco e splash di Champagne",
      25,
      1,
    ],

    // Pineapple (id=4)
    [
      4,
      "Colazione Buffet",
      "Corner Frutta Tropicale",
      "Papaya, mango, ananas, carambola e frutta della passione – tutto fresco delle Canarie",
      0,
      0,
    ],
    [
      4,
      "Colazione Buffet",
      "Eggs Station Live",
      "Uova preparate al momento: strapazzate, Benedict, frittata o all'occhio di bue",
      0,
      0,
    ],
    [
      4,
      "Colazione Buffet",
      "Bakery Canaria",
      "Bienmesabe, pan de leche, miel de palma e churros artigianali",
      0,
      0,
    ],
    [
      4,
      "Brunch",
      "Floating Tray Pool Brunch",
      "Brunch servito su vassoio galleggiante in piscina privata – su prenotazione",
      85,
      1,
    ],
  ];
  menuItems.forEach((m) => menuInsert.run(...m));

  // PIANI PENSIONE
  const planInsert = db.prepare(`INSERT INTO meal_plans VALUES (?,?,?,?,?)`);
  [
    [
      1,
      "Solo Colazione",
      "BB",
      "Colazione buffet completa al Pineapple Restaurant inclusa. Accesso a tutti i ristoranti a pagamento.",
      0,
    ],
    [
      2,
      "Mezza Pensione",
      "HB",
      "Colazione buffet + cena a scelta in uno dei 4 ristoranti dell'hotel (menu fisso o à la carte con credito di €60/persona).",
      85,
    ],
    [
      3,
      "Pensione Completa",
      "FB",
      "Colazione + pranzo + cena in tutti i ristoranti dell'hotel (credito giornaliero €120/persona). Bevande ai pasti incluse.",
      160,
    ],
    [
      4,
      "All Inclusive Premium",
      "AI",
      "Tutti i pasti + bevande premium tutto il giorno + afternoon tea + snack illimitati al pool bar + minibar in villa rifornito quotidianamente.",
      220,
    ],
  ].forEach((p) => planInsert.run(...p));

  // SPA TREATMENTS
  const spaInsert = db.prepare(
    `INSERT INTO spa_treatments (name, duration_min, description, price, category) VALUES (?,?,?,?,?)`,
  );
  [
    [
      "Signature Royal River Massage",
      90,
      "Massaggio con oli essenziali locali, hot stones vulcaniche di Tenerife e tecnica di riflessologia integrata",
      185,
      "Massaggi",
    ],
    [
      "Lava Stone Therapy",
      60,
      "Massaggio con pietre laviche calde del Teide per sciogliere tensioni e rigenerare il corpo",
      140,
      "Massaggi",
    ],
    [
      "Couples Ritual Canario",
      120,
      "Esperienza di coppia: bagno aromatico privato + doppio massaggio + champagne e fragole",
      380,
      "Rituali di Coppia",
    ],
    [
      "Sea Salt & Lavender Scrub",
      45,
      "Esfoliazione corpo con sale marino delle Canarie e lavanda locale. Pelle setosa e nutrita",
      95,
      "Trattamenti Corpo",
    ],
    [
      "Facial Hyaluronic Glow",
      75,
      "Trattamento viso con acido ialuronico puro, vitamina C e maschera di collagene marino",
      150,
      "Trattamenti Viso",
    ],
    [
      "Thalasso Bathtub",
      40,
      "Bagno con estratti di alghe atlantiche, sali minerali e oli di argan biologico",
      80,
      "Idroterapia",
    ],
    [
      "Serenity Circuit (acqua)",
      60,
      "Percorso acquatico completo: piscina fredda, vasca calda, sauna finlandese, bagno turco, docce emozionali",
      60,
      "Circuito Termale",
    ],
    [
      "Prenatal Wellness",
      60,
      "Massaggio dolce per future mamme con oli certificati biologici, posizioni sicure e attenzione totale",
      120,
      "Massaggi Speciali",
    ],
  ].forEach((s) => spaInsert.run(...s));

  // PACCHETTI COPPIA
  const pkgInsert = db.prepare(`INSERT INTO packages VALUES (?,?,?,?,?,?)`);
  [
    [
      1,
      "Escapada Romántica",
      "Pool Villa 1BR + colazione + bottiglia di cava + fiori + late check-out ore 14:00 + accesso Serenity Spa",
      1200,
      2,
      "Coppie",
    ],
    [
      2,
      "Luna di Miele Royal",
      "Grand Pool Villa 1BR + pensione completa + Couples Ritual Spa + cena romantica privata in villa + trasfer aeroporto + fiori + champagne",
      2800,
      3,
      "Coppie / Luna di Miele",
    ],
    [
      3,
      "Tenerife Explorer",
      "River Villa + colazione + whale watching + escursione Teide + Royal Boat Tour",
      1650,
      4,
      "Avventura di Coppia",
    ],
    [
      4,
      "Golf & Relax",
      "Grand Pool Villa + mezza pensione + 2 green fee Costa Adeje Golf + 2 massaggi Lava Stone",
      2200,
      3,
      "Golf & Benessere",
    ],
    [
      5,
      "Sky Experience",
      "Sky Villa 4BR (uso esclusivo per 2) + all inclusive premium + butler h24 + helicopter tour + cena privata rooftop",
      8500,
      4,
      "Ultra Luxury",
    ],
  ].forEach((p) => pkgInsert.run(...p));

  // GALLERY DATA
  const galInsert = db.prepare(
    `INSERT INTO gallery (category, alt, url) VALUES (?,?,?)`,
  );
  [
    [
      "Esterno",
      "Vista aerea dell'hotel con river pool",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    ],
    [
      "Esterno",
      "Infinity pool al tramonto",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    ],
    [
      "Villa",
      "Grand Pool Villa con piscina privata",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    ],
    [
      "Villa",
      "Interno villa con arredo di lusso",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    ],
    [
      "Villa",
      "Bagno villa con vasca freestanding",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800",
    ],
    [
      "Ristorante",
      "The Top Brasserie panoramica",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    ],
    [
      "Ristorante",
      "Kokoro Asian cuisine",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
    ],
    [
      "Spa",
      "Serenity Spa trattamento",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    ],
    [
      "Tenerife",
      "Costa Adeje tramonto",
      "https://images.unsplash.com/photo-1571415060716-baff5f717c39?w=800",
    ],
    [
      "Tenerife",
      "Teide National Park",
      "https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=800",
    ],
  ].forEach((g) => galInsert.run(...g));

  console.log("✅ Database inizializzato e popolato con successo!");
  console.log(
    "📊 Tabelle create: hotel, rooms, services, restaurants, menu_items, meal_plans, spa_treatments, packages, gallery",
  );
} else {
  console.log("✅ Database hotel.db già esistente — seed saltato.");
}

// ─── API ROUTES ────────────────────────────────────────────────────────────────

// Hotel info generale
app.get("/api/hotel", (req, res) => {
  const hotel = db.prepare("SELECT * FROM hotel WHERE id = 1").get();
  res.json(hotel);
});

// Ville / Camere
app.get("/api/rooms", (req, res) => {
  const rooms = db.prepare("SELECT * FROM rooms").all();
  res.json(rooms);
});

app.get("/api/rooms/:id", (req, res) => {
  const room = db
    .prepare("SELECT * FROM rooms WHERE id = ?")
    .get(req.params.id);
  if (!room) return res.status(404).json({ error: "Villa non trovata" });
  res.json(room);
});

// Servizi
app.get("/api/services", (req, res) => {
  const { category } = req.query;
  const services = category
    ? db.prepare("SELECT * FROM services WHERE category = ?").all(category)
    : db.prepare("SELECT * FROM services").all();
  res.json(services);
});

app.get("/api/services/categories", (req, res) => {
  const cats = db.prepare("SELECT DISTINCT category FROM services").all();
  res.json(cats.map((c) => c.category));
});

// Ristoranti
app.get("/api/restaurants", (req, res) => {
  const restaurants = db.prepare("SELECT * FROM restaurants").all();
  res.json(restaurants);
});

app.get("/api/restaurants/:id/menu", (req, res) => {
  const items = db
    .prepare("SELECT * FROM menu_items WHERE restaurant_id = ?")
    .all(req.params.id);
  res.json(items);
});

// Piani pensione
app.get("/api/meal-plans", (req, res) => {
  const plans = db.prepare("SELECT * FROM meal_plans").all();
  res.json(plans);
});

// Spa
app.get("/api/spa", (req, res) => {
  const treatments = db.prepare("SELECT * FROM spa_treatments").all();
  res.json(treatments);
});

// Pacchetti
app.get("/api/packages", (req, res) => {
  const packages = db.prepare("SELECT * FROM packages").all();
  res.json(packages);
});

// Gallery
app.get("/api/gallery", (req, res) => {
  const { category } = req.query;
  const gallery = category
    ? db.prepare("SELECT * FROM gallery WHERE category = ?").all(category)
    : db.prepare("SELECT * FROM gallery").all();
  res.json(gallery);
});

// Riepilogo disponibilità (mock)
app.post("/api/availability", (req, res) => {
  const { checkin, checkout, guests } = req.body;
  const allRooms = db
    .prepare("SELECT * FROM rooms WHERE max_guests >= ?")
    .all(guests || 2);
  res.json({
    checkin,
    checkout,
    guests,
    available_rooms: allRooms,
    note: "Disponibilità in tempo reale. Prezzi indicativi per notte.",
  });
});

// Prenotazioni
app.get("/api/bookings", (req, res) => {
  const bookings = db
    .prepare("SELECT * FROM bookings ORDER BY created_at DESC")
    .all();
  res.json(bookings);
});

app.post("/api/bookings", (req, res) => {
  const {
    id,
    name,
    email,
    phone,
    checkin,
    checkout,
    nights,
    room,
    plan,
    notes,
  } = req.body;
  if (!name || !email || !checkin || !checkout) {
    return res
      .status(400)
      .json({
        error: "Campi obbligatori mancanti: name, email, checkin, checkout",
      });
  }
  db.prepare(
    `INSERT INTO bookings (id, name, email, phone, checkin, checkout, nights, room, plan, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    id,
    name,
    email,
    phone || null,
    checkin,
    checkout,
    nights || null,
    room || null,
    plan || null,
    notes || null,
  );
  res.status(201).json({ success: true, id });
});

app.delete("/api/bookings/:id", (req, res) => {
  const result = db
    .prepare("DELETE FROM bookings WHERE id = ?")
    .run(req.params.id);
  if (result.changes === 0)
    return res.status(404).json({ error: "Prenotazione non trovata" });
  res.json({ success: true });
});

// Serve frontend (Express 5 compatible)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`\n🏨 Royal River Luxury Hotel API`);
  console.log(`🚀 Server in ascolto su: http://localhost:${PORT}`);
  console.log(`📡 Endpoints disponibili:`);
  console.log(`   GET  /api/hotel`);
  console.log(`   GET  /api/rooms`);
  console.log(`   GET  /api/rooms/:id`);
  console.log(`   GET  /api/services`);
  console.log(`   GET  /api/restaurants`);
  console.log(`   GET  /api/restaurants/:id/menu`);
  console.log(`   GET  /api/meal-plans`);
  console.log(`   GET  /api/spa`);
  console.log(`   GET  /api/packages`);
  console.log(`   GET  /api/gallery`);
  console.log(`   POST /api/availability`);
});