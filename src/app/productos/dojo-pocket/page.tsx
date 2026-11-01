import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BatteryFull, CircuitBoard, Layers, MonitorPlay, QrCode, Zap } from "lucide-react";
import { agent } from "@/lib/agent";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sites/dojo-agent/header";
import { FaqList, type FaqItem } from "@/components/sites/dojo-agent/faq-list";
import {
  BottomBar,
  ContactSection,
  SiteFooter,
  heading,
  outlineBtn,
  primaryBtn,
} from "@/components/sites/dojo-agent/site";
import pocketMesa from "../../../../public/sites/dojo/pocket-mesa.jpg";
import pocketCamarero from "../../../../public/sites/dojo/pocket-camarero.jpg";
import pocketMano from "../../../../public/sites/dojo/pocket-mano.jpg";
import pocketProducto from "../../../../public/sites/dojo/pocket-producto.jpg";
import goTeclado from "../../../../public/sites/dojo/go-teclado.jpg";

export const metadata: Metadata = {
  title: "Dojo Pocket con David · Cobra en cualquier momento, en cualquier lugar",
  description:
    "Dojo Pocket: el datáfono portátil para anotar pedidos y cobrar en mesa. Pide tu Dojo Pocket a David, tu asesor comercial de Dojo.",
};

const stories: { img: StaticImageData; alt: string; title: string; text: string; wide?: boolean; cta?: boolean }[] = [
  {
    img: pocketMesa,
    alt: "Cliente pagando con tarjeta en un Dojo Pocket en la mesa",
    title: "Un servicio más ágil y rentable",
    text: "Anota pedidos y cobra dentro y fuera de tu establecimiento con Dojo Pocket. Un servicio más rápido y eficiente significa una mayor rotación de mesas. Además, los clientes no deberán esperar tanto y tu personal podrá centrarse en atenderles mejor. ¡Todos salen ganando!",
    wide: true,
  },
  {
    img: pocketCamarero,
    alt: "Camarero llevando una bandeja con bebidas y un Dojo Pocket",
    title: "Diseñado para ser muy fácil de usar",
    text: "La configuración de Dojo Pocket solo requiere unos minutos. Podrás empezar a anotar pedidos y cobrar en un abrir y cerrar de ojos. Además, cuenta con una interfaz súper intuitiva, lo que te permite enseñar al personal rápidamente para que comience a usarlo enseguida.",
  },
  {
    img: pocketMano,
    alt: "Dojo Pocket con funda verde mostrando un cobro de 25,50 €",
    title: "Menos colas en la caja",
    text: "Dojo Pocket se integra con tu TPV para que el personal pueda anotar pedidos y cobrar desde el mismo dispositivo. De este modo, se forman menos colas, ofreciendo un servicio más fluido y ágil.",
    cta: true,
  },
];

const highlights = [
  {
    title: "Menos recibos",
    text: "Reduce las esperas de los clientes con una solución sin papel que agiliza el trabajo del personal. Muestra la cuenta en la pantalla y ofrece la posibilidad de acceder a recibos digitales por correo electrónico o escaneando un código QR.",
  },
  {
    title: "A prueba de fraudes",
    text: "Dojo Pocket cuenta con un cifrado de datos que garantiza la seguridad de tus clientes. Además, dispone de detección de fraudes instantánea para proteger tu negocio.",
  },
  {
    title: "Pagos flexibles para dar un mejor servicio",
    text: "Permite que los clientes paguen como prefieran. Dojo Pocket acepta las principales tarjetas de pago contactless, además de monederos móviles como Apple Pay y Google Pay. De esta forma, tu personal puede cobrar al gusto del cliente.",
  },
];

const specs: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: BatteryFull, title: "Doble conectividad", text: "Se conecta automáticamente al wifi o a cualquier red 4G disponible." },
  { Icon: Layers, title: "Ligero y portátil", text: "Dimensiones: 170 × 70 × 14,7 mm; peso: 143 gramos" },
  {
    Icon: CircuitBoard,
    title: "Fácil de usar",
    text: "Tamaño y resolución de pantalla: 4,95\" (480 × 960), 217 PPP (píxeles por pulgada)",
  },
  {
    Icon: Zap,
    title: "Batería de larga duración",
    text: "Batería de iones de litio con una duración de 8 horas, 3500 mAh/3,8 V",
  },
  { Icon: MonitorPlay, title: "Pagos integrados", text: "Conecta el datáfono a tu TPV con las integraciones en la nube." },
  {
    Icon: QrCode,
    title: "Pagos seguros",
    text: "El cifrado de punto a punto protege los datos de las tarjetas de los clientes y tus ingresos.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "¿Cómo puedo integrar Dojo Pocket con mi sistema TPV?",
    a: `Actualmente, Dojo Pocket solo se puede integrar con algunos proveedores de TPV seleccionados. Para saber si tu TPV es compatible, consulta con tu proveedor del sistema o pregunta a ${agent.name}.`,
  },
  {
    q: "¿Qué hago si ya soy cliente de Dojo y quiero probar Dojo Pocket?",
    a: `Ponte en contacto con ${agent.name}, tu gestor de cuenta, para obtener más información.`,
  },
  {
    q: "¿Cómo se configura el datáfono portátil Dojo Pocket?",
    a: `Si has recibido tu Dojo Pocket y necesitas ayuda para configurarlo, ${agent.name} te acompaña paso a paso.`,
  },
  {
    q: "¿Necesito wifi para usar el datáfono portátil?",
    a: "Sí, se necesita wifi para configurar el datáfono. Una vez configurado, puedes utilizar tanto 4G como wifi para anotar pedidos y cobrar.",
  },
];

const h2 = `${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`;

export default function DojoPocketPage() {
  return (
    <div className="flex-1 pt-3 text-[#1a1210]">
      <Header name={agent.name} />

      {/* Hero */}
      <section className="px-4 pt-14 text-center sm:px-6 sm:pt-20">
        <h1
          className={`${heading} mx-auto max-w-5xl text-[2.6rem] leading-[0.95] font-extrabold uppercase [font-stretch:112%] sm:text-7xl lg:text-8xl`}
        >
          Dojo Pocket. Cobra en cualquier momento, en cualquier lugar.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">
          Agiliza el servicio y aumenta la eficiencia con este datáfono portátil, pequeño pero potente. Equipa a tu
          personal para que pueda anotar pedidos y cobrar dentro y fuera del establecimiento con un solo dispositivo,
          para atender más mesas al mismo tiempo.
        </p>
        <a href="#contacto" className={cn(primaryBtn, "mt-10")}>
          Empieza ya
        </a>
      </section>

      {/* Historias */}
      {stories.map((s, i) => (
        <section key={s.title} className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className={cn(!s.wide && "px-6 sm:px-0", i % 2 && "lg:order-2")}>
              <Image
                src={s.img}
                alt={s.alt}
                sizes="(min-width: 1024px) 560px, 100vw"
                className={cn("w-full object-cover", s.wide ? "aspect-[7/3] rounded-3xl lg:aspect-[4/3]" : "aspect-[24/25] rounded-[2.5rem]")}
              />
            </div>
            <div>
              <h2 className={h2}>{s.title}</h2>
              <p className="mt-8 text-xl leading-relaxed">{s.text}</p>
              {s.cta && (
                <a href="#contacto" className={cn(primaryBtn, "mt-10")}>
                  Empieza ya
                </a>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Dispositivo */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Image
            src={pocketProducto}
            alt="Dojo Pocket de frente y de espaldas"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full rounded-[2.5rem]"
          />
          <div>
            <h2 className={h2}>Un eficiente dispositivo de bolsillo</h2>
            <div className="mt-8 space-y-8">
              {highlights.map((h) => (
                <div key={h.title}>
                  <h3 className="text-2xl font-medium">{h.title}</h3>
                  <p className="mt-3 text-xl leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especificaciones */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className={h2}>Especificaciones técnicas</h2>
          <p className="mt-8 text-xl">Agiliza tus cobros con el datáfono Dojo Pocket.</p>
          <div className="mt-16 grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {specs.map(({ Icon, title, text }) => (
              <div key={title}>
                <Icon className="size-12" strokeWidth={1.75} />
                <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                <p className="mt-4 text-xl leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Otro producto */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Image
            src={goTeclado}
            alt="Datáfono Dojo Go con el teclado numérico en pantalla"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[7/5] w-full rounded-[2.5rem] object-cover"
          />
          <div>
            <h2 className={h2}>Dojo Go</h2>
            <p className="mt-6 text-xl leading-relaxed text-[#1a1210]/70">
              Acepta pagos en segundos con el datáfono más rápido de Dojo. Cobra dentro y fuera de tu establecimiento
              cambiando automáticamente a 4G si no hay wifi.
            </p>
            <Link href="/productos/dojo-go/" className={cn(outlineBtn, "mt-10")}>
              Más información
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 text-center sm:px-6 sm:py-32">
        <h2 className={`${h2} mx-auto max-w-3xl`}>Te ayudamos a realizar el cambio</h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed">
          Date de alta en Dojo con {agent.name} en unos pocos pasos y disfruta de una configuración sencilla y un proceso
          que permite la elaboración de informes de cumplimiento de la normativa PCI.
        </p>
        <a href="#contacto" className={cn(primaryBtn, "mt-12")}>
          Empieza ya
        </a>
      </section>

      <FaqList items={faqs} />
      <ContactSection />
      <SiteFooter />
      <BottomBar />
    </div>
  );
}
