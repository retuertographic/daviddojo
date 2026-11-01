import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { agent } from "@/lib/agent";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sites/dojo-agent/header";
import { FaqList, type FaqItem } from "@/components/sites/dojo-agent/faq-list";
import { CardIcon, CocktailIcon, ReceiptIcon, SwapIcon } from "@/components/sites/dojo-agent/icons";
import { BottomBar, ContactSection, SiteFooter, heading, primaryBtn } from "@/components/sites/dojo-agent/site";
import goHero from "../../../../public/sites/dojo/go-hero.jpg";
import goBarista from "../../../../public/sites/dojo/go-barista.jpg";
import goMesa from "../../../../public/sites/dojo/go-mesa.jpg";
import goProducto from "../../../../public/sites/dojo/go-producto.jpg";

export const metadata: Metadata = {
  title: "Dojo Go con David · El datáfono más veloz y versátil",
  description:
    "Dojo Go: pagos en segundos, 4G integrado, división de cuentas y propinas. Pide tu Dojo Go a David, tu asesor comercial de Dojo.",
};

const features = [
  { Icon: CardIcon, title: "Alertas de rechazo", text: "Cuando un pago no se efectúa, Dojo Go te avisa." },
  {
    Icon: ReceiptIcon,
    title: "Divide la cuenta a partes iguales o personalizadas",
    text: "Dojo Go divide la cuenta para ahorrarte los cálculos.",
  },
  {
    Icon: CocktailIcon,
    title: "Pantalla opcional de propina",
    text: "Anima a dejar propinas con una pantalla opcional previa al pago.",
  },
  { Icon: SwapIcon, title: "Devoluciones fáciles", text: "Hacer una devolución es tan fácil como recibir un pago." },
];

const stories: { img: StaticImageData; alt: string; title: string; text: string; note?: number }[] = [
  {
    img: goBarista,
    alt: "Camarero sonriente acercando un Dojo Go al cliente",
    title: "Cobra en cuestión de segundos",
    text: "Ofrece un servicio inigualable a tus clientes gracias a las transacciones ultrarrápidas.",
    note: 1,
  },
  {
    img: goMesa,
    alt: "División de la cuenta entre dos clientes con Dojo Go",
    title: "Cobra desde cualquier lugar",
    text: "Cobra a pie de calle con la conectividad inalámbrica de Dojo Go. Viene con 4G integrado que se activa si tu wifi se cae, por lo que nunca perderás un cobro.",
  },
  {
    img: goProducto,
    alt: "Datáfono Dojo Go dividiendo un pago en tres",
    title: "Intuitivo y fácil de usar",
    text: "Dojo Go es tan fácil de usar que la experiencia es inmejorable para ti y para tus clientes. Incluye el flujo de pagos intuitivo de Dojo, Dojo Pay.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "¿Cuándo recibo mi dinero?",
    a: [
      "Dojo te transfiere los ingresos del día anterior a partir de las 10 de la mañana. El tiempo que tarden en llegar a tu cuenta dependerá de cómo procese tu banco las transferencias.",
      "Si procesa las transferencias los 7 días de la semana, podrás recibir el dinero el mismo día, incluidos fines de semana y festivos.",
      "Si las procesa 5 días a la semana (de lunes a viernes), deberías recibir el dinero el siguiente día laborable, excluyendo fines de semana y festivos.",
    ],
  },
];

export default function DojoGoPage() {
  return (
    <div className="flex-1 bg-[#1a6254] pt-3 text-[#1a1210]">
      <Header name={agent.name} />

      {/* Hero */}
      <section className="px-4 pt-14 pb-16 text-center text-[#f0f1eb] sm:px-6 sm:pt-20 sm:pb-24">
        <h1 className="mx-auto max-w-5xl font-[family-name:var(--font-archivo)] text-[2.6rem] leading-[0.95] font-extrabold tracking-[-0.02em] uppercase [font-stretch:112%] sm:text-7xl lg:text-8xl">
          Nuestro datáfono más veloz y versátil
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl">Pagos sencillos y fluidos.</p>
        <a
          href="#contacto"
          className="mt-10 inline-flex rounded-full bg-[#3de8c4] px-16 py-6 text-xl font-semibold text-[#1a1210] transition-colors hover:bg-[#6ef0d4]"
        >
          Empezar
        </a>
        <Image
          src={goHero}
          alt="Cliente pagando con tarjeta en un datáfono Dojo Go"
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="mx-auto mt-14 aspect-[4/5] w-full max-w-6xl rounded-[2.5rem] object-cover sm:aspect-[16/9]"
        />
      </section>

      <div className="bg-[#f0f1eb]">
        {/* Ventajas */}
        <section className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {features.map(({ Icon, title, text }) => (
              <div key={title}>
                <div className="flex h-16 items-end">
                  <Icon />
                </div>
                <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                <p className="mt-3 text-xl leading-relaxed text-[#1a1210]/70">{text}</p>
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
                  className="aspect-[8/7] w-full rounded-[2.5rem] object-cover"
                />
              </div>
              <div>
                <h2 className={`${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>{s.title}</h2>
                <p className="mt-6 text-xl leading-relaxed text-[#1a1210]/70">
                  {s.text}
                  {s.note && <sup className="ml-0.5 text-[0.6em]">[{s.note}]</sup>}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="mt-14 bg-white px-4 py-24 text-center sm:px-6 sm:py-32">
          <h2 className={`${heading} mx-auto max-w-3xl text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>
            ¿Preparado para empezar? Con Dojo todo es fácil.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#1a1210]/70">
            Únete a Dojo sin complicaciones: {agent.name} te acompaña en un proceso rápido diseñado para ayudarte en todo
            momento. No tienes que cambiar de banco.
          </p>
          <a href="#contacto" className={cn(primaryBtn, "mt-12 px-14")}>
            Empezar
          </a>
        </section>

        <FaqList title="Preguntas frecuentes" items={faqs} />

        {/* Notas */}
        <section className="bg-white px-4 py-16 text-center sm:px-6">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1a1210]/70">
            <sup className="mr-1">[1]</sup>
            Según un estudio realizado por Paymentsense UK, operando como Dojo, del primer trimestre de 2023, Dojo Go
            procesa los pagos en tan solo 2 segundos de promedio, más rápido que sus principales competidores en Reino
            Unido.
          </p>
        </section>

        <ContactSection />
        <SiteFooter />
      </div>
      <BottomBar />
    </div>
  );
}
