import localFont from "next/font/local";
import "./globals.css";
import BooksProvider from "@/context/BooksProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "احفظ كتابك",
  description: "مش هتنسى انت كنت فين بعد كده لما تقرأ كتب",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 flex justify-center`}
      >
        <BooksProvider>{children}</BooksProvider>
      </body>
    </html>
  );
}
