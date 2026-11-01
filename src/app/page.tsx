import Image, { type StaticImageData } from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { agent, whatsappUrl } from "@/lib/agent";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sites/dojo-agent/header";
import { DojoLogo } from "@/components/sites/dojo-agent/logo";
import { CardIcon, ChatIcon, StopwatchIcon, WifiIcon } from "@/components/sites/dojo-agent/icons";
import { ContactForm } from "@/components/sites/dojo-agent/contact-form";
import terminalMesa from "../../public/sites/dojo/terminal-mesa.jpg";
import datafonoTarjeta from "../../public/sites/dojo/datafono-tarjeta.jpg";
import camarero from "../../public/sites/dojo/camarero.jpg";
import comercio from "../../public/sites/dojo/comercio.jpg";
import restaurante from "../../public/sites/dojo/restaurante.jpg";

const quickWhatsapp = whatsappUrl(
  `Hola ${agent.name}, tengo un negocio y me interesa hacerme cliente de Dojo. ¿Me preparas una oferta?`,
);

const heading = "font-[family-name:var(--font-archivo)] tracking-[-0.02em] text-[#1a1210]";
const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-[#003e33] px-10 py-5 text-lg font-semibold text-[#3de8c4] transition-colors hover:bg-[#00594a]";

const features = [
  { Icon: StopwatchIcon, title: "Ahorra tiempo", text: "Conecta el TPV al datáfono." },
  {
    Icon: CardIcon,
    title: "Transacciones muy rápidas",
    text: "A diferencia de otros proveedores, Dojo procesa los pagos en cuestión de segundos.",
    note: 1,
  },
  { Icon: WifiIcon, title: "Cobra desde cualquier lugar", text: "Los datáfonos Dojo cambian automáticamente de wifi a 4G." },
  {
    Icon: ChatIcon,
    title: "Te ayudamos en cada etapa",
    text: `${agent.name} te acompaña en el alta y el equipo de asistencia te atiende en español.`,
  },
];

type Story = {
  id?: string;
  img: StaticImageData;
  alt: string;
  title: string;
  text: string;
  stat?: { value: string; label: string; note?: number };
  cta?: boolean;
};

const stories: Story[] = [
  {
    id: "datafono",
    img: datafonoTarjeta,
    alt: "Pago sin contacto con tarjeta en un datáfono Dojo Go",
    title: "El datáfono más veloz y versátil",
    text: "Atiende a más clientes gracias a la velocidad con la que se procesan las transacciones. Cobra a pie de calle con la conectividad inalámbrica de Dojo Go. Además, su 4G integrado entra en acción si tu wifi se cae. Intuitivo y fácil de usar, es toda una experiencia para tus clientes y para ti.",
    cta: true,
  },
  {
    img: camarero,
    alt: "Camarero cobrando en mesa con un datáfono Dojo",
    title: "Podrás dedicar más tiempo a tu negocio",
    text: "Gracias a la sencilla integración con el TPV y a los intuitivos datáfonos Dojo, puedes centrarte mejor en lo que importa: hacer crecer tu negocio.",
    stat: { value: "12.5%", label: "Pagos en comercios céntricos en Reino Unido procesados por Dojo", note: 2 },
  },
  {
    img: comercio,
    alt: "Comerciante cobrando con tarjeta en el mostrador",
    title: "Controla los flujos de caja",
    text: "Recibe avisos de transferencia diarios y sigue tus ventas en tiempo real con la aplicación de Dojo. Además, sabrás lo que pagas en cada factura.",
    stat: { value: "+150.000", label: "clientes en Reino Unido" },
  },
  {
    id: "asesor",
    img: restaurante,
    alt: "Camarero atendiendo a una clienta en un restaurante",
    title: "Atención cercana y humana",
    text: `Con ${agent.name} tienes a una persona de referencia: analiza tu negocio, te prepara la oferta, gestiona el alta y sigue a tu lado después. Sin centralitas ni esperas interminables.`,
    stat: { value: "15 Años", label: "Tiempo que Dojo lleva en el sector de los pagos." },
  },
];

function Note({ n }: { n: number }) {
  return <sup className="ml-0.5 text-[0.6em]">[{n}]</sup>;
}

export default function Home() {
  return (
    <div id="inicio" className="flex-1 pt-3 text-[#1a1210]">
      <Header name={agent.name} />

      {/* Hero */}
      <section className="px-4 pt-14 pb-10 text-center sm:px-6 sm:pt-20">
        <h1
          className={`${heading} mx-auto max-w-5xl text-[2.6rem] leading-[0.95] font-extrabold uppercase [font-stretch:112%] sm:text-7xl lg:text-8xl`}
        >
          Soluciones diseñadas para impulsar tu negocio
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">
          Te damos la bienvenida a una plataforma de pagos diseñada para ahorrarte tiempo y facilitar tus ventas gracias
          a su tecnología punta y a un asesor que te acompaña.
        </p>
        <div className="mt-10 flex justify-start sm:justify-center">
          <a href="#contacto" className={primaryBtn}>
            Hazte cliente
          </a>
        </div>
        <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-[2.5rem]">
          <Image
            src={terminalMesa}
            alt="Cliente pagando con tarjeta en un datáfono Dojo en un bar de tapas"
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="aspect-square w-full object-cover sm:aspect-[16/9]"
          />
        </div>
      </section>

      {/* Ventajas */}
      <section id="ventajas" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map(({ Icon, title, text, note }) => (
            <div key={title}>
              <div className="flex h-16 items-end">
                <Icon />
              </div>
              <h3 className="mt-10 text-2xl font-medium">{title}</h3>
              <p className="mt-3 text-xl leading-relaxed text-[#1a1210]/70">
                {text}
                {note && <Note n={note} />}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Historias */}
      {stories.map((s, i) => (
        <section key={s.title} id={s.id} className="scroll-mt-28 px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className={cn("px-6 sm:px-0", i % 2 && "lg:order-2")}>
              <Image
                src={s.img}
                alt={s.alt}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-square w-full rounded-[2.5rem] object-cover"
              />
            </div>
            <div>
              <h2 className={`${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>{s.title}</h2>
              <p className="mt-6 text-xl leading-relaxed text-[#1a1210]/70">{s.text}</p>
              {s.cta && (
                <a
                  href="#contacto"
                  className="mt-10 inline-flex rounded-full border-2 border-[#003e33] px-14 py-5 text-lg font-semibold text-[#003e33] transition-colors hover:bg-[#003e33] hover:text-[#3de8c4]"
                >
                  Pedir información
                </a>
              )}
              {s.stat && (
                <div className="mt-10">
                  <p className={`${heading} text-6xl font-medium`}>{s.stat.value}</p>
                  <span className="mt-6 block h-2 w-24 rounded-full bg-[#003e33]" />
                  <p className="mt-6 text-xl leading-relaxed">
                    {s.stat.label}
                    {s.stat.note && <Note n={s.stat.note} />}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="mt-10 bg-[#003e33] px-4 py-24 text-center text-white sm:px-6 sm:py-32">
        <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-archivo)] text-[2.6rem] leading-[1.1] font-medium tracking-[-0.02em] sm:text-6xl">
          ¿Preparado para empezar? Con Dojo todo es fácil.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed sm:text-2xl">
          Únete a Dojo sin complicaciones: {agent.name} te guía en un proceso rápido de principio a fin, ¡no tendrás que
          cambiar de banco!
        </p>
        <a
          href="#contacto"
          className="mt-12 inline-flex rounded-full bg-[#3de8c4] px-16 py-6 text-xl font-semibold text-[#1a1210] transition-colors hover:bg-[#6ef0d4]"
        >
          Empezar
        </a>
      </section>

      {/* Contacto */}
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

      {/* Notas */}
      <section className="bg-white px-4 py-16 text-center sm:px-6">
        <div className="mx-auto max-w-3xl space-y-2 text-lg leading-relaxed text-[#1a1210]/70">
          <p>
            <Note n={1} /> Dojo Go es más rápido que otros datáfonos comparables de Reino Unido, según un estudio
            realizado en 2021 por Paymentsense Limited, licenciatario de Dojo.
          </p>
          <p>
            <Note n={2} /> Estudio basado en redes de terceros con datos de Paymentsense Ltd., licenciatario de Dojo,
            entre 2019 y 2023 en Reino Unido. La definición de «comercio céntrico» hace referencia a los negocios con una
            facturación inferior a 200 millones de libras.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 pt-20 pb-36 sm:px-6 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <DojoLogo className="h-12 sm:h-14" />
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
                  <a href="#datafono">Datáfono Dojo Go</a>
                </li>
                <li>
                  <a href="#ventajas">Ventajas</a>
                </li>
                <li>
                  <a href="#contacto">Hazte cliente</a>
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

      {/* Barra inferior fija (móvil) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1a1210]/10 bg-white px-4 py-4 lg:hidden">
        <a href="#contacto" className={cn(primaryBtn, "w-full py-4")}>
          Empieza ahora
        </a>
      </div>
    </div>
  );
}
