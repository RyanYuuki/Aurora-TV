import "./globals.css";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import Header from "@/components/common/Header";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            <div className="relative top-[70px] pb-10">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
