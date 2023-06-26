import './globals.css';
import { Footer, Navbar } from '@/components';
import { Providers } from "./providers";

export const metadata = {
  title: 'StoreStockApp',
  description: 'Showcase and discover remarkable developer projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
            <main>
              {children}
            </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};
