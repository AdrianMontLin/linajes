const WHATSAPP_NUMBER = "+573248084231"; // Reemplaza por el número de WhatsApp con indicativo de país, solo dígitos. Ejemplo Colombia: 573001112233.

function initializeIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function initializeMobileNavigation() {
  
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    nav.classList.toggle("is-open", !isOpen);
    const icon = toggle.querySelector("i");
    if (icon) icon.setAttribute("data-lucide", isOpen ? "menu" : "x");
    initializeIcons();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      const icon = toggle.querySelector("i");
      if (icon) icon.setAttribute("data-lucide", "menu");
      initializeIcons();
    });
  });
}

function initializeContactForm() {
  const form = document.querySelector("#contact-form");
  const error = document.querySelector("#form-error");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const tipoEvento = String(data.get("tipoEvento") || "").trim();

    if (!nombre || !tipoEvento) {
      if (error) error.hidden = false;
      return;
    }
    if (error) error.hidden = true;

    const fecha = String(data.get("fecha") || "").trim();
    const invitados = String(data.get("invitados") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const lines = [
      "Hola, Linajes. Quisiera cotizar un evento.",
      `Nombre: ${nombre}`,
      `Tipo de evento: ${tipoEvento}`,
      fecha ? `Fecha aproximada: ${fecha}` : "",
      invitados ? `Número de invitados: ${invitados}` : "",
      mensaje ? `Detalles: ${mensaje}` : ""
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));

    if (!WHATSAPP_NUMBER) {
      window.alert("Antes de publicar, configura el número de WhatsApp en js/main.js (constante WHATSAPP_NUMBER).");
      return;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  });
}

function initializeFooterYear() {
  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initializeIcons();
  initializeMobileNavigation();
  initializeContactForm();
  initializeFooterYear();
});
