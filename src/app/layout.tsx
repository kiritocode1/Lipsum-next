import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* Add if we have navbar and footer components
          <Navbar />
          {children}
          <Footer /> */}
      </body>

      {/* Add if we have themes */}
      {/* <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body> */}
    </html>
  );
}
