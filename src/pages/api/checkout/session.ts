import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2020-08-27",
});

type Data = {
  sessionId: string;
};

export default async function checkout(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { quantity, countryCode, total } = req.body;
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: [countryCode],
        },
        line_items: [
          {
            quantity,
            price_data: {
              currency: "gbp",
              unit_amount: total * 100,
              product: "prod_KhQAOHQSZWkJwk",
            },
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/shop`,
      });
      res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
