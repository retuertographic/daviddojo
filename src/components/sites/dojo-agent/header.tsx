"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#datafonos", label: "Datáfonos" },
  { href: "#ventajas", label: "Ventajas" },
  { href: "#sectores", label: "Sectores" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#preguntas", label: "Preguntas" },
];

export function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d12]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 text-white">
          <span className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
            {name.charAt(0)}
          </span>
          <span className="font-semibold tracking-tight">
            {name} <span className="font-normal text-white/50">· Pagos con tarjeta</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500 sm:inline-flex"
          >
            Pide tu oferta
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0b0d12] px-4 pb-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-4 text-white/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-5 flex justify-center rounded-full bg-blue-600 px-5 py-3 font-medium text-white"
          >
            Pide tu oferta
          </a>
        </nav>
      )}
    </header>
  );
}
