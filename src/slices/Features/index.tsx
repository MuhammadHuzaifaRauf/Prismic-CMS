import {
  BarGraphIcon,
  CalendarIcon,
  CloverIcon,
  HourGlassIcon,
} from "@/components/customLogo/CustomLogo";
import components from "@/components/featureStyling/FeatureStyling";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
