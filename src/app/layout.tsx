import * as React from 'react';
import ThemeRegistry from '@/components/Theme/ThemeRegistry/ThemeRegistry';
import { UserProvider } from './UserContext';
import "@egjs/react-view360/css/view360.min.css";
import '../../styles/globals.css'

export const metadata = {
  title: 'Antaratma',
  description: 'Antaratma Indonesia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <UserProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </UserProvider>
      </body>
    </html>
  );
}
