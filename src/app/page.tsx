import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
// import { components } from "@/slices";

export default async function Page() {
  return <div className="text-red-900">Home Page</div>;

  // return <SliceZone slices={page.data.slices} components={components} />;
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
