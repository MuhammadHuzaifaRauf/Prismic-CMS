import {
  BarGraphIcon,
  CalendarIcon,
  CloverIcon,
  HourGlassIcon,
} from "@/components/customLogo/CustomLogo";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { ReactNode } from "react";

const components = {
  heading2: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight font-display text-slate-700 text-center mb-12">
      {children}
    </h1>
  ),
  heading3: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl md:text-5xl  leading-tight tracking-tight font-display text-slate-700 mb-3 font-medium sm:text-left text-center">
      {children}
    </h1>
  ),
  paragraph: ({ children }: { children: any }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

const icons = {
  calendar: <CalendarIcon />,
  bargraph: <BarGraphIcon />,
  clover: <CloverIcon />,
  hourglass: <HourGlassIcon />,
};

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <section
      className="py-4 md:py-6 lg:py-8 px-4  md:px-6"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-6xl gap-x-10 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.items.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-xs grid sm:place-items-start place-items-center"
            >
              {item.icon && <div className="mb-5">{icons[item.icon]}</div>}
              <PrismicRichText components={components} field={item.title} />
              <PrismicRichText
                components={components}
                field={item.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
