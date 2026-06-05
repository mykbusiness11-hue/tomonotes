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
    key,
    machineId,
  } = req.body;

  if (
    !key ||
    !machineId
  ) {

    return res.status(
      400
    ).json({
      success: false,
    });
  }

  /*
  FIND LICENSE
  */

  const {
    data: license,
  } = await supabase
    .from('licenses')
    .select('*')
    .eq(
      'license_key',
      key
    )
    .single();

  /*
  INVALID
  */

  if (!license) {

    return res.json({
      success: false,
    });
  }

  /*
  MACHINE CHECK
  */

  if (
    license.machine_id !==
    machineId
  ) {

    return res.json({
      success: false,
    });
  }

  /*
  YEARLY EXPIRY
  */

  if (
    license.plan ===
      'yearly' &&

    license.expires_at &&

    Date.now() >
      license.expires_at
  ) {

    return res.json({
      success: false,

      expired: true,
    });
  }

  /*
  ACTIVE
  */

  return res.json({
    success: true,

    plan:
      license.plan,

    expiresAt:
      license.expires_at,
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
