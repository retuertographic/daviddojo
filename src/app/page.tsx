import Image, { type StaticImageData } from "next/image";
import { agent } from "@/lib/agent";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sites/dojo-agent/header";
import { CardIcon, ChatIcon, StopwatchIcon, WifiIcon } from "@/components/sites/dojo-agent/icons";
import {
  BottomBar,
  ContactSection,
  SiteFooter,
  heading,
  outlineBtn,
  primaryBtn,
} from "@/components/sites/dojo-agent/site";
import terminalMesa from "../../public/sites/dojo/terminal-mesa.jpg";
import datafonoTarjeta from "../../public/sites/dojo/datafono-tarjeta.jpg";
import camarero from "../../public/sites/dojo/camarero.jpg";
import comercio from "../../public/sites/dojo/comercio.jpg";
import restaurante from "../../public/sites/dojo/restaurante.jpg";

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
                  className={cn(outlineBtn, "mt-10")}
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

      <ContactSection />

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

      <SiteFooter />
      <BottomBar />
    </div>
  );
}
