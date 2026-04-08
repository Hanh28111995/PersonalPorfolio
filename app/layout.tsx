import "./globals.css";
import Navbar from "@/layout/Navbar";
import PageLoader from "@/components/PageLoader";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/layout/Footer";


export const metadata = {
  title: "Hạnh Trần | Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Thêm dòng này để nạp bộ icon Outlined */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0&display=block"
        />
      </head>
      <body>
        <ThemeProvider>
          <PageLoader />
          <Navbar />
          {/* <Sidebar /> */}
          {children}
          <Footer />
          {/* <FAB /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
