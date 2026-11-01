import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string | string[] };

// Acordeón de preguntas frecuentes sobre fondo verde (se pueden abrir varias a la vez).
export function FaqList({ items, title = "FAQs" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="bg-[#003f34] px-4 py-20 text-white sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-[family-name:var(--font-archivo)] text-5xl font-medium tracking-[-0.02em] sm:text-6xl">
          {title}
        </h2>
        <div className="mt-12 space-y-4">
          {items.map((f) => (
            <details key={f.q} className="group rounded-[1.75rem] bg-[#1e5e50] open:bg-[#002e26]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-[1.4rem] leading-snug font-medium sm:px-8 sm:py-7 sm:text-[1.7rem] [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="size-7 shrink-0 transition-transform group-open:rotate-180" strokeWidth={1.75} />
              </summary>
              <div className="px-6 pb-8 text-[1.05rem] space-y-4 leading-relaxed sm:px-8 sm:text-lg">
                {(Array.isArray(f.a) ? f.a : [f.a]).map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
