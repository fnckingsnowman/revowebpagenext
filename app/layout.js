import MainLayout from "@/components/MainLayout";
import "./globals.css";

export const metadata = {
  title: "webshit thing",
  description: "nextnextnextnext",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
