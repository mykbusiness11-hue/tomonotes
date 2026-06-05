import { Resend } from 'resend';

const resend =
  new Resend(
    process.env.RESEND_API_KEY
  );

export async function
sendLicenseEmail(
  email: string,
  licenseKey: string,
  plan: string
) {

  try {

    console.log(
      'SENDING EMAIL VIA RESEND'
    );

    const result =
      await resend.emails.send({

        from:
          'TOMODesk <noreply@tomodeskapp.com>',

        to:
          email,

        subject:
          'Your TOMONotes License Key',

        html: `
          <h2>
            Thank you for purchasing TOMONotes
          </h2>

          <p>
            Your license is ready.
          </p>

          <p>
            <strong>Plan:</strong>
            ${plan}
          </p>

          <p>
            <strong>License Key:</strong>
            ${licenseKey}
          </p>

          <p>
            Download:
            https://tomodeskapp.com
          </p>

          <p>
            Open TOMONotes →
            Activate License →
            Paste the key above.
          </p>

          <br />

          <p>
            TOMODesk Team
          </p>
        `,
      });

    console.log(
      'EMAIL SENT SUCCESSFULLY'
    );

    console.log(
      result
    );

  }
  catch (error) {

    console.error(
      'EMAIL ERROR:',
      error
    );

  }

}