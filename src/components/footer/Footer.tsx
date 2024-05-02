import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();

  const pages = await client.getSingle("setting");

  const year = new Date().getFullYear();

  return (
    <footer>
      <Link href="/">{pages.data.site_title}</Link>
      <p>
        ©{year} {""} {pages.data.site_title}
      </p>
      <ul>
        {pages.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
