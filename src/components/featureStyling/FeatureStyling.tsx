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

export default components;
