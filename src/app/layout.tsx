import { WeatherContextProvider } from "@/context/store";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krash-weather",
  description: "Weather app",
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
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </WeatherContextProvider>
  );
}
