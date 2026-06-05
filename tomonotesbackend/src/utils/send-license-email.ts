import nodemailer from 'nodemailer';

const transporter =
  nodemailer.createTransport({

    host:
      process.env.SMTP_HOST,

    port:
      587,

    secure:
      false,

    requireTLS:
      true,

    auth: {
      user:
        process.env.SMTP_USER,

      pass:
        process.env.SMTP_PASS,
    },

    connectionTimeout:
      15000,

    greetingTimeout:
      15000,

    socketTimeout:
      15000,

  });

export async function
sendLicenseEmail(
  email: string,
  licenseKey: string,
  plan: string
) {

  console.log(
    'SMTP CONFIG',
    {
      host:
        process.env.SMTP_HOST,

      port:
        587,

      user:
        process.env.SMTP_USER,

      passExists:
        !!process.env.SMTP_PASS,
    }
  );

  try {

    console.log(
      'ABOUT TO SEND EMAIL'
    );

    const result =
      await transporter.sendMail({

        from:
          `"TOMODesk" <${process.env.SMTP_USER}>`,

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
      'EMAIL RESULT:',
      result
    );

  }
  catch (error) {

    console.error(
      'EMAIL ERROR:',
      error
    );

    throw error;

  }

}