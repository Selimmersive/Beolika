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
  