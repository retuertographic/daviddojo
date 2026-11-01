import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BatteryFull,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Nfc,
  QrCode,
  ReceiptText,
  Share,
  ShieldCheck,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";
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
import duoFrontal from "../../../../public/sites/dojo/duo-frontal.jpg";
import duoAngulo from "../../../../public/sites/dojo/duo-angulo.jpg";
import duoLateral from "../../../../public/sites/dojo/duo-lateral.jpg";
import pocket from "../../../../public/sites/dojo/pocket.jpg";
import equipoRestaurante from "../../../../public/sites/dojo/equipo-restaurante.jpg";

export const metadata: Metadata = {
  title: "Dojo Duo con David · Cobros y TPV en un solo dispositivo",
  description:
    "Dojo Duo: datáfono con impresora, integración con TPV y preparado para VeriFactu. Pide presupuesto a David, tu asesor comercial de Dojo.",
};

const MINT = "#3de8c4";
const GREEN = "#1f5c4f";

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[4.5rem] items-center justify-center rounded-2xl border border-[#1a1210]/10 bg-white">
      {children}
    </span>
  );
}

const highlights = [
  {
    title: "Un solo dispositivo. Todo en sintonía.",
    text: "Gestiona tu negocio con un solo sistema de pagos. Cobra con tarjeta, imprime recibos y utiliza tus aplicaciones de TPV mediante una pasarela de pago moderna.",
    icon: (
      <svg viewBox="0 0 24 40" className="h-10" aria-hidden>
        <rect width="24" height="40" rx="2" fill={MINT} />
        <rect x="7" y="3" width="10" height="2" rx="1" fill={GREEN} />
      </svg>
    ),
  },
  {
    title: "Pagos más rápidos y fluidos",
    text: "Gracias a la impresora integrada de alta velocidad, podrás cobrar e imprimir el recibo en segundos, para evitar las esperas.",
    icon: (
      <svg viewBox="0 0 34 40" className="h-10" aria-hidden>
        <rect x="11" width="12" height="4" fill={MINT} />
        <circle cx="17" cy="23" r="16" fill={MINT} />
        <circle cx="17" cy="23" r="12" fill={GREEN} />
        <path d="M17 23V11A12 12 0 0 1 29 23Z" fill={MINT} />
      </svg>
    ),
  },
  {
    title: "Libertad para elegir",
    text: "Dojo Duo colabora con numerosos proveedores de sistemas TPV y de software, para que puedas elegir la opción que mejor se adapte a tu negocio, ahora y en el futuro.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10" aria-hidden>
        <path d="M8 8L32 32" stroke={MINT} strokeWidth="9" strokeLinecap="round" />
        <circle cx="6" cy="6" r="6" fill={GREEN} />
        <circle cx="34" cy="6" r="6" fill={GREEN} />
        <circle cx="6" cy="34" r="6" fill={GREEN} />
        <circle cx="34" cy="34" r="6" fill={GREEN} />
      </svg>
    ),
  },
  {
    title: "Fiabilidad total",
    text: "Gracias a la conectividad wifi y 4G integrada, además de una plataforma de pagos con un 99,99 % de disponibilidad, no perderás ninguna venta por falta de conexión.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10" aria-hidden>
        <circle cx="18" cy="22" r="17" fill={GREEN} />
        <circle cx="18" cy="22" r="10" fill={MINT} />
        <circle cx="18" cy="22" r="5" fill={GREEN} />
        <path d="M18 22L34 6" stroke={MINT} strokeWidth="3" />
        <path d="M30 2l1 7 7 1-5 5-7-1-1-7Z" fill={MINT} />
      </svg>
    ),
  },
];

const specs: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: ReceiptText,
    title: "Impresora integrada de alta velocidad",
    text: "Imprime al instante recibos claros sin necesidad de voluminosos aparatos.",
  },
  {
    Icon: Smartphone,
    title: "Pantalla táctil HD de 5,5 pulgadas",
    text: "Gestiona tus ventas y apps de forma intuitiva con una pantalla ágil y a todo color.",
  },
  {
    Icon: MonitorSmartphone,
    title: "Integración con TPV",
    text: "Utiliza aplicaciones empresariales certificadas de otros proveedores directamente en tu datáfono.",
  },
  {
    Icon: BatteryFull,
    title: "Batería que dura todo el día",
    text: "Mantén el ritmo incluso en los días más ajetreados con la batería potente y fiable.",
  },
  {
    Icon: Wifi,
    title: "Wifi y 4G",
    text: "Se conecta automáticamente a una red wifi o a cualquier red 4G disponible, para que puedas registrar cada venta.",
  },
  {
    Icon: Nfc,
    title: "Contactless",
    text: "Acepta pagos contactless mediante NFC de los principales esquemas de tarjetas.",
  },
  {
    Icon: Zap,
    title: "99,99 % de disponibilidad",
    text: "Sistema multinube de alta disponibilidad para disfrutar de un servicio sin interrupciones.",
  },
  {
    Icon: ShieldCheck,
    title: "Listo para VeriFactu",
    text: "Cumplimiento VeriFactu garantizado. Tecnología de vanguardia diseñada para cumplir con la normativa y darte paz mental.",
  },
];

const paymentLinkSteps: { Icon: LucideIcon; active?: boolean }[] = [
  { Icon: QrCode },
  { Icon: Share, active: true },
  { Icon: MessageCircle },
  { Icon: Mail },
];

const faqs: FaqItem[] = [
  {
    q: "¿Qué es VeriFactu y por qué es obligatorio?",
    a: "VeriFactu es la nueva normativa española que obliga a registrar todas las transacciones comerciales de forma digital y segura a efectos fiscales. Su cumplimiento es obligatorio para todas las empresas. El objetivo es prevenir el fraude fiscal mediante la creación de un sistema estandarizado y verificable para cada venta. Dojo se asegura de que tu empresa cumpla con la normativa adaptando tu sistema de cobro a VeriFactu.",
  },
  {
    q: "¿Cómo funciona VeriFactu?",
    a: "Cuando haces una venta con un sistema compatible con VeriFactu, el software genera automáticamente un registro seguro y estandarizado de la transacción. Este registro incluye un identificador único (suele ser un código QR) que se envía automáticamente a la Agencia Tributaria. Con Dojo, este complejo proceso es sencillo y automático: se hace de forma segura en segundo plano, sin que te suponga ningún esfuerzo adicional.",
  },
  {
    q: "¿VeriFactu es un sistema de facturación electrónica?",
    a: "Aunque se trata de conceptos relacionados, no son exactamente lo mismo. VeriFactu es el sistema de registro y comunicación segura de las transacciones de venta (como las de un TPV o datáfono) a las autoridades fiscales. Consiste en un tipo de registro digital estandarizado para las operaciones de venta diarias. Por su parte, la facturación electrónica abarca un proceso más amplio, que incluye el intercambio de facturas completas y detalladas entre empresas en un formato digital estructurado.",
  },
  {
    q: "¿Qué es un datáfono con impresora?",
    a: "Un datáfono con impresora es un terminal para aceptar pagos que incorpora una impresora. En lugar de imprimir los recibos de los clientes en otro dispositivo, proporciona una solución integral que gestiona el pago e imprime el recibo desde un único dispositivo portátil. Dojo Duo es un buen ejemplo de datáfono con impresora, moderno e inteligente.",
  },
  {
    q: "¿Puedo utilizar este dispositivo con mi sistema TPV actual?",
    a: "Sí. Dojo Duo se ha diseñado pensando en la flexibilidad y se integra a la perfección con los principales sistemas de TPV. Lo que quieres es adaptar tu negocio sin tener que cambiarlo todo, así que trabajamos contigo para garantizar que el dispositivo se conecte con fluidez al sistema que ya utilizas.",
  },
  {
    q: "¿Necesito un datáfono con impresora para VeriFactu?",
    a: "No es necesario disponer de un datáfono con impresora para VeriFactu, ya que la normativa se refiere al software que registra la transacción de forma segura, no al hardware. Sin embargo, un dispositivo como Dojo Duo facilita todo el proceso. Garantiza que tu software cumpla con los requisitos de VeriFactu de la AEAT y, al mismo tiempo, te permite entregar a los clientes un recibo físico impreso al instante, todo desde un mismo dispositivo. Así cumples la normativa y ganas en eficiencia.",
  },
];

const textLink = "inline-flex items-center gap-3 text-lg font-semibold text-[#1f5c4f] hover:underline";

export default function DojoDuoPage() {
  return (
    <div className="flex-1 pt-3 text-[#1a1210]">
      <Header name={agent.name} />

      {/* Hero */}
      <section className="px-4 pt-14 text-center sm:px-6 sm:pt-20">
        <h1
          className={`${heading} mx-auto max-w-5xl text-[2.6rem] leading-[0.95] font-extrabold uppercase [font-stretch:112%] sm:text-7xl lg:text-8xl`}
        >
          Dojo Duo: cobros y TPV, unidos para simplificar tu mostrador
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">
          Optimiza tu configuración con un único datáfono potente que integra pagos, impresión y el software que
          prefieras.
        </p>
        <a href="#contacto" className={cn(primaryBtn, "mt-10")}>
          Pide presupuesto
        </a>
        <Image
          src={duoFrontal}
          alt="Datáfono Dojo Duo mostrando un pago aprobado"
          priority
          sizes="(min-width: 640px) 560px, 100vw"
          className="mx-auto mt-10 w-full max-w-xl"
        />
      </section>

      {/* Historias */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <h2 className={`${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>
              Pasa de un mostrador abarrotado a un solo dispositivo inteligente
            </h2>
            <p className="mt-6 text-xl leading-relaxed">
              ¿Cansado de que una impresora lenta lo retrase todo? ¿Harto de saltar de un dispositivo a otro para
              verificar una reserva? Despídete de las configuraciones complicadas e ineficientes. Te presentamos Dojo
              Duo, un potente datáfono con impresora e integraciones de software que mejora tu forma de trabajar. Acaba
              con el desorden, agiliza el servicio y dedica a tus clientes el tiempo que se merecen.
            </p>
          </div>
          <Image
            src={duoAngulo}
            alt="Dojo Duo con un cobro de 30,00 € en pantalla"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="mt-14 w-full lg:mt-0"
          />
        </div>
        <div className="mx-auto mt-14 max-w-6xl lg:mt-24 lg:w-1/2 lg:pl-10">
          <h2 className={`${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>
            Pasa de usar varias herramientas a trabajar de forma inteligente
          </h2>
          <p className="mt-6 text-xl leading-relaxed">
            Tu datáfono estándar permite cobrar, pero ¿puede gestionar pedidos, imprimir recibos o garantizar el
            cumplimiento de la normativa? Dojo Duo es un TPV inteligente que lo hace todo. Funciona con tu software
            gracias a la integración con el TPV. Y, como también está preparado para VeriFactu, cumplirás la normativa
            cuando llegue el momento: sin dispositivos adicionales, instalaciones ni complicaciones.
          </p>
        </div>
      </section>

      {/* Ventajas */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {highlights.map((h) => (
            <div key={h.title}>
              <IconTile>{h.icon}</IconTile>
              <h3 className="mt-10 text-2xl font-medium">{h.title}</h3>
              <p className="mt-4 text-xl leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tecnología */}
      <section className="bg-[#003f34] px-4 py-20 text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Image src={duoLateral} alt="Vista lateral del Dojo Duo" sizes="(min-width: 1152px) 1152px, 100vw" className="mx-auto w-full max-w-4xl" />
          <div className="mt-14 max-w-3xl">
            <h2 className="font-[family-name:var(--font-archivo)] text-[2.6rem] leading-[1.1] font-medium tracking-[-0.02em] sm:text-6xl">
              Tecnología avanzada muy fácil de usar
            </h2>
            <p className="mt-8 text-xl leading-relaxed">
              Cada aspecto de Dojo Duo está especialmente diseñado para simplificar la instalación del terminal y
              facilitarte el día a día. Descubre las características que hacen único a este datáfono «todo en uno».
            </p>
          </div>
          <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {specs.map(({ Icon, title, text }) => (
              <div key={title}>
                <span className="flex size-16 items-center justify-center rounded-xl bg-[#2aa384]">
                  <Icon className="size-8" strokeWidth={1.75} />
                </span>
                <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                <p className="mt-4 text-xl leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosistema */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${heading} max-w-2xl text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>
            Descubre nuestro ecosistema para simplificar tus pagos
          </h2>
          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-10">
            <article className="min-w-0">
              <Image
                src={pocket}
                alt="Datáfono Dojo Pocket con teclado numérico en pantalla"
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-[3/2] w-full rounded-[2.5rem] object-cover"
              />
              <h3 className="mt-10 text-3xl font-medium">Dojo Pocket</h3>
              <p className="mt-4 text-xl leading-relaxed">
                Acepta pagos en segundos con el datáfono más ligero de Dojo. Cobra dentro y fuera de tu establecimiento
                pasando automáticamente a 4G si no hay wifi.
              </p>
              <a href="#contacto" className={cn(textLink, "mt-10")}>
                Más información <ArrowRight className="size-6" />
              </a>
            </article>
            <article className="min-w-0">
              <div className="flex aspect-[3/2] w-full items-center justify-center gap-2 overflow-hidden rounded-[2.5rem] bg-[#e1e1dc] px-2 sm:gap-5 sm:px-4">
                {paymentLinkSteps.map(({ Icon, active }, i) => (
                  <div key={i} className="flex shrink-0 items-center gap-2 sm:gap-5">
                    {i > 0 && <span className="text-base tracking-wider text-[#1a1210]/40 sm:text-xl">···</span>}
                    <span
                      className={cn(
                        "flex items-center justify-center rounded-2xl",
                        active ? "size-16 bg-[#002a22] text-[#3de8c4] sm:size-24" : "size-12 bg-white text-[#1a1210]/60 sm:size-20",
                      )}
                    >
                      <Icon className={active ? "size-8 sm:size-10" : "size-6 sm:size-8"} />
                    </span>
                  </div>
                ))}
              </div>
              <h3 className="mt-10 text-3xl font-medium">Enlaces de pago</h3>
              <p className="mt-4 text-xl leading-relaxed">
                Acepta pagos por teléfono o por internet. Solo tienes que enviar a los clientes un enlace de pago: es un
                sistema rápido, sencillo y seguro de cobrar de forma no presencial.
              </p>
              <a href="#contacto" className={cn(textLink, "mt-10")}>
                Más información <ArrowRight className="size-6" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Soporte */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Image
            src={equipoRestaurante}
            alt="Camarero cobrando con un datáfono Dojo en un restaurante"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full rounded-[2.5rem]"
          />
          <div>
            <h2 className={`${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>
              Soporte local y experto en España.
            </h2>
            <p className="mt-6 text-xl leading-relaxed">
              ¿Tienes alguna duda con tu Dojo Duo? Habla con {agent.name}, tu experto en el dispositivo en tu zona. Está
              aquí para ayudarte, no para hacerte esperar: revisa tu caso rápidamente y te da la asistencia que necesitas
              para seguir trabajando, sin excusas. Disfruta de la tranquilidad de contar con un socio que ayuda a
              mantener tu negocio en funcionamiento.
            </p>
            <a href="#contacto" className={cn(outlineBtn, "mt-10 px-14")}>
              Contacta con {agent.name}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 text-center sm:px-6 sm:py-32">
        <h2 className={`${heading} mx-auto max-w-3xl text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`}>
          ¿Buscas una forma mejor de gestionar tu negocio?
        </h2>
        <a href="#contacto" className={cn(primaryBtn, "mt-12")}>
          Solicita presupuesto
        </a>
      </section>

      <FaqList items={faqs} />

      <ContactSection />
      <SiteFooter />
      <BottomBar />
    </div>
  );
}
