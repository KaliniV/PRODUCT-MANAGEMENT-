import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/theme.css";
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
