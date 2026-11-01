import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { agent, whatsappUrl } from "@/lib/agent";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sites/dojo-agent/header";
import { FaqList, type FaqItem } from "@/components/sites/dojo-agent/faq-list";
import { CardIcon, CirclesIcon, CocktailIcon, WalletIcon, WifiIcon } from "@/components/sites/dojo-agent/icons";
import { BottomBar, ContactSection, SiteFooter, heading, primaryBtn } from "@/components/sites/dojo-agent/site";
import gama from "../../../public/sites/dojo/datafonos-gama.jpg";
import movilidad from "../../../public/sites/dojo/datafonos-movilidad.jpg";
import pocket from "../../../public/sites/dojo/datafonos-pocket.jpg";
import sobremesa from "../../../public/sites/dojo/datafonos-sobremesa.jpg";
import a920 from "../../../public/sites/dojo/datafonos-a920.jpg";
import atencion from "../../../public/sites/dojo/datafonos-atencion.jpg";
import sincroniza from "../../../public/sites/dojo/datafonos-sincroniza.jpg";
import portatil from "../../../public/sites/dojo/datafonos-portatil.jpg";
import registro from "../../../public/sites/dojo/datafonos-registro.jpg";

export const metadata: Metadata = {
  title: "Datáfonos Dojo con David · Terminales de pago para tu negocio",
  description:
    "Descubre la gama de datáfonos Dojo: portátiles, móviles y de sobremesa. Pide tu oferta a David, tu asesor comercial de Dojo.",
};

const h2 = `${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`;
const body = "text-xl leading-relaxed";
const inlineLink = "text-[#1f5c4f] underline underline-offset-4";
const mintBtn =
  "inline-flex rounded-full bg-[#3de8c4] px-14 py-6 text-xl font-semibold text-[#1a1210] transition-colors hover:bg-[#6ef0d4]";

const GREY = "#8c8984";
const INK = "#1a1210";

const types: { img: StaticImageData; alt: string; title: string; paras: React.ReactNode[] }[] = [
  {
    img: movilidad,
    alt: "Camarera cobrando en mesa con un datáfono Dojo",
    title: "Terminales de pago con movilidad total",
    paras: [
      "Lleva tu negocio allá donde esté la venta con un terminal de pagos o datáfono con movilidad total. Gracias a su conectividad 4G mediante tarjeta SIM integrada, este lector de tarjetas es la solución perfecta para negocios en movimiento, terrazas amplias, servicios a domicilio o eventos exteriores que requieren procesar pagos de forma ágil y segura sin depender de una red Wi-Fi.",
      <>
        El datáfono móvil te ofrece la libertad absoluta de cobrar en cualquier lugar y momento. Proporciona una
        experiencia de cliente fluida y sin interrupciones técnicas. Gracias a su tecnología de datos de alta velocidad,
        el{" "}
        <Link href="/productos/dojo-go/" className={inlineLink}>
          DOJO Go
        </Link>{" "}
        es el aliado estratégico para servicios de catering, transporte, quioscos o comercios dinámicos que necesitan
        máxima cobertura y fiabilidad en cada transacción, dentro o fuera del establecimiento.
      </>,
    ],
  },
  {
    img: pocket,
    alt: "Mano sujetando un datáfono Dojo Pocket",
    title: "Terminales de pago móviles",
    paras: [
      <>
        No dejes que una mala conexión te haga perder una venta.{" "}
        <Link href="/productos/dojo-pocket/" className={inlineLink}>
          DOJO Pocket
        </Link>
        , el datáfono inalámbrico de Dojo, cambia sin interrupciones de Wi-Fi y 4G para aceptar pagos en cualquier
        lugar, incluso si tu red falla o no dispones de cobertura Wi-Fi.
      </>,
      "Los datáfonos móviles son perfectos para los negocios de hostelería y servicios personales que necesitan aceptar pagos desde distintos lugares. Un datáfono móvil puede ser el dispositivo ideal para restaurantes, bares, peluquerías y estudios de tatuajes, o incluso para pequeños negocios, como los vendedores de mercadillos, que cobran mientras se desplazan.",
      "Aumenta la eficiencia y los ingresos de tu negocio con la tecnología integrada de pago en mesa. Además, gracias a la integración con los sistemas de TPV, podrás agilizar el servicio, reducir errores y aumentar la rotación de tus mesas cobrando al instante y sin desplazamientos innecesarios.",
    ],
  },
  {
    img: sobremesa,
    alt: "Dependienta en el mostrador junto a un datáfono Dojo",
    title: "Terminales de sobremesa",
    paras: [
      <>
        Diseñado para estar siempre listo en el mostrador, garantiza cobros instantáneos sin depender del Wi-Fi. Este
        tipo de terminales permite aceptar pagos con tarjeta de forma rápida usando chip y PIN, <em>contactless</em>,
        Google Pay, Apple Pay y Samsung Pay. Rapidez y fiabilidad total, justo donde ocurre la venta.
      </>,
    ],
  },
];

const factors = [
  {
    Icon: WifiIcon,
    title: "Tipo de conexión",
    text: "Si cobras pagos sobre la marcha o si en tu local hay zonas sin cobertura Wi-Fi, ten en cuenta el tipo de conectividad que necesitarás. Comprueba si tu lector de tarjetas está conectado por cable o si se conecta por Wi-Fi o 4G para asegurarte de que tus cobros no se interrumpan.",
  },
  {
    Icon: CocktailIcon,
    title: "Tipo de negocio",
    text: "Piensa en los lugares de tu establecimiento, y también fuera de él, donde necesitarás aceptar pagos. Si tienes mucha rotación de mesas, un datáfono portátil puede ser lo ideal para ti. O, si tienes un negocio de venta al por menor, un datáfono de mostrador podría ser la mejor opción.",
  },
  {
    Icon: CardIcon,
    title: "Tipos de pago con tarjeta",
    text: "Ofrecer flexibilidad es la clave para no perder ventas. Asegúrate de que tu dispositivo acepte todas las opciones que tus clientes demandan: desde el clásico chip y PIN hasta pagos contactless con tarjeta, móvil o reloj (Apple Pay, Google Pay, Samsung Pay).",
  },
  {
    Icon: WalletIcon,
    title: "Comisiones de transacción",
    text: "Asegúrate de elegir una solución de pagos sin comisiones ocultas. Y cuando selecciones un datáfono, comprueba bien las comisiones de alquiler del terminal y las comisiones de servicio antes de comprometerte.",
  },
  {
    Icon: CirclesIcon,
    title: "Funciones adicionales",
    text: "Si tienes un negocio de hostelería, comprueba si tu terminal de pago admite pagos integrados; esto podría ayudar a aumentar la eficiencia en el local. Revisa también otras formas de pago, como los pagos a distancia: estas soluciones de pago pueden aportar mayor flexibilidad a tu negocio.",
  },
];

const reasons: { img: StaticImageData; alt: string; title: string; text: string }[] = [
  {
    img: atencion,
    alt: "Hostelero sonriente hablando por teléfono frente a un portátil",
    title: "Servicio de atención al cliente",
    text: `${agent.name} te acompaña desde el primer día, y el equipo de soporte de Dojo te ayuda los 7 días de la semana, con atención exclusiva en castellano desde el primer minuto.`,
  },
  {
    img: sincroniza,
    alt: "Clienta pagando con un datáfono Dojo en la mesa",
    title: "Sincroniza tus pagos",
    text: "DOJO se integra con los principales sistemas de gestión de software del mercado. Para que puedas aumentar la eficiencia, atender a más clientes y reducir los errores de conciliación.",
  },
  {
    img: portatil,
    alt: "Portátil con el panel de gestión de Dojo",
    title: "Accede a información detallada y actualizada",
    text: "Consulta tus transacciones, simplifica el PCI y recibe notificaciones de transferencia, todo en la app DOJO for business.",
  },
];

const requirements = [
  {
    title: "Registro de empresa",
    text: "Para obtener un terminal de tarjetas para tu negocio, debes estar registrado como trabajador autónomo, empresa, sociedad u organización.",
  },
  {
    title: "Cuenta de comerciante",
    text: "Para aceptar pagos con tarjetas de crédito y débito con un lector de tarjetas, necesitas una cuenta de comerciante para tu pequeña empresa. Cuando te registres para cualquier terminal de pago DOJO, se te proporcionará gratis.",
  },
  {
    title: "Conexión Wi-Fi",
    text: "Solo necesitas una conexión Wi-Fi segura para configurar tu terminal de pago. Una vez que todo esté configurado, podrás usar Wi-Fi o 4G para aceptar pagos.",
  },
];

const steps = [
  `Pide tu presupuesto a ${agent.name} para comenzar a utilizar los datáfonos de Dojo. Solo tienes que enviar tus datos para empezar.`,
  `${agent.name} se pondrá en contacto contigo lo antes posible, en un plazo máximo de 1 día laborable, para comprobar tu información.`,
  "A continuación tendrás que presentar tu documentación de identidad y un comprobante bancario. También te podrían solicitar otro tipo de documentación adicional según tu tipo de negocio.",
  "Una vez aprobada la solicitud, recibirás tu datáfono.",
  "Configura tu terminal de tarjetas usando una conexión Wi-Fi segura. Una vez configurado, podrás usar Wi-Fi o 4G para aceptar pagos.",
  `Empieza a aceptar pagos con DOJO. Recuerda que puedes pedir ayuda a ${agent.name} en caso de que surja cualquier tipo de incidencia.`,
];

const support: { icon: React.ReactNode; title: string; text: React.ReactNode }[] = [
  {
    icon: (
      <svg viewBox="0 0 66 56" className="h-14" aria-hidden>
        <path d="M2 0h44a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H18L8 40V30H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z" fill={GREY} />
        <path d="M24 20h40a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H34L34 48 26 38h-2a2 2 0 0 1-2-2V22a2 2 0 0 1 2-2Z" fill={INK} />
      </svg>
    ),
    title: "Soporte técnico a tu disposición",
    text: "El equipo de soporte de Dojo está aquí para ayudarte los 7 días de la semana.",
  },
  {
    icon: (
      <svg viewBox="0 0 66 66" className="h-14" aria-hidden>
        <path
          d="M28 0h10l2 9 7 3 8-5 7 7-5 8 3 7 9 2v10l-9 2-3 7 5 8-7 7-8-5-7 3-2 9H28l-2-9-7-3-8 5-7-7 5-8-3-7-9-2V28l9-2 3-7-5-8 7-7 8 5 7-3Z"
          fill={GREY}
        />
        <circle cx="33" cy="33" r="16" fill={INK} />
      </svg>
    ),
    title: "Asistencia remota",
    text: "¿No se puede solucionar por teléfono? Se conectan de forma remota y le echan un vistazo.",
  },
  {
    icon: (
      <svg viewBox="0 0 56 66" className="h-14" aria-hidden>
        <circle cx="28" cy="13" r="13" fill={INK} />
        <path d="M4 34h48l-3 32H7Z" fill={GREY} />
      </svg>
    ),
    title: "Asistencia con la cuenta",
    text: (
      <>
        Contacta con {agent.name} (
        <a href={`tel:+${agent.phone}`} className={inlineLink}>
          {agent.phoneDisplay}
        </a>
        ) en horario de {agent.hours.toLowerCase()}.
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 34 56" className="h-14" aria-hidden>
        <rect width="34" height="56" rx="3" fill={GREY} />
        <rect x="9" y="4" width="16" height="3" rx="1.5" fill={INK} />
      </svg>
    ),
    title: "Soporte en línea",
    text: (
      <>
        ¿Tienes una duda rápida?{" "}
        <a
          href={whatsappUrl(`Hola ${agent.name}, tengo una duda sobre mi datáfono Dojo.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={inlineLink}
        >
          Escribe a {agent.name} por WhatsApp
        </a>{" "}
        y te responderá lo antes posible.
      </>
    ),
  },
];

const faqs: FaqItem[] = [
  {
    q: "¿Cuándo recibiré mis ingresos de tarjeta?",
    a: "Cuando te registres en DOJO, los pagos con tarjeta se transferirán a tu cuenta a las 10 de la mañana del siguiente día laborable.",
  },
  {
    q: "¿Son seguras las terminales de tarjeta DOJO?",
    a: "Todas las terminales de tarjetas de DOJO utilizan cifrado punto a punto (P2PE), la mejor seguridad de pago del mundo. Esto significa que los datos de las tarjetas de tus clientes están protegidos, y también tus ingresos ganados con tanto esfuerzo.",
  },
  {
    q: "¿Qué tipos de tarjetas puedo aceptar?",
    a: "Puedes aceptar todas las principales tarjetas de crédito y débito (Mastercard y Visa), así como American Express y la red Discover Global Network, si así lo deseas.",
  },
  {
    q: "¿Qué es un datáfono?",
    a: "Las terminales de pago con tarjeta son dispositivos portátiles que se utilizan para aceptar pagos con tarjetas tradicionales de chip y PIN, tarjetas sin contacto o mediante billeteras digitales como Samsung Pay, Apple Pay o Google Pay. Las terminales de pago con tarjeta son una opción cada vez más popular para los pequeños empresarios que desean invertir en opciones de pago flexibles, ya que ofrecen a los clientes más formas de pagar. Además, con el descenso en el uso del efectivo, una terminal de pago con tarjeta puede ayudarte a mantener un flujo de caja constante.",
  },
  {
    q: "¿Qué es Apple Pay?",
    a: "Apple Pay es una tecnología de pago sin contacto para todos los dispositivos Apple. También se conoce como una billetera digital. Los clientes guardan los datos de su tarjeta en su dispositivo, que luego pueden acercar a tu terminal de pago para pagar bienes y servicios. Usa tecnología biométrica para prevenir el fraude, de modo que los usuarios puedan pagar importes superiores al límite de las tarjetas sin contacto.",
  },
  {
    q: "¿Qué son Google Pay y Google Wallet?",
    a: "Google Wallet actúa como un centro seguro para tus tarjetas de pago, billetes y pases digitales. Google Pay impulsa la propia transacción, permitiendo pagos rápidos y seguros en línea, en aplicaciones y mediante métodos sin contacto.",
  },
  {
    q: "¿Qué es el cumplimiento PCI?",
    a: `El cumplimiento PCI es la forma abreviada de PCI DSS, un acrónimo del Consejo de Normas de Seguridad de la Industria de Tarjetas de Pago (Payment Card Industry Security Standards Council). Este organismo regula un conjunto de normas de seguridad diseñadas para garantizar que las empresas que procesan, almacenan o transmiten información de tarjetas de crédito y débito lo hagan de forma segura. Si quieres saber cómo afecta a tu negocio, pregunta a ${agent.name}.`,
  },
  {
    q: "¿Qué terminal de pago es la mejor para restaurantes?",
    a: "Los restaurantes necesitan datáfonos flexibles para cobrar a los clientes en la mesa, la azotea o la barra. Dojo Go es un terminal de pago totalmente portátil y móvil con conectividad dual. Utiliza tanto Wi-Fi como 3G/4G para que puedas cobrar de forma segura y eficiente.",
  },
];

function Stars() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex gap-1" aria-label="4 de 5 estrellas">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={cn("flex size-8 items-center justify-center", i < 4 ? "bg-[#00b67a]" : "bg-[#dcdce6]")}>
            <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden>
              <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21.2l1.6-7L2 9.5l7.1-.6Z" />
            </svg>
          </span>
        ))}
      </div>
      <span className="flex items-center gap-1 text-lg font-semibold">
        <svg viewBox="0 0 24 24" className="size-6 fill-[#00b67a]" aria-hidden>
          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21.2l1.6-7L2 9.5l7.1-.6Z" />
        </svg>
        Trustpilot
      </span>
    </div>
  );
}

function PhotoRow({ img, alt, children, reverse }: { img: StaticImageData; alt: string; children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Image
        src={img}
        alt={alt}
        sizes="(min-width: 1024px) 560px, 100vw"
        className={cn("w-full rounded-[2.5rem]", reverse && "lg:order-2")}
      />
      <div>{children}</div>
    </div>
  );
}

export default function DatafonosPage() {
  return (
    <div className="flex-1 pt-3 text-[#1a1210]">
      <Header name={agent.name} />

      {/* Hero */}
      <section className="px-4 pt-14 pb-20 text-center sm:px-6 sm:pt-20">
        <Stars />
        <h1 className={`${h2} mx-auto mt-10 max-w-4xl sm:text-7xl`}>
          Datáfonos más rápidos, diseñados para hacer crecer tu negocio
        </h1>
        <p className={`${body} mx-auto mt-8 max-w-2xl`}>
          Empieza a cobrar con DOJO. Descubre la gama de datáfonos adaptados a cada tipo de negocio.
        </p>
        <ul className="mx-auto mt-10 max-w-xl space-y-6 text-xl">
          {[
            "Valorado con 4,6 por sus clientes en Trustpilot",
            "Con un 99,99% de tiempo de actividad garantizado",
            "Con una batería de 10 horas de autonomía",
          ].map((t) => (
            <li key={t} className="flex items-center gap-6">
              <TrendingUp className="size-9 shrink-0" strokeWidth={1.75} />
              <span className="flex-1">{t}</span>
            </li>
          ))}
        </ul>
        <a href="#contacto" className={cn(primaryBtn, "mt-12 px-14")}>
          Hazte cliente
        </a>
        <Image
          src={gama}
          alt="Gama de datáfonos Dojo sobre una mesa"
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="mx-auto mt-14 aspect-[812/688] w-full max-w-6xl rounded-[2.5rem] object-cover sm:aspect-[16/9]"
        />
      </section>

      {/* Tipos */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-24">
          <h2 className={`${h2} mx-auto max-w-3xl text-center`}>
            ¿Cuáles son los diferentes tipos de terminales de pago para negocios?
          </h2>
          {types.map((t, i) => (
            <PhotoRow key={t.title} img={t.img} alt={t.alt} reverse={i % 2 === 1}>
              <h3 className={h2}>{t.title}</h3>
              <div className={`${body} mt-8 space-y-6`}>
                {t.paras.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </PhotoRow>
          ))}
        </div>
      </section>

      {/* Contactless */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <svg viewBox="0 0 200 120" className="mx-auto w-full max-w-md" aria-hidden>
            <ellipse cx="85" cy="60" rx="82" ry="57" fill="none" stroke={INK} strokeWidth="2.5" />
            <g fill="none" stroke={INK} strokeLinecap="round">
              <path d="M52 48a16 16 0 0 1 0 24" strokeWidth="7" />
              <path d="M66 40a28 28 0 0 1 0 40" strokeWidth="7" />
              <path d="M80 32a40 40 0 0 1 0 56" strokeWidth="8" />
              <path d="M95 24a52 52 0 0 1 0 72" strokeWidth="9" />
            </g>
            <g fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
              <rect x="112" y="40" width="26" height="34" rx="4" transform="rotate(20 125 57)" />
              <path d="M118 66l18 10 8-4 24 30M120 74l12 8 6 10 14 8" />
            </g>
          </svg>
          <div>
            <h2 className={h2}>
              ¿Por qué es clave ofrecer pagos <em>contactless</em>?
            </h2>
            <div className={`${body} mt-8 space-y-6`}>
              <p>
                Agiliza tus ventas y ofrece la mejor experiencia a tus clientes con la tecnología <em>contactless</em>. Al
                eliminar la necesidad de teclear el PIN en cada operación, las transacciones son mucho más rápidas, lo que
                se traduce en menos colas en la caja y clientes más satisfechos.
              </p>
              <p>
                Pero no solo ganas en velocidad. Con los pagos <em>contactless</em> puedes atender a más personas en menos
                tiempo, aumentando tus ingresos diarios. Dile adiós al efectivo y a los errores de cambio manual y disfruta
                de un cierre de caja sin complicaciones al final del día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA verde */}
      <section className="bg-[#003f34] px-4 py-24 text-center text-white sm:px-6 sm:py-28">
        <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-archivo)] text-[2.6rem] leading-[1.1] font-medium tracking-[-0.02em] sm:text-6xl">
          Empieza a usar DOJO hoy mismo
        </h2>
        <a href="#contacto" className={cn(mintBtn, "mt-12")}>
          Hazte cliente
        </a>
      </section>

      {/* Cómo elegir */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${h2} mx-auto max-w-3xl text-center`}>Cómo elegir el TPV adecuado para tu negocio</h2>
          <p className={`${body} mx-auto mt-8 max-w-2xl text-center`}>
            Tu negocio es único, por lo que es fundamental elegir el dispositivo que mejor se adapte a tus necesidades.
            Estos son los cinco factores clave que debes tener en cuenta al elegir tu datáfono:
          </p>
          <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {factors.map(({ Icon, title, text }) => (
              <div key={title}>
                <div className="flex h-16 items-end">
                  <Icon />
                </div>
                <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                <p className={`${body} mt-4`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dojo Go */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Image src={a920} alt="Datáfono Dojo Go" sizes="(min-width: 1024px) 560px, 100vw" className="w-full rounded-[2.5rem]" />
          <div>
            <h2 className={h2}>Acepta pagos rápidos y seguros desde cualquier lugar</h2>
            <p className={`${body} mt-8`}>
              Rápido, fiable, seguro y fácil de usar:{" "}
              <Link href="/productos/dojo-go/" className={inlineLink}>
                DOJO Go
              </Link>{" "}
              es el terminal de pago móvil perfecto para las empresas que necesitan aceptar pagos con tarjeta de forma
              rápida, en cualquier lugar.
            </p>
            <ul className={`${body} mt-8 list-disc space-y-5 pl-8 marker:text-[#003e33]`}>
              <li>Acepta pagos donde estés con conectividad Wi-Fi y 4G</li>
              <li>Conectado con los principales softwares de gestión del mercado</li>
              <li>Atiende a más clientes con una batería de 10 horas de duración</li>
              <li>Cobros totalmente seguros gracias al cifrado de punto a punto</li>
            </ul>
            <a href="#contacto" className={cn(primaryBtn, "mt-10 px-14")}>
              Solicita información
            </a>
          </div>
        </div>
      </section>

      {/* Por qué Dojo */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-24">
          <h2 className={h2}>¿Por qué elegir DOJO?</h2>
          {reasons.map((r, i) => (
            <PhotoRow key={r.title} img={r.img} alt={r.alt} reverse={i % 2 === 1}>
              <h3 className={h2}>{r.title}</h3>
              <p className={`${body} mt-8`}>{r.text}</p>
            </PhotoRow>
          ))}
        </div>
      </section>

      {/* Requisitos */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${h2} mx-auto max-w-3xl text-center`}>
            ¿Qué información se necesita para configurar tu terminal de pago?
          </h2>
          <p className={`${body} mx-auto mt-8 max-w-2xl text-center`}>
            Ahora es más fácil que nunca acceder a un datáfono. Descubre los requisitos habituales para empezar a aceptar
            pagos con los datáfonos de DOJO.
          </p>
          <div className="mt-20">
            <PhotoRow img={registro} alt="Camarera atendiendo a dos clientes en un restaurante">
              <div className="space-y-10">
                {requirements.map((r) => (
                  <div key={r.title}>
                    <h3 className={`${heading} text-4xl font-medium`}>{r.title}</h3>
                    <p className={`${body} mt-4`}>{r.text}</p>
                  </div>
                ))}
              </div>
            </PhotoRow>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${h2} max-w-3xl`}>Cómo funciona el proceso de registro en DOJO</h2>
          <p className={`${body} mt-8`}>Sigue estos pasos para comenzar a utilizar un terminal de DOJO:</p>
          <ol className="mt-16 grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {steps.map((s, i) => (
              <li key={i}>
                <p className={`${heading} text-6xl font-medium`}>{i + 1}.</p>
                <p className={`${body} mt-8`}>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tipos de empresa */}
      <section className="bg-[#003f34] px-4 py-24 text-center text-white sm:px-6 sm:py-28">
        <h2 className="mx-auto max-w-4xl font-[family-name:var(--font-archivo)] text-[2.6rem] leading-[1.1] font-medium tracking-[-0.02em] sm:text-6xl">
          Tipos y tamaños de empresas a las que se adaptan las terminales de tarjeta de DOJO
        </h2>
        <p className={`${body} mx-auto mt-8 max-w-2xl`}>
          DOJO atiende todo tipo de negocios pequeños, medianos y grandes empresas, incluidas aquellas de los sectores de
          servicios personales, hostelería y comercio minorista. Descubre cómo puedes aceptar pagos con tarjeta de forma
          más eficaz con los terminales de pago de DOJO.
        </p>
        <a href="#contacto" className={cn(mintBtn, "mt-12")}>
          Solicita información
        </a>
      </section>

      {/* Soporte */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${h2} max-w-3xl`}>Servicio de atención al cliente personalizado</h2>
          <p className={`${body} mt-8 max-w-3xl`}>
            {agent.name} está aquí para ayudar a que tu negocio funcione sin problemas. Escríbele si tienes cualquier
            tipo de incidencia y te ayudará encantado.
          </p>
          <div className="mt-16 grid gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {support.map((s) => (
              <div key={s.title}>
                <div className="flex h-16 items-end">{s.icon}</div>
                <h3 className="mt-10 text-xl">{s.title}</h3>
                <p className={`${body} mt-4`}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqList items={faqs} />
      <ContactSection />
      <SiteFooter />
      <BottomBar />
    </div>
  );
}
