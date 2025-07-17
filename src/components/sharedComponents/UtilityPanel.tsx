import type { ReactNode } from "react";

type UtilityPanelProps = {
  title: string;
  children: ReactNode;
};

function UtilityPanel({ title, children }: UtilityPanelProps) {
  return (
    <section className="flex flex-col gap-narrow">
      <h3 className="text-start">{title}</h3>

      {children}
    </section>
  );
}

export default UtilityPanel;
