import satori from 'satori';
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const medium = readFileSync(join(root, 'node_modules/@fontsource/inter-tight/files/inter-tight-latin-500-normal.woff'));
const bold   = readFileSync(join(root, 'node_modules/@fontsource/inter-tight/files/inter-tight-latin-700-normal.woff'));

const el = {
  type: 'div',
  props: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#FBFAF8',
      position: 'relative',
      fontFamily: 'Inter Tight',
    },
    children: [
      // Full-width teal bar at top
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '6px',
            backgroundColor: '#0F6E56',
          },
        },
      },
      // Centred content column
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: '90px',
          },
          children: [
            // Name
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '80px',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  lineHeight: 1.1,
                  marginBottom: '16px',
                  letterSpacing: '-2px',
                },
                children: 'Omar A. Barakat',
              },
            },
            // Title — uppercase in JS (satori has no text-transform)
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#0F6E56',
                  letterSpacing: '3px',
                  marginBottom: '40px',
                },
                children: 'TECHNICAL PRODUCT MANAGER · AGILE COACH',
              },
            },
            // Short teal rule
            {
              type: 'div',
              props: {
                style: {
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#0F6E56',
                  borderRadius: '2px',
                  marginBottom: '36px',
                },
              },
            },
            // Dimensions
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#3A3A3A',
                  letterSpacing: '1px',
                  marginBottom: '20px',
                },
                children: 'Build · Fix · Design · Transform & Teach',
              },
            },
            // Credentials
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#8A8A85',
                  letterSpacing: '1px',
                },
                children: 'IBM AI PM · ICP-ACC · PSM I',
              },
            },
          ],
        },
      },
      // Domain watermark — bottom right
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute',
            bottom: '28px',
            right: '40px',
            fontSize: '13px',
            fontWeight: 500,
            color: '#C8C4BF',
            letterSpacing: '0.5px',
          },
          children: 'omarbarakat.io',
        },
      },
    ],
  },
};

const svg = await satori(el, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'Inter Tight', data: medium, weight: 500, style: 'normal' },
    { name: 'Inter Tight', data: bold,   weight: 700, style: 'normal' },
  ],
});

const png = await sharp(Buffer.from(svg)).png().toBuffer();
const outPath = join(root, 'public/og.png');
writeFileSync(outPath, png);
console.log(`✓  public/og.png written (1200×630, ${png.length} bytes)`);
