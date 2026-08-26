import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darija With Ahmed | Learn Darija in Morocco",
  description: "Learn Moroccan Darija through real conversations, culture, and community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
