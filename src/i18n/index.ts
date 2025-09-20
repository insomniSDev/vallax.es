export type Locale = "es" | "en";

export interface Translation {
  locale: Locale;
  seo: {
    title: string;
    description: string;
  };
  navbar: {
    brandTagline: string;
    links: {
      howItWorks: string;
      whatIs: string;
      pricing: string;
      community: string;
    };
    primaryCta: string;
    languageSwitcher: {
      label: string;
      shortLabel: string;
      target: Locale;
      href: string;
    };
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    communityCta: string;
    bulletPoints: string[];
    asideTitle: string;
    steps: string[];
    monitorLines: string[];
  };
  platforms: {
    badge: string;
    title: string;
    description: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    features: { title: string; description: string }[];
    highlightBadge: string;
    highlightTitle: string;
    highlightDescription: string;
    stats: { value: string; label: string }[];
    communityCallout: string;
  };
  points: {
    badge: string;
    title: string;
    description: string;
    features: { title: string; description: string }[];
  };
  howToStart: {
    badge: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
      hint?: string;
      ctaLabel?: string;
    }[];
  };
  community: {
    badge: string;
    title: string;
    description: string;
    highlights: string[];
    ctaTagline: string;
    ctaLabel: string;
    finePrint: string;
  };
  footer: {
    headline: string;
    description: string;
    marketplaces: { label: string; href: string }[];
    contactTitle: string;
    contactEmailLabel: string;
    socials: { label: string; href: string }[];
    rights: string;
  };
}

export const locales: Locale[] = ["es", "en"];

export const translations: Record<Locale, Translation> = {
  es: {
    locale: "es",
    seo: {
      title: "Alertas personalizadas para Wallapop, Vinted y Milanuncios | Vallax",
      description:
        "Configura alertas en Wallapop, Vinted y Milanuncios y recibe notificaciones instantáneas en Telegram. Llega antes que nadie a los mejores chollos con Vallax.",
    },
    navbar: {
      brandTagline: "Alertas Vallax",
      links: {
        howItWorks: "Cómo funciona",
        whatIs: "Qué es Vallax",
        pricing: "Planes",
        community: "Comunidad",
      },
      primaryCta: "Crear alerta",
      languageSwitcher: {
        label: "English",
        shortLabel: "EN",
        target: "en",
        href: "/en/",
      },
    },
    hero: {
      badge: "Alertas automáticas en Telegram",
      title:
        "Detecta ofertas de Wallapop, Vinted y Milanuncios en segundos con la miniapp oficial de Vallax",
      description:
        "Vallax vigila los principales marketplaces de segunda mano y te envía un mensaje directo cuando encuentra un anuncio que coincide con tus filtros. Nada de comandos: abre la miniapp y empieza a recibir avisos al instante.",
      primaryCta: "Crear mi primera alerta",
      communityCta: "Ver comunidad en vivo",
      bulletPoints: [
        "Alertas agrupadas en un solo chat",
        "Sin instalar aplicaciones adicionales",
      ],
      asideTitle: "Cómo empezar",
      steps: [
        "Abre el bot @vallaxbot en Telegram.",
        "Pulsa el botón “Open Vallax” para abrir la miniapp.",
        "Configura filtros y empieza a recibir avisos en segundos.",
      ],
      monitorLines: [
        "Monitorización continua 24/7",
        "Wallapop · Vinted · Milanuncios",
      ],
    },
    platforms: {
      badge: "Plataformas compatibles",
      title: "Vallax monitoriza los marketplaces donde nacen los mejores chollos",
      description:
        "Conecta tus alertas a los tres grandes del mercado de segunda mano y recibe todos los avisos en un único canal de Telegram.",
    },
    about: {
      badge: "¿Qué es Vallax?",
      title: "Alertas inteligentes sin complicaciones",
      description:
        "Vallax te permite crear alertas personalizadas en Wallapop, Vinted y Milanuncios. Recibe notificaciones instantáneas en Telegram con los anuncios que realmente te interesan.",
      features: [
        {
          title: "Configura filtros en segundos",
          description: "Define palabras clave, precios y ubicación para encontrar exactamente lo que buscas.",
        },
        {
          title: "Monitoreo multi-plataforma",
          description: "Wallapop, Vinted y Milanuncios en un mismo flujo de resultados, sin cambiar de app.",
        },
        {
          title: "Alertas directas en Telegram",
          description: "Responde antes que nadie cuando aparezca un artículo interesante.",
        },
      ],
      highlightBadge: "Lista en minutos",
      highlightTitle: "Automatiza la búsqueda de chollos",
      highlightDescription:
        "Activa tus alertas una sola vez y deja que Telegram te avise cada vez que aparezca una nueva oportunidad.",
      stats: [
        { value: "0.0 s", label: "Tiempo medio de aviso" },
        { value: "+3", label: "Plataformas conectadas" },
        { value: "24/7", label: "Monitorización activa" },
      ],
      communityCallout:
        "Únete a la comunidad y comparte hallazgos, consejos y alertas con otros cazadores de chollos.",
    },
    points: {
      badge: "Funciones clave",
      title: "Todo lo necesario para llegar antes que la competencia",
      description:
        "Configuración rápida, avisos en segundos y control total desde Telegram. Vallax automatiza la parte más pesada de buscar chollos en segunda mano.",
      features: [
        {
          title: "Alertas multi-plataforma",
          description: "Vallax vigila Wallapop, Vinted y Milanuncios al mismo tiempo y agrupa los resultados en un solo canal.",
        },
        {
          title: "Filtros precisos",
          description: "Combina palabras clave, rango de precio y zona para recibir solo anuncios relevantes.",
        },
        {
          title: "Respuesta inmediata",
          description: "Recibes un mensaje en Telegram en cuanto se publica un anuncio que encaja con tus filtros.",
        },
        {
          title: "Control desde el chat",
          description: "Activa, pausa o duplica alertas sin instalar nada adicional.",
        },
      ],
    },
    howToStart: {
      badge: "Cómo empezar",
      title: "Dos toques y Vallax empieza a avisarte",
      description:
        "Sin pantallas complicadas ni formularios eternos: abre el bot, toca “Open Vallax” y ya estás recibiendo alertas personalizadas dentro de Telegram.",
      steps: [
        {
          number: "01",
          title: "Inicia un chat con @vallaxbot",
          description:
            "Abre Telegram, busca @vallaxbot y pulsa /start. El bot responde al instante y te deja listo para crear alertas.",
          hint: "¿No tienes Telegram? Descárgalo y vuelve, tardas menos de un minuto.",
          ctaLabel: "Abrir @vallaxbot",
        },
        {
          number: "02",
          title: "Toca “Open app” y configura tus alertas",
          description:
            "Desde la miniapp elige plataformas, palabras clave y precio. Guarda y Vallax te avisará en segundos.",
          hint: "Puedes modificar o pausar las alertas desde el mismo panel cuando quieras.",
        },
      ],
    },
    community: {
      badge: "Comunidad oficial",
      title: "Conecta con usuarios que cazan chollos cada día",
      description:
        "Ideas, avisos y chollos en tiempo real dentro del canal de Telegram. Únete y descubre qué están encontrando otros usuarios con Vallax.",
      highlights: [
        "Alertas compartidas por otros cazadores de chollos",
        "Resumen diario con lo mejor de Wallapop, Vinted y Milanuncios",
        "Soporte directo de la comunidad para resolver dudas al momento",
      ],
      ctaTagline: "Únete gratis",
      ctaLabel: "Ir al canal de Telegram",
      finePrint:
        "Recibirás invitaciones a eventos, actualizaciones de producto y hallazgos antes que nadie.",
    },
    footer: {
      headline: "Automatiza tus alertas en segunda mano y llega antes que nadie al mejor chollo",
      description:
        "Vallax rastrea Wallapop, Vinted y Milanuncios en tiempo real y te manda notificaciones directas en Telegram.",
      marketplaces: [
        { label: "Wallapop", href: "https://es.wallapop.com/" },
        { label: "Vinted", href: "https://www.vinted.es/" },
        { label: "Milanuncios", href: "https://www.milanuncios.com/" },
      ],
      contactTitle: "Contacto",
      contactEmailLabel: "hola@vallax.es",
      socials: [
        { label: "Instagram", href: "https://www.instagram.com/vallaxbot/" },
        { label: "YouTube", href: "https://www.youtube.com/@vallax-app/" },
      ],
      rights: "© 2025 Vallax. Todos los derechos reservados.",
    },
  },
  en: {
    locale: "en",
    seo: {
      title: "Instant alerts for Wallapop, Vinted & Milanuncios | Vallax",
      description:
        "Set up Wallapop, Vinted and Milanuncios alerts and get instant Telegram notifications. Beat other buyers to the best second-hand deals with Vallax.",
    },
    navbar: {
      brandTagline: "Vallax Alerts",
      links: {
        howItWorks: "How it works",
        whatIs: "What is Vallax",
        pricing: "Plans",
        community: "Community",
      },
      primaryCta: "Create alert",
      languageSwitcher: {
        label: "Español",
        shortLabel: "ES",
        target: "es",
        href: "/es/",
      },
    },
    hero: {
      badge: "Automatic alerts in Telegram",
      title:
        "Spot new Wallapop, Vinted and Milanuncios listings in seconds with Vallax's official mini app",
      description:
        "Vallax keeps an eye on the leading second-hand marketplaces and sends you a direct message the moment a listing matches your filters. No commands required—launch the mini app and start receiving instant alerts.",
      primaryCta: "Create my first alert",
      communityCta: "See community feed",
      bulletPoints: [
        "All your alerts in a single Telegram chat",
        "No additional apps needed",
      ],
      asideTitle: "Get started",
      steps: [
        "Open the @vallaxbot on Telegram.",
        "Tap the “Open Vallax” button to launch the mini app.",
        "Set your filters and start receiving alerts within seconds.",
      ],
      monitorLines: [
        "24/7 monitoring",
        "Wallapop · Vinted · Milanuncios",
      ],
    },
    platforms: {
      badge: "Compatible platforms",
      title: "Vallax monitors the marketplaces where the best deals appear",
      description:
        "Connect your alerts to the three biggest second-hand marketplaces and receive every notification in a single Telegram channel.",
    },
    about: {
      badge: "What is Vallax?",
      title: "Smart alerts without the hassle",
      description:
        "Vallax lets you create custom alerts for Wallapop, Vinted and Milanuncios. Get instant Telegram notifications for the listings you actually care about.",
      features: [
        {
          title: "Set up filters in seconds",
          description: "Define keywords, price range and location so Vallax tracks exactly what you need.",
        },
        {
          title: "Multi-platform monitoring",
          description: "Wallapop, Vinted and Milanuncios combined in a single stream of results—no app switching.",
        },
        {
          title: "Alerts straight to Telegram",
          description: "Reply faster than anyone else the moment a promising listing goes live.",
        },
      ],
      highlightBadge: "Ready in minutes",
      highlightTitle: "Automate the hunt for bargains",
      highlightDescription:
        "Activate your alerts once and let Telegram keep you posted whenever a new opportunity pops up.",
      stats: [
        { value: "0.0 s", label: "Average alert time" },
        { value: "+3", label: "Platforms connected" },
        { value: "24/7", label: "Always-on monitoring" },
      ],
      communityCallout:
        "Join the community to swap tips, discoveries and alerts with other deal hunters.",
    },
    points: {
      badge: "Key features",
      title: "Everything you need to beat other buyers",
      description:
        "Fast setup, instant notifications and full control from Telegram. Vallax takes the effort out of searching for second-hand deals.",
      features: [
        {
          title: "Multi-platform alerts",
          description: "Vallax watches Wallapop, Vinted and Milanuncios simultaneously and delivers results to one chat.",
        },
        {
          title: "Granular filters",
          description: "Combine keywords, price range and location to receive only relevant listings.",
        },
        {
          title: "Instant response",
          description: "Telegram notifies you the moment a matching listing is published.",
        },
        {
          title: "In-chat control",
          description: "Activate, pause or duplicate alerts without installing anything else.",
        },
      ],
    },
    howToStart: {
      badge: "Getting started",
      title: "Two taps and Vallax begins notifying you",
      description:
        "No complicated screens or long forms: open the bot, tap “Open Vallax” and your personalised alerts will start arriving inside Telegram.",
      steps: [
        {
          number: "01",
          title: "Start a chat with @vallaxbot",
          description:
            "Open Telegram, search for @vallaxbot and press /start. The bot will guide you so you can set up alerts instantly.",
          hint: "Don’t have Telegram yet? Install it and come back—it takes less than a minute.",
          ctaLabel: "Open @vallaxbot",
        },
        {
          number: "02",
          title: "Tap \"Open app\" and configure your filters",
          description:
            "Use the embedded mini app to choose platforms, keywords and price. Save and Vallax will notify you within seconds.",
          hint: "You can update or pause alerts from the same panel whenever you need.",
        },
      ],
    },
    community: {
      badge: "Official community",
      title: "Connect with users who spot deals every day",
      description:
        "Real-time ideas, alerts and success stories inside our Telegram channel. Join in and see what other Vallax users are finding.",
      highlights: [
        "Alerts shared by dedicated deal hunters",
        "Daily round-up of the best listings on Wallapop, Vinted and Milanuncios",
        "Direct community support to solve questions instantly",
      ],
      ctaTagline: "Join for free",
      ctaLabel: "Go to Telegram channel",
      finePrint:
        "Get invitations to events, product updates and hot deals before anyone else.",
    },
    footer: {
      headline: "Automate your second-hand alerts and claim the best deals first",
      description:
        "Vallax keeps Wallapop, Vinted and Milanuncios under watch and drops instant Telegram notifications into your inbox.",
      marketplaces: [
        { label: "Wallapop", href: "https://es.wallapop.com/" },
        { label: "Vinted", href: "https://www.vinted.es/" },
        { label: "Milanuncios", href: "https://www.milanuncios.com/" },
      ],
      contactTitle: "Contact",
      contactEmailLabel: "hi@vallax.es",
      socials: [
        { label: "Instagram", href: "https://www.instagram.com/vallaxbot/" },
        { label: "YouTube", href: "https://www.youtube.com/@vallax-app/" },
      ],
      rights: "© 2025 Vallax. All rights reserved.",
    },
  },
};

export function isLocale(value: string | undefined): value is Locale {
  if (!value) return false;
  return (locales as string[]).includes(value);
}
