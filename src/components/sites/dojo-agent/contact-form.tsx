"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { agent, mailtoUrl, whatsappUrl } from "@/lib/agent";

const sectors = [
  "Restaurante",
  "Bar o cafetería",
  "Tienda / comercio",
  "Peluquería o estética",
  "Hotel o alojamiento",
  "Servicios profesionales",
  "Otro",
];

const volumes = [
  "Menos de 5.000 € / mes",
  "5.000 € – 20.000 € / mes",
  "20.000 € – 50.000 € / mes",
  "Más de 50.000 € / mes",
  "Aún no cobro con tarjeta",
];

const fieldClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10";

export function ContactForm() {
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [
      `Hola ${agent.name}, me gustaría recibir una oferta para cobrar con tarjeta.`,
      "",
      `Nombre: ${get("name")}`,
      `Negocio: ${get("business")}`,
      `Sector: ${get("sector")}`,
      `Facturación con tarjeta: ${get("volume")}`,
      `Teléfono: ${get("phone")}`,
      ...(get("message") ? [`Comentarios: ${get("message")}`] : []),
    ];
    const text = lines.join("\n");

    const url =
      channel === "whatsapp"
        ? whatsappUrl(text)
        : mailtoUrl(`Oferta datáfono – ${get("business") || get("name")}`, text);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-zinc-200 sm:grid-cols-2 sm:p-8">
      <label className="grid gap-1.5 text-sm font-medium text-zinc-700">
        Nombre
        <input name="name" required autoComplete="name" placeholder="Tu nombre" className={fieldClass} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-zinc-700">
        Teléfono
        <input name="phone" required type="tel" autoComplete="tel" placeholder="600 000 000" className={fieldClass} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-zinc-700 sm:col-span-2">
        Nombre del negocio
        <input name="business" required autoComplete="organization" placeholder="Ej. Cafetería La Plaza" className={fieldClass} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-zinc-700">
        Sector
        <select name="sector" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Elige uno
          </option>
          {sectors.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-zinc-700">
        Ventas con tarjeta
        <select name="volume" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Aproximadamente
          </option>
          {volumes.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-zinc-700 sm:col-span-2">
        ¿Algo más que deba saber? <span className="font-normal text-zinc-400">(opcional)</span>
        <textarea name="message" rows={3} placeholder="Proveedor actual, nº de datáfonos, horario para llamarte…" className={fieldClass} />
      </label>

      <fieldset className="sm:col-span-2">
        <legend className="mb-2 text-sm font-medium text-zinc-700">¿Cómo prefieres enviármelo?</legend>
        <div className="grid grid-cols-2 gap-3">
          {(
            [
              { id: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
              { id: "email", label: "Email", Icon: Mail },
            ] as const
          ).map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              aria-pressed={channel === id}
              onClick={() => setChannel(id)}
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                channel === id
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
              }`}
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="rounded-full bg-blue-600 px-6 py-4 font-medium text-white transition-colors hover:bg-blue-500 sm:col-span-2"
      >
        Quiero mi oferta personalizada
      </button>
      <p className="text-center text-xs text-zinc-500 sm:col-span-2">
        Tus datos llegan solo a {agent.name}, tu asesor, y se usan únicamente para preparar tu oferta.
      </p>
    </form>
  );
}
