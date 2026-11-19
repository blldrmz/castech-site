import type { LiveGameGroup } from "../liveGames";

export const frLiveHero = {
  eyebrow: "Équipement pour jeux en direct",
  title: "Tables de jeu et équipements pour jeux en direct.",
  lead:
    "Tables de roulette, de blackjack, de poker et de baccara pour toutes les salles de jeu. Nous fournissons des équipements complets pour jeux en direct, dont cylindres de roulette, tapis, jetons, chaises de casino et accessoires de table, adaptés à l’aménagement de votre salle et à vos spécifications.",
};

export const frLiveGroups: LiveGameGroup[] = [
  {
    id: "seating",
    title: "Sièges : joueurs, croupiers et pit",
    intro: "Des tabourets de machines aux fauteuils des tables high limit : l’ergonomie, la qualité du revêtement et les champs de vision pour la surveillance comptent dans une salle animée.",
    items: [
      { title: "Tabourets pour machines à sous et jeux électroniques", description: "Hauteur réglable, base pivotante, repose-pieds et finitions adaptés à la largeur des allées et aux types de meubles." },
      { title: "Fauteuils de joueurs pour tables", description: "Sièges pour tables standard et high limit, avec ou sans accoudoirs, tissus ignifugés et logo brodé." },
      { title: "Sièges pour croupiers et superviseurs", description: "Chaises basses de croupier, sièges de pit et revêtements résistants pour les longues équipes." },
      { title: "Repose-pieds et accessoires de confort", description: "Repose-pieds, coussins améliorés et pièces de rechange pour que les sièges tiennent jusqu’à la prochaine rénovation." },
    ],
  },
  {
    id: "cards",
    title: "Cartes, cartes de coupe et formulaires",
    intro: "Cartes à jouer, cartes de coupe et formulaires de pit sont de petits éléments qui arrêtent le jeu s’ils manquent – planifiez-les comme tout autre consommable critique.",
    items: [
      { title: "Cartes à jouer (en gros, qualité casino)", description: "Index jumbo ou standard, cartes plastique ou papier selon votre mélangeur et vos règles de jeu." },
      { title: "Cartes de coupe et défausse", description: "Cartes de coupe de couleur, sabots de défausse et accessoires conformes à vos contrôles internes." },
      { title: "Écrans de limites, bons et formulaires de pit", description: "Écrans de limites, bons de remplissage et de crédit et formulaires de caisse dans votre format." },
      { title: "Marqueurs, stylos et organiseurs", description: "Marqueurs de croupier, pinces de rebord et organiseurs compacts pour que la table reste lisible à la caméra." },
    ],
  },
  {
    id: "roulette",
    title: "Roulette",
    intro: "Cylindres, écrans et équipements associés pour la roulette classique et automatique.",
    items: [
      { title: "Cylindres et roues de roulette", description: "Tourelles, pistes de bille et cylindres équilibrés avec précision selon les standards casino, compatibles avec votre tapis et votre maintenance." },
      { title: "Roues automatiques et pneumatiques", description: "Options pour les salles très fréquentées où une roue fermée, automatique ou pneumatique convient à votre concept et à la réglementation locale." },
      { title: "Écrans de résultats et lecteurs", description: "Lecteurs au-dessus du cylindre, colonnes de résultats et écrans d’intégration pour que le pit et les joueurs voient les numéros gagnants sans délai." },
      { title: "Tapis et piètements de tables", description: "Tapis en laine ou synthétiques, accoudoirs et rails à jetons adaptés à votre surface." },
    ],
  },
  {
    id: "blackjack",
    title: "Blackjack et tables de cartes",
    intro: "Vitesse de distribution, mélange et tous les équipements de table sur lesquels le pit de cartes compte toute la journée.",
    items: [
      { title: "Tables de blackjack (standard et premium)", description: "Longueurs, hauteurs de rebord et finitions sur mesure – des tables courantes aux zones high limit." },
      { title: "Mélangeurs de cartes en continu", description: "Mélangeurs multi-jeux et spéciaux reconditionnés, adaptés à la vitesse de jeu et aux règles du back-office." },
      { title: "Sabots et cartes de coupe", description: "Sabots de 4, 6 et 8 jeux, cartes de coupe, bacs de défausse et accessoires conformes à vos contrôles internes." },
      { title: "Écrans de pit et panneaux d’information", description: "Limites, règles et promotions intégrées au rebord de la table ou sur des écrans compacts." },
    ],
  },
  {
    id: "baccarat",
    title: "Baccara et jeux à commission",
    intro: "Du baccara squeeze aux variantes sans commission – nous fournissons tout l’équipement physique.",
    items: [
      { title: "Tables de midi et grand baccara", description: "Formes haricot et rein avec la géométrie de rebord et l’espace pour les jambes souhaités." },
      { title: "Accessoires pour le squeeze", description: "Supports, panneaux en plexiglas et surfaces de travail pour le baccara squeeze." },
      { title: "Outils de commission et de paiement", description: "Aides au calcul des gains, marqueurs de mise et accessoires adaptés à vos procédures." },
    ],
  },
  {
    id: "poker",
    title: "Poker et tournois",
    intro: "Salles de poker, tournois et cash games quotidiens utilisent le même équipement de base.",
    items: [
      { title: "Tables de Texas Hold’em et de stud", description: "Tables ovales et heads-up avec emplacement intégré pour le mélangeur, supports de téléphone et porte-gobelets sur demande." },
      { title: "Tapis pour tournois et cash games", description: "Tapis avec logo ou au standard tournoi, rembourrage et plateaux à changement rapide." },
      { title: "Mélangeurs de poker et pièces détachées", description: "Mélangeurs de table reconditionnés, cartes en gros et consommables pour une salle de poker animée." },
    ],
  },
  {
    id: "craps",
    title: "Craps et dés",
    intro: "Tapis, bâtons et accessoires pour qu’une table de craps reste sûre et lisible pour l’équipe et les joueurs.",
    items: [
      { title: "Tables de craps et sous-tapis", description: "Dimensions réglementaires, géométrie des bandes et rails à jetons pour votre rangée de tables." },
      { title: "Dés, bâtons, palets on/off et boutons", description: "Dés de couleur, bâtons de croupier, palets on/off et jeux de boutons buy et lay." },
      { title: "Marqueurs et accessoires pour les cotes", description: "Jetons plats, plateaux de marqueurs et aides aux cotes selon vos règles maison." },
    ],
  },
  {
    id: "specialty",
    title: "Jeux spéciaux",
    intro: "Lorsque vous allez au-delà des jeux principaux, les mêmes exigences s’appliquent à l’équipement et aux tapis.",
    items: [
      { title: "Tapis pour sic bo, pai gow et roue de la fortune", description: "Tapis, cages à dés, roues et petits accessoires propres à chaque catégorie de jeu." },
      { title: "Mises annexes", description: "Modules de table et panneaux assortis à votre mobilier de pit existant." },
    ],
  },
  {
    id: "chips",
    title: "Jetons, plaques et caisse de table",
    intro: "Jeux de couleurs, éléments de sécurité et équipements qui relient la caisse à la table.",
    items: [
      { title: "Jetons et plaques de casino", description: "Jeux par valeur, avec inserts ou compatibles RFID lorsque la réglementation le permet." },
      { title: "Racks à jetons, remplissage et couvercles", description: "Taille du rack adaptée au rebord, intégration avec la fente de drop et couvercles." },
      { title: "Drop boxes et comptage", description: "Boîtes verrouillables, guides sous la table et accessoires pour votre salle de comptage." },
    ],
  },
  {
    id: "hardware",
    title: "Accessoires de table et maintenance",
    intro: "L’infrastructure invisible qui fait tourner les tables : alimentation, données et accès pour la maintenance.",
    items: [
      { title: "Podiums de croupier et supports d’écrans", description: "Postes de croupier assortis au style du pit, panneaux de règles et champs de vision dégagés pour la surveillance." },
      { title: "Alimentation et données dans la table", description: "Passe-câbles, goulottes et découpes pour lecteurs, mélangeurs et maintenance." },
      { title: "Éclairage, porte-gobelets et confort", description: "Éclairage de service sous le rebord, découpes et accessoires contre la fatigue lors des longues équipes." },
    ],
  },
];

export const frLiveCta = {
  title: "Vous équipez un nouveau pit ou rénovez votre salle ?",
  text: "Nous alignons marques, pièces détachées et délais sur votre date d’ouverture – envoyez-nous le plan de salle et la répartition des jeux.",
};

export const frAccessoriesHero = {
  eyebrow: "Accessoires pour la salle et le pit",
  title: "Accessoires et consommables pour casinos.",
  lead:
    "Tout ce dont votre salle de jeu a besoin au quotidien : jetons de casino, cartes à jouer, accessoires de croupier, tapis, racks à jetons et consommables – livrés dans votre casino.",
};

export const frAccessoryGroups: LiveGameGroup[] = [
  {
    id: "tito-operations",
    title: "TITO, imprimantes et tickets",
    intro: "Gestion complète des tickets et vouchers adaptée à votre système de machines à sous et à votre caisse.",
    items: [
      { title: "Tickets TITO et papier sur mesure", description: "Tickets avec ou sans logo, adaptés à votre imprimante et à vos règles de paiement." },
      { title: "Imprimantes pour bornes et machines", description: "Têtes d’impression fiables et pièces détachées pour réduire les arrêts lors des remplacements." },
      { title: "Codes-barres et validation", description: "Mises à niveau des lecteurs et matériel de test pour que la caisse et la salle acceptent les tickets de la même façon." },
    ],
  },
  {
    id: "seating-service",
    title: "Sièges et confort des joueurs",
    intro: "Des tabourets de machines aux fauteuils high limit : l’ergonomie et la finition comptent.",
    items: [
      { title: "Tabourets pour machines et tables électroniques", description: "Modèles réglables en hauteur et pivotants, adaptés à l’espacement des machines." },
      { title: "Fauteuils de joueurs pour tables (pit et high limit)", description: "Qualités de revêtement, normes incendie et logo brodé si votre marque l’exige." },
      { title: "Sièges pour croupiers et superviseurs", description: "Modèles bas et robustes qui passent sous les tables du pit et les rebords de service." },
    ],
  },
  {
    id: "service-pit",
    title: "Chariots de service, tapis de sol et rangement",
    intro: "Déplacez jetons, formulaires et outils sans ralentir la salle.",
    items: [
      { title: "Chariots pour le pit et la caisse", description: "Chariots verrouillables à roues adaptées à la moquette, avec bacs pour remplissages, crédits et clés." },
      { title: "Tapis anti-fatigue et passe-câbles", description: "Protection des allées de service et des chemins de câbles en cas de forte fréquentation." },
      { title: "Rangement sous comptoir et mobile", description: "Armoires compactes pour pièces détachées, formulaires et réserves d’urgence le long du pit." },
    ],
  },
  {
    id: "table-smallware",
    title: "Petits accessoires de table",
    intro: "Les consommables que chaque responsable de pit garde sur sa liste de stock.",
    items: [
      { title: "Brosses, raclettes et housses de table", description: "Outils de couleur et étiquetés pour des standards uniformes de surveillance et de formation." },
      { title: "Jeux de cartes, cartes de coupe et sabots de défausse", description: "Lots en gros et plan de rotation des stocks selon votre répartition des jeux." },
      { title: "Agrafes de tapis et pinces de rebord", description: "Fixations et kits de réparation pour réparer un tapis de nuit sans démonter la table." },
    ],
  },
  {
    id: "keys-security",
    title: "Clés, scellés et contrôle des clés",
    intro: "Des éléments de sécurité physique qui suivent vos procédures.",
    items: [
      { title: "Clés de drop box, ébauches et cylindres", description: "Organigrammes de clés avec doubles numérotés et réserve en caisse." },
      { title: "Scellés et étiquettes inviolables", description: "Pour les chariots, les couvercles et les transferts entre la caisse et la salle de comptage." },
    ],
  },
  {
    id: "signage-branding",
    title: "Signalétique, jackpots et graphisme de salle",
    intro: "Signalétique obligatoire, orientation et image de marque dans toute la salle.",
    items: [
      { title: "Toppers et vitres de machines", description: "Graphismes thématiques et obligatoires pour chaque type de meuble de votre salle." },
      { title: "Orientation, limites et affiches sur le jeu responsable", description: "Systèmes de signalétique robustes et faciles à remplacer lors des réaménagements." },
    ],
  },
];

export const frAccessoriesCta = {
  title: "Établissons ensemble votre liste de stock",
  text: "Nous regroupons les accessoires avec les commandes d’équipement pour que tout arrive en même temps – envoyez-nous votre liste ou vos standards de pit.",
};
