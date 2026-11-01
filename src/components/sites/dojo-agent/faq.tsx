import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuándo recibo el dinero de mis ventas?",
    a: "Con Dojo las ventas con tarjeta se transfieren a tu cuenta al día siguiente laborable, también las del fin de semana. Te explico las condiciones exactas para tu caso cuando preparemos la oferta.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Las comisiones y el precio del datáfono dependen del volumen y del tipo de negocio, por eso preparo una oferta personalizada. Cuéntame cuánto facturas con tarjeta al mes y te digo cuánto pagarías.",
  },
  {
    q: "¿Qué datáfono me conviene?",
    a: "Si cobras en mesa o te mueves por el local, Dojo Go o Dojo Pocket. Si cobras siempre en el mostrador, Dojo Wired. Si además quieres gestionar pedidos y ventas en un solo equipo, Dojo Duo. Lo vemos juntos en 5 minutos.",
  },
  {
    q: "¿Qué tarjetas y métodos de pago acepta?",
    a: "Tarjetas Visa y Mastercard de débito y crédito, pagos sin contacto y móviles con Apple Pay y Google Pay, entre otros.",
  },
  {
    q: "¿Tengo que cambiar de banco?",
    a: "No. Las transferencias llegan a la cuenta bancaria de tu negocio que ya usas.",
  },
  {
    q: "¿Por qué contratar a través de ti y no directamente?",
    a: "Porque tienes a una persona de referencia: analizo tu negocio, comparo con lo que pagas ahora, gestiono el alta de principio a fin y sigo a tu lado después. Un solo teléfono, una sola persona.",
  },
];

export function Faq() {
  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200">
      {faqs.map((f) => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-zinc-900 [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus className="size-5 shrink-0 text-blue-600 transition-transform group-open:rotate-45" />
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
