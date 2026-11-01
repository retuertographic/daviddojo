"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DojoLogo } from "./logo";

const products = [
  { href: "/productos/dojo-duo/", label: "Dojo Duo" },
  { href: "/productos/dojo-go/", label: "Dojo Go" },
];

const links = [
  { href: "/#ventajas", label: "Ventajas" },
  { href: "/#asesor", label: "Tu asesor" },
];

export function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(true);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#e1e1dc]/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between pr-3 pl-7 sm:h-[4.5rem]">
          <Link href="/" className="flex items-center gap-3 text-[#1a1210]">
            <DojoLogo className="h-6 sm:h-7" />
            <span className="h-6 w-px bg-[#1a1210]/20" />
            <span className="text-sm leading-tight">
              con <strong className="font-semibold">{name}</strong>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] text-[#1a1210] lg:flex">
            <div className="group relative">
              <button type="button" className="flex items-center gap-1 py-3">
                Productos <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute top-full left-0 w-56 rounded-3xl bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {products.map((p) => (
                  <Link key={p.href} href={p.href} className="block rounded-2xl px-4 py-3 hover:bg-[#f0f1eb]">
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:underline">
                {l.label}
              </Link>
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
            className={cn("rounded-full p-3 text-[#1a1210] lg:hidden", open && "bg-[#d4d4cf]")}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>

        {open && (
          <nav className="px-4 pb-6 lg:hidden">
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-2xl bg-[#f0f1eb] px-5 py-4 text-2xl text-[#1a1210]"
            >
              Productos
              <ChevronDown className={cn("size-6 transition-transform", productsOpen && "rotate-180")} />
            </button>
            {productsOpen && (
              <div className="mt-2 rounded-2xl bg-white px-5">
                {products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={close}
                    className="block border-b border-[#1a1210]/10 py-5 text-lg text-[#1a1210] last:border-0"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="block px-5 py-4 text-lg text-[#1a1210]"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#contacto"
              onClick={close}
              className="mt-2 flex justify-center rounded-full bg-[#003e33] px-6 py-4 text-lg font-semibold text-[#3de8c4]"
            >
              Hazte cliente
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
