import products from "@/lib/productsData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const newProduct = {
    id: Date.now(),
    title: body.title,
    price: body.price,
    category: body.category,
    description: body.description,
    img: body.img
  };

  products.push(newProduct);

  return NextResponse.json(
    {
      message: "product added Successfully",
      data: newProduct
    },
    { status: 201 }
  );
}
