import { catalogueCategories } from "../catalogueData";
import type { JackpotContent } from "@/views/JackpotView";
import type { TableSignsContent } from "@/views/SimpleViews";
import type { AboutBackground, AboutContent } from "@/views/AboutView";

const g = (file: string, alt: string, caption: string) => ({ src: `/images/hero/${file}.webp`, alt, caption });

export const frJackpot: JackpotContent = {
  hero: {
    eyebrow: "Notre propre production",
    title: "Écrans jackpot LED sur mesure pour casinos.",
    lead:
      "CasTech EQ by Virexa conçoit et fabrique des écrans jackpot LED pour casinos. Chaque écran jackpot est réalisé à vos dimensions et se connecte à votre serveur jackpot, notamment les systèmes EGT, Apex et Novomatic. Vous pouvez afficher les montants du jackpot en direct ou d’autres contenus, comme des retransmissions sportives.",
  },
  highlights: [
    { title: "À vos dimensions", text: "Indiquez-nous la largeur et la hauteur souhaitées. Chaque écran est fabriqué à la taille voulue, et non choisi dans un catalogue figé." },
    { title: "Adapté à votre serveur jackpot", text: "Nos écrans fonctionnent avec les serveurs jackpot d’EGT, Apex, Novomatic et d’autres fabricants – vous conservez votre système actuel. La compatibilité est confirmée pour chaque projet." },
    { title: "Jackpot ou autre contenu", text: "Connecté à votre serveur jackpot, l’écran affiche les montants en direct. Il peut aussi diffuser d’autres contenus, comme des retransmissions sportives ou des promotions." },
    { title: "Fabriqué et livré par nos soins", text: "C’est notre propre production. Nous fabriquons l’écran, le livrons et accompagnons son installation dans votre salle de jeu." },
  ],
  sizes: {
    title: "Dimensions sur mesure ou formats connus.",
    paragraphs: [
      "Envoyez-nous les dimensions exactes ou demandez un format proche des afficheurs jackpot des meubles EGT, Apex ou Novomatic. Nous adaptons l’écran à votre rangée de machines, à votre mur ou à votre colonne.",
      "Nos écrans sont de notre propre fabrication et ne sont pas des pièces d’origine des fabricants. Les noms de marques servent uniquement à décrire la taille souhaitée.",
    ],
  },
  formats: [
    { title: "Écran au-dessus d’une rangée", text: "Écran large au-dessus d’une rangée de machines à sous reliées." },
    { title: "Multi-niveaux et multi-faces", text: "Plusieurs niveaux de jackpot, y compris des écrans visibles de plusieurs côtés." },
    { title: "Entrée et murs", text: "Montants du jackpot à l’entrée du casino ou sur un mur d’accent." },
    { title: "Colonnes fines et séparateurs", text: "Fines colonnes LED lumineuses entre des machines voisines." },
  ],
  brief: [
    "La taille souhaitée ou le modèle de machine dont l’afficheur doit être reproduit",
    "L’emplacement : au-dessus d’une rangée, au mur ou entre les machines",
    "La marque et le modèle de votre serveur jackpot",
    "Le pays de livraison et la date souhaitée",
  ],
  gallery: [
    g("six-bank", "Écran jackpot LED large au-dessus d’une rangée de six machines à sous dans un casino", "Écran large au-dessus de six machines"),
    g("egt-three-machines", "Écran jackpot sur mesure au-dessus de machines à sous, compatible avec un serveur jackpot EGT", "Écran jackpot au-dessus d’une rangée"),
    g("overhead-grand", "Écran jackpot de casino multi-niveaux au-dessus de machines à sous", "Écran jackpot multi-niveaux"),
    g("wall-screen", "Grand écran jackpot de casino au mur au-dessus de machines à sous", "Écran jackpot mural"),
    g("egt-cube", "Écran jackpot LED en forme de cube au-dessus d’une rangée de machines", "Cube jackpot"),
    g("three-level-fireworks", "Écran jackpot LED à trois niveaux avec montants Super, Middle et Mini", "Écran jackpot à trois niveaux"),
    g("four-sided-purple", "Écran jackpot LED à quatre faces avec montants en direct au-dessus d’une rangée", "Écran jackpot à quatre faces"),
    g("entrance-led", "Écran jackpot LED à l’entrée d’un casino", "Écran jackpot à l’entrée"),
    g("tv-wall", "Grand écran jackpot LED au-dessus d’un salon de machines, aussi pour les retransmissions", "Grand écran : jackpot ou retransmission"),
    g("dark-room", "Colonnes LED verticales entre des machines à sous dans une salle sombre", "Colonnes LED entre les machines"),
    g("boost-closeup", "Écran LED intégré entre des machines à sous voisines", "Séparateur LED entre machines"),
    g("apex-clover-wave", "Fine colonne LED entre deux machines à sous incurvées", "Colonne fine entre meubles incurvés"),
    g("apex-clover-twist", "Fine colonne LED lumineuse entre deux machines à sous", "Colonne lumineuse fine"),
    g("princess-bell-link", "Fine colonne LED aux couleurs du casino entre deux machines incurvées", "Colonne aux couleurs du casino"),
    g("slim-column", "Panneau latéral LED rouge entre des rangées de machines", "Panneau latéral LED entre rangées"),
  ],
  labels: {
    sizesEyebrow: "Dimensions",
    quote: "Demander un devis d’écran jackpot",
    installEyebrow: "Installations",
    installTitle: "Dans de vraies salles de jeu.",
    photoNote:
      "Les photos montrent des écrans jackpot installés. Ces mêmes écrans peuvent afficher les montants du jackpot de votre serveur ou tout autre contenu de votre choix, comme une retransmission sportive en direct. Les marques de machines visibles sur les photos appartiennent à leurs fabricants et n’ont aucun lien avec CasTech EQ.",
    ledPre: "Besoin d’un écran LED plus grand ou d’un mur vidéo, en intérieur ou en extérieur ? Voir",
    ledLink: "les écrans LED et murs vidéo LED pour casinos",
    ledPost: " de CasTech LED.",
    installLink: "Récits d’installation et vidéos (EN)",
    briefEyebrow: "Pour un devis rapide",
    briefTitle: "Ce qu’il nous faut.",
    ctaTitle: "Besoin d’un écran jackpot pour votre salle ?",
    ctaText: "Envoyez-nous la taille, l’emplacement de montage et les informations sur votre serveur jackpot. Nous reviendrons vers vous avec une configuration et une offre.",
  },
};

const signTitles: Record<string, string> = {
  "01": "Écran de table sur pied",
  "02": "Écran de table tactile",
  "03": "Écran de table fin",
  "04": "Terminal tactile et connecteurs",
  "05": "Écran de table tactile, vue de face",
};
const tableSigns = catalogueCategories.find((c) => c.slug === "table-signs")!;

export const frTableSigns: TableSignsContent = {
  hero: {
    eyebrow: "Écrans de table",
    title: "Des écrans pour chaque table de jeu.",
    lead:
      "Écrans de limites de table et écrans de résultats de roulette, conçus et assemblés par CasTech EQ. Écrans de 11 à 21 pouces ou de toute autre taille sur demande, sur des pieds adaptés à votre table.",
  },
  galleryEyebrow: "Nos écrans de table",
  galleryTitle: "Écrans de limites et de résultats de roulette.",
  gallery: tableSigns.items.map((i) => {
    const caption = signTitles[i.image.split("/").pop()!.slice(0, 2)] ?? i.title;
    return { src: i.image, alt: `${caption} : écran de limites pour tables de jeu de casino`, caption };
  }),
  briefEyebrow: "Pour un devis rapide",
  briefTitle: "Ce qu’il nous faut.",
  brief: [
    "Les jeux : roulette, blackjack, poker, baccara ou autres",
    "Le nombre de tables, la taille d’écran souhaitée et le mode de fixation",
    "Ce qu’il faut afficher : limites, résultats de roulette, statistiques ou promotions",
    "Le pays de livraison et la date souhaitée",
  ],
  quote: "Demander un devis d’écrans de table",
  pitPre: "Vous équipez tout un pit ? Voir nos",
  pitLink: "tables de jeu de casino et équipements de jeux en direct",
  cta: {
    title: "Besoin d’écrans de table pour votre casino ?",
    text: "Indiquez-nous vos jeux, le nombre de tables et ce que chaque écran doit afficher. Nous reviendrons vers vous avec une configuration et une offre.",
  },
};

export const frSlotHero = {
  eyebrow: "Machines à sous d’occasion",
  title: "Machines à sous d’occasion pour casinos.",
  lead:
    "Nous fournissons des machines à sous d’occasion de qualité de grands fabricants comme EGT, Novomatic et Apex. L’état, la configuration et la disponibilité de chaque machine sont confirmés avant la vente, et nous vous aidons pour le transport et l’installation.",
};

export const frSlotCta = {
  title: "Vous cherchez une machine qui n’est pas dans la liste ?",
  text: "Indiquez-nous la marque, le modèle ou le type de meuble. Nous la trouvons pour vous et confirmons son état, sa disponibilité et la livraison dans votre pays.",
};

export const frAbout: AboutContent = {
  eyebrow: "À propos de CasTech EQ",
  title: "Créé par des experts du casino.",
  lead:
    "CasTech EQ by Virexa repose sur 22 ans de travail concret en casino – de technicien et responsable machines à sous jusqu’à la direction de la surveillance, de l’informatique et du service technique. Notre équipe a ouvert des casinos au Ghana, à Chypre du Nord, au Kosovo, en Géorgie et sur des navires de croisière, et a dirigé des casinos en Afrique, en Europe et en Asie.",
  paragraphs: [
    "Notre propre production, ce sont les écrans jackpot LED : fabriqués aux dimensions dont vous avez besoin, pour les serveurs jackpot d’EGT, Apex, Novomatic et d’autres fabricants (compatibilité confirmée pour chaque projet), livrés et installés dans votre salle de jeu.",
    "Les machines à sous sont fournies d’occasion, les mélangeurs de cartes reconditionnés. Les autres équipements à fabriquer sont fournis sur commande grâce à nos relations directes avec les fabricants. CasTech EQ n’est le revendeur ni le distributeur agréé d’aucune marque ; les noms de marques sur ce site servent uniquement à identifier les équipements.",
    "Les spécifications exactes, la disponibilité, les exigences réglementaires et les conditions commerciales sont confirmées individuellement pour chaque demande. Virexa AI Technologies s.r.o., IČO 29716055, Cihlářská 782/10a, Prosek, 190 00 Praha 9.",
    "Notre société sœur en Géorgie est Deniz Trade LLC (ID 445613480, Khakhuli Str. No. 3, Batoumi), fondée en 2021.",
  ],
  highlights: [
    { title: "Production LED propre", text: "Écrans jackpot à vos dimensions, pour les serveurs jackpot d’EGT, Apex, Novomatic et d’autres." },
    { title: "Occasion et reconditionné", text: "Machines à sous d’occasion et mélangeurs de cartes reconditionnés, état confirmé pour chaque machine." },
    { title: "Directement des fabricants", text: "Équipements sur commande grâce à nos propres relations avec les fabricants." },
  ],
};

export const frAboutBackground: AboutBackground = {
  eyebrow: "Qui sommes-nous",
  title: "22 ans en salle de jeu, puis notre propre entreprise.",
  yearsLabel: "22",
  yearsText: "ans de gestion et d’ouverture de casinos à l’international",
  paragraphs: [
    "Notre fondateur, Bilal Durmaz, a passé 22 ans dans la gestion et l’équipement de casinos à l’international, en Europe, en Afrique et en Asie, à terre comme sur des navires de croisière. Il a ouvert des casinos au Ghana, à Chypre du Nord, au Kosovo, à Batoumi et Tbilissi (Géorgie) ainsi que sur deux navires de croisière.",
    "En 2021, cette expérience est devenue une entreprise : Deniz Trade LLC à Batoumi, en Géorgie. Nous avons commencé par la vente d’équipements de casino et de machines à sous ainsi que par notre propre production d’écrans LED. Depuis, nous avons livré des machines à sous et des équipements de casino à des clients au Liberia, en Belgique, à Trinité-et-Tobago et à Taïwan, et fabriqué et installé des écrans jackpot pour des casinos à Batoumi et Tbilissi.",
    "En 2026, nous avons fondé Virexa AI Technologies s.r.o. à Prague, avec CasTech AI. CasTech EQ poursuit notre activité d’équipement et d’écrans jackpot LED en tant que marque de Virexa, avec Deniz Trade LLC comme société sœur en Géorgie.",
    "Nous savons comment fonctionne une salle de jeu et ce dont un opérateur a besoin le jour de l’ouverture. C’est pourquoi nous parlons le langage de la salle : agencement, champs de vision pour la surveillance, délais, pièces détachées et service – pas seulement des listes de produits.",
  ],
  timelineTitle: "Notre histoire",
  timeline: [
    { year: "22 ans", text: "Gestion, équipement et ouverture de casinos en Europe, en Afrique, en Asie et sur des navires de croisière" },
    { year: "2021", text: "Création de Deniz Trade LLC à Batoumi : équipement de casino, machines à sous et production d’écrans LED" },
    { year: "Depuis 2021", text: "Machines à sous et équipements livrés au Liberia, en Belgique, à Trinité-et-Tobago et à Taïwan ; écrans jackpot pour des casinos à Batoumi et Tbilissi" },
    { year: "2026", text: "Création de Virexa AI Technologies s.r.o. et de CasTech AI à Prague" },
  ],
  salesTitle: "Où nous avons livré",
  sales: ["Liberia", "Belgique", "Trinité-et-Tobago", "Taïwan", "Géorgie"],
  placesTitle: "Où nous avons travaillé",
  places: ["Chypre du Nord", "Cameroun", "Kosovo", "Roumanie", "Djibouti", "Tanzanie", "Malawi", "Ghana", "Monténégro", "Géorgie", "Navires de croisière"],
  highlights: ["Ouverture de casinos", "Gestion de casinos", "Production d’écrans jackpot LED", "Équipement de nouvelles salles et rénovations"],
};

export const frAboutCta = {
  title: "Travaillons sur votre prochain projet",
  text: "Extension, modernisation ou nouvelle ouverture – nous vous aidons à choisir et planifier l’équipement.",
};
