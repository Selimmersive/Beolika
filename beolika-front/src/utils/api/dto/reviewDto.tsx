export interface ReviewDto {
    id: number;
    attributes: {
      name: string;
      rating: number;
      title: string;
      comment: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      product: {
        data: {
          id: number;
          attributes: {
            name: string;
            price: number;
            dataUid: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            url: string;
            slug: string;
            shortDescription: string;
            subtitle: string;
          };
        };
      };
    };
  }
  