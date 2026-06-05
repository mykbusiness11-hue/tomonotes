import { Router } from 'express';

import { supabase }
from '../lib/supabase';

import { generateLicense }
from '../utils/generate-license';

import { sendLicenseEmail }
from '../utils/send-license-email';

const router =
  Router();

router.post(
  '/',
  async (req, res) => {

    try {

      /*
      ONLY SUCCESSFUL PAYMENTS
      */

      if (
        req.body.type !==
        'payment.succeeded'
      ) {

        return res.status(200)
          .json({
            success: true,
          });

      }

      const payment =
        req.body.data;

      const paymentId =
        payment.payment_id;

      const email =
        payment.customer
          ?.email;

      const productId =
        payment.product_cart?.[0]
          ?.product_id;

      if (
        !paymentId ||
        !email ||
        !productId
      ) {

        return res.status(400)
          .json({
            success: false,
          });

      }

      /*
      DUPLICATE WEBHOOK
      */

      const {
        data: existing
      } = await supabase
        .from('licenses')
        .select('id')
        .eq(
          'payment_id',
          paymentId
        )
        .maybeSingle();

      if (existing) {

        return res.status(200)
          .json({
            success: true,
          });

      }

      /*
      DETERMINE PLAN
      */

      const yearlyId =
        process.env
          .DODO_YEARLY_PRODUCT_ID;

      const lifetimeId =
        process.env
          .DODO_LIFETIME_PRODUCT_ID;

      let plan =
        '';

      let expiresAt:
  string | null =
  null;

     if (
  productId ===
  yearlyId
) {

  plan =
    'yearly';

  expiresAt =
    new Date(
      Date.now() +
      365 *
      24 *
      60 *
      60 *
      1000
    ).toISOString();

}
else if (
  productId ===
  lifetimeId
) {

  plan =
    'lifetime';

  expiresAt =
    null;

}
      else {

        return res.status(400)
          .json({
            success: false,

            message:
              'Unknown product',
          });

      }

      /*
      GENERATE UNIQUE LICENSE
      */

      let licenseKey =
        '';

      while (true) {

        licenseKey =
          generateLicense();

        const {
          data
        } = await supabase
          .from('licenses')
          .select('id')
          .eq(
            'license_key',
            licenseKey
          )
          .maybeSingle();

        if (!data) {
          break;
        }

      }

      /*
      INSERT LICENSE
      */

      await supabase
        .from('licenses')
        .insert({

          payment_id:
            paymentId,

          source:
            'dodo',

          license_key:
            licenseKey,

          email,

          plan,

          machine_id:
            '',

          expires_at:
            expiresAt,

          activated_at:
            null,

          is_active:
            true,

        });

      /*
      SEND EMAIL
      */

      await sendLicenseEmail(
        email,
        licenseKey,
        plan
      );

      return res.status(200)
        .json({
          success: true,
        });

    }
    catch (error) {

      console.error(
        error
      );

      return res.status(500)
        .json({
          success: false,
        });

    }

  }
);

export default router;