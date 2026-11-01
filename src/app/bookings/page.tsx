import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { agent } from "@/lib/agent";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sites/dojo-agent/header";
import { FaqList, type FaqItem } from "@/components/sites/dojo-agent/faq-list";
import { ChatIcon, PeopleIcon, PhoneIcon, PinIcon } from "@/components/sites/dojo-agent/icons";
import { BottomBar, ContactSection, SiteFooter, heading, primaryBtn } from "@/components/sites/dojo-agent/site";
import bookingsHero from "../../../public/sites/dojo/bookings-hero.jpg";
import bookingsCamarero from "../../../public/sites/dojo/bookings-camarero.jpg";
import bookingsTablet from "../../../public/sites/dojo/bookings-tablet.jpg";
import bookingsPostre from "../../../public/sites/dojo/bookings-postre.jpg";
import appPortatil from "../../../public/sites/dojo/app-portatil.jpg";

export const metadata: Metadata = {
  title: "Dojo Bookings con David · Reservas para restaurantes",
  description:
    "Dojo Bookings: reservas, lista de espera y visibilidad en Google para tu restaurante. Pide información a David, tu asesor comercial de Dojo.",
};

const h2 = `${heading} text-[2.6rem] leading-[1.1] font-medium sm:text-6xl`;
const body = "text-xl leading-relaxed";

const features = [
  { Icon: PhoneIcon, title: "Gestión fácil de las reservas", text: "Gestiona todas las reservas en una plataforma, en cualquier dispositivo." },
  { Icon: PeopleIcon, title: "Capta más clientes", text: "Añade clientes sin reserva a una lista de espera virtual en la entrada." },
  { Icon: PinIcon, title: "Mejora tu visibilidad", text: "Acepta reservas de Google, lanza ofertas y mucho más." },
  { Icon: ChatIcon, title: "Atención al cliente", text: "Obtén la ayuda que necesitas cuando la necesitas." },
];

const stories: { img: StaticImageData; alt: string; title: string; text: string; cta?: boolean }[] = [
  {
    img: bookingsCamarero,
    alt: "Camarero cobrando en la mesa de un restaurante con un datáfono Dojo",
    title: "Impulsa las reservas y mejora la visibilidad",
    text: "Acepta reservas desde Google o desde tu propio sitio web, lanza ofertas y logra que más clientes te conozcan.",
  },
  {
    img: bookingsTablet,
    alt: "Encargada de sala consultando las reservas en una tablet",
    title: "Facilita el proceso de reserva",
    text: "Gestiona todas las reservas, tanto las que se realizan en persona como online, desde un mismo lugar, accesible desde cualquier dispositivo. Y ahorra tiempo con la asignación automática de mesas.",
  },
  {
    img: bookingsPostre,
    alt: "Clienta disfrutando de un postre en un restaurante",
    title: "Ofrece mesas y experiencias",
    text: "Menús degustación, martes de tapas... Ofrece a tus clientes experiencias únicas en tu restaurante con ayuda de Dojo.",
  },
  {
    img: appPortatil,
    alt: "Hostelera hablando por teléfono frente a su portátil",
    title: "Obtén la ayuda que necesitas cuando la necesitas",
    text: `${agent.name} se encarga de todo para que, en un plazo muy breve, ya estés gestionando reservas. Y una vez en marcha, el equipo de atención al cliente de Dojo estará disponible todos los días de la semana.`,
    cta: true,
  },
];

const faqs: FaqItem[] = [
  {
    q: "Si tengo un restaurante pequeño, ¿necesito Dojo Bookings?",
    a: "No importa el tamaño de tu restaurante, Dojo Bookings es para ti. Puedes elegir entre aceptar reservas, abrir colas virtuales o ambas cosas. Esta solución también mejora la eficiencia del personal y es fácil de usar: ya no necesitarás que alguien se ocupe de la recepción.",
  },
];

export default function BookingsPage() {
  return (
    <div className="flex-1 bg-[#003f34] pt-3 text-[#1a1210]">
      <Header name={agent.name} />

      {/* Hero */}
      <section className="px-4 pt-14 pb-16 text-center text-[#f0f1eb] sm:px-6 sm:pt-20 sm:pb-24">
        <h1 className="mx-auto max-w-5xl font-[family-name:var(--font-archivo)] text-[2.6rem] leading-[0.95] font-extrabold tracking-[-0.02em] uppercase [font-stretch:112%] sm:text-7xl lg:text-8xl">
          Atrae, acomoda y sirve a los clientes más fácilmente
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">
          Ofrece mejores experiencias a tus clientes con el sistema integral de gestión de restaurantes de Dojo.
        </p>
        <a
          href="#contacto"
          className="mt-10 inline-flex rounded-full bg-[#3de8c4] px-14 py-6 text-xl font-semibold text-[#1a1210] transition-colors hover:bg-[#6ef0d4]"
        >
          Registrarme ahora
        </a>
        <Image
          src={bookingsHero}
          alt="Amigas brindando con cócteles en una terraza"
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="mx-auto mt-14 aspect-[4/5] w-full max-w-6xl rounded-[2.5rem] object-cover object-[center_20%] sm:aspect-[16/9]"
        />
      </section>

      <div className="bg-[#f0f1eb]">
        {/* Ventajas */}
        <section className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className={h2}>Reservas, a tu gusto</h2>
            <p className={`${body} mt-8 max-w-3xl`}>
              Consigue nuevos clientes, recibe reservas y sienta a los comensales automáticamente. ¡Gestiona tu
              restaurante fácilmente con un único sistema en línea!
            </p>
            <div className="mt-16 grid gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {features.map(({ Icon, title, text }) => (
                <div key={title}>
                  <div className="flex h-16 items-end">
                    <Icon />
                  </div>
                  <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                  <p className={`${body} mt-3 text-[#1a1210]/70`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historias */}
        {stories.map((s, i) => (
          <section key={s.title} className="px-4 py-14 sm:px-6 sm:py-20">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Image
                src={s.img}
                alt={s.alt}
                sizes="(min-width: 1024px) 560px, 100vw"
                className={cn("aspect-square w-full rounded-[2.5rem] object-cover", i % 2 && "lg:order-2")}
              />
              <div>
                <h2 className={h2}>{s.title}</h2>
                <p className={cn(body, "mt-8", s.cta && "text-[#1a1210]/70")}>{s.text}</p>
                {s.cta && (
                  <a href="#contacto" className={cn(primaryBtn, "mt-10 px-14")}>
                    Registrarme ahora
                  </a>
                )}
              </div>
            </div>
          </section>
        ))}

        <div className="pt-14">
          <FaqList title="Preguntas frecuentes" items={faqs} />
        </div>
        <ContactSection />
        <SiteFooter />
      </div>
      <BottomBar />
    </div>
  );
}
