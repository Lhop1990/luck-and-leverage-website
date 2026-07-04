import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  fullBleed?: boolean;
};

export function Section({ children, className = "", id, eyebrow, fullBleed }: Props) {
  return (
    <section id={id} className={`py-16 md:py-28 ${className}`}>
      <div className={fullBleed ? "" : "mx-auto max-w-7xl px-5 sm:px-6 md:px-10"}>
        {eyebrow && <p className="eyebrow mb-8 md:mb-10">{eyebrow}</p>}
        {children}
      </div>
    </section>
  );
}

export function DottedRule({ className = "" }: { className?: string }) {
  return <div className={`rule-dotted ${className}`} aria-hidden />;
}
