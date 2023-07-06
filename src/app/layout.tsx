import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uber Earnings",
  description: "My uber earnings tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-2">
          <Link href={"/"}>Home</Link>
          {children}
        </main>
      </body>
    </html>
  );
}
