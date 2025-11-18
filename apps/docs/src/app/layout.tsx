import { RootProvider } from "fumadocs-ui/provider/next";
//@ts-ignore
import "./global.css";
import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";

const dm_sans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={dm_sans.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
