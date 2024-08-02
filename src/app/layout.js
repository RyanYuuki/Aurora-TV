import "./globals.css";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import Header from "@/components/common/Header";

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
            <div className="relative top-[70px] pb-10" >{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
