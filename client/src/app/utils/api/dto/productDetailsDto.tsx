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
        data: {
          id: number;
          attributes: {
            name: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        };
      };
    };
  }
  