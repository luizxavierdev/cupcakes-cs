import "@/styles/globals.css";
import { Metadata, Viewport } from "next";


import Footer from "@/components/molecules/Footer/Footer";
import { Navbar } from "@/components/molecules/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { LoadingProvider } from "@/contexts/loading-context";

import { Providers } from "./providers";

import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased scrollbar-hide sm:scrollbar-default",
          fontSans.variable
        )}
      >
        <LoadingProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
            <div className="relative flex flex-col h-screen">

              <Navbar />

              <main className="container mx-auto max-w-7xl flex-grow">
                {children}
              </main>

              <Footer />
            </div>
          </Providers>
        </LoadingProvider>
      </body>
    </html>
  );
}
