import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title || "Flowrise fallback",
    description:
      page.data.meta_description || "Flowrise is the relaxing app for you",
  };
}
