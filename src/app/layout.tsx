import "styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className="min-h-dvh">
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}
