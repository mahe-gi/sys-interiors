import { siteData } from "@/data/site";

/**
 * Generates a direct WhatsApp click-to-chat URL with pre-filled message text.
 * Always resolves to the centralized WhatsApp number from siteData.
 */
export function buildWhatsAppUrl(message?: string): string {
  const number = siteData.contact.whatsappNumber;
  const text = message ? message.trim() : siteData.whatsapp.defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a direct call URL for telephone links.
 */
export function buildTelUrl(): string {
  return siteData.contact.telLink;
}
