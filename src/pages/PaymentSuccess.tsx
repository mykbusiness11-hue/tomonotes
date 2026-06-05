import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function PaymentSuccess() {

  const [searchParams] =
    useSearchParams();

  const [loading, setLoading] =
    useState(true);

  const [license, setLicense] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [plan, setPlan] =
    useState('');

  const [copied, setCopied] =
    useState(false);

  useEffect(() => {

   const paymentId =
  searchParams.get('payment_id');

const subscriptionId =
  searchParams.get('subscription_id');

console.log('paymentId:', paymentId);
console.log('subscriptionId:', subscriptionId);
console.log('full url:', window.location.href);

    if (!paymentId) {

      setLoading(false);

      return;

    }
console.log(
  'About to fetch:',
  `${import.meta.env.VITE_API_URL}/payment-result/${paymentId}`
);
    fetch(
       `${import.meta.env.VITE_API_URL}/payment-result/${paymentId}`
    )
      .then((r) => r.json())
      .then((data) => {

        if (data.success) {

          setLicense(
            data.licenseKey
          );

          setEmail(
            data.email
          );

          setPlan(
            data.plan
          );

        }

      })
      .finally(() => {

        setLoading(false);

      });

  }, []);

  const copyLicense =
    async () => {

      await navigator
        .clipboard
        .writeText(
          license
        );

      setCopied(true);

      setTimeout(() => {

        setCopied(false);

      }, 2000);

    };

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );

  }

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          w-full
          max-w-xl
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          text-center
        "
      >
        <div
          className="
            text-4xl
            mb-4
          "
        >
          🎉
        </div>

        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Payment Successful
        </h1>

        <p
          className="
            mt-3
            text-white/60
          "
        >
          Your TOMONotes license
          is ready.
        </p>

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-white/10
            bg-black/30
            p-5
          "
        >
          <div
            className="
              text-xs
              uppercase
              tracking-wider
              text-white/40
            "
          >
            License Key
          </div>

          <div
            className="
              mt-3
              text-lg
              font-mono
              text-white
              break-all
            "
          >
            {license}
          </div>
        </div>

        <button
          onClick={
            copyLicense
          }
          className="
            mt-6
            px-5
            py-3
            rounded-xl
            bg-white/10
            hover:bg-white/15
            border
            border-white/10
            transition-all
          "
        >
          {copied
            ? 'Copied!'
            : 'Copy License'}
        </button>

        <div
          className="
            mt-6
            text-sm
            text-white/50
          "
        >
          Plan: {plan}
        </div>

        <div
          className="
            mt-2
            text-sm
            text-white/40
          "
        >
          A copy has also been
          sent to {email}
        </div>
      </div>
    </div>
  );
}