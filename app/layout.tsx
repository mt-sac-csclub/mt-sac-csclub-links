import type { Metadata } from 'next';
import './globals.css';

const title = 'Mt. SAC Computer Science Club';
const description =
  'Interested in Computer Science? Join us for workshops, game nights, events, and a welcoming community for every experience level.';
const socialImage =
  'https://mtsac-csclub-links.mcasper.chatgpt.site/og.png';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: socialImage, width: 1730, height: 909, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
