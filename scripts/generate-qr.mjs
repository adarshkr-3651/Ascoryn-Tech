import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

async function generateQRCodes() {
  const websiteUrl = 'https://ascoryntech.vercel.app';
  const whatsappUrl = 'https://wa.me/9779762958887?text=Hello%20Ascoryn%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services';
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Ascoryn Tech Inc.
ORG:Ascoryn Tech Inc.
TITLE:Enterprise AI & Cloud Engineering
TEL;TYPE=WORK,VOICE:+9779762958887
TEL;TYPE=CELL,VOICE:+9779745653468
EMAIL;TYPE=PREF,INTERNET:ascoryntech@gmail.com
URL:https://ascoryntech.vercel.app
ADR;TYPE=WORK:;;Sankhamul-31;Kathmandu;;44600;Nepal
NOTE:Innovating for Tomorrow - Enterprise AI & Cloud Engineering
END:VCARD`;

  // 1. Website SVG & PNG
  const websiteSvg = await QRCode.toString(websiteUrl, {
    type: 'svg',
    color: {
      dark: '#070D1B',
      light: '#FFFFFF'
    },
    margin: 2,
    errorCorrectionLevel: 'H'
  });
  fs.writeFileSync(path.join(publicDir, 'website-qr.svg'), websiteSvg);
  await QRCode.toFile(path.join(publicDir, 'website-qr.png'), websiteUrl, {
    width: 600,
    margin: 2,
    color: { dark: '#070D1B', light: '#FFFFFF' },
    errorCorrectionLevel: 'H'
  });

  // Default qr-code.svg / png (for website)
  fs.writeFileSync(path.join(publicDir, 'qr-code.svg'), websiteSvg);
  await QRCode.toFile(path.join(publicDir, 'qr-code.png'), websiteUrl, {
    width: 600,
    margin: 2,
    color: { dark: '#070D1B', light: '#FFFFFF' },
    errorCorrectionLevel: 'H'
  });

  // 2. WhatsApp SVG & PNG
  const whatsappSvg = await QRCode.toString(whatsappUrl, {
    type: 'svg',
    color: {
      dark: '#070D1B',
      light: '#FFFFFF'
    },
    margin: 2,
    errorCorrectionLevel: 'H'
  });
  fs.writeFileSync(path.join(publicDir, 'whatsapp-qr.svg'), whatsappSvg);
  await QRCode.toFile(path.join(publicDir, 'whatsapp-qr.png'), whatsappUrl, {
    width: 600,
    margin: 2,
    color: { dark: '#070D1B', light: '#FFFFFF' },
    errorCorrectionLevel: 'H'
  });

  // 3. vCard SVG & PNG
  const vcardSvg = await QRCode.toString(vcardData, {
    type: 'svg',
    color: {
      dark: '#070D1B',
      light: '#FFFFFF'
    },
    margin: 2,
    errorCorrectionLevel: 'H'
  });
  fs.writeFileSync(path.join(publicDir, 'vcard-qr.svg'), vcardSvg);
  await QRCode.toFile(path.join(publicDir, 'vcard-qr.png'), vcardData, {
    width: 600,
    margin: 2,
    color: { dark: '#070D1B', light: '#FFFFFF' },
    errorCorrectionLevel: 'H'
  });

  // Ensure new-logo.png also exists in public
  fs.copyFileSync(path.join(publicDir, 'logo.png'), path.join(publicDir, 'new-logo.png'));

  console.log('Successfully generated all QR codes and ensured new-logo.png in public/ directory!');
}

generateQRCodes();
