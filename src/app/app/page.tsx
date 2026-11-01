import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { agent } from "@/lib/agent";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sites/dojo-agent/header";
import { CardIcon, PhoneIcon, ReceiptIcon, WalletIcon } from "@/components/sites/dojo-agent/icons";
import { BottomBar, ContactSection, SiteFooter, heading } from "@/components/sites/dojo-agent/site";
import appPortatil from "../../../public/sites/dojo/app-portatil.jpg";
import appMovil from "../../../public/sites/dojo/app-movil.jpg";

export const metadata: Metadata = {
  title: "App Dojo for business con David · Controla los flujos de caja",
  description:
    "Con la app Dojo for business sigues tus ventas, transferencias y facturas en tiempo real. Pide información a David, tu asesor comercial de Dojo.",
};

const h2 = `${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`;
const body = "text-xl leading-relaxed text-[#1a1210]/70";

const stores = [
  {
    href: "https://play.google.com/store/search?q=Dojo%20for%20business&c=apps",
    label: "Google Play",
    pre: "GET IT ON",
    icon: (
      <svg viewBox="0 0 24 26" className="h-8" aria-hidden>
        <path d="M1 1l12 12L1 25c-.6-.3-1-1-1-1.8V2.8C0 2 .4 1.3 1 1Z" fill="#00d7fe" />
        <path d="M17 9l-4 4 4 4 5-2.8c1.3-.8 1.3-1.6 0-2.4Z" fill="#ffce00" />
        <path d="M13 13L1 25c.5.3 1.2.3 1.9-.1L17 17Z" fill="#ff3a44" />
        <path d="M13 13L1 1c.5-.3 1.2-.3 1.9.1L17 9Z" fill="#00f076" />
      </svg>
    ),
  },
  {
    href: "https://apps.apple.com/es/search?term=Dojo%20for%20business",
    label: "App Store",
    pre: "Download on the",
    icon: (
      <svg viewBox="0 0 24 28" className="h-8 fill-white" aria-hidden>
        <path d="M19.7 14.9c0-3.2 2.6-4.7 2.7-4.8-1.5-2.2-3.8-2.5-4.6-2.5-2-.2-3.8 1.2-4.8 1.2s-2.5-1.1-4.2-1.1C6.7 7.7 4.7 9 3.6 11c-2.2 3.9-.6 9.6 1.6 12.7 1 1.5 2.3 3.2 3.9 3.2 1.6-.1 2.2-1 4.1-1s2.4 1 4.1 1c1.7 0 2.8-1.6 3.8-3.1 1.2-1.7 1.7-3.4 1.7-3.5-.1 0-3.1-1.2-3.1-5.4ZM16.6 5.4c.9-1.1 1.5-2.5 1.3-4-1.3.1-2.8.9-3.7 1.9-.8.9-1.5 2.4-1.3 3.9 1.4.1 2.8-.7 3.7-1.8Z" />
      </svg>
    ),
  },
];

const features = [
  { Icon: PhoneIcon, title: "App de seguimiento", text: "Controla en tiempo real las ventas, los rechazos y las devoluciones." },
  { Icon: CardIcon, title: "Alertas de rechazo", text: "Cuando un pago no se efectúa, Dojo Go te avisa." },
  { Icon: ReceiptIcon, title: "Facturas claras", text: "Todas tus facturas en un solo lugar, con el desglose completo de los cargos." },
  { Icon: WalletIcon, title: "Notificaciones de transferencia", text: "Recibe un aviso instantáneo cada vez que Dojo te envía fondos." },
];

const stories: { img: StaticImageData; alt: string; title: string; text: string }[] = [
  {
    img: appPortatil,
    alt: "Hostelera hablando por teléfono frente a su portátil",
    title: "Supervisa tus ventas en directo en la app",
    text: "Haz un seguimiento de todas las transacciones a medida que se producen en la app Dojo for business y en el datáfono. Además, la alerta de «pago rechazado» te ayuda a no perder ni un céntimo.",
  },
  {
    img: appMovil,
    alt: "Hostelero consultando la app en su móvil en la barra",
    title: "Te avisan al enviarte la recaudación",
    text: "Consulta todas las transferencias previas y programadas en cualquier momento para saber cuánto dinero recibirás. Además, las alertas instantáneas te avisan en el momento del envío, para tu total tranquilidad.",
  },
];

export default function AppPage() {
  return (
    <div className="flex-1 pt-3 text-[#1a1210]">
      <Header name={agent.name} />

      {/* Hero */}
      <section className="px-4 pt-14 text-center sm:px-6 sm:pt-20">
        <h1
          className={`${heading} mx-auto max-w-5xl text-[2.6rem] leading-[0.95] font-extrabold uppercase [font-stretch:112%] sm:text-7xl lg:text-8xl`}
        >
          Controla los flujos de caja
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">
          Ve con claridad todos los cobros con tarjeta gracias a los avisos de transferencia, la app de seguimiento y otras
          funciones del datáfono que te ayudan a llevar el control.
        </p>
        <div className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-10">
          {stores.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/30 bg-black px-4 py-2 text-left text-white"
            >
              {s.icon}
              <span className="leading-none">
                <span className="block text-[11px] tracking-wide">{s.pre}</span>
                <span className="text-2xl font-medium tracking-tight">{s.label}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Ventajas */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map(({ Icon, title, text }) => (
            <div key={title}>
              <div className="flex h-16 items-end">
                <Icon />
              </div>
              <h3 className="mt-10 text-2xl font-medium">{title}</h3>
              <p className={`${body} mt-3`}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historias */}
      {stories.map((s, i) => (
        <section key={s.title} className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className={cn("px-6 sm:px-0", i % 2 && "lg:order-2")}>
              <Image
                src={s.img}
                alt={s.alt}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-[24/25] w-full rounded-[2.5rem] object-cover"
              />
            </div>
            <div>
              <h2 className={h2}>{s.title}</h2>
              <p className={`${body} mt-8`}>{s.text}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Facturas */}
      <section className="mt-14 bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex aspect-[688/435] items-center justify-center rounded-[2.5rem] bg-[#3de8c4] sm:mx-4">
            <svg viewBox="0 0 300 280" className="w-2/5" aria-hidden>
              <path d="M90 0h120l90 72L150 280 0 72Z" fill="#003f34" />
              <path d="M90 0h30l-20 72H0Z M210 0h-30l20 72h100Z" fill="#c2f5ea" />
              <path d="M100 72h100l-50 208Z" fill="#c2f5ea" />
            </svg>
          </div>
          <div>
            <h2 className={h2}>Facturas claras como el agua</h2>
            <p className={`${body} mt-8`}>
              Cada mes recibes una factura con el desglose detallado de cada cargo (las transferencias no tienen coste),
              ayudándote a conciliar las ventas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003f34] px-4 py-24 text-center text-white sm:px-6 sm:py-32">
        <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-archivo)] text-[2.6rem] leading-[1.1] font-medium tracking-[-0.02em] sm:text-6xl">
          ¿Preparado para empezar? Con Dojo todo es fácil.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed sm:text-2xl">
          Únete a Dojo sin complicaciones: {agent.name} te acompaña en un proceso rápido diseñado para ayudarte en todo
          momento. No tienes que cambiar de banco.
        </p>
        <a
          href="#contacto"
          className="mt-12 inline-flex rounded-full bg-[#3de8c4] px-16 py-6 text-xl font-semibold text-[#1a1210] transition-colors hover:bg-[#6ef0d4]"
        >
          Empezar
        </a>
      </section>

      <ContactSection />
      <SiteFooter />
      <BottomBar />
    </div>
  );
}
