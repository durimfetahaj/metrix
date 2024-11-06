import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { db } from "@/db";
import { Product } from "@prisma/client";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ProductWithQuantity extends Product {
  quantity: number;
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  const { orderItems } = await req.json();

  if (!orderItems || orderItems.length === 0) {
    return new NextResponse("Product ids are required", { status: 400 });
  }

  const productIds = orderItems.map((item: ProductWithQuantity) => item.id);

  const products = await db.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  products.forEach((product) => {
    const productQuantity = orderItems.find(
      (order: ProductWithQuantity) => order.id === product.id
    ).quantity;

    line_items.push({
      quantity: productQuantity,
      price_data: {
        currency: "EUR",
        product_data: {
          name: product.name,
        },
        unit_amount: Number(product.price) * 100,
      },
    });
  });

  const order = await db.order.create({
    data: {
      isPaid: false,
      orderItems: {
        create: orderItems.map((item: ProductWithQuantity) => {
          const product = products.find((p) => p.id === item.id);
          return {
            product: {
              connect: {
                id: item.id,
              },
            },
            quantity: item.quantity,
            price: product?.price,
          };
        }),
      },
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${process.env.FRONTEND_STORE_URL}/?success=1`,
    cancel_url: `${process.env.FRONTEND_STORE_URL}/?canceled=1`,
    metadata: {
      orderId: order.id,
    },
  });

  return NextResponse.json({ url: session.url }, { headers: corsHeaders });
}
