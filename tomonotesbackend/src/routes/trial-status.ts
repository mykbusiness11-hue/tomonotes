import { Router }
from 'express';

import { supabase }
from '../lib/supabase';

const router =
Router();

router.post(
'/',
async (req, res) => {

try {

  const {
    machineId,
  } = req.body;

  if (
    !machineId
  ) {
    return res.status(
      400
    ).json({
      success: false,
    });
  }

  /*
  FIND EXISTING TRIAL
  */

  const {
    data: trial,
  } = await supabase
    .from('trials')
    .select('*')
    .eq(
      'machine_id',
      machineId
    )
    .single();

  /*
  FIRST TIME USER
  */

  if (!trial) {

    const startedAt =
      Date.now();

    const expiresAt =
      startedAt +
      (
        5 *
        24 *
        60 *
        60 *
        1000
      );

    await supabase
      .from('trials')
      .insert({
        machine_id:
          machineId,

        started_at:
          startedAt,

        expires_at:
          expiresAt,
      });

    return res.json({
      success: true,

      plan: 'trial',

      remainingDays: 5,
    });
  }

  /*
  CALCULATE DAYS LEFT
  */

  const diff =
    trial.expires_at -
    Date.now();

  const remainingDays =
    Math.max(
      0,

      Math.ceil(
        diff /
        (
          1000 *
          60 *
          60 *
          24
        )
      )
    );

  /*
  EXPIRED
  */

  if (
    remainingDays <= 0
  ) {

    return res.json({
      success: true,

      plan: 'free',

      remainingDays: 0,
    });
  }

  /*
  ACTIVE TRIAL
  */

  return res.json({
    success: true,

    plan: 'trial',

    remainingDays,
  });

} catch (error) {

  console.error(
    error
  );

  return res.status(
    500
  ).json({
    success: false,
  });
}


}
);

export default router;
