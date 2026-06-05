import { Router } from 'express';

import { supabase } from '../lib/supabase';

import { generateLicense } from '../utils/generate-license';

import { sendLicenseEmail } from '../utils/send-license-email';

const router = Router();

router.post(
  '/',
  async (req, res) => {

    try {

      console.log(
        'WEBHOOK RECEIVED:\n',
        JSON.stringify(
          req.body,
          null,
          2
        )
      );

      if (
        req.body.type !==
        'payment.succeeded'
      ) {

        console.log(
          'Ignoring event:',
          req.body.type
        );

        return res.status(200)
          .json({
            success: true,
          });

      }

      const payment =
        req.body.data;

      const paymentId =
        payment?.payment_id;

      const email =
        payment?.customer
          ?.email;

      const productId =
        payment?.product_cart?.[0]
          ?.product_id;

      console.log(
        'paymentId:',
        paymentId
      );

      console.log(
        'email:',
        email
      );

      console.log(
        'productId:',
        productId
      );

      if (
        !paymentId ||
        !email ||
        !productId
      ) {

        console.log(
          'Missing required data'
        );

        return res.status(400)
          .json({
            success: false,
            message:
              'Missing payment data',
          });

      }

      const {
        data: existing,
      } = await supabase
        .from('licenses')
        .select('id')
        .eq(
          'payment_id',
          paymentId
        )
        .maybeSingle();

      if (existing) {

        console.log(
          'Duplicate webhook'
        );

        return res.status(200)
          .json({
            success: true,
          });

      }

      const yearlyId =
        process.env
          .DODO_YEARLY_PRODUCT_ID;

      const lifetimeId =
        process.env
          .DODO_LIFETIME_PRODUCT_ID;

      console.log(
        'ENV yearlyId:',
        yearlyId
      );

      console.log(
        'ENV lifetimeId:',
        lifetimeId
      );

      let plan = '';

      let expiresAt:
        string | null =
        null;

      if (
        productId ===
        yearlyId
      ) {

        plan = 'yearly';

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

      }
      else {

        console.log(
          'UNKNOWN PRODUCT'
        );

        console.log(
          'Received:',
          productId
        );

        console.log(
          'Expected Yearly:',
          yearlyId
        );

        console.log(
          'Expected Lifetime:',
          lifetimeId
        );

        return res.status(400)
          .json({
            success: false,
            message:
              'Unknown product',
          });

      }

      let licenseKey =
        '';

      while (true) {

        licenseKey =
          generateLicense();

        const {
          data,
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

      await sendLicenseEmail(
        email,
        licenseKey,
        plan
      );

      console.log(
        'License created:',
        licenseKey
      );

      return res.status(200)
        .json({
          success: true,
        });

    }
    catch (error) {

      console.error(
        'WEBHOOK ERROR:',
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