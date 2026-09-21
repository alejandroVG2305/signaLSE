interface SignProgressResponseDTO {
  remainingSigns: number;
}

export const toSignProgressResponseDTO = (
  remaining: number,
): SignProgressResponseDTO => {
  return { remainingSigns: remaining };
};
