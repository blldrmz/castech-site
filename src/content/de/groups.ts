import type { LiveGameGroup } from "../liveGames";

export const deLiveHero = {
  eyebrow: "Ausstattung für Live-Spiele",
  title: "Casino-Spieltische und Ausstattung für Live-Spiele.",
  lead:
    "Roulette-, Blackjack-, Poker- und Baccara-Tische für jeden Spielsaal. Wir liefern komplette Live-Game-Ausstattungen, darunter Roulettekessel, Tischtücher, Chips, Casino-Stühle und Tischzubehör, abgestimmt auf Ihr Saaldesign und Ihre Spezifikationen.",
};

export const deLiveGroups: LiveGameGroup[] = [
  {
    id: "seating",
    title: "Sitze: Spieler, Croupiers und Pit",
    intro: "Von Automatenhockern bis zu High-Limit-Spielerstühlen: Ergonomie, Polsterklasse und Sichtlinien für die Überwachung zählen auf einem vollen Spielsaal.",
    items: [
      { title: "Hocker für Automaten und elektronische Spiele", description: "Höhenverstellung, Drehgestelle, Fußringe und Oberflächen passend zu Gangbreite und Gehäusefamilie." },
      { title: "Spielerstühle für Pit und Tische", description: "High-Limit- und Standard-Sitze mit Armlehnen-Optionen, schwer entflammbaren Stoffen und Logostickerei." },
      { title: "Sitze für Croupiers und Supervisoren", description: "Niedrige Croupierstühle, Sitze für den Pit-Tisch und strapazierfähige Polster für lange Schichten." },
      { title: "Fußstützen und Komfort-Zubehör", description: "Fußleisten, Polster-Upgrades und Ersatzteile, damit die Sitze bis zum nächsten Umbau nutzbar bleiben." },
    ],
  },
  {
    id: "cards",
    title: "Karten, Schnittkarten und Formulare",
    intro: "Spielkarten, Schnittkarten und Pit-Formulare sind kleine Dinge, die ein Spiel stoppen, wenn sie fehlen – planen Sie sie wie jeden anderen kritischen Bedarf.",
    items: [
      { title: "Spielkarten (in großen Mengen, Casino-Qualität)", description: "Jumbo- und Standard-Index, Kunststoff- und Papierkarten passend zu Shuffler und Spielregeln." },
      { title: "Schnittkarten und Ablage", description: "Farbcodierte Schnittkarten, Ablageschuhe und Zubehör gemäß interner Kontrollen." },
      { title: "Limitanzeigen, Belege und Pit-Formulare", description: "Limitanzeigen, Fill- und Credit-Belege und Kassenformulare in Ihrem Hausformat." },
      { title: "Marker, Stifte und Organizer", description: "Croupier-Marker, Clips für die Tischkante und kompakte Organizer, damit der Tisch auf der Kamera gut lesbar bleibt." },
    ],
  },
  {
    id: "roulette",
    title: "Roulette",
    intro: "Kessel, Anzeigen und Zubehör für klassische und automatische Roulette-Bereiche.",
    items: [
      { title: "Roulettekessel und Zylinder", description: "Drehkreuze, Kugelbahnen und präzise ausgewuchtete Kessel nach Casino-Standard, passend zu Tischtuch und Wartung." },
      { title: "Automatische und luftbetriebene Kessel", description: "Optionen für stark frequentierte Säle, in denen ein geschlossenes, automatisches oder luftgelagertes Rad zu Ihrem Konzept und den lokalen Vorschriften passt." },
      { title: "Ergebnisanzeigen und Lesesysteme", description: "Leser über dem Kessel, Ergebnissäulen und Integrationsanzeigen, damit Pit und Spieler die Gewinnzahlen ohne Verzögerung sehen." },
      { title: "Tischtücher und Tischgestelle", description: "Tücher aus Wolle oder Synthetik, Armauflagen und Chipschienen passend zu Ihrer Fläche." },
    ],
  },
  {
    id: "blackjack",
    title: "Blackjack und Kartentische",
    intro: "Ausgabegeschwindigkeit, Mischen und alle Tischwerkzeuge, auf die Karten-Pits den ganzen Tag angewiesen sind.",
    items: [
      { title: "Blackjack-Tische (Standard und Premium)", description: "Individuelle Längen, Schienenhöhen und Oberflächen – vom Standardtisch bis zum High-Limit-Bereich." },
      { title: "Kontinuierliche Shuffler", description: "Generalüberholte Mehrdeck- und Spezial-Shuffler passend zu Spielgeschwindigkeit und Back-Office-Regeln." },
      { title: "Kartenschlitten und Schnittkarten", description: "Schlitten für 4, 6 und 8 Decks, Schnittkarten, Ablagebehälter und Zubehör gemäß Ihren internen Kontrollen." },
      { title: "Pit-Anzeigen und Schilder", description: "Limits, Regeln und Promotions in der Tischkante oder auf kompakten Anzeigen." },
    ],
  },
  {
    id: "baccarat",
    title: "Baccara und Provisionsspiele",
    intro: "Vom Squeeze-Baccara bis zu provisionsfreien Varianten – wir liefern die komplette Ausstattung.",
    items: [
      { title: "Midi- und Full-Baccara-Tische", description: "Bohnen- und Nierenformen mit der gewünschten Schienengeometrie und Beinfreiheit." },
      { title: "Squeeze-Zubehör", description: "Ablagen, Plexiglas-Paneele und Arbeitsflächen für Squeeze-Baccara." },
      { title: "Werkzeuge für Provision und Auszahlung", description: "Auszahlungshilfen, Einsatzmarker und Tischzubehör passend zu Ihren Abläufen." },
    ],
  },
  {
    id: "poker",
    title: "Poker und Turniere",
    intro: "Pokerräume, Turniere und tägliche Cash Games nutzen dieselbe Grundausstattung.",
    items: [
      { title: "Tische für Texas Hold’em und Stud", description: "Ovale und Heads-up-Tische mit eingebauter Shuffler-Mulde, Handyablagen und Getränkehaltern auf Wunsch." },
      { title: "Tücher für Turniere und Cash Games", description: "Tücher mit Logo oder nach Turnierstandard, Polsterung und Schnellwechsel-Platten." },
      { title: "Poker-Shuffler und Ersatzteile", description: "Generalüberholte Tisch-Shuffler, Spielkarten in großen Mengen und Verbrauchsmaterial für einen vollen Pokerraum." },
    ],
  },
  {
    id: "craps",
    title: "Craps und Würfel",
    intro: "Tischtuch, Sticks und Zubehör, damit ein Craps-Tisch für Crew und Spieler sicher und übersichtlich ist.",
    items: [
      { title: "Craps-Tische und Unterlage", description: "Regelgerechte Größen, Bandengeometrie und Chipschienen für Ihre Pit-Reihe." },
      { title: "Würfel, Sticks, On/Off-Pucks und Buttons", description: "Farbcodierte Würfel, Croupier-Sticks, On/Off-Pucks sowie Buy- und Lay-Buttons." },
      { title: "Marker und Odds-Zubehör", description: "Flache Chips, Markerablagen und Odds-Hilfen gemäß Ihren Hausregeln." },
    ],
  },
  {
    id: "specialty",
    title: "Spezialspiele",
    intro: "Wenn Sie über die Hauptspiele hinausgehen, gelten für Ausstattung und Tischtuch dieselben Anforderungen.",
    items: [
      { title: "Tücher für Sic Bo, Pai Gow und Glücksrad", description: "Tücher, Würfelkäfige, Räder und das spezielle Kleinzubehör jeder Spielklasse." },
      { title: "Side-Bet-Erweiterungen", description: "Tischmodule und Schilder, die zu Ihren bestehenden Pit-Möbeln passen." },
    ],
  },
  {
    id: "chips",
    title: "Chips, Plaques und Tischkasse",
    intro: "Farbsätze, Sicherheitsmerkmale und das Zubehör, das Kasse und Tisch verbindet.",
    items: [
      { title: "Casino-Chips und Plaques", description: "Sätze nach Nennwerten, mit Inlays oder RFID-fähig, soweit die Vorschriften es erlauben." },
      { title: "Chip-Trays, Fills und Abdeckungen", description: "Tray-Größen passend zur Tischkante, Integration mit dem Drop-Schlitz und Abdeckungen." },
      { title: "Drop-Boxen und Zählung", description: "Abschließbare Boxen, Führungen unter dem Tisch und Zubehör für Ihren Zählraum." },
    ],
  },
  {
    id: "hardware",
    title: "Tischzubehör und Service",
    intro: "Die unsichtbare Infrastruktur, die Tische in Betrieb hält: Strom, Daten und Wartungszugang.",
    items: [
      { title: "Croupier-Podeste und Schildersockel", description: "Croupierstände im einheitlichen Pit-Design, Regeltafeln und freie Sicht für die Überwachung." },
      { title: "Strom und Daten im Tisch", description: "Kabeldurchführungen, Kanäle und Aussparungen für Leser, Shuffler und Wartung." },
      { title: "Beleuchtung, Getränkehalter und Komfort", description: "Service-Beleuchtung unter der Schiene, Aussparungen und Zubehör gegen Ermüdung in langen Schichten." },
    ],
  },
];

export const deLiveCta = {
  title: "Planen Sie einen neuen Pit oder einen Umbau?",
  text: "Wir stimmen Marken, Ersatzteile und Lieferzeiten auf Ihren Eröffnungstermin ab – senden Sie uns Saalplan und Spielemix.",
};

export const deAccessoriesHero = {
  eyebrow: "Zubehör für Saal und Pit",
  title: "Casino-Zubehör und Verbrauchsmaterial.",
  lead:
    "Alles, was Ihr Spielsaal täglich braucht: Casino-Chips, Spielkarten, Croupier-Zubehör, Tischtücher, Chip-Trays und Verbrauchsmaterial – geliefert in Ihr Casino.",
};

export const deAccessoryGroups: LiveGameGroup[] = [
  {
    id: "tito-operations",
    title: "TITO, Drucker und Tickets",
    intro: "Durchgängige Ticket- und Voucher-Abläufe passend zu Ihrem Slot-System und Ihrer Kasse.",
    items: [
      { title: "TITO-Tickets und Papier nach Maß", description: "Tickets mit oder ohne Logo, passend zu Ihrem Drucker und Ihren Einlöseregeln." },
      { title: "Drucker für Kioske und Automaten", description: "Zuverlässige Druckköpfe und Ersatzteile, um Ausfallzeiten beim Tausch zu verkürzen." },
      { title: "Barcode und Validierung", description: "Leser-Upgrades und Testgeräte, damit Kasse und Saal Tickets einheitlich akzeptieren." },
    ],
  },
  {
    id: "seating-service",
    title: "Sitze und Spielerkomfort",
    intro: "Von Automatenhockern bis zu High-Limit-Stühlen: Ergonomie und Oberfläche zählen.",
    items: [
      { title: "Hocker für Automaten und elektronische Tische", description: "Höhenverstellbare und drehbare Modelle passend zum Automatenabstand." },
      { title: "Spielerstühle am Tisch (Pit und High Limit)", description: "Polsterklassen, Brandschutzanforderungen und Logostickerei, wenn Ihre Marke es verlangt." },
      { title: "Sitze für Croupiers und Supervisoren", description: "Robuste, niedrige Modelle, die unter Pit-Tische und Serviceschienen passen." },
    ],
  },
  {
    id: "service-pit",
    title: "Servicewagen, Matten und Aufbewahrung",
    intro: "Chips, Belege und Werkzeug bewegen, ohne den Saal zu bremsen.",
    items: [
      { title: "Servicewagen für Pit und Kasse", description: "Abschließbare Wagen mit teppichfreundlichen Rollen und Fächern für Fills, Credits und Schlüssel." },
      { title: "Anti-Ermüdungs- und Kabelmatten", description: "Schutz für Servicegänge und Kabelwege bei hoher Besucherfrequenz." },
      { title: "Unterbau- und mobile Aufbewahrung", description: "Kompakte Schränke für Ersatzteile, Formulare und Notfallvorräte entlang des Pits." },
    ],
  },
  {
    id: "table-smallware",
    title: "Kleinteile für Tische",
    intro: "Das Verbrauchsmaterial, das jeder Pit-Manager auf seiner Bestandsliste führt.",
    items: [
      { title: "Bürsten, Schaber und Tischabdeckungen", description: "Farbcodierte und beschriftete Werkzeuge für einheitliche Standards bei Überwachung und Schulung." },
      { title: "Kartendecks, Schnittkarten und Ablageschuhe", description: "Großpackungen und Rotationspläne für Ihren Spielemix." },
      { title: "Klammern für Tischtücher und Schienenclips", description: "Befestigungen und Reparatursets für schnelle Tuchreparaturen über Nacht, ohne den Tisch abzubauen." },
    ],
  },
  {
    id: "keys-security",
    title: "Schlüssel, Plomben und Schlüsselkontrolle",
    intro: "Physische Sicherheitsartikel, die mit Ihren Abläufen funktionieren.",
    items: [
      { title: "Drop-Schlüssel, Rohlinge und Zylinder", description: "Generalschlüssel-Konzepte mit nummerierten Duplikaten und Reserve in der Kasse." },
      { title: "Plomben und manipulationssichere Etiketten", description: "Für Wagen, Abdeckungen und Transporte zwischen Kasse und Zählraum." },
    ],
  },
  {
    id: "signage-branding",
    title: "Schilder, Jackpots und Saalgrafik",
    intro: "Pflichtschilder, Wegeleitung und Branding im gesamten Saal.",
    items: [
      { title: "Topper und Glaseinsätze für Automaten", description: "Thematische und vorgeschriebene Grafiken für jede Gehäusefamilie in Ihrem Saal." },
      { title: "Wegeleitung, Limits und Plakate zum verantwortungsvollen Spielen", description: "Robuste, leicht austauschbare Schildersysteme für Umstellungen im Saal." },
    ],
  },
];

export const deAccessoriesCta = {
  title: "Erstellen wir Ihre Bestandsliste gemeinsam",
  text: "Wir bündeln Zubehör mit Ausstattungsbestellungen, damit alles zusammen ankommt – senden Sie uns Ihre Liste oder Ihre Pit-Standards.",
};
