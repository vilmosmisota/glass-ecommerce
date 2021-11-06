import { loadStripe } from "@stripe/stripe-js";
import { JSXElementConstructor, useState } from "react";

export default function ButtonStripe({
  countryCode,
  quantity,
  total,
  shippingRateCode,
}: {
  countryCode: string;
  quantity: number;
  total: number | null;
  shippingRateCode: string;
}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );

  const handleClick = async (): Promise<void> => {
    setLoading(true);
    if (total === null) return;

    const response = await fetch("/api/checkout/session", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ countryCode, total, quantity, shippingRateCode }),
    }).then((res) => res.json());

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    const stripe = await stripePromise;
    const { error } = await stripe!.redirectToCheckout({
      sessionId: response.sessionId,
    });

    console.warn(error.message);
    setLoading(false);
  };

  return (
    <button
      role="link"
      onClick={() => {
        handleClick();
      }}
    >
      Checkout
    </button>
  );
}
