import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
};

function Panel({ children }: PanelProps) {
  return (
    <section className="p-md lg:p-lg bg-dark-low dark:bg-light-low rounded-large">
      {children}
    </section>
  );
}

export default Panel;
