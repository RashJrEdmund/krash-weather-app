import "./globals.css";
import { Inter } from "next/font/google";
import { WeatherContextProvider } from "@/context/store";

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
        <body className={inter.className}>{children}</body>
      </html>
    </WeatherContextProvider>
  );
}
