import { CategoryDto } from "./categoryDto";

export interface ProductDetailsDto {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      descriptions: {
        id: number;
        title?: string;
        content: string;
      }[];
      category: {
        data: CategoryDto;
      };
    };
  }
  