import { CategoryDto } from "./categoryDto";

export interface FaqDto {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    faqs: {
      id: number;
      question: string;
      answer: string;
    }[];
    category: {
      data: CategoryDto;
    };
  };
}
