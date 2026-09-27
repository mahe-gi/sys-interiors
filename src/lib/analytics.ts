/**
 * Lightweight, zero-dependency analytics & conversion event dispatcher.
 * Adheres strictly to privacy: tracks intent events without personal user data.
 */

export type AnalyticsEventName =
  | "whatsapp_hero_click"
  | "whatsapp_nav_click"
  | "whatsapp_service_click"
  | "whatsapp_domain_residential_click"
  | "whatsapp_domain_commercial_click"
  | "whatsapp_founder_click"
  | "whatsapp_final_cta_click"
  | "whatsapp_floating_click"
  | "phone_call_click"
  | "faq_toggle"
  | "section_view";

export function trackEvent(eventName: AnalyticsEventName, payload?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined") {
    // Dispatch custom DOM event for custom listeners / analytics tags
    try {
      window.dispatchEvent(
        new CustomEvent("sys_analytics", {
          detail: { event: eventName, ...payload, timestamp: Date.now() },
        })
      );
    } catch {
      // Graceful fallback
    }

    // Compatible with standard dataLayer if Google Tag Manager or GA is initialized
    const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event: eventName, ...payload });
    }
  }
}
