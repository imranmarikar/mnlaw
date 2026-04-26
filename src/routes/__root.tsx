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
    ],
    links: [
      { rel: "stylesheet", href: appCss },
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
