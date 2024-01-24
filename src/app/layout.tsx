import "./globals.css";
import { Inter } from "next/font/google";
import { WeatherContextProvider } from "@/context/store";
import { Metadata } from "next";
import { APP_URL } from "@/services/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krash-weather",
  description: "Weather app",
  applicationName: "Krash-weather app",
  authors: [{
    url: "https://twitter.com/orashus",
    name: "Rash Edmund"
  }],
  appLinks: {
    web: {
      url: APP_URL,
      should_fallback: true,
    },
  },
  openGraph: {
    type: 'website',
    description: 'weather web application',
    siteName: 'Krash weather',
    title: 'Krash Weather',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WeatherContextProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </WeatherContextProvider>
  );
}
