import { Router } from 'express';
import DodoPayments from 'dodopayments';

const router = Router();

const client =
  new DodoPayments({

    bearerToken:
      process.env.DODO_API_KEY!,

    environment:
      process.env.DODO_ENVIRONMENT as
        'test_mode' | 'live_mode',
  });

router.post(
  '/',
  async (req, res) => {

    try {

      const {
        plan,
      } = req.body;

      const productId =
        plan === 'yearly'
          ? process.env.DODO_YEARLY_PRODUCT_ID
          : process.env.DODO_LIFETIME_PRODUCT_ID;

      const session =
        await client.checkoutSessions.create({

          product_cart: [
            {
              product_id:
                productId!,
              quantity: 1,
            },
          ],

          return_url:
  `${process.env.FRONTEND_URL}/payment-success`,

          feature_flags: {
            redirect_immediately:
              true,
          },

        });

      return res.json({
        checkoutUrl:
          session.checkout_url,
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