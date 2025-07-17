// /app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Navbar } from "./_components/Navbar";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "T3 stack project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body
          style={{
            backgroundImage:
              "url(https://www.transparenttextures.com/patterns/concrete-wall-3.png)",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}