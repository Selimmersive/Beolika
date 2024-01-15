export interface LegalDto {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      title: string;
      legals: {
        id: number;
        content: string;
        subtitle: string;
      }[];
    };
  }
  