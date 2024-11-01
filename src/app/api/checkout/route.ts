import { create } from "zustand";
import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { db } from "@/db";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  const { productIds } = await req.json();

  if (!productIds || productIds.length === 0) {
    return new NextResponse("Product ids are required", { status: 400 });
  }

  const products = await db.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  products.forEach((product) => {
    line_items.push({
      quantity: 1,
      price_data: {
        currency: "EUR",
        product_data: {
          name: product.name,
        },
        unit_amount: Number(product.price) * 100,
      },
    });
  });

  console.log({ line_items });

  //   const order = await db.order.create({
  //     data: {
  //       isPaid: false,
  //       orderItems: {
  //         create: productIds.map((productId: string) => ({
  //           product: {
  //             connect: {
  //               id: productId,
  //             },
  //           },
  //         })),
  //       },
  //     },
  //   });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${process.env.VERCEL_URL}`,
    cancel_url: `${process.env.VERCEL_URL}`,
    metadata: {
      //   orderId: order.id,
      orderId: "order-123",
    },
  });

  return NextResponse.json({ url: session.url }, { headers: corsHeaders });
}
