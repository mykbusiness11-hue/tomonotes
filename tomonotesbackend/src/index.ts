import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import activateLicenseRoute
from './routes/activate-license';

import trialStatusRoute
from './routes/trial-status';

import validateLicenseRoute
from './routes/validate-license';

import dodoWebhookRoute
from './routes/dodo-webhook';

import { supabase }
from './lib/supabase';

import paymentResultRoute
from './routes/payment-result'

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

/*
LICENSE ACTIVATION
*/
app.use(
  '/activate-license',
  activateLicenseRoute
);

/*
TRIAL STATUS
*/
app.use(
  '/trial-status',
  trialStatusRoute
);

/*
LICENSE VALIDATION
*/
app.use(
  '/validate-license',
  validateLicenseRoute
);

/*
DODO WEBHOOK
*/
app.use(
  '/dodo-webhook',
  dodoWebhookRoute
);

app.use(
  '/payment-result',
  paymentResultRoute
);

/*
HEALTH CHECK
*/
app.get(
  '/',
  async (_, res) => {

    const {
      data,
      error,
    } = await supabase
      .from('licenses')
      .select('*')
      .limit(5);

    res.json({
      success: true,
      data,
      error,
    });

  }
);

const PORT =
  process.env.PORT || 3001;

app.listen(
  PORT,
  () => {

    console.log(
      `🚀 Server running on port ${PORT}`
    );

  }
);