import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">Error 404</div>
        <h1 className="mt-4 font-serif text-6xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for has moved or no longer exists.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Return home
        </a>
      </div>
    </div>
  );
}

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "MN Law Chambers",
  alternateName: "MN Law Chambers — Attorneys-at-Law",
  description:
    "A Sri Lankan law firm advising founders, families, investors and institutions on commercial, civil, real estate, finance and immigration matters since 2009.",
  url: "https://mnlawchambers.com",
  logo: "https://mnlawchambers.com/favicon.png",
  image: "https://mnlawchambers.com/favicon.png",
  telephone: "+94112300111",
  email: "info@mnlawchambers.com",
  priceRange: "$$",
  foundingDate: "2009",
  address: {
    "@type": "PostalAddress",
    streetAddress: "367, 2/2, 2nd Floor, Dam Street",
    addressLocality: "Colombo 12",
    addressCountry: "LK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 6.9371449, longitude: 79.8602316 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+94112300111",
      contactType: "office",
      areaServed: ["LK", "GB", "US", "CA", "AU", "AE", "SG", "IN", "QA", "SA"],
      availableLanguage: ["en", "si", "ta"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+94776992504",
      contactType: "WhatsApp",
      areaServed: ["LK", "GB", "US", "CA", "AU", "AE", "SG", "IN", "QA", "SA"],
      availableLanguage: ["en"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Saudi Arabia" },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MN Law Chambers — Counsel for consequential matters in Sri Lanka" },
      {
        name: "description",
        content:
          "MN Law Chambers is a Sri Lankan law firm advising on commercial, civil, real estate, finance and immigration matters since 2009.",
      },
      { name: "author", content: "MN Law Chambers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "MN Law Chambers — Counsel for consequential matters in Sri Lanka" },
      { name: "twitter:title", content: "MN Law Chambers — Counsel for consequential matters in Sri Lanka" },
      { name: "description", content: "Chambers Reimagined is a modern, visually engaging website for MN Law Chambers." },
      { property: "og:description", content: "Chambers Reimagined is a modern, visually engaging website for MN Law Chambers." },
      { name: "twitter:description", content: "Chambers Reimagined is a modern, visually engaging website for MN Law Chambers." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ee3f29a-ec26-46a6-93d5-898f2c15e5c2/id-preview-cc2a3484--64593fd5-99ba-403d-9bb2-adb417e0ef1b.lovable.app-1777896845569.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ee3f29a-ec26-46a6-93d5-898f2c15e5c2/id-preview-cc2a3484--64593fd5-99ba-403d-9bb2-adb417e0ef1b.lovable.app-1777896845569.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
