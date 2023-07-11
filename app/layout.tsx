import './globals.css';
import { Footer, Navbar, Provider } from '@/components';
import { SessionInterface } from '@/common.types';

export const metadata = {
  title: 'StoreStockApp',
  description: 'Showcase and discover remarkable developer projects',
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode,
  session: SessionInterface,
}) {

  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <Navbar />
            <main>
              {children}
            </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};
