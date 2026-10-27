import { media } from "./mediaUrls";

/** Hero strip images for live-game section IDs */
export const liveGroupCoverById: Record<string, string> = {
  seating: media.seating,
  "cards": media.cards,
  roulette: media.roulette,
  blackjack: media.blackjack,
  baccarat: media.blackjack,
  poker: media.poker,
  craps: media.dice,
  specialty: media.dice,
  chips: media.chips,
  hardware: media.blackjack,
};

export const accessoryGroupCoverById: Record<string, string> = {
  "tito-operations": media.accessoryTito,
  "seating-service": media.seating,
  "service-pit": media.accessoryCart,
  "table-smallware": media.cards,
  "keys-security": media.accessoryKeys,
  "signage-branding": media.blackjack,
};
