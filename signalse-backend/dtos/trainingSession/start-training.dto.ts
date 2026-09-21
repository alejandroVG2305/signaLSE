import { SpellTrainingSign } from "../../domain/spell-training-session";

interface SpellTrainingSignResponseDTO {
  signId: string;
  term: string;
}

export const toSpellTrainingSignResponseDTO = (
  sign: SpellTrainingSign,
): SpellTrainingSignResponseDTO => ({
  signId: sign.signId,
  term: sign.term,
});
