import { Router } from 'express';
import { supabase } from '../lib/supabase';

const router = Router();

router.get(
  '/:paymentId',
  async (req, res) => {

    try {

      const {
        paymentId,
      } = req.params;

      let query =
        supabase
          .from('licenses')
          .select(
            'license_key, plan, email'
          );

      if (
        paymentId.startsWith(
          'sub_'
        )
      ) {

        query =
          query.eq(
            'subscription_id',
            paymentId
          );

      }
      else {

        query =
          query.eq(
            'payment_id',
            paymentId
          );

      }

      const {
        data: license,
      } = await query.maybeSingle();

      if (!license) {

        return res.status(404)
          .json({
            success: false,
            message:
              'License not found',
          });

      }

      return res.json({
        success: true,

        licenseKey:
          license.license_key,

        plan:
          license.plan,

        email:
          license.email,
      });

    }
    catch (error) {

      console.error(error);

      return res.status(500)
        .json({
          success: false,
        });

    }

  }
);

export default router;