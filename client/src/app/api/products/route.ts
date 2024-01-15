import { getAllProducts } from "@/app/utils/api/api";
import { ProductDto } from "@/app/utils/api/dto/productDto";
import { NextResponse } from "next/server";

export async function GET() {
  const res : ProductDto[] = await getAllProducts();

  const products = res.map((product) => {
    return {
      id: product.id.toString(),
      price: product.attributes.price,
      url: `https://shopithemes.beolika.com/themes/${product.attributes.slug}`
    };
  });
  
  return NextResponse.json(products);
}