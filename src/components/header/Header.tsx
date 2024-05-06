import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.webp";
export default async function Header() {
  const client = createClient();

  const pages = await client.getSingle("setting");

  return (
    <header className="py-4 md:py-6 lg:py-8 px-4  md:px-6">
      <div className="gap-4 flex items-center justify-between sm:flex-row flex-col">
        <Link href="/">
          <Image src={logo} alt="" width={246} height={246} />
        </Link>

        <nav>
          <ul className="flex">
            {pages.data.navigation.map(({ link, label }) => (
              <li key={label}>
                <PrismicNextLink field={link} className="p-3 text-[22px]">
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
