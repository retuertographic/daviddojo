"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DojoLogo } from "./logo";

const links = [
  { href: "#datafono", label: "Datáfono Dojo Go" },
  { href: "#ventajas", label: "Ventajas" },
  { href: "#asesor", label: "Tu asesor" },
  { href: "#contacto", label: "Hazte cliente" },
];

export function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#e1e1dc]/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between pr-3 pl-7 sm:h-[4.5rem]">
          <a href="#inicio" className="flex items-center gap-3 text-[#1a1210]">
            <DojoLogo className="h-6 sm:h-7" />
            <span className="h-6 w-px bg-[#1a1210]/20" />
            <span className="text-sm leading-tight">
              con <strong className="font-semibold">{name}</strong>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[15px] text-[#1a1210] lg:flex">
            {links.slice(0, 3).map((l) => (
              <a key={l.href} href={l.href} className="hover:underline">
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-full bg-[#003e33] px-6 py-3 font-semibold text-[#3de8c4] transition-colors hover:bg-[#00594a]"
            >
              Hazte cliente
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-3 text-[#1a1210] lg:hidden"
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>

        {open && (
          <nav className="px-7 pb-6 lg:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-t border-[#1a1210]/10 py-4 text-lg text-[#1a1210]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
