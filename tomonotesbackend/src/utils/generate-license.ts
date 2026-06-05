export function generateLicense() {

  const chars =
    'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  const generatePart = () =>

    Array.from(
      { length: 4 },
      () =>
        chars[
          Math.floor(
            Math.random() *
            chars.length
          )
        ]
    ).join('');

  return `TOMO-${generatePart()}-${generatePart()}-${generatePart()}`;
}