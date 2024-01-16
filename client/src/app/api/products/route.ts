import { getAllProducts } from "@/app/utils/api/api";
import { ProductDto } from "@/app/utils/api/dto/productDto";
import { HOME_URL } from "@/app/utils/urls";
import { errorResponse } from "@/app/utils/utils";
import { NextResponse } from "next/server";

export async function GET() {
  const res : ProductDto[] = await getAllProducts().catch((err) => {
    errorResponse(err);
  });

  const products = res.map((product) => {
    return {
      id: product.id.toString(),
      price: product.attributes.price,
      url: `${HOME_URL}/themes/${product.attributes.slug}`
    };
  });
  
  return NextResponse.json(products);
}