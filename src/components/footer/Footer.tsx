import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.webp";

export default async function Footer() {
  const client = createClient();

  const pages = await client.getSingle("setting");

  const year = new Date().getFullYear();

  return (
    <footer className="py-4 md:py-6 lg:py-8 px-4  md:px-6">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href="/">
          <Image src={logo} alt="" width={246} height={246} />
        </Link>
        <p className="text-sm">
          ©{year} {""} {pages.data.site_title}
        </p>
        <ul className="flex">
          {pages.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink field={link} className="p-3">
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
