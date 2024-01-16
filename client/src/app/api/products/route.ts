import { getAllProducts } from "@/app/utils/api/api";
import { ProductDto } from "@/app/utils/api/dto/productDto";
import { HOME_URL } from "@/app/utils/urls";
import { errorResponse } from "@/app/utils/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products: ProductDto[] = await getAllProducts();

    const formattedProducts = products.map((product) => ({
      id: product.id.toString(),
      price: product.attributes.price,
      url: `${HOME_URL}/themes/${product.attributes.slug}`,
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    errorResponse(error);
    return NextResponse.json([]); // Vous pouvez ajuster cela en fonction de vos besoins.
  }
}
