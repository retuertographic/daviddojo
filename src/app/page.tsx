import {
  ArrowRight,
  BarChart3,
  Banknote,
  Clock,
  Coffee,
  CreditCard,
  Hotel,
  Mail,
  MessageCircle,
  Phone,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  UserRound,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react";
import { agent, whatsappUrl } from "@/lib/agent";
import { Header } from "@/components/sites/dojo-agent/header";
import { Terminal } from "@/components/sites/dojo-agent/terminal";
import { Faq } from "@/components/sites/dojo-agent/faq";
import { ContactForm } from "@/components/sites/dojo-agent/contact-form";

const quickWhatsapp = whatsappUrl(
  `Hola ${agent.name}, tengo un negocio y me interesa cobrar con tarjeta. ¿Me preparas una oferta?`,
);

const products = [
  {
    variant: "go" as const,
    name: "Dojo Go",
    tag: "El más versátil",
    text: "Portátil y rápido. Cobra en mesa, en la barra o donde esté tu cliente, con conexión wifi y 4G.",
  },
  {
    variant: "pocket" as const,
    name: "Dojo Pocket",
    tag: "Ligero y de bolsillo",
    text: "Pensado para tomar pedidos y cobrar en mesa sin moverte del sitio. Cabe en el delantal.",
  },
  {
    variant: "wired" as const,
    name: "Dojo Wired",
    tag: "Para el mostrador",
    text: "Fijo en la caja, siempre cargado y listo. Ideal para comercios con mucho paso de clientes.",
  },
  {
    variant: "duo" as const,
    name: "Dojo Duo",
    tag: "TPV + datáfono",
    text: "Gestiona pedidos, ventas y cobros desde un único equipo todo en uno.",
  },
];

const benefits = [
  {
    Icon: Banknote,
    title: "Tu dinero al día siguiente",
    text: "Las ventas con tarjeta llegan a tu cuenta al siguiente día laborable. Más liquidez para tu negocio.",
  },
  {
    Icon: Zap,
    title: "Cobros en segundos",
    text: "Terminales rápidos y conexión estable para que no se formen colas en las horas punta.",
  },
  {
    Icon: BarChart3,
    title: "Todo en la app",
    text: "Consulta ventas, transferencias e informes en tiempo real desde el móvil.",
  },
  {
    Icon: CreditCard,
    title: "Acepta cualquier pago",
    text: "Tarjetas, contactless, Apple Pay y Google Pay. Que ningún cliente se vaya sin pagar.",
  },
  {
    Icon: ShieldCheck,
    title: "Pagos seguros",
    text: "Tecnología de pago certificada y protección frente al fraude en cada transacción.",
  },
  {
    Icon: UserRound,
    title: "Un asesor para ti",
    text: `${agent.name} te acompaña antes, durante y después del alta. Sin centralitas ni esperas.`,
  },
];

const sectors = [
  { Icon: Utensils, name: "Restaurantes", text: "Cobra en mesa y rota mesas más rápido." },
  { Icon: Coffee, name: "Bares y cafeterías", text: "Cobros ágiles en barra y terraza." },
  { Icon: ShoppingBag, name: "Comercio", text: "Pagos rápidos en caja, sin colas." },
  { Icon: Scissors, name: "Belleza y bienestar", text: "Peluquerías, estética y centros." },
  { Icon: Hotel, name: "Hoteles", text: "Recepción, restaurante y habitaciones." },
  { Icon: Wrench, name: "Servicios", text: "Cobra a domicilio o en tu local." },
];

const steps = [
  {
    n: "01",
    title: "Me cuentas tu negocio",
    text: "Por WhatsApp, teléfono o el formulario. Qué vendes, cuánto cobras con tarjeta y qué pagas hoy.",
  },
  {
    n: "02",
    title: "Te preparo una oferta",
    text: "Elijo contigo el datáfono adecuado y te paso una propuesta clara, sin letra pequeña.",
  },
  {
    n: "03",
    title: "Empiezas a cobrar",
    text: "Gestiono el alta por ti y te ayudo a poner el datáfono en marcha. Y sigo a tu lado después.",
  },
];

export default function Home() {
  return (
    <div id="inicio" className="flex-1 bg-white text-zinc-900">
      <Header name={agent.name} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b0d12] text-white">
        <div className="pointer-events-none absolute -top-40 right-0 size-[640px] rounded-full bg-blue-600/30 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 size-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-2 lg:pt-24 lg:pb-28">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80">
              <span className="size-2 rounded-full bg-emerald-400" />
              {agent.role}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Cobra con tarjeta.
              <br />
              <span className="text-blue-400">Recibe tu dinero mañana.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Datáfonos Dojo rápidos y fiables, transferencias al día siguiente y una oferta adaptada a tu negocio.
              Y lo mejor: con un asesor personal que se encarga de todo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-medium transition-colors hover:bg-blue-500"
              >
                Pide tu oferta gratis <ArrowRight className="size-4" />
              </a>
              <a
                href={quickWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-medium transition-colors hover:bg-white/10"
              >
                <MessageCircle className="size-4" /> Escríbeme por WhatsApp
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["24 h", "Transferencias"],
                ["4", "Modelos de datáfono"],
                ["1", "Asesor para todo"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-3xl font-semibold">{v}</dt>
                  <dd className="mt-1 text-sm text-white/60">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-6 lg:max-w-none">
            <Terminal variant="pocket" amount="12,80 €" className="w-32 -rotate-6 sm:w-40" />
            <Terminal variant="go" amount="48,90 €" className="w-44 sm:w-56" />
            <div className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-4 py-3 text-zinc-900 shadow-2xl sm:flex">
              <span className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Banknote className="size-5" />
              </span>
              <div className="text-sm">
                <p className="font-semibold">Transferencia recibida</p>
                <p className="text-zinc-500">Ventas de ayer · 1.284,60 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datáfonos */}
      <section id="datafonos" className="scroll-mt-16 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Datáfonos</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">El datáfono perfecto para tu forma de cobrar</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Te ayudo a elegir el modelo que encaja con tu local, tu equipo y tu volumen de ventas.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.name} className="group flex flex-col rounded-3xl bg-zinc-100 p-6 transition hover:bg-zinc-50 hover:shadow-xl hover:ring-1 hover:ring-zinc-200">
                <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/60">
                  <Terminal variant={p.variant} className={p.variant === "duo" ? "scale-90" : "w-28"} />
                </div>
                <p className="mt-6 text-xs font-semibold tracking-wide text-blue-600 uppercase">{p.tag}</p>
                <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-zinc-600">{p.text}</p>
                <a href="#contacto" className="mt-5 inline-flex items-center gap-1.5 font-medium text-blue-600">
                  Pedir precio <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section id="ventajas" className="scroll-mt-16 bg-zinc-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Ventajas</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Más que un datáfono</h2>
            <p className="mt-4 text-lg text-zinc-600">Todo lo que necesitas para cobrar mejor y tener el control de tu dinero.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-7 ring-1 ring-zinc-200">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-14 text-white sm:px-12 lg:grid-cols-2 lg:py-20">
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-100 uppercase">App de gestión</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Tu negocio, en tu bolsillo</h2>
              <p className="mt-4 text-lg text-blue-100">
                Con la app de Dojo ves tus ventas en tiempo real, sigues tus transferencias y descargas informes cuando
                quieras. Y si tienes cualquier duda, me escribes.
              </p>
              <ul className="mt-8 space-y-3">
                {["Ventas al momento, por día y por datáfono", "Seguimiento de cada transferencia", "Informes y extractos descargables"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-white/20">
                      <Smartphone className="size-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto w-64 rounded-[2.5rem] bg-zinc-900 p-3 shadow-2xl">
              <div className="rounded-[2rem] bg-white p-5 text-zinc-900">
                <p className="text-xs text-zinc-500">Ventas de hoy</p>
                <p className="text-3xl font-semibold tracking-tight">2.415,30 €</p>
                <div className="mt-5 flex h-28 items-end gap-2">
                  {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-blue-600" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ["Transferencia", "+1.284,60 €"],
                    ["Mesa 4 · Dojo Go", "+48,90 €"],
                    ["Barra · Dojo Pocket", "+12,80 €"],
                  ].map(([a, b]) => (
                    <div key={a} className="flex items-center justify-between text-sm">
                      <span className="text-zinc-600">{a}</span>
                      <span className="font-medium text-emerald-600">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section id="sectores" className="scroll-mt-16 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Sectores</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Pensado para negocios como el tuyo</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map(({ Icon, name, text }) => (
              <div key={name} className="flex items-start gap-4 rounded-2xl border border-zinc-200 p-6 transition hover:border-blue-600">
                <Icon className="mt-0.5 size-6 shrink-0 text-blue-600" />
                <div>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="mt-1 text-zinc-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="scroll-mt-16 bg-[#0b0d12] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Cómo funciona</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Tres pasos y empiezas a cobrar</h2>
              <p className="mt-4 text-lg text-white/70">
                Soy {agent.name}, tu asesor comercial. Me encargo de todo el proceso para que tú solo te preocupes
                de tu negocio.
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-medium transition-colors hover:bg-blue-500"
              >
                Empezar ahora <ArrowRight className="size-4" />
              </a>
            </div>
            <ol className="grid gap-4">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-7">
                  <span className="text-3xl font-semibold text-blue-400">{s.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-white/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="preguntas" className="scroll-mt-16 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Preguntas frecuentes</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Resolvemos tus dudas</h2>
            <p className="mt-4 text-zinc-600">¿No encuentras la tuya? Pregúntame directamente, te respondo yo.</p>
          </div>
          <Faq />
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-16 bg-zinc-50 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Contacto</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Pide tu oferta personalizada</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Rellena el formulario y te respondo personalmente, normalmente en menos de 24 horas. Sin compromiso.
            </p>
            <ul className="mt-10 space-y-5">
              <li>
                <a href={quickWhatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                    <MessageCircle className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-zinc-500">WhatsApp</span>
                    <span className="font-medium">{agent.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:+${agent.phone}`} className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-zinc-500">Teléfono</span>
                    <span className="font-medium">{agent.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${agent.email}`} className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-zinc-500">Email</span>
                    <span className="font-medium">{agent.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-zinc-200 text-zinc-700">
                  <Clock className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-zinc-500">Horario</span>
                  <span className="font-medium">{agent.hours}</span>
                </span>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0d12] py-12 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold text-white">
              {agent.fullName} <span className="font-normal text-white/50">· {agent.role}</span>
            </p>
            <p className="mt-1 text-sm">
              {agent.zone} · {agent.phoneDisplay} · {agent.email}
            </p>
          </div>
          <p className="max-w-md text-xs leading-relaxed">
            Web personal de un asesor comercial. Dojo y sus productos son marcas de sus respectivos titulares. Las
            condiciones finales se detallan en la oferta personalizada.
          </p>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href={quickWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbeme por WhatsApp"
        className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:scale-105 sm:right-6 sm:bottom-6"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
