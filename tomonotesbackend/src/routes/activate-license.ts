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
  error,
} = await supabase
  .from('licenses')
  .select('*')
  .eq('license_key', key)
  .maybeSingle();
    

  /*
  INVALID KEY
  */

  if (!license) {

    return res.json({
      success: false,

      message:
        'Invalid license',
    });
  }

  /*
  EXPIRED YEARLY
  */

if (
  license.plan === 'yearly' &&
  license.expires_at &&
  Date.now() >
    new Date(
      license.expires_at
    ).getTime()
) {

    return res.json({
      success: false,

      message:
        'License expired',
    });
  }

  /*
  UNUSED LICENSE
  */

  if (
  !license.machine_id ||
  license.machine_id === ''
) {

    await supabase
      .from('licenses')
      .update({
        machine_id:
          machineId,
        activated_at:
  new Date().toISOString(),
      })
      .eq(
        'license_key',
        key
      );

 return res.json({
success: true,

alreadyActivated: false,

message:
'GhostNote Pro activated',

plan:
license.plan,

expiresAt:
license.expires_at,
});

  }

  /*
  SAME DEVICE
  */

  if (
    license.machine_id ===
    machineId
  ) {

  return res.json({
success: true,

alreadyActivated: true,

message:
'License already active on this device',

plan:
license.plan,

expiresAt:
license.expires_at,
});

  }

  /*
  ANOTHER DEVICE
  */

  return res.json({
    success: false,

    message:
      'License already used on another device',
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
