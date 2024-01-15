import { CategoryDto } from "./categoryDto";

export interface ProductListsDto {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      lists: {
        id: number;
        content: string;
      }[];
      category: {
        data: CategoryDto;
      };
    };
  }
  