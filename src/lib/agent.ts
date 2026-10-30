// Datos del asesor comercial. Edita este archivo para personalizar la web:
// todos los botones, el formulario y el pie de página leen de aquí.
export const agent = {
  name: "David",
  fullName: "David",
  role: "Asesor comercial de soluciones de pago Dojo",
  zone: "España",
  // Teléfono en formato internacional sin "+" ni espacios (se usa para WhatsApp y llamadas).
  phone: "34600000000",
  phoneDisplay: "+34 600 000 000",
  email: "david@tudominio.es",
  hours: "Lunes a viernes, 9:00 – 19:00",
} as const;

export const whatsappUrl = (text: string) =>
  `https://wa.me/${agent.phone}?text=${encodeURIComponent(text)}`;

export const mailtoUrl = (subject: string, body: string) =>
  `mailto:${agent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
