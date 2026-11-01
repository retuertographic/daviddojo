import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { agent, whatsappUrl } from "@/lib/agent";
import { cn } from "@/lib/utils";
import { DojoLogo } from "./logo";
import { ContactForm } from "./contact-form";

// Estilos y bloques compartidos por todas las páginas.
export const heading = "font-[family-name:var(--font-archivo)] tracking-[-0.02em] text-[#1a1210]";
export const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-[#003e33] px-10 py-5 text-lg font-semibold text-[#3de8c4] transition-colors hover:bg-[#00594a]";
export const outlineBtn =
  "inline-flex items-center justify-center rounded-full border-2 border-[#003e33] px-14 py-5 text-lg font-semibold text-[#003e33] transition-colors hover:bg-[#003e33] hover:text-[#3de8c4]";

export const quickWhatsapp = whatsappUrl(
  `Hola ${agent.name}, tengo un negocio y me interesa hacerme cliente de Dojo. ¿Me preparas una oferta?`,
);

export function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div>
          <h2 className={`${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>
            Hazte cliente con {agent.name}
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-[#1a1210]/70">
            Cuéntame cómo es tu negocio y te preparo una oferta personalizada, normalmente en menos de 24 horas y sin
            compromiso.
          </p>
          <ul className="mt-10 space-y-6 text-lg">
            <li>
              <a href={quickWhatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#003e33] text-[#3de8c4]">
                  <MessageCircle className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-[#1a1210]/60">WhatsApp</span>
                  {agent.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:+${agent.phone}`} className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#003e33] text-[#3de8c4]">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-[#1a1210]/60">Teléfono · {agent.hours}</span>
                  {agent.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${agent.email}`} className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#003e33] text-[#3de8c4]">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-[#1a1210]/60">Email</span>
                  {agent.email}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>

  );
}

export function SiteFooter() {
  return (
    <footer className="px-4 pt-20 pb-36 sm:px-6 lg:pb-20">
      <div className="mx-auto max-w-6xl">
        <Link href="/" aria-label="Inicio">
          <DojoLogo className="h-12 sm:h-14" />
        </Link>
        <p className="mt-4 text-lg">
          Página de {agent.fullName}, {agent.role.charAt(0).toLowerCase() + agent.role.slice(1)}
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:max-w-xl">
          <div>
            <p className="text-xl font-medium">Contacta con {agent.name}</p>
            <ul className="mt-5 space-y-4 text-lg text-[#1a1210]/70 underline underline-offset-4">
              <li>
                <a href={quickWhatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:+${agent.phone}`}>Teléfono</a>
              </li>
              <li>
                <a href={`mailto:${agent.email}`}>Email</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium">Enlaces directos</p>
            <ul className="mt-5 space-y-4 text-lg text-[#1a1210]/70 underline underline-offset-4">
              <li>
                <Link href="/#datafono">Datáfono Dojo Go</Link>
              </li>
              <li>
                <Link href="/productos/dojo-duo/">Dojo Duo</Link>
              </li>
              <li>
                <Link href="#contacto">Hazte cliente</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-16 border-[#1a1210]/30" />
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-[#1a1210]/70">
          Esta es la página personal de un asesor comercial de Dojo. Dojo es el nombre comercial de Paymentsense
          Ireland Limited, entidad regulada por el Banco Central de Irlanda e inscrita en el Banco de España con el
          número 6728. Las condiciones definitivas se recogen en la oferta personalizada y en el contrato.
        </p>
      </div>
    </footer>

  );
}

export function BottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1a1210]/10 bg-white px-4 py-4 lg:hidden">
      <a href="#contacto" className={cn(primaryBtn, "w-full py-4")}>
        Empieza ahora
      </a>
    </div>
  );
}
