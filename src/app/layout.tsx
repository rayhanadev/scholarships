/* @jsxImportSource react */
import "styles/globals.css";

// import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}
