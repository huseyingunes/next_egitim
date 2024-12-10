import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <meta name="referrer" content="no-referrer"/>
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
