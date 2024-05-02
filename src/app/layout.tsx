import type { Metadata, ResolvingMetadata } from "next";
import { Lexend } from "next/font/google";
import { createClient } from "@/prismicio";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("setting");

  return {
    title: page.data.site_title || "Flowrise fallback",
    description:
      page.data.meta_description || "Flowrise is the relaxing app for you",

    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
