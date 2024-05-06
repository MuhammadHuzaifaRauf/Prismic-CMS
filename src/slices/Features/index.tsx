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

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="71"
      fill="none"
      viewBox="0 0 72 71"
    >
      <path
        stroke="#0891B2"
        strokeWidth="4.991"
        d="M2.667 35c0-12.57 0-18.856 3.905-22.761 3.905-3.906 10.19-3.906 22.761-3.906h13.334c12.57 0 18.856 0 22.761 3.906 3.905 3.905 3.905 10.19 3.905 22.761v6.667c0 12.57 0 18.856-3.905 22.761-3.905 3.905-10.19 3.905-22.761 3.905H29.333c-12.57 0-18.856 0-22.761-3.905-3.905-3.905-3.905-10.19-3.905-22.761V35z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M19.333 8.333v-5M52.667 8.333v-5M4.333 25h63.334"
      ></path>
      <path
        fill="#0891B2"
        d="M56 51.667a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zM56 38.333a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zM39.333 51.667a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0zM39.333 38.333a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0zM22.667 51.667a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zM22.667 38.333a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
      ></path>
    </svg>
  );
}

import React from "react";

function BarGraphIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <g stroke="#0891B2" strokeWidth="4.991" clipPath="url(#clip0_1_1478)">
        <path strokeLinecap="round" d="M73.333 73.333H6.667"></path>
        <path
          strokeOpacity="0.5"
          d="M70 73.333v-25a5 5 0 00-5-5H55a5 5 0 00-5 5v25"
        ></path>
        <path d="M50 73.333V16.667c0-4.714 0-7.071-1.465-8.536C47.072 6.667 44.715 6.667 40 6.667s-7.071 0-8.535 1.464C30 9.596 30 11.953 30 16.667v56.666"></path>
        <path
          strokeOpacity="0.5"
          d="M30 73.333V31.667a5 5 0 00-5-5H15a5 5 0 00-5 5v41.666"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_1478">
          <rect width="80" height="80" fill="#fff" rx="16.636"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function CloverIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M26.667 26.667h26.666v26.666H26.667V26.667z"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="4.991"
        d="M53.333 53.337l10-.002c5.523 0 10.001 4.476 10.002 9.998 0 5.523-4.476 10.001-9.999 10.002-5.522 0-10-4.475-10.001-9.998l-.002-10zM26.67 53.337l-10-.002c-5.523 0-10 4.476-10.002 9.998 0 5.523 4.476 10.001 9.999 10.002 5.522 0 10-4.475 10.001-9.998l.002-10zM53.333 26.667l10 .001c5.523.001 10.001-4.475 10.002-9.998 0-5.523-4.476-10-9.999-10.002-5.522 0-10 4.476-10.001 9.999l-.002 10zM26.67 26.667l-10 .001c-5.523.001-10-4.475-10.002-9.998 0-5.523 4.476-10 9.999-10.002 5.522 0 10 4.476 10.001 9.999l.002 10z"
      ></path>
    </svg>
  );
}

function HourGlassIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <g stroke="#0891B2" strokeWidth="4.991" clipPath="url(#clip0_1_1501)">
        <path d="M49.859 30.237L40 40l-9.859-9.763c-9.742-9.647-14.612-14.47-13.249-18.632.117-.358.263-.706.436-1.04C19.335 6.666 26.223 6.666 40 6.666c13.777 0 20.665 0 22.672 3.897.173.335.319.683.436 1.041 1.363 4.162-3.507 8.985-13.249 18.632z"></path>
        <path
          strokeOpacity="0.5"
          d="M30.141 49.763L40 40l9.859 9.763C59.6 59.41 64.47 64.233 63.108 68.395a7.104 7.104 0 01-.435 1.04c-2.008 3.898-8.896 3.898-22.673 3.898-13.777 0-20.665 0-22.672-3.897a7.094 7.094 0 01-.436-1.041c-1.364-4.162 3.507-8.985 13.249-18.632h0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_1501">
          <rect width="80" height="80" fill="#fff" rx="16.636"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
