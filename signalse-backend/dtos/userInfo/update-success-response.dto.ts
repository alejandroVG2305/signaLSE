export interface UpdateSuccessResponseDTO {
  success: boolean;
  message: string;
}

export const toUpdateSuccessResponseDTO = (message: string): UpdateSuccessResponseDTO => ({
  success: true,
  message,
});
