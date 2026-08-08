import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Crowdfunding - Compare the Top Crowdfunding Platforms (2026)",
  description:
    "Find the best crowdfunding platform for your campaign. Compare fees, features, and reviews of GiveSendGo, GoFundMe, Kickstarter, Indiegogo, Fundly, and JustGiving.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
