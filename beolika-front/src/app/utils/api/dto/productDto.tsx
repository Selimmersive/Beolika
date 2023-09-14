import { ReviewDto } from "./reviewDto";

export interface ProductDto {
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
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            medium: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            large: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string;
          provider: string;
          provider_metadata: string;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    descriptions: {
      id: number;
      title: string;
      content: string;
    }[];
    reviews: {
      data: ReviewDto[];
    };
    categories: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      }[];
    };
  };
}
