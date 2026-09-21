interface SignCategoriesResponseDTO {
  categories: string[];
}

export const toSignCategoriesResponseDTO = (categories: string[]) => {
  return { categories };
};
