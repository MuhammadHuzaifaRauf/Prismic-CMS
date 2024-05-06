import Button from "@/components/button/Button";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components = {
  heading1: ({ children }: { children: any }) => (
    <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight font-display text-slate-700">
      {children}
    </h1>
  ),

  paragraph: ({ children }: { children: any }) => (
    <p className=" max-w-md text-2xl  font-normal leading-10 text-slate-600 mb-4 md:mb-8">
      {children}
    </p>
  ),
};

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          className="px-4 py-10 md:py-14 md:px-6 lg:py-16"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 place-items-center text-center">
              <PrismicRichText
                field={slice.primary.heading}
                components={components}
              />
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
              <Button
                field={slice.primary.button_link}
                className="mb-8 md:mb-10"
              >
                {slice.primary.button_text}
              </Button>
              <PrismicNextImage
                field={slice.primary.image}
                className="drop-shadow-xl max-w-4xl w-full rounded-lg h-[710px]"
              />
            </div>
          </div>
        </section>
      )}

      {slice.variation === "horizontal" && (
        <section
          className="px-4 py-10 md:py-14 md:px-6 lg:py-16"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
              <div className="grid grid-rows-[1fr,auto,auto] gap-2 h-fit">
                <PrismicRichText
                  field={slice.primary.heading}
                  components={components}
                />
                <PrismicRichText
                  field={slice.primary.body}
                  components={components}
                />
                {/* <Button
                  field={slice.primary.button_link}
                  className="mb-8 md:mb-10"
                >
                  {slice.primary.button_text}
                </Button> */}
              </div>

              <PrismicNextImage
                field={slice.primary.image}
                className="drop-shadow-xl max-w-4xl w-full rounded-xl "
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
