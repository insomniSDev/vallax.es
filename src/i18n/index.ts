import type GettingStarted from "../components/sections/Getting-started.astro";

export type Locale = "es" | "en";
export interface Translation {
  locale: Locale;
  seo: {
    title: string;
    description: string;
  };
  navbar: {
    links: {
      gettingStarted: string;
      features: string;
      faq: string;
      pricing: string;
      community: string;
    };
    languageSwitcher: {
      label: string;
      shortLabel: string;
      target: Locale;
      href: string;
    };
    primaryCta: string;
  };
  hero: {
    title: string;
    description: string;
    primaryCta: string;
    platforms: { title: string };
  };
  features: {
    title: string;
    description: string;
    features: { title: string; description: string }[];
  };
  pricing: {
    title: string;
    description: string;
    plans: {
      name: string;
      price: string;
      description: string;
      features: string[];
      ctaLabel: string;
      ctaHref: string;
      badge?: string;
    }[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  gettingStarted: {
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  community: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    legal: { label: string; href?: string }[];
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
      title:
        "Alertas instantáneas de Wallapop, Vinted, Milanuncios y Todocoleccion en Telegram | Vallax",
      description:
        "Automatiza la búsqueda de chollos con Vallax. Configura filtros personalizados y recibe notificaciones al momento desde Telegram.",
    },
    navbar: {
      links: {
        gettingStarted: "Cómo empezar",
        features: "Beneficios",
        faq: "FAQ",
        community: "Comunidad",
        pricing: "Planes",
      },
      languageSwitcher: {
        label: "English",
        shortLabel: "EN",
        target: "en",
        href: "/en/",
      },
      primaryCta: "Ir a Vallax",
    },
    hero: {
      title: "Descubre las nuevas ofertas de segunda mano antes que nadie",
      description:
        "Vallax revisa cada nuevo anuncio en tiempo real y te avisa al instante. Ideal para cazar chollos o encontrar ese artículo único antes que nadie.",
      primaryCta: "Crea tu primera alerta",
      platforms: {
        title: "Plataformas soportadas",
      },
    },
    gettingStarted: {
      title: "Cómo empezar",
      description:
        "Solo necesitas Telegram y un par de toques para poner a Vallax a trabajar.",
      steps: [
        {
          title: "Lanza la app",
          description: "Busca @vallaxbot en Telegram y pulsa Open.",
        },
        {
          title: "Crea tu alerta",
          description:
            "Especifica los criterios de tu alerta: palabra clave, precio máximo, etc.",
        },
        {
          title: "Recibe las alertas",
          description:
            "Recibirás una notificación cada vez que aparezca una nueva coincidencia.",
        },
      ],
    },
    features: {
      title: "Razones para usar Vallax",
      description:
        "Todo lo que necesitas para adelantarte a cualquier comprador.",
      features: [
        {
          title: "Multiplataforma",
          description:
            "Wallapop, Vinted, Milanuncios y Todocoleccion en un solo lugar.",
        },
        {
          title: "Instantáneo",
          description:
            "En cuanto se publica un anuncio nuevo, la alerta aparece en tu Telegram sin esperas.",
        },
        {
          title: "Preciso",
          description:
            "Usa palabras clave, exclusiones, precio y ubicación para encontrar solo los anuncios que te interesan.",
        },
        {
          title: "Sencillo",
          description:
            "Gestiona tus alertas con facilidad. Crea, edita o páusalas cuando quieras, sin complicaciones.",
        },
      ],
    },
    pricing: {
      title: "Planes y precios",
      description:
        "Selecciona la capacidad que necesitas. Empieza gratis y sube a Premium cuando tus alertas crezcan.",
      plans: [
        {
          name: "Gratuito",
          price: "0 €",
          description: "Ideal para validar tus primeras búsquedas.",
          features: [
            "Hasta 3 alertas creadas",
            "1 alerta activa a la vez",
            "1 plataforma por alerta",
            "Hasta 3 palabras clave y exclusiones",
          ],
          ctaLabel: "Empieza gratis",
          ctaHref: "https://t.me/vallaxbot?start=pricing_free",
        },
        {
          name: "Premium",
          price: "10 €/mes",
          description:
            "Para usuarios que necesitan velocidad y flexibilidad completa.",
          features: [
            "Hasta 12 alertas creadas",
            "6 alertas activas de forma simultánea",
            "Todas las plataformas disponibles en paralelo",
            "Asistente con IA para crear alertas",
            "Filtros avanzados con Regex",
          ],
          ctaLabel: "Hazte Premium",
          ctaHref: "https://t.me/vallaxbot?start=pricing_premium",
          badge: "Más popular",
        },
        {
          name: "Plan personalizado",
          price: "A medida",
          description:
            "Consultoría para operaciones que requieren filtrados con modelos LLM y automatizaciones a medida.",
          features: [
            "Modelos LLM adaptados a tus criterios",
            "Integraciones con tus herramientas y automatizaciones avanzadas",
            "Soporte prioritario con especialista",
          ],
          ctaLabel: "Habla con nosotros",
          ctaHref:
            "mailto:vallaxdev@gmail.com?subject=Plan%20personalizado%20Vallax",
        },
      ],
    },
    community: {
      title: "Communidad de Telegram",
      description:
        "Entra para estar al día de las actualizaciones, proponer mejoras y compartir alertas con otros usuarios de Vallax.",
      button: "Unirme",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Puedo acceder al sistema de afiliados?",
          answer:
            'Sí. Vallax usa el sistema de afiliados oficial de Telegram. Abre @vallaxbot, entra en la información del bot y usa el enlace de promoción que encontrarás allí. Puedes ver todos los detalles en <a class="faq-link" href="https://telegram.org/tour/affiliate-programs" target="_blank" rel="noreferrer">telegram.org/tour/affiliate-programs</a>.',
        },
        {
          question: "¿Por qué Vallax detiene algunas alertas?",
          answer:
            "Si una alerta dispara demasiados anuncios en poco tiempo, la pausamos para respetar los límites de Telegram. Revísala, ajusta filtros si hace falta y vuelve a activarla desde el bot.",
        },
        {
          question: "¿Por qué recibo anuncios que no encajan?",
          answer:
            "Puede deberse a que el vendedor usó categorías o palabras clave que no reflejan el contenido real. Ajusta exclusiones o regex para filtrar esos casos.",
        },
        {
          question: "¿Funciona la ubicación en todas las plataformas?",
          answer:
            "Wallapop, Milanuncios y Todocoleccion sí respetan ubicación y categorías. Vinted no usa ese campo, por lo que seguirás recibiendo anuncios fuera de tu zona incluso si lo configuras.",
        },
      ],
    },
    footer: {
      legal: [
        { label: "Términos de Servicio" },
        { label: "Política de Privacidad" },
        { label: "Política de Cookies" },
      ],
      contactEmailLabel: "vallaxdev@gmail.com",
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
      title:
        "Vallax — Alert Bot for Second-Hand Marketplaces (Wallapop, Vinted, Milanuncios...)",
      description:
        "Vallax is a Telegram bot that sends instant alerts for new second-hand listings on Wallapop, Vinted, Milanuncios and more. See new deals before anyone else.",
    },
    navbar: {
      links: {
        gettingStarted: "Getting Started",
        features: "Benefits",
        faq: "FAQ",
        community: "Community",
        pricing: "Plans",
      },
      languageSwitcher: {
        label: "Español",
        shortLabel: "ES",
        target: "es",
        href: "/es/",
      },
      primaryCta: "Launch Vallax",
    },
    hero: {
      title: "See new second-hand deals before anyone else",
      description:
        "Vallax checks every new listing in real time and alerts you instantly. Ideal for hunting down bargains or finding that unique item before anyone else.",
      primaryCta: "Create Your First Alert",
      platforms: {
        title: "Supported platforms",
      },
    },
    gettingStarted: {
      title: "Getting started",
      description:
        "All you need is Telegram and a couple of taps to put Vallax to work.",
      steps: [
        {
          title: "Launch the app",
          description: "Find @vallaxbot on Telegram and tap Open.",
        },
        {
          title: "Create your alert",
          description:
            "Specify your alert's criteria: keyword, max price, etc.",
        },
        {
          title: "Get the alerts",
          description:
            "You'll receive a notification every time a new match appears.",
        },
      ],
    },
    features: {
      title: "Benefits",
      description: "Everything you need to stay ahead of other buyers.",
      features: [
        {
          title: "Multiplatform",
          description:
            "Wallapop, Vinted, Milanuncios and Todocoleccion in one place.",
        },
        {
          title: "Instant",
          description:
            "The moment a listing goes live, the alert lands in your Telegram with zero delay.",
        },
        {
          title: "Precise",
          description:
            "Use keywords, exclusions, price, and location to find only the listings you're really interested in.",
        },
        {
          title: "Effortless",
          description:
            "A straightforward interface to create, edit and pause alerts without complications.",
        },
      ],
    },
    pricing: {
      title: "Plans & pricing",
      description:
        "Pick the capacity you need today. Start free and upgrade to Premium as your alerts scale.",
      plans: [
        {
          name: "Free",
          price: "€0",
          description: "Perfect to validate your first searches.",
          features: [
            "Up to 3 alerts created",
            "1 active alert at a time",
            "1 marketplace per alert",
            "Up to 3 keywords and ignore terms",
          ],
          ctaLabel: "Start free",
          ctaHref: "https://t.me/vallaxbot?start=pricing_free",
        },
        {
          name: "Premium",
          price: "€10 / month",
          description: "For users who need full speed and flexibility.",
          features: [
            "Up to 12 alerts created",
            "6 simultaneous active alerts",
            "All marketplaces at once",
            "AI assistant for alert creation",
            "Advanced Regex filtering",
          ],
          ctaLabel: "Upgrade to Premium",
          ctaHref: "https://t.me/vallaxbot?start=pricing_premium",
          badge: "Most popular",
        },
        {
          name: "Custom",
          price: "Tailored",
          description:
            "Consulting for teams that need LLM-based filtering and advanced automation.",
          features: [
            "Custom LLM models tuned to your criteria",
            "Integrations with your tooling and advanced automations",
            "Priority support with a specialist",
          ],
          ctaLabel: "Talk to us",
          ctaHref: "mailto:vallaxdev@gmail.com?subject=Vallax%20custom%20plan",
        },
      ],
    },
    community: {
      title: "Telegram Community Channel",
      description:
        "Join to stay informed about updates, suggest improvements and share alerts with other Vallax users.",
      button: "Join",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Can I access the affiliate program?",
          answer:
            'Yes. Vallax uses Telegram’s native affiliate system. Open @vallaxbot, check the bot info and share the promotion link you’ll find there. You can see all the details at <a class="faq-link" href="https://telegram.org/tour/affiliate-programs" target="_blank" rel="noreferrer">telegram.org/tour/affiliate-programs</a>.',
        },
        {
          question: "Why does Vallax pause some alerts?",
          answer:
            "If an alert fires too many listings in a short time, we pause it to respect Telegram’s limits. Review it, tweak the filters if needed and reactivate it from the bot.",
        },
        {
          question: "Why do I receive listings that don’t match?",
          answer:
            "Sellers sometimes choose categories or keywords that don’t match the item. Add exclusions or regex filters to block those cases.",
        },
        {
          question: "Does location work on every marketplace?",
          answer:
            "Wallapop, Milanuncios and Todocoleccion honor location and categories. Vinted does not, so you may still get items outside your area even if you set one.",
        },
      ],
    },
    footer: {
      legal: [
        { label: "Terms of Service" },
        { label: "Privacy Policy" },
        { label: "Cookie Policy" },
      ],
      contactEmailLabel: "vallaxdev@gmail.com",
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
