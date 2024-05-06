import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { ReactNode } from "react";

const components = {
  heading2: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight font-display text-slate-700 text-center mb-12">
      {children}
    </h1>
  ),
  paragraph: ({ children }: { children: any }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center items-center">
      {children}
    </p>
  ),
};

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient();
  const testimonials = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonials) &&
        item.testimonials.uid
      ) {
        return client.getByUID("testimonial", item.testimonials.uid);
      }
    })
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 md:py-12 px-4 md:px-6"
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  ">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16"
          >
            <PrismicRichText field={item?.data.quote} components={components} />
            <div className="flex items-center mt-6">
              <PrismicNextImage
                width={56}
                height={56}
                field={item?.data.avatar}
                className="rounded-full mr-4"
                imgixParams={{ ar: "1:1", fit: "crop" }}
              />
              <div>
                <p>{item?.data.name}</p>
                <p>{item?.data.job_title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
