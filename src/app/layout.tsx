import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 워크소스",
    default: "워크소스",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative font-pretendard text-[#1C1C1E] font-normal">
        {children}
      </body>
    </html>
  );
}
